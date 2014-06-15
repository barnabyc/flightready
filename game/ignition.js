import Engine from 'engine';

Engine.start();

setInterval(
  () => Engine.stop(),
  5 * 1000
);

