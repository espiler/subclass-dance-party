var FlyingBird = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="flyingBird"></span>');
  this.step();
  this.setPosition(top/4, left);
};

FlyingBird.prototype = Object.create(Dancer.prototype);
FlyingBird.prototype.constructor = FlyingBird;
FlyingBird.prototype.oldStep = Dancer.prototype.step;
FlyingBird.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // var styleSettings = {
  //   'animate': 'left + 250'
  // };
  // this.$node.css(styleSettings);
};
