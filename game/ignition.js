import Engine from 'engine';

const engine = new Engine();

engine.start();

setTimeout(
  () => engine.stop(),
  2 * 1000 // 2 seconds
);

