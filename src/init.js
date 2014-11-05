$(document).ready(function(){
  window.dancers = [];
  window.birds = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    if (dancerMakerFunctionName === "Random") {
        var allMakersFunctions = ['FlyingBird', 'StarfishSpinner', 'SlowLorisDancer',
          'DancingDancer', 'BigBlueBlinkyDancer', 'BlinkyDancer']
        dancerMakerFunctionName = allMakersFunctions[Math.floor(Math.random()
          *allMakersFunctions.length)]
    }
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    if (dancer instanceof FlyingBird){
      birds.push(dancer);
    }
    dancers.push(dancer);

    if (dancer instanceof Annihilate){
      setTimeout(dancer.$node.remove.bind(dancer.$node), 8000);
      var content = {
            content: "url(http://dumpfm.s3.amazonaws.com/images/20101022/1287793594232-dumpfm-FAUXreal-kevinexplosionlarge.gif)"
          };
      for (var i = 0; i < dancers.length; i++){
        var randomTime = Math.random()*8000;
        if (!(dancers[i] instanceof Annihilate)) {
          var dead = dancers[i].$node;
          setTimeout(function(){
            dead.css(content).fadeOut(1200);
            setTimeout(dead.remove.bind(dead), 1500);
          }, 2000);
        }
      }
    }
  });


  $(".lineUpButton").on("click", function(event){

    for (var i=0; i<dancers.length; i++) {
      dancers[i].$node.animate({
        left: '0%'
      },
      1000,
      function(){
        for (var j=0; j<dancers.length; j++) {
          if (dancers[j] instanceof StarfishSpinner){
            dancers[j].$node.animate({
            top: '20%'
            });
          }
          if (dancers[j] instanceof SlowLorisDancer){
            dancers[j].$node.animate({
            top: '50%'
            });
          }
          if (dancers[j] instanceof FlyingBird){
            dancers[j].$node.animate({
            top: '10%'
            });
          }
        }
      });
    }
  });

  $(".seagullAttack").on("click", function(event){
    var shooterGull = window.birds[Math.floor(Math.random()*window.birds.length)];
    console.log(shooterGull);
    var top = shooterGull.$node.offset().top;
    var left = shooterGull.$node.offset().left;
    var poop = new Poop(top, left);
    $('body').append(poop.$node)
    setTimeout(poop.$node.remove.bind(poop.$node), 10000);
  })

});

$("body").on("click", ".fader", function(event){
  console.log($(this).offset().top);
  $(this).animate({
      height: '0%'
  }, 3000
  )
});



