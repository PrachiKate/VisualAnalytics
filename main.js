/**
 * Created by prachikate on 9/26/16.
 */


var listOfLocalities = [];
var localities = {};

function parsePrimaryEnergyProduction(){
    Papa.parse('total_primary_energy_production.csv', {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results)
        {
            // loop through all the rows in file
            for (var row=0; row < results.data.length; row++)
            {
                var record = results.data[row];

                // make an object to store data for the current locality
                var locality = {
                    name: record.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year=1980; year<=2012; year++)
                {
                    var value = record[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy production
                    locality.energyProduction.push( value );
                }

                // add the current locality to an index
                localities[ locality.name] = locality;
                listOfLocalities.push( locality.name );

            }
            // populate selection list
            d3.select("#selectionWidget").selectAll("option").data(listOfLocalities).enter().append("option")
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartProduction(localityName);
                   // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartProd(localityName1,localityName2);
                });

           // onChangeProd();




        }
    });


}

function parsePrimaryEnergyConsumption(){
    Papa.parse("total_primary_energy_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var primaryEnergyConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    primaryEnergyConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ primaryEnergyConsumptionLocality.name] = primaryEnergyConsumptionLocality;
                listOfLocalities.push( primaryEnergyConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                   var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartConsumption(localityName);
                  //  d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartCons(localityName1,localityName2);
                });
           // onChangeCons()

            }

    });
}

function parseTotalElectricityProduction(){
    Papa.parse("total_electricity_generation.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var totalElectricityGenerationLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    totalElectricityGenerationLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ totalElectricityGenerationLocality.name] = totalElectricityGenerationLocality;
                listOfLocalities.push( totalElectricityGenerationLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartProd(localityName1,localityName2);
                });
            }

    });
}


function parseTotalElectricityConsumption(){
    Papa.parse("total_electricity_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var totalElectricityConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    totalElectricityConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ totalElectricityConsumptionLocality.name] = totalElectricityConsumptionLocality;
                listOfLocalities.push( totalElectricityConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartCons(localityName1,localityName2);
                });
            }

    });
}

function parseRenewableElectricityProduction(){
    Papa.parse("renewable_electricity_generation.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableElectricityGenerationLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableElectricityGenerationLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ renewableElectricityGenerationLocality.name] = renewableElectricityGenerationLocality;
                listOfLocalities.push( renewableElectricityGenerationLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartProd(localityName1,localityName2);
                });
            }

    });
}

function parseRenewableElectricityConsumption(){
    Papa.parse("renewable_electricity_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableElectricityConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableElectricityConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ renewableElectricityConsumptionLocality.name] = renewableElectricityConsumptionLocality;
                listOfLocalities.push( renewableElectricityConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartCons(localityName1,localityName2);
                });
            }

    });
}

function parseRenewableBiofuelProduction(){
    Papa.parse("renewable_biofuel_production.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableBiofuelProductionLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableBiofuelProductionLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ renewableBiofuelProductionLocality.name] = renewableBiofuelProductionLocality;
                listOfLocalities.push( renewableBiofuelProductionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartProd(localityName1,localityName2);
                });
            }

    });
}

function parseRenewableBiofuelConsumption(){
    Papa.parse("renewable_biofuel_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableBiofuelConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableBiofuelConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ renewableBiofuelConsumptionLocality.name] = renewableBiofuelConsumptionLocality;
                listOfLocalities.push( renewableBiofuelConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartCons(localityName1,localityName2);
                });
            }

    });
}

function parsePetroleumProduction(){
    Papa.parse("petroleum_production.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var petroleumProductionLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    petroleumProductionLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ petroleumProductionLocality.name] = petroleumProductionLocality;
                listOfLocalities.push( petroleumProductionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartProd(localityName1,localityName2);
                });
            }

    });
}


function parsePetroleumConsumption(){
    Papa.parse("petroleum_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var petroleumConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    petroleumConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ petroleumConsumptionLocality.name] = petroleumConsumptionLocality;
                listOfLocalities.push( petroleumConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartCons(localityName1,localityName2);
                });
            }

    });
}

