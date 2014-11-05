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
  })

});

$("body").on("click", ".fader", function(event){
  console.log($(this).offset().top);
  $(this).animate({
      height: '0%'
  }, 3000
  )
});





