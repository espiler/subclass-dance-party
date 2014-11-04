var SlowLorisDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slowLoris"></span>');
  this.step();
  this.setPosition(top, left);
};

SlowLorisDancer.prototype = Object.create(Dancer.prototype);
SlowLorisDancer.prototype.constructor = SlowLorisDancer;
SlowLorisDancer.prototype.oldStep = Dancer.prototype.step;
SlowLorisDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  var left = parseInt(this.$node.css("left")) + (Math.random() - 0.5)*20;
  var top = parseInt(this.$node.css("top")) + (Math.random() - 0.5)*20;
  var styleSettings = {
    top:  top,
    left:  left
    // transform: rotate(45deg)
  };
  this.$node.css(styleSettings);
};
