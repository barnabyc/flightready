import UpdateInterface from 'interfaces/update';
import RenderInterface from 'interfaces/render';

let thing = { cx: 0, cy: 0 };

const updateInterface = new UpdateInterface( thing );
const renderInterface = new RenderInterface();

class Engine {

  constructor () { this.frameCounter = 0; this.frameLogger = []; }

  frameBuilder () {
    let now;
    let dt   = 0;
    let last = this.timestamp();
    let step = 1/60; // fps

    const update = (step) => {
      // console.log( 'update, ts:', this.timestamp(), ', step:', step );
      updateInterface.update();
    }

    const render = (dt)   => {
      // console.log( 'render, ts:', this.timestamp(), ', delta:', dt );
      renderInterface.progress( updateInterface.entities );
    }

    const frame = () => {
      this.incrementFrameCounter(this.frameCounter / (last / 1000));

      now = this.timestamp();
      dt  = dt + Math.min(1, (now - last) / 1000);

      while (dt > step) {
        dt = dt - step;
        update(step);
      }

      render(dt);

      last = now;

      if (this.running) requestAnimationFrame(frame);
      else {
        console.log('stopped');
        console.log(
          'min:',Math.min(...this.frameLogger),
          'max:',Math.max(...this.frameLogger),
          'avg:',this.frameLogger.reduce((memo,val) => memo + val) / this.frameLogger.length
        );
      }
    };

    return frame;
  }

  incrementFrameCounter (log) {
    this.frameCounter = this.frameCounter + 1;
    this.frameLogger.push( log )
  }

  start () {
    this.running = true;
    console.log('starting...');
    requestAnimationFrame( this.frameBuilder() );
  }

  stop () {
    this.running = false;
    console.log('stopping...');
  }

  timestamp () window.performance.now()

}

export default Engine;
