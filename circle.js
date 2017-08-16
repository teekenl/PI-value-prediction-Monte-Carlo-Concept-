/**
 * Simple Javascript File to determine the estimated PI value by using Monte Carlo concept.
 * Have fun in coding.
 *
 * Author : TeeKen Lau
 * Date: 15 Aug 2017
 *
 */

// Global variable to store the keep changing or randomize variable such as point or circle.
var allPoint_coords = [],
    centerX,centerY,
    submit_button;

/** Run simulation - The first step goes here
 ** Checking valid input before the simulation is started. **/
function runSimulation(){
    var gridSize = parseInt(document.getElementById('gridSize').value) || 1000, // Set the default value as 1000 if empty
        circleDiameter = parseInt(document.getElementById('circleDiameter').value) || 900, // The size of circle or 900
        n = parseInt(document.getElementById('number_point').value) || 100, // The number of point being generated
        iterations = parseInt(document.getElementById('iteration').value) || 10; // The number times of simulation running

    if (!numeric_validation(gridSize) && !numeric_validation(circleDiameter) && !numeric_validation(n)
        && !numeric_validation(iterations)){
        document.getElementById('error').style.visibility = "visible";
        return false;
    }else{
        document.getElementById('error').style.visibility = "hidden";
        submit_button = document.getElementById('submit-button');
        submit_button.disabled = toggleButton(submit_button); // Disable button while the iteration is ongoing
        // Note diameter is divided by 2 because we only need radius of circle.
        estimatePIByMonteCarlo(gridSize,Math.floor(circleDiameter/2),n,iterations);
        return true;
    }
}

// Function to determine the estimated of PI value based on the number of iterations.
function estimatePIByMonteCarlo(gridSize, circleDiameter, n, iterations) {
    var total_PI_val = 0,
        canvas = document.getElementById('canvas');

    // Reset the canvas if the input is changed.
    canvas.width = gridSize;
    canvas.height = gridSize;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    // Starting to plot point and circle
    circle_plot(circleDiameter,canvas);

    // Calculate the estimated PI based on the percentage of point within a circle.
    // (Monte Carlo concept)
    // Area = PI * Radius * Radius
    for(var round = 0; round<iterations; round++) {
        // Starting to plot point
        random_plot(gridSize,round+1,iterations,n,canvas);

        var percentage_point = find_point_within_circle(circleDiameter,centerX,centerY,allPoint_coords) / 100,
            estimated_Area  = percentage_point * (Math.pow(gridSize,2)),
            estimated_PI = estimated_Area / (Math.pow(circleDiameter,2));

        total_PI_val += estimated_PI;
    }

    // Final result of PI after average of iterative results has been carried out.
    document.getElementById('final-result').innerText = "The Average PI value: " + (total_PI_val/iterations);
    submit_button.disabled = toggleButton(submit_button); // Enable button to perform next simulation.
}

// Draw a circle in canvas
function circle_plot(circleDiameter,canvas){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    draw_point(centerX,centerY,circleDiameter,"rgba(255, 0, 0, 0.2)",canvas);
}

// Plot the point in the canvas
function random_plot(gridSize,round_Count,iteration,number_point,canvas) {
    allPoint_coords = []; // Reset the value when each iteration is finished.
    for(var i = 0 ; i<number_point; i++) {
       var client_x = randomize(gridSize),
           client_y = randomize(gridSize);
       allPoint_coords.push({x: client_x, y: client_y});


       // Only the point on the final iteration will be shown in visualization grid.
       if(round_Count === iteration) {
           draw_point(client_x, client_y, 3, "#000000", canvas);
       }
    }
}

/* <------------------------- Code Cemetery -------------------------------------> */

// Helper function to return random value from 0 to gridsize
function randomize(gridSize){
    var range = gridSize + 1;
    return Math.floor(Math.random() * range);
}

// Helper function to draw the shape of circle or point in canvas
function draw_point(client_x,client_y,radius,circle_color,canvas){
    var x = client_x,
        y = client_y,
        cvs = canvas.getContext("2d");
    //console.log(1);
    cvs.fillStyle = circle_color; // Black color

    cvs.beginPath(); //Start path
    cvs.arc(x, y, radius, 0, Math.PI * 2, true); // Draw a point by using arc function
    cvs.fill(); // Fill the color
}

// Helper function to find the percentage point inside the circle
function find_point_within_circle(circleDiameter,centerX,centerY,allPoint_coords){
    var inside_count = 0;
    for(var i =0; i<allPoint_coords.length; i++){
        if(is_within_euclidean_distance(allPoint_coords[i].x,allPoint_coords[i].y,centerX,
                centerY,circleDiameter)){
            inside_count++;
        }
    }
    return Math.floor(inside_count / allPoint_coords.length * 100);
}

// Helper function to validate the type of input
function numeric_validation(input_val){
    return parseInt(input_val);
}

// Helper function to check the coordinate of point inside a circle using Euclidean Distance
function is_within_euclidean_distance(x,y,centerX,centerY,circleDiameter){
    return Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2) <= Math.pow(circleDiameter,2);
}

// Enable button if the iteration is finished, otherwise disabled to prevent spamming request from user.
function toggleButton(target_button){
    if(target_button.disabled) {
        target_button.value = "Submit";
        return false;
    } else{
        target_button.value = "Loading";
        return true;
    }
}