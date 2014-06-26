define("interfaces/update",
  ["exports"],
  function(__exports__) {
    "use strict";
    var UpdateInterface = (function(){
      function UpdateInterface (thing) {
        this.entities = [];

        if (thing) this.nextEntity = thing;
      }Object.defineProperties(UpdateInterface.prototype, {nextEntity: {"set": nextEntity$set$0, "configurable": true, "enumerable": true}});

      UpdateInterface.prototype.update = function () {
        this.entities.forEach(function(ent)  {
          ent.cx = ent.cx + 2;
          ent.cy = ent.cy + 2;
        });
      }

      function nextEntity$set$0 (thing) {return this.entities.push( thing )};

    ;return UpdateInterface;})();

    __exports__["default"] = UpdateInterface;
  });