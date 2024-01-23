
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// adding this as a global variable so we can grab the data from the .then() and use it elsewhere:
let jsonData;

// Initial loading of data from Json
d3.json(url).then(function(data) {
    console.log("Sample Data: ", data);

    
    jsonData = data;
    let names = data.names;

    //assigning the dropdown to a variable.
    let dropdown = d3.select('#selDataset');

    //adding all of our dropdown options
    names.forEach(function(name, i) {
        dropdown.append("option").property("value", i).text(name);
    });

    //calling this once so that the dashboard pre-fills with the default dropdown option
    optionChanged(0);
});

function optionChanged(nameIndex) {

};


    //Bubble plot
    let traceBubble = {

    }



    //Metadata box



    