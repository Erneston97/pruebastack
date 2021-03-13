const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const bodyParser=require('body-parser')
const cors =require('cors');
const port = process.env.PORT || 4000;

const publicPath = path.join(__dirname, '..' , 'public');
//crear el servidor 
const app = express();


//Habilitar Cors

// const whitelist=['http://localhost:3000'];
// // const corsOptions={
// //         origin:(origin,callback)=>{

// //             const existe = whitelist.some(dominio => dominio === origin);
// //             if(existe){
// //                     callback(null,true)
// //             }else{
// //                 callback(new Error('No Permitido por CORS'))
// //             }

// //         }
// // }
// agregando guia
app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 })
//habilitar cors
//app.use(cors(corsOptions));
app.use(cors());

//conectar a mongo db
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://user_node_cafe:Et6nqqq0tMi3ByIz@miclustercoffe.oskzo.mongodb.net/veterinaria',{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false

})
// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
//habilitar routing use() middleware de expres cuando el usuario ingrese a la diagonal ejecutamos nuestra funcion de routes
app.use('/',routes())

// puerto y arrancar el servidor con un callback

app.listen(port,()=>{
    console.log('Servidor funcionando');
})
