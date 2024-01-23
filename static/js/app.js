let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// adding this as a global variable so we can grab the data from the .then() and use it elsewhere:
let jsonData;

// Initial loading of data from JSON
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

    optionChanged(0);
});

function optionChanged(nameIndex) {
    //logging information for debug purposes
    //console.log(`Accessed sample data for subject participant ${jsonData.names[nameIndex]}, index ${nameIndex}`);

    nameVal = jsonData.names[nameIndex];
    sampleData = jsonData.samples[nameIndex];
    otuIDs = sampleData.otu_ids;
    values = sampleData.sample_values;
    labels = sampleData.otu_labels;

    //Metadata box
    let demoBox = d3.select('#sample-metadata');
    let demoList = jsonData.metadata[nameIndex];

    //Fill out demographics
    console.log(demoList);
    demoBox.selectAll('p').remove();
    for(let key in demoList) {
    demoBox.append('p').text(`${key}: ${demoList[key]}`);
    };

    // Grab wash frequency from demoList
    let washfreq = demoList.wfreq;

    // Bar graph
    let colorScaleBar = d3.scaleLinear().domain([0, d3.max(values)]).range(["darkblue", "lightblue"]);

    let traceBar = {
        x: values.slice(0, 10).reverse(),
        y: otuIDs.slice(0, 10).reverse().map(id => `OTU ${id}`),
        text: labels.slice(0, 10).reverse(),
        type: 'bar',
        orientation: 'h',
        marker: {
            color: values.slice(0, 10).map(value => colorScaleBar(value)),
            colorscale: 'Viridis'
        }
    };

    let dataBar = [traceBar];
    let layoutBar = {
        title: `Most Common OTUs in ${nameVal}'s Belly Button (up to 10)`
    };

    // Update or create the 'bar' plot
    Plotly.react('bar', dataBar, layoutBar);

    // Bubble plot
    let traceBubble = {
        x: otuIDs,
        y: values,
        text: labels,
        mode: 'markers',
        marker: {
            color: otuIDs,
            size: values,
            sizemode: 'diameter', 
            sizeref: 2,  // Adjust this value to set the maximum size of the bubbles
            colorscale: 'YlGnBu',
            line: {
                width: 1.5,
                color: "#FFFFFF"
            }
        }
    };

    var dataBubble = [traceBubble];
    var layoutBubble = {
        title: {
            text: `All OTUs from subject ${nameVal}`,
            font: {
                size: 24  // You can adjust the font size as needed
            }
        },
        showlegend: false
    };

    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    // Gauge plot
    let colorScale = d3.scaleLinear().domain([0, 7]).range(["#FF5733", "#33FF57"]);

    let dataGauge = [{
        value: washfreq,
        title: { text: "Belly Button Washes Freqency" },
        delta: { reference: 3, increasing: { color: "RebeccaPurple" } },
        type: "indicator",
        mode: "gauge+number+delta",
        gauge: {
            axis: {
                range: [null, 7],
                dtick: 1,
            },
            bar: {
                color: "#000000",
                thickness: 0.33
            },
            steps: [
                { range: [0, 1], color: colorScale(0) },
                { range: [1, 2], color: colorScale(1) },
                { range: [2, 3], color: colorScale(2) },
                { range: [3, 4], color: colorScale(3) },
                { range: [4, 5], color: colorScale(4) },
                { range: [5, 6], color: colorScale(5) },
                { range: [6, 7], color: colorScale(6) }
            ]
        }
    }];

    // Update or create the 'gauge' plot
    Plotly.react('gauge', dataGauge, {});
}