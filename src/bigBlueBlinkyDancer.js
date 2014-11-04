var BigBlueBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blueDancer"></span>');
};

BigBlueBlinkyDancer.prototype = Object.create(Dancer.prototype);
BigBlueBlinkyDancer.prototype.constructor = BigBlueBlinkyDancer;
BigBlueBlinkyDancer.prototype.oldStep = Dancer.prototype.step;
BigBlueBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  this.$node.toggle();
};
