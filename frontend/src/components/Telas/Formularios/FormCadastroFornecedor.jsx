import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormCadastroFornecedor(props) {
  const [formValidado, setFormValidado] = useState(false);
  const fornecedorReseta = {
    nome: "",
    cnpj: "",
    email: "",
    telefone: "",
    endereco: ""
  };

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaFornecedores([
          ...props.listaFornecedores,
          props.fornecedorSelecionado,
        ]);
        window.alert("Fornecedor inserido com sucesso!");
        props.setExibirFornecedores(true);
      } else {
        props.setListaFornecedores(
          props.listaFornecedores.map((item) =>
            item.cnpj === props.fornecedorSelecionado.cnpj
              ? props.fornecedorSelecionado
              : item
          )
        );
        window.alert("Fornecedor atualizado com sucesso!");
        props.setModoEdicao(false);
        props.setExibirFornecedores(true);
      }
      props.setFornecedorSelecionado(fornecedorReseta);
    } else {
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  function manipularMudanca(evento) {
    const elemento = evento.target.name;
    const valor = evento.target.value;
    props.setFornecedorSelecionado({
      ...props.fornecedorSelecionado,
      [elemento]: valor,
    });
  }

  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      <Row>
        <Col>
          {/* ########## Nome ########## */}
          <Form.Group className="mb-3" controlId="formGroupNome">
            <Form.Label>Descrição da Empresa (Nome)*</Form.Label>
            <Form.Control
              required
              type="text"
              id="nome"
              name="nome"
              value={props.fornecedorSelecionado.nome}
              onChange={manipularMudanca}
              placeholder="Descrição da Empresa (Nome)*"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o seu nome/da sua empresa!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## CNPJ ########## */}
          <Form.Group className="mb-3" controlId="formGroupCNPJ">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              required
              disabled={props.modoEdicao}
              type="text"
              id="cnpj"
              name="cnpj"
              value={props.fornecedorSelecionado.cnpj}
              onChange={manipularMudanca}
              placeholder="CNPJ"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe seu cnpj!, __.___.___.____-__.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## Email ########## */}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              name="email"
              value={props.fornecedorSelecionado.email}
              onChange={manipularMudanca}
              placeholder="Email"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe seu email: nome@exemplo.com.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Telefone ########## */}
          <Form.Group className="mb-3" controlId="formGroupTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              required
              type="text"
              id="telefone"
              name="telefone"
              value={props.fornecedorSelecionado.telefone}
              onChange={manipularMudanca}
              placeholder="Telefone"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe seu telefone!, ( )_____-____.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      {/* ########## Endereço ########## */}
      <Form.Group className="mb-3" controlId="formGroupEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          required
          type="text"
          id="endereco"
          name="endereco"
          value={props.fornecedorSelecionado.endereco}
          onChange={manipularMudanca}
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
              props.setFornecedorSelecionado(fornecedorReseta);
              props.setExibirFornecedores(true);
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
