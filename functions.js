/**
 * Created by prachikate on 9/26/16.
 */


function drawBarChartProduction(localityName) {

    // get energy production for USA
    var energyProduction = localities[localityName].energyProduction;

    // figure out maximum energy production
    var maxProduction = d3.max(energyProduction);

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;

    // figure out the width of individual bars
    var barWidth1 = chartWidth / (2012 - 1980 + 1);

    d3.select("#label")
        .html(localityName  + "Energy Production ");

    // create a y scale
    var yScale = d3.scale.linear()
        .domain([0, maxProduction])
        .range([chartHeight, 0]);

    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });

    // create a group for the bar chart
    var svg = d3.select("svg")
        width = 1000,
        height = 700;

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

        svg.call(tip);

    // create x axis
    var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom');

    // create y axis
    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(-2,0)')
        .call(yAxis);

    group.selectAll("rect").data(energyProduction).enter().append('rect')
        .attr("x", function(d, i) { return i * barWidth1
        })
        .attr("y", function (d, i) {
            return yScale(d);
         })
        .attr("width", barWidth1/2)
        .attr("height", function (d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#f47142")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

}

function drawBarChartConsumption(localityName) {

    // get energy production
    var energyConsumption = localities[localityName].energyConsumption;

    // figure out maximum energy production
    var maxConsumption = d3.max(energyConsumption);

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;

    // figure out the width of individual bars
    var barWidth = chartWidth / (2012 - 1980 + 10);

    // create a group for the bar chart
    d3.select("#label")
        .html(localityName  + " Energy Consumption ");

    // create a y scale
    var yScale = d3.scale.linear()
        .domain([0, maxConsumption])
        .range([chartHeight, 0]);

    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });

    // create a group for the bar chart
    var svg = d3.select("svg")
        width = 1000,
        height = 700;

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

        svg.call(tip);

    // create x axis
    var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom');

    // create y axis
    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(-2,0)')
        .call(yAxis);

    group.selectAll("rect1").data(energyConsumption).enter().append('rect')
        .attr("x", function (d, i) {
            return i * barWidth
        })
        .attr("transform", "translate(10, 0)")
        .attr("y", function (d, i) {
            return yScale(d);
        })
        .attr("width", barWidth/2)
        .attr("height", function (d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#4248f4")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
}

function drawBarChartProd(localityName1,localityName2)
{   //parsePrimaryEnergyProduction();
    // get energy production for USA
    var energyProduction1 = localities[localityName1].energyProduction;
    var energyProduction2 = localities[localityName2].energyProduction;

    // figure out maximum energy production
    var maxProduction1 = d3.max(energyProduction1);
    var maxProduction2 = d3.max(energyProduction2);

    if(maxProduction1 > maxProduction2 ){
        finalMaxProduction = maxProduction1;
    }
    else{
        finalMaxProduction = maxProduction2;
    }

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;

    // figure out the width of individual bars
    var barWidth = (chartWidth / (2012-1980+1))/2;

    d3.select("#label")
        .html(localityName1 + "and" + localityName2 + " Energy Production ");

    // create a group for the bar chart
    var svg = d3.select("svg")
         width = 1000,
         height = 700;

    // create a y scale
    var yScale = d3.scale.linear()
        .domain([0, finalMaxProduction])
        .range([chartHeight, 0]);

    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    svg.call(tip);

    // create x axis
    var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom');

    // create y axis
    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(-2,0)')
        .call(yAxis);

    group.selectAll("rect").data(energyProduction1).enter().append('rect')
        .attr("x", function(d, i) {

            return (i+1)*(barWidth*2);

        })
        .attr("y", function(d, i) {
            return yScale(d);
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#f47142")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

    group.selectAll("rect2").data(energyProduction2).enter().append('rect')
        .attr("x", function(d, i) {

            console.log("d:"+d);
            console.log("i:"+i);
            console.log("barWidth:"+((i+1)*(barWidth*2)-barWidth ));
            return (i+1)*(barWidth*2)-barWidth;

        })
        .attr("y", function(d, i) {
            return yScale(d);
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#d7f442")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
}


function drawBarChartCons(localityName1,localityName2)
{
   // parsePrimaryEnergyConsumption();
    // get energy production for USA
    var energyConsumption1 = localities[localityName1].energyConsumption;
    var energyConsumption2 = localities[localityName2].energyConsumption;

    // figure out maximum energy production
    var maxConsumption1 = d3.max(energyConsumption1);
    var maxConsumption2 = d3.max(energyConsumption2);

    if(maxConsumption1 > maxConsumption2 ){
        finalMaxConsumption = maxConsumption1;
    }
    else{
        finalMaxProduction = maxConsumption2;
    }

    // create a group for the bar chart
    d3.select("#label")
        .html(localityName1 + "and" + localityName2 + " Energy Consumption ");
    // chart size
    var chartWidth = 700;
    var chartHeight = 500;

    // figure out the width of individual bars
    var barWidth = (chartWidth / (2012-1980+1))/2;

    // create a y scale
    var yScale = d3.scale.linear()
        .domain([0, finalMaxConsumption])
        .range([chartHeight, 0]);

    var svg = d3.select("svg")
        width = 1000,
        height = 700;

    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    svg.call(tip);

    // create x axis
    var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom');

    // create y axis
    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(-2,0)')
        .call(yAxis);


    group.selectAll("rect1").data(energyConsumption1).enter().append('rect')
        .attr("x", function(d, i) {

            return (i+1)*(barWidth*2);

        })
        .attr("y", function(d, i) {
            return yScale(d);
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#4248f4")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

    group.selectAll("rect3").data(energyConsumption2).enter().append('rect')
        .attr("x", function(d, i) {

            console.log("d:"+d);
            console.log("i:"+i);
            console.log("barWidth:"+((i+1)*(barWidth*2)-barWidth ));
            return (i+1)*(barWidth*2)-barWidth;

        })
        .attr("y", function(d, i) {
            return yScale(d);
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "f4e842")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

}

function drawBarChartEmiss(localityName1,localityName2)
{
    var energyEmission1 = localities[localityName1].energyEmission;
    var energyEmission2 = localities[localityName2].energyEmission;
    // figure out maximum energy production
    var finalMaxEmission;
    var maxEmission1 = d3.max(energyEmission1);
    var maxEmission2 = d3.max(energyEmission2);
    if(maxEmission1 > maxEmission2){
        finalMaxEmission = maxEmission1 ;

    }
    else{
        finalMaxEmission = maxEmission2;
    }
    // chart size
    var chartWidth = 700;
    var chartHeight = 500;

    // figure out the width of individual bars
    var barWidth = (chartWidth / (2012-1980+1))/2;

    d3.select("#label")
        .html(localityName1 + "and" + localityName2 + " Energy Emission ");

    // create a y scale
    var yScale = d3.scale.linear()
        .domain([0, finalMaxEmission])
        .range([chartHeight, 0]);
    var svg = d3.select("svg")
        width = 1000,
        height = 700;

    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    svg.call(tip);

    // create x axis
    var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom');

    // create y axis
    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(-2,0)')
        .call(yAxis);

    group.selectAll("rect5").data(energyEmission1).enter().append('rect')
        .attr("x", function(d, i) {

            return (i+1)*(barWidth*2);

        })
        .attr("y", function(d, i) {
            return yScale(d);
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#4248f4")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)


    group.selectAll("rect6").data(energyEmission2).enter().append('rect')
        .attr("x", function(d, i) {

            console.log("d:"+d);
            console.log("i:"+i);
            console.log("barWidth:"+((i+1)*(barWidth*2)-barWidth ));
            return (i+1)*(barWidth*2)-barWidth;

        })
        .attr("y", function(d, i) {
            return yScale(d);
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#f4e842")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)



}

function drawBarChartEmission(localityName) {
    //parsePrimaryEnergyConsumption();
    // get energy production for USA
    var energyEmission = localities[localityName].energyEmission;

    // figure out maximum energy production
    var maxEmission = d3.max(energyEmission);

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;

    // figure out the width of individual bars
    var barWidth = chartWidth / (2012 - 1980 + 10);

    // create a group for the bar chart
    d3.select("#label")
        .html(localityName + " Energy Emission ");

    // create a y scale
    var yScale = d3.scale.linear()
        .domain([0, maxEmission])
        .range([chartHeight, 0]);

    var svg = d3.select("svg")
        width = 1000,
        height = 700;

    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    svg.call(tip);

    // create x axis
    var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom');

    // create y axis
    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    group.append("g")
        .attr('class', 'axis')
        .attr('transform', 'translate(-2,0)')
        .call(yAxis);

    group.selectAll("rect4").data(energyEmission).enter().append('rect')
        .attr("x", function (d, i) {
            return i * barWidth
        })
        .attr("transform", "translate(10, 0)")
        .attr("y", function (d, i) {
            return yScale(d);
        })
        .attr("width", barWidth/2)
        .attr("height", function (d) {
            return chartHeight - yScale(d);
        })
        .style("stroke", "white")
        .style("fill", "#4248f4")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)



}


function drawLineChartProduction(localityName){
    var energyProduction = localities[localityName].energyProduction;
    // figure out maximum energy production
    var maxProduction = d3.max(energyProduction);


    // chart size
    var chartWidth = 700;
    var chartHeight = 500;
    var barWidth = chartWidth / (2012 - 1980 + 10);
    //set Scales
    //create x scale
    /*var timeScale = d3.time.scale()
        .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
        .range([0, chartWidth])*/
    d3.select("#label")
        .html(localityName + " Energy Production ");

    x = d3.time.scale().domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]).range([0, chartWidth]);
    y = d3.scale.linear().domain([0, maxProduction]).range([chartHeight, 0]);

   /* var lineData = energyProduction.time.map(function (_, idx) {
        return { data: energyProduction.data[idx], time: energyProduction.time[idx] };
    });*/

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    var svg = d3.select("#main");

    var line = d3.svg.line()
        .x( function (d, i) {
            return i * barWidth})

        .y(function (d) {
            return y(d);})

    var label = svg.selectAll("text")
        .data(energyProduction).enter().append("text")
        .text (function(d){return (d.energyProduction)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    group.append("g")
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    group.append("g")
        .attr('class', 'y axis')
        .call(yAxis);

    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyProduction));


}

function drawLineChartProd(localityName1, localityName2){
    var energyProduction1 = localities[localityName1].energyProduction;
    var energyProduction2 = localities[localityName2].energyProduction;
    // figure out maximum energy production
    var finalMaxProduction;
    var maxProduction1 = d3.max(energyProduction1);
    var maxProduction2 = d3.max(energyProduction2);
    if(maxProduction1 > maxProduction2){
        finalMaxProduction = maxProduction1 ;

    }
    else{
        finalMaxProduction = maxProduction2;
    }

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;
    var barWidth = chartWidth / (2012 - 1980 + 10);
    //set Scales
    //create x scale
    /*var timeScale = d3.time.scale()
     .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
     .range([0, chartWidth])*/

    d3.select("#label")
        .html(localityName1 + "and" + localityName2 + " Energy Production ");

    x = d3.time.scale().domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]).range([0, chartWidth]);
    y = d3.scale.linear().domain([0, finalMaxProduction]).range([chartHeight, 0]);

    /* var lineData = energyProduction.time.map(function (_, idx) {
     return { data: energyProduction.data[idx], time: energyProduction.time[idx] };
     });*/

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    var svg = d3.select("#main");

    var line = d3.svg.line()
        .x( function (d, i) {
            return i * barWidth})

        .y(function (d) {
            return y(d);})

    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyProduction1));

    svg.selectAll("text")
        .data(energyProduction1).enter().append("text")
        .text (function(d){return (d.energyProduction)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })

    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyProduction2));

    svg.selectAll("text")
        .data(energyProduction2).enter().append("text")
        .text (function(d){return (d.energyProduction)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    group.append("g")
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    group.append("g")
        .attr('class', 'y axis')
        .call(yAxis);


}

function drawLineChartCons(localityName1, localityName2){
    var energyConsumption1 = localities[localityName1].energyConsumption;
    var energyConsumption2 = localities[localityName2].energyConsumption;
    // figure out maximum energy production
    var finalMaxConsumption;
    var maxConsumption1 = d3.max(energyConsumption1);
    var maxConsumption2 = d3.max(energyConsumption2);
    if(maxConsumption1 > maxConsumption2){
        finalMaxConsumption = maxConsumption1 ;

    }
    else{
        finalMaxProduction = maxProduction2;
    }

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;
    var barWidth = chartWidth / (2012 - 1980 + 10);
    //set Scales
    //create x scale
    /*var timeScale = d3.time.scale()
     .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
     .range([0, chartWidth])*/

    d3.select("#label")
        .html(localityName1 + "and" + localityName2 + " Energy Consumption ");

    x = d3.time.scale().domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]).range([0, chartWidth]);
    y = d3.scale.linear().domain([0, finalMaxConsumption]).range([chartHeight, 0]);

    /* var lineData = energyProduction.time.map(function (_, idx) {
     return { data: energyProduction.data[idx], time: energyProduction.time[idx] };
     });*/

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    var svg = d3.select("#main");

    var line = d3.svg.line()
        .x( function (d, i) {
            return i * barWidth})

        .y(function (d) {
            return y(d);})

        svg.selectAll("text")
        .data(energyConsumption1).enter().append("text")
        .text (function(d){return (d.energyConsumption)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })


    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyConsumption1));


        svg.selectAll("text")
        .data(energyConsumption2).enter().append("text")
        .text (function(d){return (d.energyConsumption)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })


    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyConsumption2));



    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    group.append("g")
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    group.append("g")
        .attr('class', 'y axis')
        .call(yAxis);


}

