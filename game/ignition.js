import Engine from 'engine';

const engine = new Engine();

engine.start();

window.stopEngine = () => engine.stop();
