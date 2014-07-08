class UpdateInterface {
  constructor (thing) {
    this.entities = [];

    this.coords = {x: 0, y: 0};
    this.listenForInput();

    if (thing) this.nextEntity = thing;
  }

  listenForInput () {
    document.addEventListener('keydown', (ev) => {
      ev.preventDefault();
      const key = ev.keyCode;

      switch(key) {
        case KEY.UP:    this.coords.y = this.coords.y - 1; break;
        case KEY.DOWN:  this.coords.y = this.coords.y + 1; break;
        case KEY.LEFT:  this.coords.x = this.coords.x - 1; break;
        case KEY.RIGHT: this.coords.x = this.coords.x + 1; break;
      }
    });
  }

  update (coords) {
    this.entities.forEach((ent) => {
      console.log('updating coords of',ent,this.coords.x,this.coords.y);
      ent.cx = this.coords.x;
      ent.cy = this.coords.y;
    });
  }

  set nextEntity (thing) this.entities.push( thing );

}

export default UpdateInterface;



const KEY = {
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
