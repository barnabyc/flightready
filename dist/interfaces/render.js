define("interfaces/render",
  ["exports"],
  function(__exports__) {
    "use strict";
    // import React from 'lib/react';

    var RenderInterface = (function(){
      function RenderInterface () {
        this.cx = 0;
        this.cy = 0;
        this.element = document.getElementById('thing');
      }

      RenderInterface.prototype.progress = function () {
        this.element.setAttribute('cx', this.cx);
        this.element.setAttribute('cy', this.cy);

        this.cx = this.cx + 2;
        this.cy = this.cy + 2;
      }

    ;return RenderInterface;})();

    __exports__["default"] = RenderInterface;
  });