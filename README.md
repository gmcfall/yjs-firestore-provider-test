# yjs-firestore-provider-test

This repository is used to test the [@gmcfall/yjs-firestore-provider](https://www.npmjs.com/package/@gmcfall/yjs-firestore-provider) package

## Installation
```bash
git clone https://github.com/gmcfall/yjs-firestore-provider-test.git
cd yjs-firestore-provider-test
npm install
```


## Running
In the `yjs-firestore-provider-test` folder,

```bash
npm start
```

After the app starts up, check you browser and confirm that no error was thrown.

## Customize the firebase app configuration
You may also try running the test with your own Firestore configuration.
There are two steps:
1. Replace the `firebaseConfig` value.
2. Replace the `path` value

Open `src/App.tsx` in your favorite editor.

Make the following changes:
```javascript
const firebaseConfig = { /** Put your config here */}
const path = [ /** Put your path here */]
```