function parseCoalProduction(){
    Papa.parse("coal_production.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var coalProductionLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    coalProductionLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ coalProductionLocality.name] = coalProductionLocality;
                listOfLocalities.push( coalProductionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartProd(localityName1,localityName2);
                });
            }

    });
}


function parseCoalConsumption(){
    Papa.parse("coal_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var coalConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    coalConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ coalConsumptionLocality.name] = coalConsumptionLocality;
                listOfLocalities.push( coalConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartCons(localityName1,localityName2);
                });
            }

    });
}

function parseCo2Emissions(){
    Papa.parse("co2_emissions_per_capita.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var co2EmissionsLocality = {
                    name: record1.Locality,
                    energyEmission: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    co2EmissionsLocality.energyEmission.push(value);
                }
                // add the current locality to an index
                localities[ co2EmissionsLocality.name] = co2EmissionsLocality;
                listOfLocalities.push( co2EmissionsLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawBarChartEmission("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawBarChartEmission(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawBarChartEmiss(localityName1,localityName2);
                });
            }

    });
}

function parsePrimaryEnergyProductionLineChart(){
    Papa.parse('total_primary_energy_production.csv', {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results)
        {
            // loop through all the rows in file
            for (var row=0; row < results.data.length; row++)
            {
                var record = results.data[row];

                // make an object to store data for the current locality
                var locality = {
                    name: record.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year=1980; year<=2012; year++)
                {
                    var value = record[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy production
                    locality.energyProduction.push( value );
                }

                // add the current locality to an index
                localities[ locality.name] = locality;
                listOfLocalities.push( locality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
           // var localityName1;
           // var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartProd(localityName1,localityName2);
                });

            // onChangeProd();




        }
    });


}


function parsePrimaryEnergyConsumptionLineChart(){
    Papa.parse("total_primary_energy_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var primaryEnergyConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    primaryEnergyConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ primaryEnergyConsumptionLocality.name] = primaryEnergyConsumptionLocality;
                listOfLocalities.push( primaryEnergyConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                     var selection = document.getElementById("selectionWidget");
                     var localityName = selection.options[selection.selectedIndex].value;
                     drawLineChartConsumption(localityName);
                     //  d3.select("#main1").selectAll('g').remove();*/

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartCons(localityName1,localityName2);
                });
            // onChangeCons()

        }

    });
}

function parseTotalElectricityProductionLineChart(){
    Papa.parse("total_electricity_generation.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var totalElectricityGenerationLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    totalElectricityGenerationLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ totalElectricityGenerationLocality.name] = totalElectricityGenerationLocality;
                listOfLocalities.push( totalElectricityGenerationLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartProd(localityName1,localityName2);
                });
        }

    });
}

function parseTotalElectricityConsumptionLineChart(){
    Papa.parse("total_electricity_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var totalElectricityConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    totalElectricityConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ totalElectricityConsumptionLocality.name] = totalElectricityConsumptionLocality;
                listOfLocalities.push( totalElectricityConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartCons(localityName1,localityName2);
                });
        }

    });
}


function parseRenewableElectricityProductionLineChart(){
    Papa.parse("renewable_electricity_generation.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableElectricityGenerationLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableElectricityGenerationLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ renewableElectricityGenerationLocality.name] = renewableElectricityGenerationLocality;
                listOfLocalities.push( renewableElectricityGenerationLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartProd(localityName1,localityName2);
                });
        }

    });
}

function parseRenewableElectricityConsumptionLineChart(){
    Papa.parse("renewable_electricity_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableElectricityConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableElectricityConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ renewableElectricityConsumptionLocality.name] = renewableElectricityConsumptionLocality;
                listOfLocalities.push( renewableElectricityConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartCons(localityName1,localityName2);
                });
        }

    });
}

function parseRenewableBiofuelProductionLineChart(){
    Papa.parse("renewable_biofuel_production.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableBiofuelProductionLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableBiofuelProductionLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ renewableBiofuelProductionLocality.name] = renewableBiofuelProductionLocality;
                listOfLocalities.push( renewableBiofuelProductionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartProd(localityName1,localityName2);
                });
        }

    });
}

