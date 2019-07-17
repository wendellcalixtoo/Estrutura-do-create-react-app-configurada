<h1><strong>Estrutura do create-react-app configurada</strong></h1>

<h3><strong>$create-react-app "nome-do-projeto"</strong></h3>

<p>Dar os seguintes comandos:</p>

<h3><strong>$yarn add eslint -D</strong></h3>

<h3><strong>$yarn eslint --init</strong></h3>
<ul>
    <li> To check syntax, find problems, and enforce code style
        JavaScript modules (import/export)</li>
    <li> React</li>
    <li> Browser</li>
    <li> Use a popular style guide</li>
    <li> Airbnb</li>
    <li> JavaScript</li>
    <li> Selecione Yes</li>
    <li> Selecione Yes</li>
</ul>

<h3><strong>$yarn</strong></h3>

<h3><strong>$yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D</strong></h3>

<h3><strong>$yarn add babel-eslint@10.0.1 --exact -D</strong></h3>

<h3><strong>$yarn start</strong></h3>

<p>Apagar os seguintes arquivos:</p>
<ul>
    <li> README.md</li>
    <li> manifest.json (dentro da pasta public)</li>
    <li> Dentro da pagina SRC, apagar todos os arquivos exceto os arquivos App.js e index.js</li>
    <li> package-lock.json</li>
    <li> yarn-error.log</li>
</ul>

<p>Substituir o conteudo do arquivo <strong>package.json</strong> por:</p>

```
{
    "name": "modulo07",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "react": "^16.8.6",
        "react-dom": "^16.8.6",
        "react-scripts": "3.0.1"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    },
    "devDependencies": {
        "babel-eslint": "^10.0.2",
        "eslint": "^5.16.0",
        "eslint-config-airbnb": "^17.1.1",
        "eslint-config-prettier": "^6.0.0",
        "eslint-plugin-import": "^2.18.0",
        "eslint-plugin-jsx-a11y": "^6.2.3",
        "eslint-plugin-prettier": "^3.1.0",
        "eslint-plugin-react": "^7.14.2",
        "prettier": "^1.18.2"
    }
}
```

<p>Substituir os dados do arquivo <strong>index.html</strong> <em>(pasta public)<em> por:</p>

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Rocketshoes</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>
```

<p>Substituir os dados do arquivo <strong>index.js</strong> <em>(pasta src)<em> por:</p>

```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

<p>Substituir os dados do arquivo <strong>App.js</strong> <em>(pasta src)<em> por:</p>

```
function App() {
    return (
        <div className="App">
            <h1>Hello Redux</h1>
        </div>
    );
}

export default App;
```

<p>Embaixo do arquivo <strong>yarn.lock</strong>, clicar com o botão direito do mouse e selecionar <strong><em>Generate.editorconfig</em></strong>.</p>

<p>Substituir os dados do arquivo <strong>.eslintrc.js</strong> por:</p>

```
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', 'js'] },
        ],
        'import/prefer-default-export': 'off',
    },
};
```

<p>Criar na raiz um arquivo <strong>.prettierrc</strong> com o seguinte conteudo:</p>

```
{
    "singleQuote": true,
    "trailingComma": "es5"
}
```

<h2><strong><em>yarn start</em></strong></h2>



