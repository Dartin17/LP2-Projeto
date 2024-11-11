// import rotaCliente from './rotas/Rota_Cliente.js';
// import rotaFornecedor from './rotas/Rota_Fornecedor.js';
import rotaProduto from './rotas/Rota_Produto.js';
import rotaCategoria from './rotas/Rota_Categoria.js';
// import rotaUsuario from './rotas/Rota_Usuario.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const host = "0.0.0.0";
const porta = 5000;
const app = express();
dotenv.config();

//########## MIDDLEWARE e CORS ##########//
app.use(express.json());
app.use(cors({
    origin:"*",
    "Access-Control-Allow-Origin":"*"
}));
    
//########## ROTAS ##########//
// app.use('/clientes', rotaCliente);
// app.use('/fornecedores', rotaFornecedor);
app.use('/produtos', rotaProduto);
app.use('/categorias', rotaCategoria);
app.use('/', (req, res) =>{
    res.send("Servidor Escutando !!!");    
});
// app.use('/usuarios', rotaUsuario);
    
//########## SERVIDOR ##########//
app.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`)
});
