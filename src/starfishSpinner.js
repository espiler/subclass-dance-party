var StarfishSpinner = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="starFish fader"></span>');
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

};
