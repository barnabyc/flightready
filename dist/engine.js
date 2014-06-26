define("engine",
  ["interfaces/update","interfaces/render","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var UpdateInterface = __dependency1__["default"];
    var RenderInterface = __dependency2__["default"];

    var thing = { cx: 0, cy: 0 };

    var updateInterface = new UpdateInterface( thing );
    var renderInterface = new RenderInterface();

    var Engine = (function(){

      function Engine () { this.frameCounter = 0; this.frameLogger = []; }

      Engine.prototype.frameBuilder = function () {var this$0 = this;
        var now;
        var dt   = 0;
        var last = this.timestamp();
        var step = 1/60; // fps

        var update = function(step)  {
          // console.log( 'update, ts:', this.timestamp(), ', step:', step );
          updateInterface.update();
        }

        var render = function(dt)    {
          // console.log( 'render, ts:', this.timestamp(), ', delta:', dt );
          renderInterface.progress( updateInterface.entities );
        }

        var frame = function()  {function ITER$0(v,f){var $Symbol_iterator=typeof Symbol!=='undefined'&&Symbol.iterator||'@@iterator';if(v){if(Array.isArray(v))return f?v.slice():v;var i,r;if(typeof v==='object'&&typeof (f=v[$Symbol_iterator])==='function'){i=f.call(v);r=[];while((f=i['next']()),f['done']!==true)r.push(f['value']);return r;}}throw new Error(v+' is not iterable')};
          this$0.incrementFrameCounter(this$0.frameCounter / (last / 1000));

          now = this$0.timestamp();
          dt  = dt + Math.min(1, (now - last) / 1000);

          while (dt > step) {
            dt = dt - step;
            update(step);
          }

          render(dt);

          last = now;

          if (this$0.running) requestAnimationFrame(frame);
          else {
            console.log('stopped');
            console.log(
              'min:',Math.min.apply(Math, ITER$0(this$0.frameLogger)),
              'max:',Math.max.apply(Math, ITER$0(this$0.frameLogger)),
              'avg:',this$0.frameLogger.reduce(function(memo,val)  {return memo + val}) / this$0.frameLogger.length
            );
          }
        };

        return frame;
      }

      Engine.prototype.incrementFrameCounter = function (log) {
        this.frameCounter = this.frameCounter + 1;
        this.frameLogger.push( log )
      }

      Engine.prototype.start = function () {
        this.running = true;
        console.log('starting...');
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