function button1() {
    console.log("b1.");

    var data = [
        [
            {
                axis: "Acousticness",
                value: 0.6
            },
            {
                axis: "Danceability",
                value: 0.1
            },
            {
                axis: "Energy",
                value: 0.4
            },
            {
                axis: "Instrumentalness",
                value: 0.7
            },
            {
                axis: "Liveliness",
                value: 0.3
            },
        ]
    ];

    drawChart(data);
}

function button2() {
    console.log("b2.");

    var data = [
        [
            {
                axis: "Acousticness",
                value: 0.2
            },
            {
                axis: "Danceability",
                value: 0.8
            },
            {
                axis: "Energy",
                value: 0.4
            },
            {
                axis: "Instrumentalness",
                value: 0.5
            },
            {
                axis: "Liveliness",
                value: 0.5
            },
        ]
    ];

    drawChart(data);
}

function drawChart(data) {
    var margin = {top: 100, right: 100, bottom: 100, left: 100};
    var width = Math.min(600, window.innerWidth - 100) - margin.left - margin.right;
    var height = Math.min(600, window.innerHeight - 100) - margin.left - margin.right;
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1.0,
        levels: 5,
        roundStrokes: true,
        color: color
    };
    if (d3.select(".radarChart").empty()) {
        RadarChart(".radarChart", data, radarChartOptions);
    } else {
        transitionRadarChart(".radarChart", data, radarChartOptions);
    }
    
    console.log("after radar chart");
}

function button3() {
    var newLine = d3.lineRadial()([[0, 10], [Math.PI * 0.5, 2], [Math.PI, 5], [Math.PI * 1.5, 4]])
    console.log(newLine)
    var svg = d3.select(".radarWrapper").transition();
    svg.select(".radarStroke").duration(500).attr("d", newLine)
    console.log("end of test")
}


