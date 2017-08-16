/**
 * Simple Unit Test File to determine the accuracy of helper function in circle.js.
 * Have fun in coding.
 *
 * Author : TeeKen Lau
 * Date: 15 Aug 2017
 *
 */

// Main Function to run unit testing for each helper function
function run_unit_test(){
    console.log("Simple unit testing to validate the accuracy helper function in circle.js");

    // The testing data value to validate the helper function
    var random_count = 100, // To test randomize function for number of times
        coords = [
            {
                x: 700,
                y: 1200
            },
            {
                x: 700,
                y: 900
            },
            {
                x: 1000,
                y: 900
            },
            {
                x: 500,
                y: 500
            }
        ],
        centerX = 500,
        centerY = 500,
        circleRadius = 450,
        test_button = document.createElement("BUTTON"),      // Create a <button> element
        text_button = document.createTextNode("Submit");       // Create a text node
        test_button.appendChild(text_button);
        test_button.disabled = true;

    // Running test
    // Test randomzie function for 100 times
    while(random_count<100) {
        var random_values = randomize(1000);
        if(!(random_values>=0 && random_values<=1000)){
            console.log('Randomize function not passed');
            break;
        }
        random_count++;
    }

    // To check how many time of randomize function has passed.
    if(random_count === 100) {
        console.log('Randomize function passed ' + random_count + " times");
    }
    if(50 === test_find_point_within_circle(circleRadius,centerX,centerY,coords)){
        console.log("Find point within circle test passed");
    }
    if(test_numeric_validation(20)){
        console.log("Numeric validation test passed");
    }
    if(!test_is_within_euclidean_distance(coords[0].x,coords[0].y,centerX,centerY,circleRadius)) {
        console.log("Is within euclidean distance test passed (Not within circle)");
    }
    if(test_is_within_euclidean_distance(coords[3].x,coords[3].y,centerX,centerY,circleRadius)) {
        console.log("Is within euclidean distance test passed (Within circle)");
    }
    if(!test_toggleButton(test_button)){
        console.log("Toggle button test passed");
    }
}


// Unit test for randomize function
function test_randomize_value(gridSize) {
    return randomize(gridSize);
}

// Unit Test for find point within circle function
function test_find_point_within_circle(circleRadius,centerX,centerY,coords){
    return find_point_within_circle(circleRadius,centerX,centerY,coords);
}

// Unit test for numeric validation function
function test_numeric_validation(input_value){
    return numeric_validation(input_value);
}

// Unit test for is_within_euclidean_distance function
function test_is_within_euclidean_distance(client_x,client_y,centerX,centerY,circleRadius){
    return is_within_euclidean_distance(client_x,client_y,centerX,centerY,circleRadius);
}

// Unit test for toggleButton function
function test_toggleButton(test_button){
    return toggleButton(test_button);
}
