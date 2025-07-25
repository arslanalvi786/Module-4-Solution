(function (window) {
  var goodbyeSpeaker = {};

  goodbyeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
