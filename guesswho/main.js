var seed = 1;

const seed_chars = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';


function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function prepare_game(_seed) {
  seed = seed2int(_seed);
  // console.warn('prepare_game:', _seed, seed);

  let sorted_items = [];
  for(let i = 0; i < data.length; i++)
    sorted_items.push([random(), i]);
  sorted_items.sort();

  // console.log(sorted_items);
  let results = []
  for(let i=0;i<24;i++) {
    results.push(data[sorted_items[i][1]]);
  }

  let a,b;

  while(true) {
    a = Math.floor(24*random());
    b = Math.floor(24*random());
    if(a != b)break;
  }

  return {
    'data': results,
    'player_a': a,
    'player_b': b,
  }
}

function generate_seed() {
  let result = '';
  for(let i=0;i<6;i++)
    result += seed_chars[Math.floor(Math.random() * seed_chars.length)];
  return result;
}

function seed2int(_seed) {
  let result = 0;
  for(let i=0;i<_seed.length;i++)
    result = seed_chars.length * result + seed_chars.indexOf(_seed[i]);
  return result;
}

function create_game() {
  local_seed = generate_seed();
  // console.log(_seed, seed2int(_seed));

  $('#initial').addClass('d-none');
  $('#game_seed').text(local_seed);
  $('#create_game').removeClass('d-none');
}

function join_game() {
  $('#initial').toggleClass('d-none');
  $('#join_game').toggleClass('d-none');
}

function start_game(created) {
  // console.log('xx');
  let game;

  if(!created) {
    _seed = $('#join_seed').val()
    if(!_seed.match(/^[0-9A-Z]{6}$/)) {
      alert('invalid seed');
      return;
    }
    game = prepare_game(_seed);
  } else {
    game = prepare_game(local_seed);
  }

  $('#create_game').addClass('d-none');
  $('#join_game').addClass('d-none');
  $('#start_game').removeClass('d-none');

  show_board(game.data);

  if(created)
    pid = game.player_a;
  else pid = game.player_b;

  $('#cell_'+pid).removeClass('btn-primary').addClass('btn-warning').attr('disabled', true);


}

function show_board(items) {
  for(let y=0;y<3;y++)
    for(let x=0;x<8;x++){
      let i = 8*y+x;
      let button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.id = 'cell_'+i;
      button.style.backgroundImage = 'url('+items[i].image+')'

      button.innerHTML = '<h1>'+items[i].itemLabel+'</h1>';
      button.style.gridColumn = (x+1)+'/ span 1';
      button.style.gridRow = (y+1)+'/ span 1';

      button.onclick = function(event) {
        $(this).toggleClass('opaque');
      }

      button.oncontextmenu = function(event) {
        console.log('x');
        window.open(items[i].item)
        event.preventDefault();
      }

      document.getElementById('board').appendChild(button);
    }
}
