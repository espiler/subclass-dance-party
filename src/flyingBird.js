var FlyingBird = function(top, left){
  Dancer.call(this, top);
  this.$node = $('<span class="flyingBird fader"></span>');
  this.step();
  this.setPositionAnimate(top/4);
  this.timeBetweenSteps = 3500;
  this.scale = -1;
  this.checkRelativePosition();
};

FlyingBird.prototype = Object.create(Dancer.prototype);
FlyingBird.prototype.setPositionAnimate = function(top){
  var styleSettings = {
    top: top,
  };
  this.$node.css(styleSettings);

};
FlyingBird.prototype.constructor = FlyingBird;
FlyingBird.prototype.oldStep = Dancer.prototype.step;
FlyingBird.prototype.step = function(){
  this.oldStep();
  this.scale === 1 ? this.scale = -1 : this.scale = 1;
  var styleSettings = {
    'transform': 'scaleX('+this.scale+')'
  };
  this.$node.css(styleSettings);
};
