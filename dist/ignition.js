define("ignition",
  ["engine"],
  function(__dependency1__) {
    "use strict";
    var Engine = __dependency1__["default"];

    var engine = new Engine();

    engine.start();

    window.stopEngine = function()  {return engine.stop()};
  });