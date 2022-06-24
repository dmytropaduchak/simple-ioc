import { Registry } from './registry';
import { Constructor, Injection } from './registry.definition';

export const registry =
  (injections: Constructor[] | Injection[] | Registry[] = []) =>
  <T extends Constructor>(constructor: T) =>
    class extends constructor {
      constructor(...args: any[]) {
        injections?.forEach((injection) => {
          const name = injection?.inject
            ? injection?.inject?.name?.toLocaleLowerCase()
            : injection?.name?.toLocaleLowerCase();

          const value = injection?.useFactory
            ? new injection(injection?.useFactory())
            : injection?.value || new injection();

          Registry.set(name, value);
        });
        super(...args);
      }
    };
