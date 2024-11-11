import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCadastroEntregador from "./Formularios/FormCadastroEntregador";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import { entregadores } from "../../dados/mockEntregadores";

export default function TelaCadastroEntregador(props) {
    const [exibirEntregadores, setExibirEntregadores] = useState(true);
    const [listaEntregadores, setListaEntregadores] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        id: "",
        nome: "",
        cnh: "",
        telefone: "",
        veiculo: "",
        placa: "",
        capacidadeMax: ""
    });

    return (
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center" variant="dark">
                <h2>
                    Cadastro de Entregador
                </h2>
            </Alert>
            {
                exibirEntregadores ?
                    <TabelaEntregadores
                        listaEntregadores={listaEntregadores}
                        setExibirEntregadores={setExibirEntregadores}
                        setListaEntregadores={setListaEntregadores}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        setModoEdicao={setModoEdicao}
                    />
                    :
                    <FormCadastroEntregador
                        setExibirEntregadores={setExibirEntregadores}
                        listaEntregadores={listaEntregadores}
                        setListaEntregadores={setListaEntregadores}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        entregadorSelecionado={entregadorSelecionado}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                    />
            }
        </Pagina>
    );
}