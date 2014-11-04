var StarfishSpinner = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="starFish"></span>');
  this.step();
  this.setPosition(top, left);
  this.deg = 0;
};

StarfishSpinner.prototype = Object.create(Dancer.prototype);
StarfishSpinner.prototype.constructor = StarfishSpinner;
StarfishSpinner.prototype.oldStep = Dancer.prototype.step;
StarfishSpinner.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  var left = parseInt(this.$node.css("left")) + (Math.random() - 0.5)*20;
  var top = parseInt(this.$node.css("top")) + (Math.random() - 0.5)*20;
  this.deg = (this.deg+10)%360
  var styleSettings = {
    'transform': 'rotate('+this.deg+'deg)'
  };
  this.$node.css(styleSettings);
};
