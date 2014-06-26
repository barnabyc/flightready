class RenderInterface {
  constructor () {
    this.element = document.getElementById('thing');
  }

  progress (entities) {
    entities.forEach((ent) => {
      this.element.setAttribute('cx', ent.cx);
      this.element.setAttribute('cy', ent.cy);
    });
  }

}

export default RenderInterface;
