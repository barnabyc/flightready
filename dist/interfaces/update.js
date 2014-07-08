define("interfaces/update",
  ["exports"],
  function(__exports__) {
    "use strict";
    var UpdateInterface = (function(){
      function UpdateInterface (thing) {
        this.entities = [];

        this.coords = {x: 0, y: 0};
        this.listenForInput();

        if (thing) this.nextEntity = thing;
      }Object.defineProperties(UpdateInterface.prototype, {nextEntity: {"set": nextEntity$set$0, "configurable": true, "enumerable": true}});

      UpdateInterface.prototype.listenForInput = function () {var this$0 = this;
        document.addEventListener('keydown', function(ev)  {
          ev.preventDefault();
          var key = ev.keyCode;

          switch(key) {
            case KEY.UP:    this$0.coords.y = this$0.coords.y - 1; break;
            case KEY.DOWN:  this$0.coords.y = this$0.coords.y + 1; break;
            case KEY.LEFT:  this$0.coords.x = this$0.coords.x - 1; break;
            case KEY.RIGHT: this$0.coords.x = this$0.coords.x + 1; break;
          }
        });
      }

      UpdateInterface.prototype.update = function (coords) {var this$0 = this;
        this.entities.forEach(function(ent)  {
          console.log('updating coords of',ent,this$0.coords.x,this$0.coords.y);
          ent.cx = this$0.coords.x;
          ent.cy = this$0.coords.y;
        });
      }

      function nextEntity$set$0 (thing) {return this.entities.push( thing )};

    ;return UpdateInterface;})();

    __exports__["default"] = UpdateInterface;



    var KEY = {
      BACKSPACE: 8,
      TAB:       9,
      RETURN:   13,
      ESC:      27,
      SPACE:    32,
      PAGEUP:   33,
      PAGEDOWN: 34,
      END:      35,
      HOME:     36,
      LEFT:     37,
      UP:       38,
      RIGHT:    39,
      DOWN:     40,
      INSERT:   45,
      DELETE:   46,
      ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
      A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
      TILDA:    192
    };
  });