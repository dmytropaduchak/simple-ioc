# 🇺🇦 HELP UKRAINE

GOOD EVENING WE ARE FROM UKRAINE.

We fight for democratic values, for freedom, for our future. We need your support. 
There are dozen ways to help us, [JUST DO IT](https://github.com/pinchukdiana/help-ua#-%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82%D0%B8--chat-bots).

[![Build Status](https://travis-ci.org/dmytropaduchak/simple-ioc.svg?branch=master)](https://travis-ci.org/dmytropaduchak/simple-ioc)
[![Coverage Status](https://coveralls.io/repos/github/dmytropaduchak/simple-ioc/badge.svg?branch=master)](https://coveralls.io/github/dmytropaduchak/simple-ioc?branch=master)
[![NPM Version](https://badge.fury.io/js/simple-ioc.svg)](http://badge.fury.io/js/simple-ioc?type=dev)

# Simple IoC

A simple inversion of control (IoC) library. This is a lightweight annotation-based dependency injection container for typescript.

## Installation 

You can install this package using NPM:

```sh
npm i @dmytropaduchak/simple-ioc --save
```

## How use

Example with class injection:

```typescript
import { Registry, registry, inject } from '@dmytropaduchak/simple-ioc';

class B {}

class A {
  @inject() private readonly b: B;
}

@registry([A, B])
class App {
  @inject() private readonly a: A;
  @inject() private readonly registry: Registry;
}
```

Example with raw object injection:

```typescript
import { Registry, registry, inject } from '@dmytropaduchak/simple-ioc';

const name = 'env';
const value = process.env;

@registry([{ name, value }])
class App {
  @inject() private readonly env
}
```

Example with custom name injection:

```typescript

class B {}

class A {}

@registry([A])
class App {
  @inject('a') private readonly b: A;
  @inject('b') private readonly a: B;
}
```

Example with factory injection:

```typescript
import { Registry, registry, inject } from '@dmytropaduchak/simple-ioc';

interface Options {
  ...
}

class A {
  constructor(options: Options) {
    console.log(options)
  }
}

const inject = A;
const useFactory = (): Options => { ... }

@registry([{ inject, useFactory }])
class App {
  @inject() private readonly a
}

```

## Unit testing

For run unit tests, use:

```
npm run test
```

All unit test report you can find at `report/` folder.

For run test at watch mode, use:

```
npm run test:dev
```


## Linting

For check eslint rules, use:

```
npm run lint
```

For auto fix all eslint bugs, use:

```
npm run lint:fix
```

## License

Nest is [MIT licensed](LICENSE).
