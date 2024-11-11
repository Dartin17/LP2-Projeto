import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormCadastroCliente(props) {
  const [formValidado, setFormValidado] = useState(false);
  const clienteReseta = {
    nome: "",
    cpf: "",
    genero: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    endereco: ""
  };

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaClientes([
          ...props.listaClientes,
          props.clienteSelecionado,
        ]);
        window.alert("Cliente inserido com sucesso!");
        props.setExibirClientes(true);
      } else {
        props.setListaClientes(
          props.listaClientes.map((item) =>
            item.codigo === props.clienteSelecionado.codigo
              ? props.clienteSelecionado
              : item
          )
        );
        window.alert("Cliente atualizado com sucesso!");
        props.setModoEdicao(false);
        props.setExibirClientes(true);
      }
      props.setClienteSelecionado(clienteReseta);
    } else {
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  function manipularMudanca(evento) {
    const elemento = evento.target.name;
    const valor = evento.target.value;
    props.setClienteSelecionado({
      ...props.clienteSelecionado,
      [elemento]: valor,
    });
  }

  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      {/* ########## Nome ########## */}
      <Form.Group className="mb-3" controlId="formGroupNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          required
          id="nome"
          name="nome"
          value={props.clienteSelecionado.nome}
          onChange={manipularMudanca}
          type="text"
          placeholder="Nome"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu nome completo
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col>
          {/* ########## CPF ########## */}
          <Form.Group className="mb-3" controlId="formGroupCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              disabled={props.modoEdicao}
              id="cpf"
              name="cpf"
              value={props.clienteSelecionado.cpf}
              onChange={manipularMudanca}
              type="text"
              placeholder="CPF"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe seu cpf!, ___.___.___-__.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Genero ########## */}
          <Form.Group>
            <Form.Label>Genero</Form.Label>
            <Form.Select
              required
              id="genero"
              name="genero"
              value={props.clienteSelecionado.genero}
              onChange={manipularMudanca}
              aria-label="Genero"
              controlId="formGroupGenero"
            >
              <option value="">Nenhum</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outros">Outros</option>
              <option value="Não Especificado">Não Especificado</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione um genero!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## Data Nascimento ########## */}
          <Form.Group className="mb-3" controlId="formGroupData">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              required
              id="dataNascimento"
              name="dataNascimento"
              value={props.clienteSelecionado.dataNascimento}
              onChange={manipularMudanca}
              type="date"
              placeholder="Data de Nascimento"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe sua data de nascimento!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Telefone ########## */}
          <Form.Group className="mb-3" controlId="formGroupTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              required
              id="telefone"
              name="telefone"
              value={props.clienteSelecionado.telefone}
              onChange={manipularMudanca}
              type="text"
              placeholder="Telefone"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe seu telefone!, ( )_____-____.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      {/* ########## Email ########## */}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          id="email"
          name="email"
          value={props.clienteSelecionado.email}
          onChange={manipularMudanca}
          type="email"
          placeholder="Email"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu email: nome@exemplo.com.
        </Form.Control.Feedback>
      </Form.Group>
      {/* ########## Endereço ########## */}
      <Form.Group className="mb-3" controlId="formGroupEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          required
          id="endereco"
          name="endereco"
          value={props.clienteSelecionado.endereco}
          onChange={manipularMudanca}
          type="text"
          placeholder="Endereço"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, informe seu endereço!, EX: Rua Te Achei N420 Barretos
          14783-252 SP.
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
              props.setClienteSelecionado(clienteReseta);
              props.setExibirClientes(true);
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
