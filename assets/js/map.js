(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ug/ug-all.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['ug-2595', 1028794500],
        ['ug-7073', 1574389050],
        ['ug-7074', 9402817460],
        ['ug-7075', 1836073250],
        ['ug-2785', 1265007320],
        ['ug-2791', 1483290870],
        ['ug-3385', 1694875040],
        ['ug-3388', 1156729340],
        ['ug-2786', 1328749000],
        ['ug-7056', 1710298400],
        ['ug-7083', 2053294380],
        ['ug-7084', 2239805030],
        ['ug-7058', 1963490230],
        ['ug-1678', 8702390120],
        ['ug-1682', 2398459010],
        ['ug-1683', 2148905720],
        ['ug-1685', 2487839400],
        ['ug-7051', 2723987460],
        ['ug-2762', 2950240370],
        ['ug-2767', 2610937840],
        ['ug-2777', 2834967300],
        ['ug-2778', 3078749200],
        ['ug-2780', 3294819000],
        ['ug-2781', 3154890270],
        ['ug-2782', 3460124890],
        ['ug-2783', 3347920180],
        ['ug-2779', 3674389200],
        ['ug-2784', 3524892300],
        ['ug-3382', 3791230470],
        ['ug-3384', 3918304290],
        ['ug-3389', 4058204970],
        ['ug-3383', 4124309650],
        ['ug-3390', 4289130570],
        ['ug-3386', 4375928470],
        ['ug-3391', 4490830470],
        ['ug-3392', 4534892000],
        ['ug-3394', 4661920340],
        ['ug-2750', 4781230480],
        ['ug-7048', 4849034290],
        ['ug-7080', 4932830490],
        ['ug-7081', 5070138420],
        ['ug-1684', 5190847500],
        ['ug-7082', 5223892100],
        ['ug-1688', 5350284900],
        ['ug-7079', 5483290170],
        ['ug-7068', 5538934010],
        ['ug-7070', 5663920480],
        ['ug-7049', 5710293700],
        ['ug-2787', 5892304750],
        ['ug-7055', 5940839200],
        ['ug-2769', 6083492010],
        ['ug-7052', 6174810340],
        ['ug-2774', 6241038940],
        ['ug-7059', 6392839040],
        ['ug-7060', 6423987420],
        ['ug-7057', 6552830490],
        ['ug-2790', 6634230580],
        ['ug-2776', 6712839040],
        ['ug-7067', 6863290120],
        ['ug-7065', 6984290380],
        ['ug-7066', 7039038470],
        ['ug-7069', 7192093850],
        ['ug-7061', 7259230480],
        ['ug-7063', 7375930420],
        ['ug-7062', 7428091230],
        ['ug-7064', 7564892030],
        ['ug-7086', 7680392100],
        ['ug-2744', 7742839040],
        ['ug-1679', 7893290100],
        ['ug-1680', 7965820340],
        ['ug-7054', 8021920340],
        ['ug-1686', 8153294850],
        ['ug-7078', 8239038470],
        ['ug-1677', 8374930200],
        ['ug-1690', 8492038040],
        ['ug-2745', 8534290140],
        ['ug-2752', 8670392010],
        ['ug-2754', 8759032840],
        ['ug-1687', 8823490210],
        ['ug-2757', 8942039480],
        ['ug-1689', 9014092380],
        ['ug-2760', 9184309200],
        ['ug-2761', 9264930280],
        ['ug-2766', 9320948300],
        ['ug-2765', 9473290840],
        ['ug-2764', 9540385920],
        ['ug-2749', 9634829030],
        ['ug-2768', 9712938400],
        ['ug-2763', 9853209480],
        ['ug-2748', 9924390380],
        ['ug-2771', 10043092040],
        ['ug-2772', 10180342920],
        ['ug-2775', 10270394280],
        ['ug-2788', 10360392040],
        ['ug-2789', 10490302800],
        ['ug-3381', 10530302980],
        ['ug-3387', 10670394020],
        ['ug-3393', 10750394020],
        ['ug-7076', 10890302940],
        ['ug-1681', 10940304920],
        ['ug-2746', 11070302040],
        ['ug-2747', 11190308400],
        ['ug-2751', 11250392040],
        ['ug-2758', 11380302940],
        ['ug-2759', 11450302980],
        ['ug-2756', 11520304020],
        ['ug-2770', 11670302980],
        ['ug-7072', 11730392040],
        ['ug-7053', 11860302980],
        ['ug-2753', 11920308400],
        ['ug-2755', 12080302980],
        ['ug-2773', 12140394020]
        
    ];

    // Create the chart
    Highcharts.mapChart('Map-data', {
        chart: {
            map: topology
        },

        title: {
            text: 'Highcharts Maps basic demo'
        },

        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.topo.json">Uganda</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Collected Revenue',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();
