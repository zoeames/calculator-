'use strict';

function Calc (){}

Calc.add = function(x,y){
  return x + y;
};

Calc.sub = function(x,y){
  return x - y;
};


Calc.distance = function(a,b){
  var xlength = Math.pow((a.x-b.x),2);
  var ylength = Math.pow((a.y-b.y),2);
  return Math.sqrt(xlength+ylength);
};

Calc.line= function(p1,p2){
  var slope=  ((p2.y-p1.y)/(p2.x-p1.x)).toFixed(1);
  var ptslope = parseFloat(-p1.x*slope+p1.y).toFixed(1);
  if (ptslope<0){
  return slope+'x - '+Math.abs(ptslope);
  }else{
  return slope+'x + '+ptslope;
  }
};

Calc.trip = function(pts){
  var totalDist = 0;
  for(var i = 1; i < pts.length ; i++){
    totalDist += Calc.distance(pts[i-1], pts[i]);
  }
    return totalDist;
};

Calc.mean = function(nums){
  var sum = 0;
  for(var i = 0; i < nums.length ; i++){
    sum += nums[i];
  }
    return sum/nums.length;
};
module.exports = Calc;
