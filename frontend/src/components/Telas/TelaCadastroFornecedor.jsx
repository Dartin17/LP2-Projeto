import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCadastroFornecedor from "./Formularios/FormCadastroFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import { fornecedores } from "../../dados/mockFornecedores";

export default function TelaCadastroFornecedor(props) {
    const [exibirFornecedores, setExibirFornecedores] = useState(true);
    const [listaFornecedores, setListaFornecedores] = useState(fornecedores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        nome: "",
        cnpj: "",
        email: "",
        telefone: "",
        endereco: ""
    });

    return (
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center" variant="dark">
                <h2>
                    Cadastro de Fornecedor
                </h2>
            </Alert>
            {
                exibirFornecedores ?
                    <TabelaFornecedores
                        listaFornecedores={listaFornecedores}
                        setExibirFornecedores={setExibirFornecedores}
                        setListaFornecedores={setListaFornecedores}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        setModoEdicao={setModoEdicao}
                    />
                    :
                    <FormCadastroFornecedor
                        setExibirFornecedores={setExibirFornecedores}
                        listaFornecedores={listaFornecedores}
                        setListaFornecedores={setListaFornecedores}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        fornecedorSelecionado={fornecedorSelecionado}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                    />
            }
        </Pagina>
    );
}