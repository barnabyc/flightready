define("ignition",
  ["engine"],
  function(__dependency1__) {
    "use strict";
    var Engine = __dependency1__["default"];

    var engine = new Engine();

    engine.start();

    setInterval(
      function()  {return engine.stop()},
      5 * 1000
    );
  });