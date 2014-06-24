import Engine from 'engine';

const engine = new Engine();

engine.start();

setInterval(
  () => engine.stop(),
  5 * 1000
);

