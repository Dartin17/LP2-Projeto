import { Alert } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import FormCadastroUsuario from "./Formularios/FormCadastroUsuario";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { usuarios } from "../../dados/mockUsuarios";

export default function TelaCadastroUsuario(props) {
    const [exibirUsuarios, setExibirUsuarios] = useState(true);
    const [listaUsuarios, setListaUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        nomeUsuario: "",
        email: "",
        perfil: "",
        senha: "",
        senhaConfirmacao: ""
    });

    return (
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center" variant="dark">
                <h2>
                    Cadastro de Usuário
                </h2>
            </Alert>
            {
                exibirUsuarios ?
                    <TabelaUsuarios
                        listaUsuarios={listaUsuarios}
                        setExibirUsuarios={setExibirUsuarios}
                        setListaUsuarios={setListaUsuarios}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        setModoEdicao={setModoEdicao}
                    />
                    :
                    <FormCadastroUsuario
                        setExibirUsuarios={setExibirUsuarios}
                        listaUsuarios={listaUsuarios}
                        setListaUsuarios={setListaUsuarios}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        usuarioSelecionado={usuarioSelecionado}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                    />
            }
        </Pagina>
    );
}