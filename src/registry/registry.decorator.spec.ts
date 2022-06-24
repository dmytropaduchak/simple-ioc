import { createSandbox, SinonSandbox, SinonStub } from 'sinon';
import { Registry } from './registry';
import { registry } from './registry.decorator';
import { inject } from '../inject/inject.decorator';

@registry()
class App {
  @inject() registry: Registry;
}

describe('Root', () => {
  let sandbox: SinonSandbox;
  let app: App;

  beforeEach(async () => {
    sandbox = createSandbox();
    app = new App();
  });

  afterEach(async () => {
    sandbox.restore();
  });

  it('should be instance of class', async () => {
    expect(app).toBeInstanceOf(App);
  });

  it('should be exist property `registry` of class instance', () => {
    expect(app.registry).toBeInstanceOf(Registry);
  });
});
