import express from 'express';

const PORT = 3000; 

const app = express();

//Ruta para el Home
app.get('/', (req, res)=>{
    res.send('Página de Inicio');
});

//Rura para recibir Datos
app.get('/data', (req, res)=>{
    res.send('Datos recibidos');
});

//Rutas con parámetros

app.get('/user/:id', (req, res)=>{
    const userId = req.params.id; 
    res.send(`Usuario ingresado con el id: ${userId}`);
})

app.get('/product/:category/:id', (req, res)=>{
    const {category, id} = req.params;
    res.send(`Categoria: ${category}, Id del producto: ${id}`);
});

//Ruteo de Consulta
app.get('/search', (req,res)=>{
    const query = req.query.q;
    res.send(`Resultado de la búsqueda: ${query}`)
});

app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo ${type}, rango de precios ${minPrice} - ${maxPrice}`)
});




app.listen(PORT, ()=>{
    console.log(`Server running http://localhost:${PORT}`);
    
})
