var Screen = Backbone.View.extend({

  className: "screen",

  events: {
    "click a" : "sceneNav"
  },

  currentScene : 0,

  initialize: function() {
    console.log("hillo");
  },

  sceneNav: function(ev){
    ev.preventDefault();
    
    this.currentScene ++;

    var self = this;

    $("section").each(function(index, elem){
      elem = $(elem);
      if(index==self.currentScene){
        elem.addClass("active");
      }
      else{
        elem.removeClass("active");
      }
    })

    console.log("click");
  }

});

$(document).ready(function() {

  var screen = new Screen({
   el: $(".screen")
  });

});