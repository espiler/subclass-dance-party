var Annihilate = function(top, left){
  Dancer.call(this, top, left);
  this.$node = $('<span class="annihilate"></span>');
  this.setPosition(500,500)
};

Annihilate.prototype = Object.create(Dancer.prototype);
Annihilate.prototype.constructor = Annihilate;

