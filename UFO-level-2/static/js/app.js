// from data.js
var tableData = data;

// YOUR CODE HERE!
// Console.log the weather data from data.js
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through 'data' and console.log each ufo sighting object
// Use Object.entries to console.log each ufoSighting value
//ufoSighting value (data/time, city, state, country, shape)

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});

d3.selectAll(".filter").on("change", runFilter);

function runFilter() {
    // prevent page from refreshing
    d3.event.preventDefault();

    var changedInput = d3.select(this).select("input");
    var inputID = changedInput.attr("id");
    var inputValue = changedInput.property("value");

    // select input element and get HTML node
    // var inputElement = d3.select("#datetime");
    // get the value property fo the input element
    // var inputValue = inputElement.property("value");

    console.log("inputID");
    console.log(inputID);

    console.log("inputValue");
    console.log(inputValue);

    // var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    var filteredData = tableData.filter(tableData => tableData[inputID] === inputValue);
  
    console.log("filteredData");
    console.log(filteredData);

    tbody.html("");
    
    filteredData.forEach((enteredDate) => {
        var row=tbody.append("tr");
        Object.entries(enteredDate).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });

    
    });
    
}
