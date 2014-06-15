define("engine",
  ["exports"],
  function(__exports__) {var this$0 = this;
    "use strict";
    // import Update from 'game/interfaces/update.js';
    // import Render from 'game/interfaces/render.js';

    var Engine = {

      frameBuilder: function()  {
        var now;
        var dt   = 0;
        var last = this$0.timestamp();
        var step = 1/60;

        var update = function(step)  {return console.log( this$0.timestamp(), 'update', step )};
        var render = function(dt)    {return console.log( this$0.timestamp(), 'render', dt )};

        var frame = function()  {
          now = this$0.timestamp();
          dt  = dt + Math.min(1, (now - last) / 1000);

          while (dt > step) {
            dt = dt - step;
            update(step);
          }

          render(dt);

          last = now;

          if (!this$0.stop) requestAnimationFrame(frame);
        };

        return frame;
      },

      start: function()  {return requestAnimationFrame( this$0.frameBuilder() )},

      stop: false,

      timestamp: function()  {return window.performance.now()}

    };

    __exports__["default"] = Engine;
  });