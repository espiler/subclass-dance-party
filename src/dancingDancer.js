var DancingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancingDancer fader"></span>');
  this.step();
  this.setPosition(top, left);
};

DancingDancer.prototype = Object.create(Dancer.prototype);
DancingDancer.prototype.constructor = DancingDancer;
DancingDancer.prototype.oldStep = Dancer.prototype.step;
DancingDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  var left = parseInt(this.$node.css("left")) + (Math.random() - 0.5)*20;
  var top = parseInt(this.$node.css("top")) + (Math.random() - 0.5)*20;
  var styleSettings = {
    top:  top,
    left:  left
  };
  this.$node.css(styleSettings);
};
