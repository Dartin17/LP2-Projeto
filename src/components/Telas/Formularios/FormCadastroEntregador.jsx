import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormCadastroEntregador(props) {
    const [formValidado, setFormValidado] = useState(false);
    const entregadorReseta = {
        id: "",
        nome: "",
        cnh: "",
        telefone: "",
        veiculo: "",
        placa: "",
        capacidadeMax: ""
    };

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaEntregadores([
                    ...props.listaEntregadores,
                    props.entregadorSelecionado,
                ]);
                window.alert("Entregador inserido com sucesso!");
                props.setExibirEntregadores(true);
            } else {
                props.setListaEntregadores(
                    props.listaEntregadores.map((item) =>
                        item.id === props.entregadorSelecionado.id
                            ? props.entregadorSelecionado
                            : item
                    )
                );
                window.alert("Entregador atualizado com sucesso!");
                props.setModoEdicao(false);
                props.setExibirEntregadores(true);
            }
            props.setEntregadorSelecionado(entregadorReseta);
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        props.setEntregadorSelecionado({
            ...props.entregadorSelecionado,
            [elemento]: valor,
        });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row>
                <Col>
                    {/* ########## ID ########## */}
                    <Form.Group className="mb-3" controlId="formGroupID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            required
                            disabled={props.modoEdicao}
                            type="number"
                            id="id"
                            name="id"
                            value={props.entregadorSelecionado.id}
                            onChange={manipularMudanca}
                            placeholder="ID"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o ID!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    {/* ########## Nome ########## */}
                    <Form.Group className="mb-3" controlId="formGroupNome">
                        <Form.Label>Nome do Entregador</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="nome"
                            name="nome"
                            value={props.entregadorSelecionado.nome}
                            onChange={manipularMudanca}
                            placeholder="Nome do Entregador"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o nome do entregador!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* ########## CNH ########## */}
                    <Form.Group className="mb-3" controlId="formGroupCNH">
                        <Form.Label>CNH</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            id="cnh"
                            name="cnh"
                            value={props.entregadorSelecionado.cnh}
                            onChange={manipularMudanca}
                            placeholder="CNH"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe uma CNH!
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
                            value={props.entregadorSelecionado.telefone}
                            onChange={manipularMudanca}
                            placeholder="Telefone"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe um telefone!, ( )_____-____.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* ########## Veiculo ########## */}
                    <Form.Group className="mb-3" controlId="formGroupVeiculo">
                        <Form.Label>Veículo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="veiculo"
                            name="veiculo"
                            value={props.entregadorSelecionado.veiculo}
                            onChange={manipularMudanca}
                            placeholder="Veículo"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe um veiculo.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    {/* ########## Placa ########## */}
                    <Form.Group className="mb-3" controlId="formGroupPlaca">
                        <Form.Label>Placa do Veículo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="placa"
                            name="placa"
                            value={props.entregadorSelecionado.placa}
                            onChange={manipularMudanca}
                            placeholder="Placa do Veículo"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a Placa do Veículo.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            {/* ########## Capacida Maxima ########## */}
            <Form.Group className="mb-3" controlId="formGroupCapacidadeMax">
                <Form.Label>Capacida Maxima do Veículo (KG)</Form.Label>
                <Form.Control
                    required
                    type="number"
                    id="capacidadeMax"
                    name="capacidadeMax"
                    value={props.entregadorSelecionado.capacidadeMax}
                    onChange={manipularMudanca}
                    placeholder="Capacidade Maxima do Veículo (KG)"
                />
                <Form.Control.Feedback type="invalid">
                    Por favor, informe a capacidade maxima do veículo (KG).
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
                            props.setEntregadorSelecionado(entregadorReseta);
                            props.setExibirEntregadores(true);
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
