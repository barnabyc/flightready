define("ignition",
  ["engine"],
  function(__dependency1__) {
    "use strict";
    var Engine = __dependency1__["default"];

    Engine.start();

    setInterval(
      function()  {return Engine.stop = true},
      5 * 1000
    );
  });