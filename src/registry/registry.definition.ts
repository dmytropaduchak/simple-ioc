export interface Constructor {
  new (...args: any[]): {};
}

export type Injection<T = JSON | unknown> =
  | {
      name: string;
      value: T;
    }
  | {
      inject: Constructor;
      useFactory: () => T;
    };
