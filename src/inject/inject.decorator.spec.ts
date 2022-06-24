import { createSandbox, SinonSandbox } from 'sinon';
import { Registry } from '../registry/registry';
import { registry } from '../registry/registry.decorator';
import { inject } from './inject.decorator';

class C {
  @inject() public readonly registry: Registry;
}

class B {
  @inject() public readonly c: C;
}

class A {
  @inject() public readonly b: B;
}

@registry([A, B, C])
class App {
  @inject() public readonly a: A;
}

describe('Inject', () => {
  let sandbox: SinonSandbox;
  let app: App;

  beforeEach(async () => {
    sandbox = createSandbox();
    app = new App();
  });

  afterEach(async () => {
    sandbox.restore();
  });

  it('should be instance of class', () => {
    expect(app).toBeInstanceOf(App);
  });

  it('should be exist property `a` of class instance', () => {
    expect(app.a).toBeInstanceOf(A);
  });

  it('should be exist property `b` of class instance', () => {
    expect(app.a.b).toBeInstanceOf(B);
  });

  it('should be exist property `c` of class instance', () => {
    expect(app.a.b.c).toBeInstanceOf(C);
  });

  it('should be exist property `registry` of class instance', () => {
    expect(app.a.b.c.registry).toBeInstanceOf(Registry);
  });
});
