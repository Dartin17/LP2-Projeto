import TelaCadastroCliente from "./components/Telas/TelaCadastroCliente";
import TelaCadastroFornecedor from "./components/Telas/TelaCadastroFornecedor";
import TelaCadastroUsuario from "./components/Telas/TelaCadastroUsuario";
import TelaCadastroProduto from "./components/Telas/TelaCadastroProduto";
import TelaCadastroCategoria from "./components/Telas/TelaCadastroCategoria";
import TelaCadastroEntregador from "./components/Telas/TelaCadastroEntregador";
import TelaMenu from "./components/Telas/TelaMenu";
import Tela404 from "./components/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* A ordem das rotas é importante */}
                <Routes>
                    <Route path="/" element={<TelaMenu />} />
                    <Route path="/LP2-Sistema" element={<TelaMenu />} />
                    <Route path="/produto" element={<TelaCadastroProduto />} />
                    <Route path="/cliente" element={<TelaCadastroCliente />} />
                    <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
                    <Route path="/usuario" element={<TelaCadastroUsuario />} />
                    <Route path="/categoria" element={<TelaCadastroCategoria />} />
                    <Route path="/entregador" element={<TelaCadastroEntregador />} />
                    <Route path="*" element={<Tela404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;