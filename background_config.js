var config = {
    style: 'mapbox://styles/cheng-lipei/clu94qaiw00bw01ra5ndce26p',
    accessToken: 'pk.eyJ1IjoiY2hlbmctbGlwZWkiLCJhIjoiY2xzMTdxOXA5MDh3MTJsbGRiejQwZ29tNyJ9.F5ibg3oZF4b6uuVl3s1ScA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'The Timeline of Russo-Ukrain War',
    subtitle: 'Also the story of fires and blood',


    byline: 'name of our three',


    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Start with Crimea',
            image: 'ukrainejpeg.jpeg',
            description: 'Tensions between Russia and Ukraine have been ongoing for several years, particularly since 2014 when Russia annexed Crimea, a region previously part of Ukraine.  <br> <br> The conflict between Russia and Ukraine stems from various factors, including historical, cultural, political, and economic differences.',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Crimea Annexation',
            image: 'crimea_bridge.jpg',
            
            description: ' In 2014, Russia annexed Crimea, a move that was widely condemned by the international community. This action escalated tensions between Russia and Ukraine significantly.',
            location: {
                center: [34.44256, 45.26808],
                zoom: 7.2,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Eastern Ukraine Conflict',
            image: 'Eastern_Ukraine_Conflict.jpg',
            description: 'Following the annexation of Crimea, pro-Russian separatist movements emerged in eastern Ukraine, particularly in the Donetsk and Luhansk regions.  <br> <br> These separatists, with alleged support from Russia, declared independence from Ukraine, leading to a conflict between Ukrainian forces and separatist militias',
            location: {
                center:[38.79602, 48.53883],
                zoom: 6.36,
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Wartime',
            image: 'wartime.jpg',
            description: 'On February 17, 2022, the situation in eastern Ukraine deteriorated, with the Ukrainian government and local militias accusing each other of launching provocative shelling along the contact line.  <br>  <br>  On February 18, the eastern Ukrainian militias announced a large-scale evacuation of local residents to Russia, citing the risk of Ukraine launching military operations.  <br>  <br> On the evening of February 21, Russian President Putin signed an order recognizing the Donetsk Peoples Republic and Luhansk Peoples Republic in eastern Ukraine as independent entities.   <br>  <br> On February 24, the Ukrainian government announced the closure of the national airspace. Ukrainian President Zelensky stated that Ukraine would enter a state of war.',
            location: {
                center: [36.09542, 52.49179],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: 
            [
               
            ],
            onChapterExit: 
            [
                
            ]
        }
    ]
};
