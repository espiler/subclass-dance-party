var SlowLorisDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slowLoris fader"></span>');
  this.step();
  this.setPosition(top, left);
  this.scale = 1
};

SlowLorisDancer.prototype = Object.create(Dancer.prototype);
SlowLorisDancer.prototype.constructor = SlowLorisDancer;
SlowLorisDancer.prototype.oldStep = Dancer.prototype.step;
SlowLorisDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // var left = parseInt(this.$node.css("left")) + (Math.random() - 0.5)*20;
  // var top = parseInt(this.$node.css("top")) + (Math.random() - 0.5)*20;
  this.scale === 1 ? this.scale = -1 : this.scale = 1;
  var styleSettings = {
    'transform': 'scaleX('+this.scale+')'
  };
  this.$node.css(styleSettings);
};
