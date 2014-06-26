define("ignition",
  ["engine"],
  function(__dependency1__) {
    "use strict";
    var Engine = __dependency1__["default"];

    var engine = new Engine();

    engine.start();

    setTimeout(
      function()  {return engine.stop()},
      2 * 1000 // 2 seconds
    );
  });