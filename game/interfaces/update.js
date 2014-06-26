class UpdateInterface {
  constructor (thing) {
    this.entities = [];

    if (thing) this.nextEntity = thing;
  }

  update () {
    this.entities.forEach((ent) => {
      ent.cx = ent.cx + 2;
      ent.cy = ent.cy + 2;
    });
  }

  set nextEntity (thing) this.entities.push( thing );

}

export default UpdateInterface;
