`npm init -y` 

`npm i -D typescript`

`./node_modules/.bin/tsc --init`
insert in tsc config 

    {
    "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [
    "ES6",
    "ES2017",
    "ES2018",
    "ES2019",
    "ES2020",
    "dom"
    ],
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "src",
    "moduleResolution": "node",
    "removeComments": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": false,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
    },
    "include": ["src"],
    "exclude": ["node_modules"]
    }

**gitignore [folder]/node_modules**


`npx create-react-app ts_app --template typescript`