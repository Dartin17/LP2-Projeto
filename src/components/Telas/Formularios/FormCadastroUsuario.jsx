import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function FormCadastroCliente(props) {
  const [formValidado, setFormValidado] = useState(false);
  const usuarioReseta = {
    nomeUsuario: "",
    email: "",
    perfil: "",
    senha: "",
    senhaConfirmacao: ""
  };
  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaUsuarios([
          ...props.listaUsuarios,
          props.usuarioSelecionado,
        ]);
        window.alert("Usuario inserido com sucesso!");
        props.setExibirUsuarios(true);
      } else {
        props.setListaUsuarios(
          props.listaUsuarios.map((item) =>
            item.nomeUsuario === props.usuarioSelecionado.nomeUsuario
              ? props.usuarioSelecionado
              : item
          )
        );
        window.alert("Usuario atualizado com sucesso!");
        props.setModoEdicao(false);
        props.setExibirUsuarios(true);
      }
      props.setUsuarioSelecionado(usuarioReseta);
    } else {
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  function manipularMudanca(evento) {
    const elemento = evento.target.name;
    const valor = evento.target.value;
    props.setUsuarioSelecionado({
      ...props.usuarioSelecionado,
      [elemento]: valor,
    });
  }

  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      {/* ########## Nome Usuario ########## */}
      <Form.Group className="mb-3" controlId="formGroupNome">
        <Form.Label>Nome de Usuário</Form.Label>
        <Form.Control
          required
          id="nomeUsuario"
          name="nomeUsuario"
          value={props.usuarioSelecionado.nomeUsuario}
          onChange={manipularMudanca}
          type="text"
          placeholder="Nome de Usuário"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu nome de usuário!
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Email ########## */}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          disabled={props.modoEdicao}
          id="email"
          name="email"
          value={props.usuarioSelecionado.email}
          onChange={manipularMudanca}
          type="email"
          placeholder="Email"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu email: nome@exemplo.com.
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Perfil ########## */}
      <Form.Group>
        <Form.Label>Perfil</Form.Label>
        <Form.Select
          required
          id="perfil"
          name="perfil"
          value={props.usuarioSelecionado.perfil}
          onChange={manipularMudanca}
          aria-label="Perfil"
          controlId="formGroupPerfil"
        >
          <option value="">Nenhum</option>
          <option value="Admin">Admin</option>
          <option value="Visitante">Visitante</option>
          <option value="Normal">Normal</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Por favor, selecione um tipo de perfil!.
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Senha ########## */}
      <Form.Group className="mb-3" controlId="formGroupSenha">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          required
          id="senha"
          name="senha"
          value={props.usuarioSelecionado.senha}
          onChange={manipularMudanca}
          type="password"
          placeholder="Senha"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe sua senha!
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Senha Confirmação ########## */}
      <Form.Group className="mb-3" controlId="formGroupSenhaConfirmacao">
        <Form.Label>Senha de Confirmação</Form.Label>
        <Form.Control
          required
          id="senhaConfirmacao"
          name="senhaConfirmacao"
          value={props.usuarioSelecionado.senhaConfirmacao}
          onChange={manipularMudanca}
          type="password"
          placeholder="Senha de Confirmação"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe a confirmação de senha!
        </Form.Control.Feedback>
      </Form.Group>
      <Row className="mt-2 mb-2">
        <Col md={2}>
          <Button type="submit" variant={props.modoEdicao ? "warning":"success"}>
          {props.modoEdicao ? "Alterar":"Confirmar"}
          </Button>{" "}
        </Col>
        <Col>
          <Button
            onClick={() => {
              props.setModoEdicao(false);
              props.setUsuarioSelecionado(usuarioReseta);
              props.setExibirUsuarios(true);
            }}
            type="button"
            variant={props.modoEdicao ? "warning":"success"}
          >
            Voltar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