function drawLineChartConsumption(localityName){
    var energyConsumption = localities[localityName].energyConsumption;
    // figure out maximum energy production
    var maxConsumption = d3.max(energyConsumption);


    // chart size
    var chartWidth = 700;
    var chartHeight = 500;
    var barWidth = chartWidth / (2012 - 1980 + 10);
    //set Scales
    //create x scale
    /*var timeScale = d3.time.scale()
     .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
     .range([0, chartWidth])*/

    d3.select("#label")
        .html(localityName + " Energy Consumption ");

    x = d3.time.scale().domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]).range([0, chartWidth]);
    y = d3.scale.linear().domain([0, maxConsumption]).range([chartHeight, 0]);

    /* var lineData = energyProduction.time.map(function (_, idx) {
     return { data: energyProduction.data[idx], time: energyProduction.time[idx] };
     });*/

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    var svg = d3.select("#main");

    var line = d3.svg.line()
        .x( function (d, i) {
            return i * barWidth})

        .y(function (d) {
            return y(d);})

        svg.selectAll("text")
        .data(energyConsumption).enter().append("text")
        .text (function(d){return (d.energyConsumption)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    group.append("g")
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    group.append("g")
        .attr('class', 'y axis')
        .call(yAxis);

    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyConsumption));


}

