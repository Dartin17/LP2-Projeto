import { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { consultar } from "../../../services/servicoCategoria"
import { gravar, atualizar } from "../../../services/servicoProduto"

export default function FormCadastroProduto(props) {
	const [formValidado, setFormValidado] = useState(false);
	const [categorias, setCategorias] = useState([]);
	const produtoReseta = {
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
	};

	useEffect(() => {
		consultar()
			.then((res) => {
				if (Array.isArray(res))
					setCategorias(res);
			})
	}, [])

	function manipularSubmissao(evento) {
		const form = evento.currentTarget;
		if (form.checkValidity()) {
			setFormValidado(false);
			if (!props.modoEdicao) {
				gravar(props.produtoSelecionado)
					.then((res) => {
						if (res.status) {
							props.setProdutoSelecionado(produtoReseta);
							props.setModoEdicao(false);
							props.setExibirProdutos(true);
						}
						window.alert(res.mensagem);
					})
					.catch((erro) => {
						window.alert(erro.mensagem);
					})
			}
			else {
				atualizar(props.produtoSelecionado)
					.then((res) => {
						if (res.status) {
							props.setProdutoSelecionado(produtoReseta);
							props.setModoEdicao(false);
							props.setExibirProdutos(true);
						}
						window.alert(res.mensagem);
					});
			}
		}
		else {
			setFormValidado(true);
		}
		evento.preventDefault();
		evento.stopPropagation();
	}

	function manipularMudanca(evento) {
		const elemento = evento.target.name;
		let valor = evento.target.value;
		if (elemento === 'categoria') {
			props.setProdutoSelecionado({
				...props.produtoSelecionado,
				[elemento]: { codigo: valor }
			});
		}
		else {
			props.setProdutoSelecionado({
				...props.produtoSelecionado,
				[elemento]: valor,
			});
		}
		console.log(props.produtoSelecionado);
	}

	return (
		<Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
			<Row>
				<Col xs={2}>
					<Form.Group>
						<Form.Label>Codigo</Form.Label>
						<Form.Control
							required
							disabled={true}
							type="number"
							id="codigo"
							name="codigo"
							value={props.produtoSelecionado.codigo}
							placeholder="Código"
						/>
					</Form.Group>
				</Col>
				<Col xs={2}>
					{/* ########## Validade ########## */}
					<Form.Group className="mb-3">
						<Form.Label>Válido até: </Form.Label>
						<Form.Control
							required
							type="date"
							id="dataValidade"
							name="dataValidade"
							value={props.produtoSelecionado.dataValidade}
							onChange={manipularMudanca}
							placeholder="Válido até:"
						/>
						<Form.Control.Feedback type="invalid">
							Por favor, informe a data de validade!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={4}>
					{/* ########## Categoria ########## */}
					<Form.Group className="mb-3">
						<Form.Label>Categoria</Form.Label>
						<Form.Select
							required
							id="categoria"
							name="categoria"
							value={props.produtoSelecionado.categoria.codigo}
							onChange={manipularMudanca}
						>
							<option value="">Selecionar</option>
							{categorias.map((categoria) => (
								<option key={categoria.codigo} value={categoria.codigo}>
									{categoria.descricao}
								</option>
							))}
						</Form.Select>
						<Form.Control.Feedback type="invalid">
							Por favor, informe a categoria do produto!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={4}>
					{/* ########## Descrição ########## */}
					<Form.Group className="mb-3">
						<Form.Label>Descrição:</Form.Label>
						<Form.Control
							required
							type="text"
							id="descricao"
							name="descricao"
							value={props.produtoSelecionado.descricao}
							onChange={manipularMudanca}
							placeholder="Descrição:"
						/>
						<Form.Control.Feedback type="invalid">
							Por favor, informe a descrição do produto!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col>
					{/* ########## Preço Custo ########## */}
					<Form.Group className="mb-3">
						<Form.Label>Preço de Custo:</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Preço de Custo:"
							id="precoCusto"
							name="precoCusto"
							value={props.produtoSelecionado.precoCusto}
							onChange={manipularMudanca}
						/>
						<Form.Control.Feedback type="invalid">
							Por favor, informe o preço de custo deste produto!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col>
					{/* ########## Preço Venda ########## */}
					<Form.Group className="mb-3">
						<Form.Label>Preço de Venda:</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Preço de Venda:"
							id="precoVenda"
							name="precoVenda"
							value={props.produtoSelecionado.precoVenda}
							onChange={manipularMudanca}
						/>
						<Form.Control.Feedback type="invalid">
							Por favor, informe o preço de venda deste produto!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col>
					{/* ########## Estoque ########## */}
					<Form.Group className="mb-3">
						<Form.Label>Estoque:</Form.Label>
						<Form.Control
							required
							type="number"
							id="qtdEstoque"
							name="qtdEstoque"
							value={props.produtoSelecionado.qtdEstoque}
							onChange={manipularMudanca}
							placeholder="Estoque:"
						/>
						<Form.Control.Feedback type="invalid">
							Por favor, informe a quantidade em estoque deste produto!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col>
					{/* ########## URL Imagem ########## */}
					<Form.Group className="mb-3">
						<Form.Label>URL da Imagem:</Form.Label>
						<Form.Control
							required
							type="url"
							id="urlImagem"
							name="urlImagem"
							value={props.produtoSelecionado.urlImagem}
							onChange={manipularMudanca}
							placeholder="URL da Imagem:"
						/>
						<Form.Control.Feedback type="invalid">
							Por favor, informe a url da imagem deste produto!
						</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
			<Row className="mt-2 mb-2">
				<Col md={2}>
					<Button id="botao" type="submit" variant={props.modoEdicao ? "warning" : "success"}>
						{props.modoEdicao ? "Alterar" : "Confirmar"}
					</Button>
				</Col>
				<Col>
					<Button
						onClick={() => {
							props.setProdutoSelecionado(produtoReseta);
							props.setModoEdicao(false);
							props.setExibirProdutos(true);
						}}
						type="button"
						variant={props.modoEdicao ? "primary" : "success"}
					>
						Voltar
					</Button>
				</Col>
			</Row>
		</Form>
	);
}
