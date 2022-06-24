import { createSandbox, SinonSandbox, SinonSpy } from 'sinon';
import { Registry } from './registry';

describe('Root', () => {
  let sandbox: SinonSandbox;
  let mapSet: SinonSpy;
  let mapGet: SinonSpy;
  let mapHas: SinonSpy;
  let registry: Registry;

  beforeEach(async () => {
    sandbox = createSandbox();
    mapSet = sandbox.spy(Map.prototype, 'set');
    mapGet = sandbox.spy(Map.prototype, 'get');
    mapHas = sandbox.spy(Map.prototype, 'has');
    registry = new Registry();
  });

  afterEach(async () => {
    sandbox.restore();
  });

  it('should be instance of class', async () => {
    expect(registry).toBeInstanceOf(Registry);
  });

  it('should be use `Map` method `get`', () => {
    registry.get('test');
    expect(mapGet.callCount).toEqual(1);
  });

  it('should be use `Map` methods `set` and `has`', () => {
    registry.set('test', 1);
    registry.set('test', 1);
    expect(mapSet.callCount).toEqual(1);
    expect(mapHas.callCount).toEqual(2);
  });
});
