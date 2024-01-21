
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// adding this as a global variable so we can grab the data from the .then() and use it elsewhere:
let apiData;


d3.json(url).then(function(data) {
    console.log("Sample Data: ", data);

    apiData = data;
    let names = data.names;

    //assigning the dropdown to a variable.
    let dropdown = d3.select('#selDataset');

    //adding all of our dropdown options
    for(i=0;i<names.length;i++) {
        dropdown.append("option").property("value", i).text(names[i]);
    }

    //calling this once so that the dashboard pre-fills with the default dropdown option
    optionChanged(0);
});



function optionChanged(nameIndex) {
    //logging information for debug purposes
    //console.log(`Accessed sample data for subject participant ${apiData.names[nameIndex]}, index ${nameIndex}`);

    sampleData = apiData.samples[nameIndex];
    otuIDs = sampleData.otu_ids;
    values = sampleData.sample_values;
    labels = sampleData.otu_labels;

    //Bar graph
    let traceBar = {
        x: values.slice(0,10).reverse(),
        y: otuIDs.slice(0,10).reverse().map(id => `OTU ${id}`),
        text: labels.slice(0,10).reverse(),
        type: 'bar',
        orientation: 'h'
    };

    let dataBar = [traceBar];
    let layoutBar = {
        title: `Most Common OTUs in ${apiData.names[nameIndex]}'s Belly Button (up to 10)`
    };

    Plotly.newPlot('bar', dataBar, layoutBar);
    
    //Bubble plot
    let traceBubble = {
        x: otuIDs,
        y: values,
        text: labels,
        mode: 'markers',
        marker: {
            color: otuIDs,
            size: values //.map(val => Math.sqrt(val) * 5)
        }
    }

    var dataBubble = [traceBubble];
    var layoutBubble = {
        title: 'bubble',
        showlegend: false
    };

    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    //Metadata box
    let demoBox = d3.select('#sample-metadata');
    let demoList = apiData.metadata[nameIndex];

    //
    console.log(demoList);
    demoBox.selectAll('p').remove();
    for(let key in demoList) {
        demoBox.append('p').text(`${key}: ${demoList[key]}`);
    }

}