function drawLineChartEmiss(localityName1, localityName2){
    var energyEmission1 = localities[localityName1].energyEmission;
    var energyEmission2 = localities[localityName2].energyEmission;
    // figure out maximum energy production
    var finalMaxEmission;
    var maxEmission1 = d3.max(energyEmission1);
    var maxEmission2 = d3.max(energyEmission2);
    if(maxEmission1 > maxEmission2){
        finalMaxEmission = maxEmission1 ;

    }
    else{
        finalMaxEmission = maxEmission2;
    }

    // chart size
    var chartWidth = 700;
    var chartHeight = 500;
    var barWidth = chartWidth / (2012 - 1980 + 10);
    //set Scales
    //create x scale
    /*var timeScale = d3.time.scale()
     .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
     .range([0, chartWidth])*/

    d3.select("#label")
        .html(localityName1 + "and" + localityName2 + " Energy Emission ");

    x = d3.time.scale().domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]).range([0, chartWidth]);
    y = d3.scale.linear().domain([0, finalMaxEmission]).range([chartHeight, 0]);

    /* var lineData = energyProduction.time.map(function (_, idx) {
     return { data: energyProduction.data[idx], time: energyProduction.time[idx] };
     });*/

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    var svg = d3.select("#main");

    var line = d3.svg.line()
        .x( function (d, i) {
            return i * barWidth})

        .y(function (d) {
            return y(d);})

        svg.selectAll("text")
        .data(energyEmission1).enter().append("text")
        .text (function(d){return (d.energyEmission)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })


    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyEmission1));


        svg.selectAll("text")
        .data(energyEmission2).enter().append('text')
        .text (function(d){return (d.energyEmission)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })


    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyEmission2));



    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    group.append("g")
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    group.append("g")
        .attr('class', 'y axis')
        .call(yAxis);


}

