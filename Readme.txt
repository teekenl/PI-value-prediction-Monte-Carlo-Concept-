
Documentation with guideline how to install and run.

Author: Ken Lau
Date: 15 Aug 2017

What I have learn?

1. The concept is interesting as it uses the number of points located within the circle to predict
   estimated area of circle and its PI value with given radius or diameter.

2. The randomize values of generated points is the key reason to determine the accuracy the estimated PI
   values.

3. The reason to affect the accuracy of PI values:
   The number of point to generate
   The number of time of iterations
   The size of circle: If the circle has 80% size or area of grid will produce the most accurate result.

Step to run

1. Open project from folder using any web editor

2. Run the index.html directly.


Unit test:

1. Short and simple unit testing for each helper function is available in unit_test.js

2. Press F12 to view the logs for the output of test results (Console Tab).


Things to note:

1. I was trying to run number of times of iteration for every point to get its average coordinate before
   it is being drawn to the canvas. However, the point is located in unreasonable way and it will decrease
   the accuracy of estimated PI value.

2. So, I decided to plot points for number of times of iteration instead of calculating the average
   coordinates of each point. However, the points on each iteration will be stacked on each other.
   For example, there will be 1000 point in the canvas as the number of iterations is 10 and number of points
   to generate is 100.

3. The alternative way is to proivde ONLY ONE visualization grid which is representation of point on
   final iteration as the question didn't mention whether it should includes all the point on each iteration
   or need to find average coordinate of each point and plot it accordingly. However, the estimated PI value
   is average result which is calculated based on the number of times of iteration and number of points to generate.

   Note: The estimated PI value which is goal of this exercise and it does not affected
         with adjustment I made.

4. Default value for each input if user does not enter value in one of text inputs:
   Grid Size: 1000
   Circle Diameter: 900
   Number of points to generate: 100
   Iterations: 10



