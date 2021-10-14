const SECTIONS = [
    {
        name: 'Game Jams',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        items: [
            // TODO: Easter-dragon
            {
                title: 'Frozen Fruits',
                desc: 'Frozen Bubble clone with a lot of fruits!',
                urls: {
                    'play it': 'https://pkubiak.github.io/frozen-fruits/',
                    'github': 'https://github.com/pkubiak/frozen-fruits',
                },
            },
            {
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
                urls: {
                    'github': 'https://github.com/pkubiak/guess-who',
                    'play it': 'https://pkubiak.github.io/guess-who/',
                },
            },
            {
                img: "https://github.com/pkubiak/monster-o-brick/raw/master/screenshot.png",
                title: 'Monster-o-Brick',
                desc: 'Simple Post Apocalyptic themed arkanoid clone.',
                urls: {
                    'github': 'https://github.com/pkubiak/monster-o-brick',
                    'play it': 'https://pkubiak.github.io/monster-o-brick/',
                },
            },
            {
                title: 'Swim Nemo Swim',
                desc: 'Clone of classic pacman in underwater scenery.',
                urls: {
                    'github': 'https://github.com/pkubiak/swim-nemo-swim',
                    'play it': 'https://pkubiak.github.io/swim-nemo-swim/',
                },
            },
            {
                title: 'Tetris',
                desc: 'Simple Clone of classic tetris.',
                urls: {
                    'play it': 'https://pkubiak.github.io/tetris/',
                },
            },
            {
                img: 'https://github.com/pkubiak/unicode-madness/raw/main/gameplay.png',
                title: 'Unicode Medness',
                desc: 'Simple clone of Marble Maddness / Neverball ',
                urls: {
                    'github': 'https://github.com/pkubiak/unicode-madness',
                    'play it': 'https://pkubiak.github.io/unicode-madness/',
                    'more levels': 'https://github.com/pkubiak/unicode-madness#levels'
                },
            },
            {
                title: 'Angry Integrals',
                urls: {
                    'github': 'https://github.com/pkubiak/angry-integrals',
                }
            },
            {
                title: 'Nuclear Stalagmite',
                urls: {
                    'github': 'https://github.com/pkubiak/nuclear-stalagmite',
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
            }
        ]
    },
    {
        name: 'Other Stuff',
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        items: [
            {
                title: 'Advent Of Code 2020',
                desc: '🎅 🎄 🎁 My solutions for the Advent of Code 2020',
            },
            {
                img: 'https://user-images.githubusercontent.com/4224364/101270078-b312ff00-3775-11eb-9c29-f4d52beb4ed1.jpg',
                title: 'Spotify View',
                desc: 'Simple Spotify Artwork Visualization with nice gradient background',
                urls: {
                    github: 'https://github.com/pkubiak/spotify-view',
                    'live demo': 'https://pkubiak.github.io/spotify/',
                }
            },
            {
                title: 'Gamejam',
                desc: "Tool for generating randomized gamejam's ideas.",
                urls: {
                    'github': 'https://github.com/pkubiak/gamejam'
                }
            },
            {
                title: 'pylobot',
                desc: "Javascript model viewer for Colobot Game",
                urls: {
                    github: 'https://github.com/pkubiak/pylobot',
                    "live demo": "https://pkubiak.github.io/pylobot2/",
                }
            },
            {
                title: 'Hearty Playground',
                urls: {
                    github: 'https://github.com/pkubiak/hearty-playground',
                }
            },
            {
                title: "caves-kml",
                desc: "Tool for dumping Jaskinie PGI database into KML/KMZ file suitable for offline browsing in Locus.",
                urls: {
                    github: "https://github.com/pkubiak/caves-kml"
                }
            },
            {
                title: "sh-presenter",
                desc: "Tool for creating shell presentations",
                urls: {
                    github: "https://github.com/pkubiak/sh-presenter",
                }
            }
    
        ]
    },
    {
        name: 'Science',
        desc: '',
        items: [
            {
                title: 'Happy Szczurki',
                desc: "🐀 Research on rats' ultrasonic vocalizations detection and classification",
                urls: {
                    github: 'https://github.com/pkubiak/happy-szczurki'
                }
            },
            {
                title: "gym-space-racer ",
                desc: "OpenAI gym environment for space ship racing on the futuristic track",
                urls: {
                    github: "https://github.com/pkubiak/gym-space-racer"
                }
            }
        ]
    }
    ];
    