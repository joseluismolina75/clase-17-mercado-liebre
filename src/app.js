const express = require('express');
const app = express();
const path = require('path');
const port = 3000

//configuramos donde está nuestra carpeta estática
app.use(express.static(path.join(__dirname, 'public'))) 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
    //res.send('funciona');
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
}
);