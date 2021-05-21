## Quick Start

Until we publish a npm package (tarball), you will need to pull the `vecxx` repository locally, and `npm link` it.

```bash
git clone git@github.com:tzellman/vecxx.git
cd vecxx
npm install
npm link
```

clone this repository, and run the following:

```bash
cd vecxx-example
npm link vecxx
node index.js
```

