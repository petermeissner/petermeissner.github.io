---
author: peter meißner
title: Welcome
layout: default
---



## *Web Scraping With R*

*Interested in web scraping and web data collection? I will teach a course about web scraping with R at the ECPR Winter School of Methods and Techniques again - 29 February - 3 March 2016 . [Have a look here ...](http://www.ecpr.eu/Events/EventDetails.aspx?EventID=103)*


# About Me

Hallo, I am Peter Meißner, data enthusiast, R-lover, dog walker, toddler chaser. <br>
I live and work in Konstanz, Germany.

For a living I gather data, make it behave, model it and take care that its secrets appeal to the observers eyes. My tool set is heavily R-centric but involves everything that comes handy in getting the job done.


<div style="text-align:center;">

<img width="200" src="images/peter_meissner_ecpr.jpg">
&nbsp; <img src="https://maps.googleapis.com/maps/api/staticmap?center=50.368608, 11&zoom=4&size=200x267&maptype=terrain&markers=color:blue%7Clabel:Konstanz%7CKonstanz&style=feature:road|visibility:off&style=feature:landscape|visibility:off&style=feature:poi|visibility:off">
<svg width="200" height="267" style="border: solid 1px black"></svg>

<script src="javascripts/d3.min.js"></script>
    <script>
    var letters = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,"q","w","e","r","t","z","u","i","o","p","ü","ä","a","s","d","f","g","h","j","k","l","ö","ä","<","y","x","c","v","b","n","m"] ;
    var colors = ["#A7C8FD", "#0777CE","#FFA500","#6B8F68"] ;
    for (i = 0; i < 100; i++) { 
        d3.select("svg")
          .append( "text" )
            .attr( "x", Math.random()*2+100 )
            .attr( "y", Math.random()*2+132 )
            .text( letters[Math.round(Math.random()*81)] )
            .style("fill", colors[Math.round(Math.random()*3)] ) ;
    }
    </script>
    <script>
      var text2 = d3.selectAll("text")
.transition()
        .duration(6000)
        .attr( "x", function(i){return Math.random()*200} )
        .attr( "y", function(i){return Math.random()*267} )
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
.transition()
        .duration(8000)
        .attr( "x", function(i){return Math.random()*200} )
        .attr( "y", function(i){return Math.random()*267} )
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
.transition()
        .duration(7000)
        .attr( "x", function(i){return Math.random()*200} )
        .style("fill", colors[Math.round(Math.random()*3)] ) 
.transition()
        .duration(4000)
        .style("fill", colors[Math.round(Math.random()*3)] ) 
.transition()
        .duration(4000)
        .attr( "x", function(i){return Math.random()*200} )
        .attr( "y", function(i){return Math.random()*267} ) 
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
.transition()
        .duration(4000)
        .attr( "x", 100 )
        .attr( "y", function(i){return Math.random()*267} ) 
.transition()
        .duration(4000)
        .attr( "x", function(i){return Math.random()*200} )
        .attr( "y", 130 )         
.transition()
        .duration(4000)
        .attr( "x", function(d,i){return i*2.00} )
        .attr( "y", function(d,i){return i*2.67} ) 
.transition()
        .duration(10000)
        .attr( "x", function(i){return Math.random()*200} )
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} )  
.transition()
        .duration(10000)
        .attr( "x", function(i){return Math.random()*200} )
        .style("fill", colors[Math.round(Math.random()*3)] ) 
.transition()
        .duration(10000)
        .attr( "y", function(i){return Math.random()*267} )         
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
.transition()
        .duration(10000)
        .attr( "x", function(i){return Math.random()*200} )
        .style("fill", colors[Math.round(Math.random()*3)] ) 
.transition()
        .duration(10000)
        .attr( "y", function(i){return Math.random()*267} )         
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
.transition()
        .duration(10000)
        .attr( "x", function(i){return Math.random()*200} )
        .style("fill", colors[Math.round(Math.random()*3)] ) 
.transition()
        .duration(10000)
        .attr( "y", function(i){return Math.random()*267} )         
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
        .transition()
        .duration(10000)
        .attr( "y", function(i){return Math.random()*267} )         
        .style("fill", colors[Math.round(Math.random()*3)] ) 
        .text(":-)")
.transition()
        .duration(10000)
        .attr( "x", function(i){return Math.random()*200} )
        .style("fill", function(i){ return colors[Math.round(Math.random()*3)]} ) 
        .text( function(d){  return letters[Math.round(Math.random()*81)] } )
        ;
    </script>


</div>


