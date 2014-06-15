// import Update from 'game/interfaces/update.js';
// import Render from 'game/interfaces/render.js';

class Engine {

  frameBuilder () {
    let now;
    let dt   = 0;
    let last = this.timestamp();
    let step = 1/60;

    let update = (step) => console.log( this.timestamp(), 'update', step );
    let render = (dt)   => console.log( this.timestamp(), 'render', dt );

    let frame = () => {
      now = this.timestamp();
      dt  = dt + Math.min(1, (now - last) / 1000);

      while (dt > step) {
        dt = dt - step;
        update(step);
      }

      render(dt);

      last = now;

      if (!this.stop) requestAnimationFrame(frame);
    };

    return frame;
  }

  start () requestAnimationFrame( this.frameBuilder() )

  stop () this.stop = false

  timestamp () window.performance.now()

}

export default Engine;
