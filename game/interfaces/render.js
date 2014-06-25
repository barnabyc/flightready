// import React from 'lib/react';

class RenderInterface {
  constructor () {
    this.cx = 0;
    this.cy = 0;
    this.element = document.getElementById('thing');
  }

  progress () {
    this.element.setAttribute('cx', this.cx);
    this.element.setAttribute('cy', this.cy);

    this.cx = this.cx + 2;
    this.cy = this.cy + 2;
  }

}

export default RenderInterface;
