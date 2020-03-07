var games = {
    "GET": [
        "--PS1--",
        "Medievil",
        "Parasite Eve",
        "Vagrant Story",
        "Silent Hill",
        "Mr, Driller",
        "LSD - Dream Emulator",
        "Darkstalkers 3 ?",
        "Tales of Phantasia",
        "Suikoden II",
        "Legend of the Dragoon",
        "Street Figther Alpha 3",
        "Star Ocean",
        "Final Fantasy 8",
        "Final Fantasy 9",
        "Klonoa",
        "--NGC--",
        "Luigi's Mansion",
        "Metal Gear Solid: The Twin Snakes",
        "Pokémon Colosseum ?",
        "Pokémon XD ?",
        "--PS2--",
        "Medal of Honor: Vanguard",
        "Call of Duty: World at War Final Fronts",
        "Call of Duty: Finest Hour",
        "Katamari Damacy",
        "Amplitude",
        "Ar tonelico - Melody of Elemia",
        "Ar tonelico II - Melody of Metafalica",
        "GrimGrimoire",
        "Guitar Hero II",
        "Sly Cooper and the Thievius Raccoonus",
        "Odin Sphere",
        "NiGHTS into Dreams...",
        "Devil May Cry",
        "La Pucelle Tactics",
        "--PS3--",
        "Lollipop Chainsaw",
        "Dengeki Bunko: Fighting Climax",
        "Senran Kagura",
        "--3DS--",
        "Tales of the Abyss",
        "Azure Striker Gunvolt 2",
        "Ever Oasis",
        "Corpse Party",
        "Etrian Mystery Dungeon",
        "Professor Layton VS Phoenix Wright Ace Attorney",
        "Captain Toad: Treasure Tracker",
        "Bravely Default"
    ],

    "PLAY": [
        "(SNES) Earthbound",
        "(SNES) Super Mario Rpg",
        "(N64) Majora's Mask",
        "(GBA) Fire Emblem",
        "(NDS) The World Ends With You",
        "(PS1) Final Fantasy 7",
        "(PS1) The Misadventures of Tron Bonne",
        "(PS1) Persona 2",
        "(PS1) Rhapsody: A Musical Adventure",
        "(PS1) Symphony of the Night",
        "(PS1) Valkyrie Profile",
        "(PS1) Vandal Hearts",
        "(NGC) Legend of Zelda: Wind Waker",
        "(NGC) Super Mario Sunshine",
        "(WII) Legend of Zelda: Skyward Sword",
        "(WII) Legend of Zelda: Twilight Princess",
        "(WII) Kirby's Epic Yarn",
        "(WII) Kirby's Return to Dream Land",
        "(WII) Mario Kart Wii",
        "(WII) Metroid Prime Saga",
        "(WII) New Super Mario Bros. Wii",
        "(WII) No More Heroes",
        "(WII) Punch-Out!!",
        "(WII) Sonic Colors",
        "(WII) Super Mario Galaxy",
        "(WII) Super Paper Mario",
        "(WII) Super Smash Bros. Brawl",
        "(PC) Valkyria Chronicles",
        "(PC) XCOM: Enemy Unknown",
        "(PC) System Shock 2",
        "(PC) Child of Light",
        "(PC) Disgaea 2",
        "(PC) DiRT Rally",
        "(PC) HunieCam Studio",
        "(PC) Hyperdimension Neptunia Re;Birth1",
        "(PC) Lucah: Born of a Dream",
        "(PC) Dark Souls",
        "(PC) Fate - Stay Night",
        "(PC) Pokemon Uranium"
    ],

    "FINISH": [
        "(PC) Phoenix Wright: Ace Attorney Trilogy",
        "(PC) Stardew Valley",
        "(PC) Tropico 4",
        "(PC) HuniePop",
        "(PC) Danganronpa: Trigger Happy Havoc",
        "(PC) Dust: An Elysian Tail",
        "(PC) Freedom Planet",
        "(PC) 2064: Read Only Memories"
    ]
};

$(document).ready(function() {
    games.GET.forEach(element => {
        $("#get")
        .append($(document.createElement('li'))
                .html(element));
    });
    games.PLAY.forEach(element => {
        $("#play")
        .append($(document.createElement('li'))
                .html(element));
    });
    games.FINISH.forEach(element => {
        $("#finish")
        .append($(document.createElement('li'))
                .html(element));
    });
});