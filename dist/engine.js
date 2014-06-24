define("engine",
  ["exports"],
  function(__exports__) {
    "use strict";
    // import Update from 'game/interfaces/update.js';
    // import Render from 'game/interfaces/render.js';

    var Engine = (function(){

      function Engine () {return this.frame = 0}

      Engine.prototype.frameBuilder = function () {var this$0 = this;
        var now;
        var dt   = 0;
        var last = this.timestamp();
        var step = 1/60;

        var update = function(step)  {return console.log( 'update, ts:', this$0.timestamp(), ', step:', step )};
        var render = function(dt)    {return console.log( 'render, ts:', this$0.timestamp(), ', delta:', dt )};

        var frame = function()  {
          this$0.incrementFrame();
          console.log('frame:',this$0.frame);

          now = this$0.timestamp();
          dt  = dt + Math.min(1, (now - last) / 1000);

          while (dt > step) {
            dt = dt - step;
            update(step);
          }

          render(dt);

          last = now;

          if (this$0.running) requestAnimationFrame(frame);
          else console.log('stopped');
        };

        return frame;
      }

      Engine.prototype.incrementFrame = function () {return this.frame = this.frame + 1};

      Engine.prototype.start = function () {
        this.running = true;
        requestAnimationFrame( this.frameBuilder() );
      }

      Engine.prototype.stop = function () {
        this.running = false;
        console.log('stopping...');
      }

      Engine.prototype.timestamp = function () {return window.performance.now()}

    ;return Engine;})();

    __exports__["default"] = Engine;
  });