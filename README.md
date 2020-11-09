# TypeScript-React-Demo

1) npm init
2) npm install --save react react-dom
3) npm install -D typscript
4) npm install -D @types/react @types/react-dom
5) npm install @types/node
6) Create a file 'tsconfig.json'
        {
          "compilerOptions": {
            "module": "commonjs",
            "jsx": "react",
            "watch": true,
            "target": "es5",
            "lib": ["es6", "dom"]
          }
        }
7) Create a file 'webpack.config.js' and write a support module requirements
8) npm install webpack webpack-cli
9) npm install ts-loader 
10) Change the script into 'package.json'
     'script' : {
            'build': 'webpack',
            'test': ''
     }
11) Run the project with 'npm run build' if we add watch before this command file running continue

