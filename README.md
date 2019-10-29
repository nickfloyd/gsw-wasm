## BUILD / RUN
`npm i`

After installing emscripten and its dependencies
`emcc lib/main.c -s WASM=1 -o public/main.js`

`npm start`
Open browser: http://localhost:2222/

### USES
express
emscripten - https://emscripten.org/

### TOOLS
Wasm Fiddle: https://wasdk.github.io/WasmFiddle
Web Assembly Studio: https://webassembly.studio

### TODO
[ ]Implement Emscripten