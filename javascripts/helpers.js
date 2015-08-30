var colors_ = ["#A7C8FD", "#0777CE","#FFA500","#6B8F68"] ;

random_letters = function(n){
  if ( n === undefined ) var n = 1;
  var letters = [0,1,2,3,4,5,6,7,8,9] /* [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,"q","w","e","r","t","z","u","i","o","p","a","s","d","f","g","h","j","k","l","y","x","c","v","b","n","m"] */;
  var res = [] ;
  for (var i = 0; i < n; i++) {
    res.push( letters[Math.round(Math.random()*(letters.length-1))] )
  }
  return res ;
}

random_colors = function(n){
  if ( n === undefined ) var n = 1;
  var colors = colors_ ;
  var res = [] ;
  for (var i = 0; i < n; i++) {
    res.push( colors[Math.round(Math.random()*(colors.length-1))] )
  }
  return res ;
}

function endall(transition, callback) {
 if (transition.size() === 0) { callback() }
 var n = 0;
 transition
     .each(function() { ++n; })
     .each("end", function() { if (!--n) callback.apply(this, arguments); });
}

which_color = function(col) {
  for (var i = 0; i < colors_.length; i++) {
    if( colors_[i] == col.toUpperCase() ){return i ; } ;
  }
}

d3_rgb_to_hex = function(rgb){
  return eval("d3." + rgb + ".toString().toUpperCase()") ;
}
