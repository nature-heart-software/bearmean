# Installation

1. Create a TypeScript project

```bash
npm create vite@latest
```

2. Add an alias to your `src` folder in your `tsconfig.app.json` file

```json{3-8}
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

3. Init Bearmean with the aliases above

```bash
npx bearmean init
```

4. Import Bearmean components

```bash
npx bearmean add all # import all components
```

or

```bash
npx bearmean add layout # import a collection of components
```

or

```bash
npx bearmean add box # import a component
```
