
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// adding this as a global variable so we can grab the data from the .then() and use it elsewhere:
let apiData;

// Initial loading of data from API
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

    nameVal = apiData.names[nameIndex];
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
        title: `Most Common OTUs in ${nameVal}'s Belly Button (up to 10)`
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
            size: values, //.map(val => Math.sqrt(val) * 5)
            colorscale: 'Picnic',
            line: {
                width: 1.5,
                color: "#000a"
            }
        }
    }

    var dataBubble = [traceBubble];
    var layoutBubble = {
        title: `All OTUs in sample from subject ${nameVal}`,
        showlegend: false
    };

    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    //Metadata box
    let demoBox = d3.select('#sample-metadata');
    let demoList = apiData.metadata[nameIndex];

    //Fill out demographics
    console.log(demoList);
    demoBox.selectAll('p').remove();
    for(let key in demoList) {
        demoBox.append('p').text(`${key}: ${demoList[key]}`);
    };

    // Grab wash frequency from demoList
    let washNo = demoList.wfreq;

    //add gauge chart paramaters
    let dataGauge = [{
        //pass wash frequency in as the gauge value:
        value: washNo,
        title: {text: "Belly Button Washes per Week"},
        type: "indicator",
        //shape: 'angular',
        mode: "gauge+number",
        gauge: {
            //parameters for the gauge
            axis: {
                //tick range
                range: [null, 7],
                //tick interval (setting to 1 so we see all 7 days)
                dtick: 1,
            },
            bar: {
                //neutral gray, semi-transparent but still visible enough to look intentional
                color: "#0006", 
                //making line about 1/3 thickness so that we see the background colors more clearly
                thickness: 0.33
            },
            steps: [
                //I'd like to find a way to fill these out programatically but this works for now
                {range: [0, 1], color: '#aa8888'},
                {range: [1, 2], color: '#999988'},
                {range: [2, 3], color: '#88aa88'},
                {range: [3, 4], color: '#77bb88'},
                {range: [4, 5], color: '#66cc88'},
                {range: [5, 6], color: '#55dd88'},
                {range: [6, 7], color: '#44ee88'}

            ]
        }
    }];

    //actually plot the gauge
    //we don't really need a layout so I'm just passing in an empty Object {} where the layout would normally be
    Plotly.newPlot('gauge', dataGauge, {});

}

