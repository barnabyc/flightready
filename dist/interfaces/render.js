define("interfaces/render",
  ["exports"],
  function(__exports__) {
    "use strict";
    var RenderInterface = (function(){
      function RenderInterface () {
        this.element = document.getElementById('thing');
      }

      RenderInterface.prototype.progress = function (entities) {var this$0 = this;
        entities.forEach(function(ent)  {
          this$0.element.setAttribute('cx', ent.cx);
          this$0.element.setAttribute('cy', ent.cy);
        });
      }

    ;return RenderInterface;})();

    __exports__["default"] = RenderInterface;
  });