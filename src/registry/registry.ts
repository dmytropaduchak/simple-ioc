export class Registry {
  static container = new Map();

  static set<T>(name: string, value: T): void {
    if (!this.container.has(name)) {
      this.container.set(name, value);
    }
  }

  static get<T>(name: string): T {
    return this.container.get(name);
  }

  set<T>(name: string, value: T): void {
    Registry.set(name, value);
  }

  get<T>(name: string): T {
    return Registry.get(name);
  }
}
