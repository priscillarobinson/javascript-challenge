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

// select button
d3.select("#filter-btn").on("click", runFilter);

function runFilter() {
    // prevent page from refreshing
    d3.event.preventDefault();
    // select input element and get HTML node
    var inputElement = d3.select("#datetime");
    // get the value property fo the input element
    var inputValue = inputElement.property("value");
    console.log("inputValue");
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
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
