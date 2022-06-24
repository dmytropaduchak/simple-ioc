import { Registry } from '../registry/registry';
import { Options } from './inject.definition';

export const inject =
  (options?: Options) => (target: any, propertyName: string | symbol) => {
    Registry.set(Registry.name.toLocaleLowerCase(), new Registry());

    const get = () => Registry.get(options?.name || propertyName.toString());
    Object.defineProperty(target, propertyName, { get });
  };
