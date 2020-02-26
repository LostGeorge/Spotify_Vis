function button1() {
    console.log("b1.");
}

function button2() {
    console.log("b2.");
}

window.addEventListener("load", function() {
    console.log("DOM rendered")
    var margin = {top: 100, right: 100, bottom: 100, left: 100};
    var width = Math.min(600, window.innerWidth - 100) - margin.left - margin.right;
    var height = Math.min(600, window.innerHeight - 100) - margin.left - margin.right;

    var data = [
        [
            {
                axis: "Acousticness",
                value: 0.3
            },
            {
                axis: "Danceability",
                value: 0.1
            },
            {
                axis: "Energy",
                value: 0.2
            },
            {
                axis: "Instrumentalness",
                value: 0.4
            },
            {
                axis: "Liveliness",
                value: 0.3
            },
        ]
    ];

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

    RadarChart(".radarChart", data, radarChartOptions);
    console.log("after radar chart")
})



