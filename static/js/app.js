// from data.js
var tableData = data;
// Console.log the datetime data from data.js
// console.log(data);
// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use d3 to update each cell's text
tableData.forEach(function(ufosightings){
    // console.log(ufosightings)
    var row = tbody.append("tr");

    Object.entries(ufosightings).forEach(function ([key, value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    var filteredData = tableData
// Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
// Get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    // console.log(tableData);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    // console.log(filteredData);
    
    var inputCity = d3.select("#city");
    var inputValue = inputCity.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.city === inputValue);
    
    var inputState = d3.select("#state");
    var inputValue = inputState.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.state === inputValue);
    
    var inputCountry = d3.select("#country");
    var inputValue = inputCountry.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.country === inputValue);
    
    var inputShape = d3.select("#shape");
    var inputValue = inputShape.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
        
    tbody = d3.select("tbody");

    filteredData.forEach(function(sightings){
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(function ([key,value]){
            console.log(key,value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
