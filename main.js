const express = require('express')

const app = express()
const port = process.env.PORT || 3000
app.listen(port, function(){
  console.log(`Aplicacion a la escucha del puerto ${port}`);
});

app.use(express.static('./'));