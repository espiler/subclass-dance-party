// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function(){
      that.step();
    }, this.timeBetweenSteps);
  };

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.checkRelativePosition = function() {
  var that = this;
  setTimeout(function() {
    var updatedDancers = window.dancers;
    // console.log(that.$node.offset().left);
    for (var i=0; i<updatedDancers.length; i++) {
      if (updatedDancers[i] !== that && !(updatedDancers[i] instanceof FlyingBird)) {
        var distance = Math.sqrt(Math.pow(Math.abs(that.$node.offset().top-updatedDancers[i].$node.offset().top),2) +
                       Math.pow(Math.abs(that.$node.offset().left-updatedDancers[i].$node.offset().left),2));
        if (distance < 75) {
          var content = {
            content: "url(http://dumpfm.s3.amazonaws.com/images/20101022/1287793594232-dumpfm-FAUXreal-kevinexplosionlarge.gif)"
          };
          updatedDancers[i].$node.css(content).fadeOut(1200);

        }
      }
    }
    that.checkRelativePosition();
  }, 200)

}