function parseRenewableBiofuelConsumptionLineChart(){
    Papa.parse("renewable_biofuel_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var renewableBiofuelConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    renewableBiofuelConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ renewableBiofuelConsumptionLocality.name] = renewableBiofuelConsumptionLocality;
                listOfLocalities.push( renewableBiofuelConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartCons(localityName1,localityName2);
                })
        }

    });
}


function parsePetroleumProductionLineChart(){
    Papa.parse("petroleum_production.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var petroleumProductionLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    petroleumProductionLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ petroleumProductionLocality.name] = petroleumProductionLocality;
                listOfLocalities.push( petroleumProductionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartProd(localityName1,localityName2);
                });
        }

    });
}

function parsePetroleumConsumptionLineChart(){
    Papa.parse("petroleum_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var petroleumConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    petroleumConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ petroleumConsumptionLocality.name] = petroleumConsumptionLocality;
                listOfLocalities.push( petroleumConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartCons(localityName1,localityName2);
                });
        }

    });
}


function parseCoalProductionLineChart(){
    Papa.parse("coal_production.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var coalProductionLocality = {
                    name: record1.Locality,
                    energyProduction: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    coalProductionLocality.energyProduction.push(value);
                }
                // add the current locality to an index
                localities[ coalProductionLocality.name] = coalProductionLocality;
                listOfLocalities.push( coalProductionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartProduction("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartProduction(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartProd(localityName1,localityName2);
                });
        }

    });
}

function parseCoalConsumptionLineChart(){
    Papa.parse("coal_consumption.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var coalConsumptionLocality = {
                    name: record1.Locality,
                    energyConsumption: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    coalConsumptionLocality.energyConsumption.push(value);
                }
                // add the current locality to an index
                localities[ coalConsumptionLocality.name] = coalConsumptionLocality;
                listOfLocalities.push( coalConsumptionLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartConsumption("North America");



            d3.select("#selectionWidget")
                .on('change', function() {
                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartConsumption(localityName);
                    //d3.select("#main1").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartCons(localityName1,localityName2);
                });
        }

    });
}


function parseCo2EmissionsLineChart(){
    Papa.parse("co2_emissions_per_capita.csv", {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            // loop through all the rows in file
            for (var row = 0; row < results.data.length; row++) {
                var record1 = results.data[row];

                // make an object to store data for the current locality
                var co2EmissionsLocality = {
                    name: record1.Locality,
                    energyEmission: []
                }

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record1[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    }
                    else if (value === 'NA') {
                        value = 0;
                    }
                    else if (value === '(s)') {
                        value = 0;
                    }
                    else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy consumption
                    co2EmissionsLocality.energyEmission.push(value);
                }
                // add the current locality to an index
                localities[ co2EmissionsLocality.name] = co2EmissionsLocality;
                listOfLocalities.push( co2EmissionsLocality.name );

            }
            // populate selection list
            d3.select('#selectionWidget').selectAll('option').data(listOfLocalities).enter().append('option')
                .html(function(d) { return d; })
                .attr('value', function(d) { return d; })
            var localityName1;
            var localityName2;

            d3.select("#main").selectAll('g').remove();

            // make bar chart
            drawLineChartEmission("North America");

            d3.select("#selectionWidget")
                .on('change', function() {

                    var selection = document.getElementById("selectionWidget");
                    var localityName = selection.options[selection.selectedIndex].value;
                    drawLineChartEmission(localityName);
                    // d3.select("#main").selectAll('g').remove();

                    var selectedValues=[];
                    selectedValues = $('#selectionWidget').val();
                    console.log(selectedValues);
                    localityName1 = selectedValues[0];
                    localityName2 = selectedValues[1];


                    // clear the contents of the chart
                    d3.select("#main").selectAll('g').remove();
                    // console.log('new locality: ' + localityName1);
                    //  console.log('new locality: ' + localityName2);
                    // re-draw bar chart for the new locality
                    drawLineChartEmiss(localityName1,localityName2);
                });
        }

    });
}




