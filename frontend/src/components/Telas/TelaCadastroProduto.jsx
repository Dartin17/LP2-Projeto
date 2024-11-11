import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCadastroProduto from "./Formularios/FormCadastroProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos";


export default function TelaCadastroProduto(props) {
    const [exibirProdutos, setExibirProdutos] = useState(true);
    const [listaProdutos, setListaProdutos] = useState(produtos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: "",
        dataValidade: "",
        descricao: "",
        precoCusto: "",
        precoVenda: "",
        qtdEstoque: "",
        urlImagem: "",
		categoria: {
			codigo: "",
			descricao: ""
		}
    });

    return (
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center" variant="dark">
                <h2>
                    Cadastro de Produto
                </h2>
            </Alert>
            {
                exibirProdutos ?
                    <TabelaProdutos
                        listaProdutos={listaProdutos}
                        setExibirProdutos={setExibirProdutos}
                        setListaProdutos={setListaProdutos}
                        setProdutoSelecionado={setProdutoSelecionado}
                        setModoEdicao={setModoEdicao}
                    />
                    :
                    <FormCadastroProduto
                        setExibirProdutos={setExibirProdutos}
                        listaProdutos={listaProdutos}
                        setListaProdutos={setListaProdutos}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        produtoSelecionado={produtoSelecionado}
                        setProdutoSelecionado={setProdutoSelecionado}
                    />
            }
        </Pagina>
    );
}