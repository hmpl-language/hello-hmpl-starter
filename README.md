# Hello HMPL Starter

A minimal starter template to get started with HMPL.

## Setup

```sh
npx degit hmpl-language/hello-hmpl-starter hello-hmpl
cd hello-hmpl
npm install
```

## Project Structure

<!-- TREEVIEW START -->

```
hello-hmpl/
|--mock/
|--public/
|--src/
|   |--hmpl/
|   |--main.js
|--index.html
|--package.json
|--vite.config.js
|--vite-plugin-hmpl.js
|--README.md
```

## Getting Started

Create a new HMPL template in `src/hmpl/HelloWorld.hmpl`:

```hmpl
<div>
  <div>
    {{
      src: "/api/hello",
      indicators: [
        { trigger: "pending", content: "<p>Loading...</p>" },
        { trigger: "rejected", content: "<p>Error!!</p>" }
      ]
    }}
  </div>
</div>
```

Then, load it into `src/main.js`:

```javascript
import helloWorld from "./hmpl/HelloWorld.hmpl";

const { response } = helloWorld();

document.body.appendChild(response);
```

Now, your UI will dynamically render data from the server!

## Learn More

- [HMPL Docs](https://www.hmpl-lang.dev/hmpl)
- [Examples](https://www.hmpl-lang.dev/examples)

## Contributors

This project was created by [Saptarshi Mula](https://github.com/toyaAoi). Many thanks to him!

