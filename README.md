# belly-button-challenge

<<<<<<< HEAD
## **File Locations**
- **`Images/`**: Contains screenshots and visual assets used in this project and README.
- **`References/`**: Includes links or files from repositories referenced during the assignment.
- **`Starter_Code/`**: Contains blank starter files provided at the beginning of the assignment.
- **``*static/*: Contains public assets like JavaScript, stylesheets, and media files.
- **`index.html`**: Contains the framework for the site
- **`samples.html`**: Contains the data for this assignment
- **`Notes/`**: Contains any relevant notes if any exist.

## Sources / References
* Header image: NA
* Repos used as reference: 
  * https://github.com/AshelynAllred/belly-button-challenge
=======
## File Location
- In Images you can find some instructional images I used in the readme
- In static you can find the java script file app.js where most of the work on this assignment was done
- In the main you can find the html file 'index' which was mostly unedited all I did was add some lines to make the background of the site not bright white
- In in the main you can also find a file sample.json which containted the data for this assignment to pull from
- In 'Starter_Code' you can find the blank unedited starter files
- In 'Refrences' you can find the two repositories I refrenced for this assignment
	I got some major help to getting started from AshelynAllred whose repo is saved in refrences/AshelynAllred

## Sources
- As started above I got a lot of help from AshelynAllred to get off the ground since I was totally lost for a while there. https://github.com/AshelynAllred/belly-button-challenge	
- I also used this documentation to help write the gauge chart. https://plotly.com/javascript/gauge-charts/
- I also used this to help find color scales for the bubble chart. https://plotly.com/javascript/colorscales/
>>>>>>> 0ecbd035b1b91610bdbf8f69b75620bd9117e126

## Background
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Before You Begin
1. Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.

2. Clone the new repository to your computer.

3. Inside your local git repository, copy the files from in the `Starter_Code/` folder contained within the Module 14 Challenge zip file. i.e. `index.html`, `samples.json`, and the `static` folder.

NOTE: You will not be required to access the `samples.json` file locally, but it is provided for reference.

4. Push the above changes to GitHub.

5. Deploy the new repository to GitHub Pages.
## Instructions

Complete the following steps:

1. Use the `D3 library` to read in `samples.json` from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use `sample_values` as the values for the bar chart.

  * Use `otu_ids` as the labels for the bar chart.

  * Use `otu_labels` as the hovertext for the chart.

![category_DataFrame](Images/INS_IMG_01.jpg)

3. Create a bubble chart that displays each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.

![category_DataFrame](Images/INS_IMG_02.jpg)

4. Display the sample metadata, i.e., an individual's demographic information.

  * Loop through each key-value pair from the metadata JSON object and create a text string.

  * Append an html tag with that text to the #sample-metadata panel.

![category_DataFrame](Images/INS_IMG_03.jpg)

5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![category_DataFrame](Images/INS_IMG_04.jpg)

6. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

You will need to modify the example gauge code to account for values ranging from 0 through 9.

Update the chart whenever a new sample is selected.

![category_DataFrame](Images/INS_IMG_05.jpg)

Hints
* Use console.log inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.

## Requirements
### Bar Chart (30 points)
* Chart initializes without error (10 points)

* Chart updates when a new sample is selected (5 points)

* Chart uses Top 10 sample values as values (5 points)

* Chart uses `otu_ids` as the labels (5 points)

* Chart uses `otu_labels` as the tooltip (5 points)

### Bubble Charts (40 points)
* Chart initializes without error (10 points)

* Chart updates when a new sample is selected (5 points)

* Chart uses `otu_ids` for the x values (5 points)

* Chart uses `otu_ids` for marker colors (5 points)

* Chart uses `sample_values` for the y values (5 points)

* Chart uses `sample_values` for the marker size (5 points)

* Chart uses `otu_labels` for text values (5 points)

### Metadata and Deployment (30 points)
* Metadata initializes without error (10 points)

* Metadata updates when a new sample is selected (10 points)

<<<<<<< HEAD
* App Successfully Deployed to Github Pages (10 points)
=======
App Successfully Deployed to Github Pages (10 points)
>>>>>>> 0ecbd035b1b91610bdbf8f69b75620bd9117e126
