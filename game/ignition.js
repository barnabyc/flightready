import Engine from 'engine';

const engine = new Engine();

engine.start();

setTimeout(
  () => engine.stop(),
  5 * 1000
);

