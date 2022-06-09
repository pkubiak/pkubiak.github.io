const SECTIONS = [
    {
        name: 'Game Jams',
        desc: 'List of projects created/started during a few hours game jams. For fun, implemented mostly using JavaScript. All gamejams has been created using <a href="https://github.com/pkubiak/gamejam">GameJam Generator</a>',
        items: [
            {
                img: "data/frozen-fruits.jpg",
                title: 'Frozen Fruits',
                desc: 'Frozen Bubble clone with a lot of fruits!',
                urls: {
                    'github': 'https://github.com/pkubiak/frozen-fruits',
                    'play it': 'https://pkubiak.github.io/frozen-fruits/',
                },
            },
            {
                img: 'https://github.com/pkubiak/gran-trak-2020/raw/master/screenshot.jpg',
                title: 'Gran Trak 2020',
                desc: 'Clone of classic Atari racing game Gran Trak 10.',
                urls: {
                    'github': 'https://github.com/pkubiak/gran-trak-2020',
                    'play it': 'https://pkubiak.github.io/gran-trak-2020/',
                    'play with cpu': 'https://pkubiak.github.io/gran-trak-2020/#cpu',
                },
            },
            {
                img: 'https://github.com/pkubiak/guess-who/raw/master/screenshot.jpg',
                title: 'Guess-Who',
                desc: "TODO",
                urls: {
                    'github': 'https://github.com/pkubiak/guess-who',
                    'play it': 'https://pkubiak.github.io/guess-who/',
                },
            },
            {
                img: "data/monster-o-brick.jpg",
                title: 'Monster-o-Brick',
                desc: 'Simple Post Apocalyptic themed arkanoid clone.',
                urls: {
                    'github': 'https://github.com/pkubiak/monster-o-brick',
                    'play it': 'https://pkubiak.github.io/monster-o-brick/',
                },
            },
            {
                img: "data/swim-nemo-swim.jpg",
                title: 'Swim Nemo Swim',
                desc: 'Clone of classic pacman in underwater scenery.',
                urls: {
                    'github': 'https://github.com/pkubiak/swim-nemo-swim',
                    'play it': 'https://pkubiak.github.io/swim-nemo-swim/',
                },
            },
            {
                img: 'data/tetris.jpg',
                title: 'Tetris',
                desc: 'Simple Clone of classic tetris.',
                urls: {
                    'play it': 'https://pkubiak.github.io/tetris/',
                },
            },
            {
                img: 'https://github.com/pkubiak/unicode-madness/raw/main/gameplay.png',
                img_position: "top left",
                title: 'Unicode Medness',
                desc: 'Simple clone of Marble Maddness / Neverball ',
                urls: {
                    'github': 'https://github.com/pkubiak/unicode-madness',
                    'play it': 'https://pkubiak.github.io/unicode-madness/',
                    'more levels': 'https://github.com/pkubiak/unicode-madness#levels'
                },
            },
            {
                img: 'data/angry-integrals.jpg',
                title: 'Angry Integrals',
                desc: 'TODO',
                urls: {
                    'github': 'https://github.com/pkubiak/angry-integrals',
                    'play it': 'https://pkubiak.github.io/angry-integrals/'
                }
            },
            {
                title: 'sh-dungeon',
                desc: 'Simple dungeon crawler in terminal using RayTracing engine',
                urls: {
                    github: 'https://github.com/pkubiak/sh-dungeon',
    
                }
            },
            {
                title: "Easter Dragon",
                desc: "Easter themed javascript clone of classic flappy-bird",
                urls: {
                    github: "https://github.com/pkubiak/easter-dragon",
                    "play it": "https://pkubiak.github.io/easter-dragon/"
                }
            },
            {
                img: "data/spotillioners.jpg",
                title: "Spotillioners",
                desc: "Music version of famous Millionairs game based on your spotify plays history."
            }
        ]
    },
    {
        name: 'Presentations',
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        items: [
            {
                img: 'https://camo.githubusercontent.com/1fede4c68d884860658b815f78e8a8c92d95ad8d642ecacde6b6665d9fff552f/687474703a2f2f69332e7974696d672e636f6d2f76692f457849635f496e646874672f6d617872657364656661756c742e6a7067',
                title: 'Language Detection in 7 minutes',
                desc: "Language detection using n-gram model for PyCon PL'2020 lightning talks.",
                urls: {
                    'github': 'https://github.com/pkubiak/pl.pycon.2020',
                    'youtube [PL]': 'https://www.youtube.com/watch?v=ExIc_Indhtg'
                }
            }, 
            {
                title: "Keep Calm and Kill all the mutants",
                desc: "Short introduction to Mutation Testing in Python"
            },
            {
                title: "Jupyter Notebook: Tips & Tricks",
                desc: "TODO"
            },
            {
                title: "Confidence intervals  and other tricks for beginners of <s>black magic</s> statistics",
                dsc: "TODO"
            }
        ]
    },
    {
        name: 'Other Stuff',
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        items: [
            {
                img: 'data/advent-of-code.jpg',
                title: 'Advent Of Code 2020',
                desc: '🎅 🎄 🎁 My solutions for the Advent of Code 2020',
                urls: {
                    github: "https://github.com/pkubiak/advent-of-code-2020",
                }
            },
            {
                img: 'data/spotify-view.jpg',
                title: 'Spotify View',
                desc: 'Simple Spotify Artwork Visualization with nice gradient background',
                urls: {
                    github: 'https://github.com/pkubiak/spotify-view',
                    'live demo': 'https://pkubiak.github.io/spotify/'
                }
            },
            {
                img: 'data/gamejam.png',
                title: 'Gamejam',
                desc: "Tool for generating randomized gamejam's ideas.",
                urls: {
                    'github': 'https://github.com/pkubiak/gamejam',
                    'live via pyscript': 'https://pkubiak.github.io/gamejam/'
                }
            },
            {
                img: 'data/pylobot.jpg',
                title: 'pylobot',
                desc: "Javascript 3D model viewer for Colobot Game",
                urls: {
                    github: 'https://github.com/pkubiak/pylobot',
                    "live demo": "https://pkubiak.github.io/pylobot2/",
                }
            },
            {
                img: 'https://github.com/pkubiak/hearty-playground/raw/master/mockup/Screenshot_2020-01-16_01-18-17.png',
                desc: 'Interactive platform for web Technologies e-learning',
                title: 'Hearty Playground',
                urls: {
                    github: 'https://github.com/pkubiak/hearty-playground',
                }
            },
            {
                img: "https://github.com/pkubiak/caves-kml/raw/master/screenshot.jpg",
                title: "caves-kml",
                desc: "Tool for dumping Jaskinie PGI database into KML/KMZ file suitable for offline browsing in Locus.",
                urls: {
                    github: "https://github.com/pkubiak/caves-kml"
                }
            },
            {
                img: 'https://github.com/pkubiak/sh-presenter/raw/master/examples/cacafire.gif',
                img_position: 'center top',
                title: "sh-presenter",
                desc: "Tool for creating and recording shell presentations",
                urls: {
                    github: "https://github.com/pkubiak/sh-presenter",
                }
            },
            {
                img: "data/raytracer.jpg",
                title: "raytracer",
                desc: "Raytracer implemented in c++",
                urls: {
                    github: "https://github.com/pkubiak/raytracer"
                }
            },
            {
                img: "https://github.com/pkubiak/zettai/raw/master/screenshot.png",
                img_position: 'center top',
                title: "zettai",
                desc: "TODO",
                urls: {
                    github: "https://github.com/pkubiak/zettai"
                }
            }
    
        ]
    },
    {
        name: 'Science',
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        items: [
            {
                img: "data/happy-szczurki.jpg",
                title: 'Happy Szczurki',
                desc: "🐀 Research on rats' ultrasonic vocalizations detection and classification",
                urls: {
                    github: 'https://github.com/pkubiak/happy-szczurki'
                }
            },
            {
                img: "https://raw.githubusercontent.com/pkubiak/gym-space-racer/master/screenshot.png",
                title: "gym-space-racer ",
                desc: "OpenAI gym environment for space ship racing on the futuristic track",
                urls: {
                    github: "https://github.com/pkubiak/gym-space-racer"
                }
            },
            {
                title: "kaggle-notebooks",
                desc: "TODO",
                urls: {
                    github: "https://github.com/pkubiak/kaggle-notebooks"
                }
            }, 
            {
                img: "https://github.com/pkubiak/statsgrid/raw/main/misc/preview.jpg",
                img_position: 'left top',
                title: "statsgrid",
                desc: "Module for creating Grafana style metrics dashboards in python",
                urls: {
                    github: "https://github.com/pkubiak/statsgrid"
                }
            }
        ]
    },
    {
        name: "Hackathons",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        items: [
            {
                title: "droply",
                desc: "TODO",
            },
            {
                img: "https://github.com/mkrzywda/BiteHack/raw/master/screenshot.jpg",
                img_position: 'center top',
                title: "BiteHack - Déjà vu",
                desc: "TODO",
                urls: {
                    github: "https://github.com/mkrzywda/BiteHack",
                }
            }]
    },
    {
        name: "Private Project",
        desc: "List of not yet released projects",
        items: [
            {
                title: "spotiglot",
                desc: "Organize you music collection by song language",
            },
            {
                title: "gc-badger",
                desc: "WIP: Project for monitoring geocaching projects and badges"
            },
            {
                title: "CurlKB",
                desc: "Raspberry-PI based device for curling training"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Barthel_Fa.png",
                title: "master-thesis",
                desc: "WIP: Machine Learning approach to Rongorongo glyphs system decipherment."
            },
            {
                title: "xwg-scanner",
                desc: "TODO"
            },
            {
                img: "data/caves-finder.jpg",
                title: "caves-finder",
                desc: "PoC: An attempt to algorithmically search for caves based on a Digital Elevation Model."
            }
        ]
    }
    ];
    
