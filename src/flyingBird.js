var FlyingBird = function(top, left){
  Dancer.call(this, top);
  this.$node = $('<span class="flyingBird"></span>');
  this.step();
  this.setPosition(top/4);
  this.timeBetweenSteps = 3500;
  this.scale = -1;
};

FlyingBird.prototype = Object.create(Dancer.prototype);
FlyingBird.prototype.setPosition = function(top){
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
