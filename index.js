var aasa;
var colorPalette = ["#6B74DB", "#68B771", "#F370FF", "#E56D4B", "#F99857", "#6BACDB", "#86B768", "#904CFF", "#E54B77", "#F95767", "#CF70FF", "#6BC8DB", "#9AB768", "#689FFF", "#E54B9D", "#F95790", "#8bb166", "#eaff00", "#d0e500", "#F95790", "#ff4000", "#ff8000", "#ffbf00", "#ffff00", "#bfff00", "#80ff00", "#40ff00", "#00ff00", "#00ff40", "#00ff80", "#00ffbf", "#00ffff", "#00bfff", "#007fff", "#0040ff", "#0000ff", "#4000ff", "#7f00ff", "#bf00ff", "#ff00ff", "#ff00bf", "#ff0080", "#ff0040", "#ff0000"];

var data = [{
    "Time": "2015-04-16",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-17",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-18",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-19",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-20",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-21",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-22",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-23",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-24",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-25",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-26",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-27",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-28",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-29",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-04-30",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-01",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-02",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-03",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-04",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-05",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-06",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-07",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-08",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-09",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-10",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-11",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-12",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-13",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-14",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-15",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-16",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-17",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-18",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-19",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-20",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-21",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-22",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-23",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-24",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-25",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-26",
        "Page Likes": 20,
        "Post Reach": 82,
        "Engagement": 147,
        "Your Fans": 768,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-27",
        "critical": 6,
        "Page Likes": 29,
        "Engagement": 147,
        "Post Reach": 164,
        "Your Fans": 447,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-28",
        "critical": 2,
        "Page Likes": 13,
        "Post Reach": 25,
        "Engagement": 111,
        "Your Fans": 124,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-29",
        "Page Likes": 8,
        "Post Reach": 22,
        "Engagement": 84,
        "Your Fans": 129,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}, {
    "Time": "2015-05-30",
        "Page Likes": 1,
        "critical": 1,
        "Post Reach": 26,
        "Engagement": 50,
        "Your Fans": 349,
        "People Reach": 150,
        "People Engagement": 90,
        "Fans": 500
}];

var margin = {
    top: 20,
    right: 40,
    bottom: 90,
    left: 40,
    legendBottom: 60
},
width = window.innerWidth - margin.left - margin.right - 10,
    //width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(colorPalette);

var color = d3.scale.category10().range(colorPalette);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

color.domain(d3.keys(data[0]).filter(function (key) {
    return key !== "Time";
}));

data.forEach(function (d) {
    var y0 = 0;
    d.ages = color.domain().map(function (name) {
        return {
            dataValue: d[name],
            name: name,
            y0: y0,
            y1: y0 += +d[name]
        };
    });
    d.total = d.ages[d.ages.length - 1].y1;
});

// data.sort(function(a, b) { return b.total - a.total; });

x.domain(data.map(function (d) {
    return d.Time;
}));
y.domain([0, d3.max(data, function (d) {
    return d.total;
})]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", function (d) {
    return "rotate(-60)"
})

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end");

var Time = svg.selectAll(".Time")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x(d.Time) + ",0)";
});

Time.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
    .attr("class", "bars")
    .attr("width", x.rangeBand())
    .attr("data-name", function (d) {
    return d.name;
})
    .attr("y", function (d) {

    return y(d.y1);
})
    .attr("height", function (d) {
    return y(d.y0) - y(d.y1);
})
    .style("fill", function (d) {
    return color(d.name);
});
var numberlenght = 100
var legend = d3.select('#chart').append("div").attr("class","legendContainer").selectAll(".legend")
    .data(color.domain().slice().reverse())
    .enter().append("div")
    .attr("class", "legend");

legend.append("div")
    .attr("class", "legendBox")
    .style("background", color);

legend.append("div")
    .attr("class", "legendItem")
    .text(function (d) {
    return d;
});

var target = svg.selectAll("rect.bars");

target.on('mouseover.tooltip', function (d) {
    d3.select(this)
        .style("opacity", "0.75")
        .call(create);
});

target.on('mousemove.tooltip', function (d) {
    d3.select(this).call(update);
});

target.on('mouseout.tooltip', function (d) {
    d3.select(this)
        .style("opacity", "1")
        .call(remove);
});

function create(selection) {
    selection.each(function (d) {
        var body = d3.select('body'),
            tip = body.selectAll('.d3-tooltip').data([d]);
        tip.enter()
            .append('div')
            .text(d.name + ": " + Math.floor(d.dataValue))
            .classed('d3-tooltip', true)
            .style("background-color", selection.style("fill"));
    });
}

function update(selection) {
    selection.each(function (d) {
        var body = d3.select('body'),
            tip = body.selectAll('div.d3-tooltip')
                .text(d.name + ": " + Math.floor(d.dataValue)).data([d]);

        var width = parseInt(tip.style('width'), 10);
        var height = parseInt(tip.style('height'), 10);

        var dx = +d3.event.pageX - width / 2,
            dy = +d3.event.pageY - 1.1 * height - 5;

        tip.style('left', dx + 'px')
            .style('top', dy + 'px')
            .style("background-color", selection.style("fill"));
    });
}

function remove(selection) {
    selection.each(function (d) {

        var body = d3.select('body'),
            tip = d3.selectAll('div.d3-tooltip').data([d]);

        tip.remove();

    });
}