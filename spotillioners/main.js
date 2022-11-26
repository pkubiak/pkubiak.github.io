const player = document.querySelector("#player");
let answers, correct_answer;
const PRICES = ['500', '1,000', '2,000', '5,000', '10,000', '20,000', '40,000', '75,000', '125,000', '250,000', '500,000', '1,000,000'];
const GUARANTEES = ['1,000', '40,000', '1,000,000'];

let song_id = 0;
let SONGS;
let STATUS = 'READY';
let TITLE = '';

function randomize(array) {
    let array2 = array.map(x => {
        return {
            v: Math.random(),
            title: x
        }
    });
    array2.sort((a, b) => a.v - b.v);
    return array2.map(x => x.title);
}

function init() {
    if(!checkToken())
        spotifyAuth();
    requestTopTracks();
    createBoard();
}

function checkToken(){
    let params = window.location.hash.substr(1).split('&');
    for(let param of params) {
        let [key, value] = param.split('=');
        console.log(key)
        if(key == 'access_token') {
            TOKEN = value;
            return true;
        }
    }
    return false;
}

function spotifyAuth() {
    var client_id = '76d95d9268454cbcbbbb6bb1d630f846';
    
    var redirect_uri = window.location.origin + window.location.pathname;

    var scope = 'user-top-read'; //user-read-private user-read-email';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    console.log(url);
    window.location = url;
}



function checkAnswer(ans_id) {
    if(STATUS == 'VALIDATING')return;
    STATUS = 'VALIDATING';

    let btn = document.querySelector('#ans_'+ans_id);
    if (answers[ans_id] == correct_answer) {
        btn.classList.add('btn-success')

    } else {
        btn.classList.add('btn-danger')
        for(let i=0;i<4;i++)
            if(answers[i] == correct_answer)
                document.querySelector('#ans_'+i).classList.add('btn-success');
    }

    document.querySelector('#play-btn').innerText = TITLE;

    let blinkInterval = setInterval(function(){
        btn.classList.toggle('disabled')
    }, 500);

    setTimeout(function(){
        clearInterval(blinkInterval);

        for(let i=0;i<4;i++)
            document.querySelector('#ans_'+i).className = 'btn btn-secondary w-100';
        document.querySelector('#play-btn').innerText = 'Play music';
        if(answers[ans_id] == correct_answer) {
            song_id += 1;
            if(song_id >= PRICES.length) {
                document.body.classList.add('blurred');
                document.querySelector('#alert').innerText = 'You win!';
            } else {
                initSong();
            }
        } else {
            document.body.classList.add('blurred');
            document.querySelector('#alert').innerText = 'You lost!';
        }
    }, 10000)
}

function playMusic() {
    player.volume = 0.01;
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}


function createBoard() {
    let el = document.createElement('ul');
    el.className = 'list-group';
    for(let i=0; i<PRICES.length; i++) {  
        let item = document.createElement('li');
        item.innerText = PRICES[i];
        item.className = 'list-group-item';
        if(GUARANTEES.includes(PRICES[i]))
            item.classList.add('list-group-item-warning');
        item.id = 'price_' + i;
        el.prepend(item);
    }
    document.querySelector('#right-column').appendChild(el);
}

function composeArtist(artists) {
    console.log('>>>>>', artists)
    return artists.map(a => a.name).sort().join(', ');
}

function initSong() {
    let artist_id = SONGS[song_id];
    // collect song url
    fetch('https://api.spotify.com/v1/artists/'+artist_id+'/top-tracks?market=PL', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+TOKEN
        }
    })
        .then(response => response.json())
        .then(data => {
            data = data.tracks;
            song = data[Math.floor(Math.random()*data.length)];

            fetch('https://api.spotify.com/v1/artists/'+artist_id+'/related-artists', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+TOKEN
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let artists = data.artists;
                    let artisto = composeArtist(song.artists);
                    TITLE = artisto + ' - ' + song.name;

                    song = {
                        mp3: song.preview_url,
                        answers: [
                            artisto,
                            artists[0].name,
                            artists[1].name,
                            artists[2].name
                        ]
                    }


                    player.src = song.mp3;
                    player.play();

                    correct_answer = song.answers[0];
                    answers = randomize(song.answers);

                    for (let i = 0; i < 4; i++) {
                        document.querySelector('#ans_' + i).innerText = answers[i];
                    }

                    document.querySelectorAll('li.list-group-item.active').forEach(x => x.classList.remove('active'));
                    document.querySelector('#price_' + song_id).classList.add('active');

                    STATUS = 'READY';
                });
        })
}

function requestTopTracks(){
    fetch('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+TOKEN
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.items);
            SONGS = randomize(data.items.map(x => x.id));
            console.log(SONGS)
            initSong();
        });
}