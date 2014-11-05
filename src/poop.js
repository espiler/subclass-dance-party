var Poop = function(top, left){
  Dancer.call(this, top, left);
  this.$node = $('<span class="poop"></span>');
  this.setPosition(top, left);
  this.checkRelativePosition();
};

Poop.prototype = Object.create(Dancer.prototype);
Poop.prototype.constructor = Poop;
