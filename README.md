This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


Instructions
---

1. create an .env file and .env.default files under the root directory with the following content:
```
TOKEN=xxxxxxxxxxxxxxx
```

use [webpack-dotenv-plugin](https://github.com/nwinch/webpack-dotenv-plugin) to replace token in source file

Externally set environment variables will override vars set in .env

```javascript
// webpack.config.js
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  ...
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
    })
  ]
  ...
};
```

in `src/redux/modules/helper.js`
```
const TOKEN = process.env.TOKEN;
```

2. then
run
```
npm start
```

3. to build
run
```
npm run build
```
