var config = {
    style: 'mapbox://styles/lhx200013/cluj62zy500pl01q5bvdq8hpm',
    accessToken: 'pk.eyJ1IjoibGh4MjAwMDEzIiwiYSI6ImNsbGVydnExMDBna2EzcnFodHd0aHNnc20ifQ.HYYEqVszLRoxQxmP4g2-LA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Attack, Harm, Afflictions',
    subtitle: 'The war brings harm that can never be undone',


    byline: 'National University of Singapore \n \n Brandon Yeo Tianci \n Cheng Lipei \n Liu Haixiao \n ',


    footer: 'Source: Conflict Observatory Publication Site. <br> AR5958F Community Data Lab. For academic use only',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What happened to the east',
            image: '',
            description: 'Since the outbreak of the comprehensive conflict between Russia and Ukraine, at least 10,000 civilians have been killed in Ukraine, including over 560 children. The United Nations Office of the High Commissioner for Human Rights announced in Geneva on the 21st that due to many bodies remaining unidentified, the actual death toll could be "significantly higher. <br> <br> Most of the casualties occurred in the Donetsk and Luhansk regions. ',
            location: {
                center: [37.80078, 47.92180],
                zoom: 3.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ukrainewar',
                    opacity: 0.1,
                    duration: 300
                },
                {
                    layer: 'event1',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'event2',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'event3',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'event4',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'event5',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pop1',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pop2',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pop3',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pop4',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pop5',
                    opacity: 0,
                    duration: 0
                },
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Conflict Distribution',
            image: '',
            description: 'This map illustrates the locations and scale of military conflicts that occurred during the war, with each red dot representing one military conflict. These conflicts are filled with smoke, bullets, explosions, and, tragically, casualties including injuries and loss of life.<br> <br>The size of points represents the number of individuals lost in this military conflict.',
            location: {
                center: [38.26977, 49.05156],
                zoom:6,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
                // add the result of data analysis, the place of the conflict.
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [],
            onChapterExit: 
            []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '26 January 2023',
            image: 'Bakhmut_during_the_battle.jpg',
            description: 'On this day, Ukrainian military forces repelled a Russian attack in the area of Bakhmut, Donetsk. According to Ukrainian sources, 600-700 Russian servicemen were killed during the day. <br> <br> It is considered the bloodiest battle of the war so far, and one of the longest, with it being characterized as the "bloodiest infantry brawl since World War II"',
            location: {
                center:[37.76794, 48.05926],
                zoom: 15.60,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
  
    ]
};
