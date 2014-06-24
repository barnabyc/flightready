// import Update from 'game/interfaces/update.js';
// import Render from 'game/interfaces/render.js';

class Engine {

  constructor () this.frame = 0

  frameBuilder () {
    let now;
    let dt   = 0;
    let last = this.timestamp();
    let step = 1/60;

    let update = (step) => console.log( 'update, ts:', this.timestamp(), ', step:', step );
    let render = (dt)   => console.log( 'render, ts:', this.timestamp(), ', delta:', dt );

    let frame = () => {
      this.incrementFrame();
      console.log('frame:',this.frame);

      now = this.timestamp();
      dt  = dt + Math.min(1, (now - last) / 1000);

      while (dt > step) {
        dt = dt - step;
        update(step);
      }

      render(dt);

      last = now;

      if (this.running) requestAnimationFrame(frame);
      else console.log('stopped');
    };

    return frame;
  }

  incrementFrame () this.frame = this.frame + 1;

  start () {
    this.running = true;
    requestAnimationFrame( this.frameBuilder() );
  }

  stop () {
    this.running = false;
    console.log('stopping...');
  }

  timestamp () window.performance.now()

}

export default Engine;