function drawLineChartEmission(localityName){
    var energyEmission = localities[localityName].energyEmission;
    // figure out maximum energy production
    var maxEmission = d3.max(energyEmission);


    // chart size
    var chartWidth = 700;
    var chartHeight = 500;
    var barWidth = chartWidth / (2012 - 1980 + 10);
    //set Scales
    //create x scale
    /*var timeScale = d3.time.scale()
     .domain([new Date(1980, 1, 1), new Date(2012, 1, 1)])
     .range([0, chartWidth])*/

    d3.select("#label")
        .html(localityName + " Energy Emission ");

    x = d3.time.scale().domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]).range([0, chartWidth]);
    y = d3.scale.linear().domain([0, maxEmission]).range([chartHeight, 0]);

    /* var lineData = energyProduction.time.map(function (_, idx) {
     return { data: energyProduction.data[idx], time: energyProduction.time[idx] };
     });*/

    var group = d3.select("#main").append("g")
        .attr("transform", "translate(100, 100)");

    var svg = d3.select("#main");

    var line = d3.svg.line()
        .x( function (d, i) {
            return i * barWidth})

        .y(function (d) {
            return y(d);})

        svg.selectAll("text")
        .data(energyEmission).enter().append("text")
        .text (function(d){return (d.energyEmission)})
        .attr({
            x:(function (d, i) {
                return i * barWidth}),
            y:(function (d) {
                return y(d);})
        })

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    group.append("g")
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis);

    group.append("g")
        .attr('class', 'y axis')
        .call(yAxis);

    group.append("path")
        .attr("class", "line")
        .attr("d", line(energyEmission));


}


