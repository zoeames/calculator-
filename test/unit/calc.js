// test file

/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc.js');

describe('Calc', function(){
  describe('.add',function(){
    it('should add two numbers',function(){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.sub',function(){
    it('should subtract two numbers',function(){
      var sub = Calc.sub(5,3);
      expect(sub).to.equal(2);
    });
  });

  describe('.distance',function(){
    it('should calculate the distance between two points',function(){
      var dist = Calc.distance({x:5, y:3}, {x:8, y:7});
      console.log(Calc.distance.xlengthxlength);
      expect(dist).to.equal(5);
    });
  });
  describe('.line',function(){
    it('should calculate the equaiton of a negative line',function(){
      var line = Calc.line({x:2, y:3}, {x:1, y:4});
      expect(line).to.equal('-1.0x + 5.0');
    });
  });

  describe('.line',function(){
    it('should calculate the equaiton of a positive line',function(){
      var line = Calc.line({x:3, y:4}, {x:7, y:12});
      expect(line).to.equal('2.0x - 2');
      expect(line).to.be.a('string');
    });
  });
  describe('.trip',function(){
    it('should calculate the total distance on a trip',function(){
      var totalDist = Calc.trip([{x:1, y:4}, {x:5,y:2},{x:4, y:8},{x:8,y:12}]);
      expect(totalDist).to.be.closeTo(16.21,0.01);
    });
  });

  describe('.mean',function(){
    it('should calculate the average of an array of numbers',function(){
      var average = Calc.mean([1,2,3,4,5]);
      expect(average).to.equal(3);
    });
  });

});
