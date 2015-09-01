make_random_dot_of_data = function(n, xstart, ystart, dispersion, double)
{
  // create data
  for (i = 0; i < n; i++) {
    var x     = Math.random() * dispersion + xstart ;
    var y     = Math.random() * dispersion + ystart ;
    var text  = random_letters() ;
    var color = random_colors()  ;
      d3.select("svg")
        .append( "text" )
          .attr( "x",     x )
          .attr( "y",     y )
          .text(          text )
          .style("fill",  color ) ;
    if ( double ){
      d3.select("svg")
        .append( "text" )
          .attr( "x",     x )
          .attr( "y",     y )
          .text(          text )
          .style("fill",  color ) ;
    }
  }
}

text_expand = function(){
  d3.selectAll("text")
    .transition()
    .duration(2000)
    .attr( "x", function(i){return Math.random()*200} )
    .attr( "y", function(i){return Math.random()*267} )
    .style("fill", function(i){ return random_colors() } )
}

barchart = function (){
  // options
  var col_index = [] ;
  var col_raw = [];
  var DURATION = 2000 ;
  var DELAY    = 50 ;
  var DELAY_LEGEND    = 2*DURATION ;
  var DELAY_CIRCLES   = 3*DURATION ;
  var bars_num  = [0,0,0,0,0,0,0,0,0,0] ;
  var bars_col  = [0,0,0,0] ;
  var col_num   = [] ;

  // table values
  for (var i = 0; i < bars_num.length; i++) {
    col_num[i] = [];
    for (var j = 0; j < bars_col.length ; j++) {
      col_num[i][j] = 0 ;
    }
  }


  var yoffset = 15;
  var ydist   = 15;

  var texts = d3.selectAll( document.getElementsByTagName("text") )[0] ;

  for (i = 0; i < 100; i++) {
    // x bars
    var t = texts[i];
    content = t.textContent;
    bars_num[content]++;
    col_num[content][which_color( d3_rgb_to_hex(t.style.fill) )]++ ;
    d3.select(t).transition().duration(DURATION).delay(DELAY*i)
      .attr("x", bars_num[content] * 2 + 15 )
      .attr("y", content * ydist + yoffset )
      .text("|")
      .style("fill", "steelblue")
      .style("font-size", "85%")
      ;
  // y bars
    var t = texts[i+100];
    var content = which_color( d3_rgb_to_hex(t.style.fill) ) ;
    bars_col[content]++;
    d3.select(t).transition().duration(DURATION).delay(DELAY*i)
      .attr("x", content * 30 + 80 )
      .attr("y", bars_col[content] * (-2) + 250 )
      .text("–")
      .style("font-size", "105%")
      ;
  }
  // legend y-axe
  for (var i = 0; i < bars_num.length; i++) {
    d3.select("svg").append("text")
      .attr("x",3).attr("y", 0 ).text(i).style("fill", "steelblue").style("font-size", "85%")
      .transition().duration(DURATION).delay(DELAY_LEGEND).attr("x",3).attr("y", i * ydist + yoffset )
      .attr("class", "delete")
    ;
  }
  // legend y-axe
  for (var i = 0; i < bars_col.length; i++) {
    d3.select("svg").append("rect")
      .attr("class", "delete")
      .attr("width", 10).attr("height", 10)
      .attr("x",-300).attr("y", -100 )
      .style("font-size", "105%").style("fill", colors_[i])
      .transition()
        .duration(DURATION).delay(DELAY_LEGEND)
        .attr("x", i *  30 + 80 )
        .attr("y", 255 )
    ;
  }
  // circles
  for (var i = 0; i < bars_num.length; i++) {
    for (var j = 0; j < bars_col.length ; j++) {
    d3.select("svg")
      .append("circle")
        .attr("class", "delete")
        .attr("cx", 85 + 30 * j )
        .attr("cy", i* ydist + yoffset )
        .attr("r", 0.1)
        .style("fill", "steelblue")
      .transition().duration(DURATION).delay(DELAY_CIRCLES + i*51 + j*72)
        .attr("r", col_num[i][j] )
        .style("fill", colors_[j])
    ;
    }
  }
}


remove_legend = function(){
  d3.selectAll(".delete").remove() ;
}

reshuffle_data = function(){
  for (var i = 0; i < 100.length; i++) {
    100[i]
  }
  d3.selectAll("text").transition().transition().delay(function(d,i){return 200 * i;}).duration(4000)
    .attr("x", function(d){return Math.random()*200; })
    .attr("y", function(d){return Math.random()*267 ;} )
    .text(function(d){return random_letters() ;} )
    .style("fill", function(d){return random_colors() ;} )
  ;
}
