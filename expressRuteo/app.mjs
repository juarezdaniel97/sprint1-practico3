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
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res)=>{
    const userId = req.params.id; 
    res.send(`Usuario ingresado con el id: ${userId}`);
})

//Solicitud: http://localhost:3000/product/electronic/456
app.get('/product/:category/:id', (req, res)=>{
    const {category, id} = req.params;
    res.send(`Categoria: ${category}, Id del producto: ${id}`);
});

//Ruteo de Consulta
//Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req,res)=>{
    const query = req.query.q;
    res.send(`Resultado de la búsqueda: ${query}`)
});


//Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo ${type}, rango de precios ${minPrice} - ${maxPrice}`)
});

//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req,res)=>{
    const edad = req.query.edad; 
    console.log(`La edad recibidad es: ${edad}`);
    res.send(`Edad del perfil: ${edad}`)
})

app.listen(PORT, ()=>{
    console.log(`Server running http://localhost:${PORT}`);
    
})
