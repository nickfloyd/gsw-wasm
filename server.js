// Express

const express = require('express');
const app = express();

// Serve static file from pub
app.use(express.static('public'));

// Not needed because Express > 4.16 does this for us
// app.use(express.static('public', {
//   setHeaders: (res, path, stat) => {
//     // Serve .wasm with correct mime type
//     if(path.endsWith('.wasm')) {
//       res.set('Content-Type', 'application/wasm');
//     }
//   }
// }));

// Start server

app.listen(2222, () => console.log('Server running on http://localhost:2222'));

