var config = {
    style: 'mapbox://styles/lhx200013/clur3mc6200tt01qq6lsy72p7',
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
    title: 'Life, Survive',
    subtitle: 'War knows no boundaries.',


    byline: 'National University of Singapore \n \n Brandon Yeo Tianci \n Cheng Lipei \n Liu Haixiao \n ',


    footer: 'Source: Conflict Observatory Publication Site. <br> AR5958F Community Data Lab. For academic use only',
    chapters: [
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Legend',
            image: 'Residents_Legend_1.png',
            description: '',
            location: {
                center: [38.26977, 49.05156],
                zoom:3.6,
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Will the war end?',
            image: 'number of events by month.png',
            description: 'We all know that war will eventually come to an end. But this day seems so distant and elusive. <br> For those living far from the conflict, it may just be a date. But for those deeply entrenched in the quagmire of war, this day represents peace, hope, and the future. Unfortunately, as of now, the scale of this war continues to escalate.',
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
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'event1',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'event2',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'event3',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'event4',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'event5',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'pop1',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'pop2',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'pop3',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'pop4',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'pop5',
                    opacity: 1,
                    duration: 300
                },
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Weapons',
            image: 'Field destruction by.png',
            description: 'The expansion of war is not only reflected in the number of battles and attacks but also in the way war is waged. Russia, as a militarily powerful country, possesses a variety of advanced weapons. In this war, Russia is not hesitant to use its most sophisticated weaponry. However, this also means the most deadly.',
            location: {
                center: [38.26977, 49.05156],
                zoom:3.6,
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
            title: 'Exile',
            image: 'Number of Ukrainians fleeing to neighboring countries.png',
            description: 'For civilians, the wisest choice they can make is often to leave their homeland and seek refuge in other countries. So far, over a million people have chosen to leave their homes. It is difficult to imagine the kind of life they lead in a completely unfamiliar environment. The extent of their hardship, whether their social status and basic human rights are guaranteed, and the sacrifices they make for their basic survival needs are all things that are hard for us to estimate.',
            image: 'Number of Ukrainians fleeing to neighboring countries.png',
            location: {
                center:[37.76794, 48.05926],
                zoom: 3.60,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Fourth-identifier',
            alignment: 'middle',
            hidden: false,
            title: 'Voice',
            image: 'word frequency.png',
            description: 'Let us listen to the voices of these people who are far from home, from the depths of their hearts. They remember the names of the enemy, names that are like sharp knives deeply embedded in their hearts. They remember the name of their hometown, even though the place that carried their past memories may have been completely transformed, filled with wounds and devastation.',
            location: {
                center:[37.76794, 48.05926],
                zoom: 1,
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
