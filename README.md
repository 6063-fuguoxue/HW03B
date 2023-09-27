# HW03B Notes

This assignment is about creating non-overlapping circles of different sizes on the canvas. 

It was easy to think of the logic but was a bit hard to implement. My strategy is to first randomly generate a set of "proposals" of circles, then draw each of them on canvas if it doesn't overlap with all the previous circles drawn on the canvas. 

It is easy to check if a circle overlaps with another: let the two circles' radiuses be **r1** and **r2**, and let the distance between their center be **d**. If (**r1** + **r2**) > **d**, then the two circles overlap with each other. Otherwise, the two circles are not overlapped. 

![hw03b](./hw03b.jpg)

## Plan
Below are some of the tricks I used: 
<ol>
  <li>I packed the x-position, y-position, and radius of a circle in an object. Therefore, each randomly generated circle proposal can be represented as a <code>circle</code> object. </li>
  <li>To store all the qualified circle proposals (the <code>circle</code> objects), I created a <code>circles</code> array. </li>
  <li>For each circle after the first one, check if it overlaps with any of the previous ones. If no overlap is detected, push this proposal to the <code>circles</code> array. The code checks overlaps by calculating if the sum of two circles' radiuses is less than the distance between their centers. </li>
  <li>Lastly, draw all the circles in the <code>circles</code>. </li>
</ol>

## Difficulties
When working on this assignment, I initially found it hard to store all the information of all the qualified circle proposals, as JavaScript doesn't have the tuple data type. However, upon searching online, I learned that I can use object type as an alternative. 

There were several times I became confused about when to draw the circles. If the <code>ellipse</code> function is inside the for loop of circle proposals, the program will just draw all the circles randomly generated regardless of their overlapping conditions. Therefore, the drawing process should come after the for loop. 

I also created an <code>overlapping</code> boolean inside the for loop to facilitate the decision process of qualified circle proposals. It will be initialized as false for every newly generated circle to check. 

## Findings
Upon changing the preset number of proposals, I found that the bigger the number, the more circles are drawn on the canvas, and the less blank space remains. 

I also noted that the number of circles drawn will always be less than or equal to the number of proposals I set. This is because some circle proposals are discarded due to overlaps. If there should be a fixed number of circles drawn on the canvas, a while loop is a better choice for the circle proposal checking. 
