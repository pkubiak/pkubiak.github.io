var seed = 1;

const seed_chars = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
const magic = [29, 23, 11, 19, 17];

const datasets = [
  ['attack-on-titan', 'Attack on Titans'],
  ['death-note', 'Death Note'],
  ['fairy-tail', 'Fairy Tail'],
  ['is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon', 'Is It Wrong to Try to Pick Up Girls in a Dungeon?'],
  ['konosuba-gods-blessing-on-this-wonderful-world', 'KonoSuba - God\'s blessing on this wonderful world!'],
  ['miyazaki', 'Hayao MIYAZAKI'],
  ['digimon', 'Digimon'],
  ['pokemon', 'Pokemon'],
  ['naruto-shippuden', 'Naruto Shippuden'],
  ['arakawa-under-the-bridge', 'Arakawa Under the Bridge'],
  ['kyoto-animation', 'Kyoto Animation'],
  ['programming', 'Programming Languages'],
];

function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function prepare_game(_seed) {
  // console.warn('prepare_game:', _seed, seed);
  console.log('Prepare game:', _seed);

  let sorted_items = [];
  for(let i = 0; i < data.length; i++)
    sorted_items.push([random(), i]);
  sorted_items.sort();

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


function parse_code(_seed) {
  if(!_seed.match(/^[1-9A-Z]{6}$/))
    return null;
  let code = _seed.slice(0, 5), crc = _seed[5];

  if(seed_chars[seed_crc(code) % seed_chars.length] != crc)
    return null;
  let dataset_id = seed_chars.indexOf(code[0]), result = 0;
  for(let i=1;i<5;i++)
    result = seed_chars.length * result + seed_chars.indexOf(_seed[i]);

  return {
    'dataset': datasets[dataset_id][0],
    'seed': result
  };
}

function seed_crc(code) {
  let crc = 0;
  for(let i=0;i<5;i++) {
    crc += magic[i] * seed_chars.indexOf(code[i]);
  }
  return crc;
}

function update_seed() {
  let _dataset = parseInt(document.getElementById('datasets').value);
  let code = seed_chars[_dataset];
  for(let i=0;i<4;i++)
    code += seed_chars[Math.floor(Math.random() * seed_chars.length)];

  crc = seed_crc(code);
  code += seed_chars[crc % seed_chars.length];

  // display seed
  $('#game_seed').text(code);
  local_seed = code;

  return code;
}

function create_game() {
  let list = document.getElementById('datasets');
  for(let i=0;i<datasets.length;i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = datasets[i][1];
    list.appendChild(option);
  }
  list.value = Math.floor(Math.random() * datasets.length);
  update_seed();

  $('#initial').addClass('d-none');
  $('#create_game').removeClass('d-none');
}

function join_game() {
  $('#initial').toggleClass('d-none');
  $('#join_game').toggleClass('d-none');
}

function start_game(created) {
  let code = created ? local_seed : $('#join_seed').val();

  let _seed = parse_code(code);
  if(_seed == null) {
    alert('invalid seed');
    return;
  }

  let script = document.createElement('script');

  script.src = 'datasets/' + _seed['dataset'] + '.js';
  script.onload = function() {
    let game = prepare_game(_seed);

    $('#create_game').addClass('d-none');
    $('#join_game').addClass('d-none');
    $('#start_game').removeClass('d-none');

    show_board(game.data);

    if(created)
      pid = game.player_a;
    else pid = game.player_b;

    $('#cell_'+pid).removeClass('btn-primary').addClass('btn-warning text-white');
    document.getElementById('cell_'+pid).onclick=null;
  }
  document.body.appendChild(script);
}

function show_window(event, url) {
  window.open(url);
  event.stopPropagation();
}

function show_board(items) {
  for(let y=0;y<3;y++)
    for(let x=0;x<8;x++){
      let i = 8*y+x;
      let button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.id = 'cell_'+i;
      button.style.backgroundImage = 'url('+items[i].image+')'

      button.innerHTML = '<h1>'+items[i].title+'</h1><button class="btn btn-sm btn-secondary" onclick="show_window(event, \''+items[i].url+'\')">?</button>';
      button.style.gridColumn = (x+1)+'/ span 1';
      button.style.gridRow = (y+1)+'/ span 1';

      button.onclick = function(event) {
        $(this).toggleClass('opaque');
      }

      document.getElementById('board').appendChild(button);
    }
}
