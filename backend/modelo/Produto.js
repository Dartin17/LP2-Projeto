import DAO_Produto from "../persistencia/Entidade_Produto.js";
import Categoria from "./Categoria.js";

export default class Produto {
    #codigo;
    #descricao;
    #precoCusto;
    #precoVenda;
    #qtdEstoque;
    #urlImagem;
    #dataValidade;
    #categoria;
    
    constructor(codigo=0, descricao="", precoCusto=0, precoVenda=0, qtdEstoque=0, urlImagem="", dataValidade="", categoria={})
    {
        this.#codigo=codigo;
        this.#descricao=descricao;
        this.#precoCusto=precoCusto;
        this.#precoVenda=precoVenda;
        this.#qtdEstoque=qtdEstoque;
        this.#urlImagem=urlImagem;
        this.#dataValidade=dataValidade;
        this.#categoria=categoria;
    }
    
    get codigo() {return this.#codigo;}
    get descricao() {return this.#descricao;}
    get precoCusto() {return this.#precoCusto;}
    get precoVenda() {return this.#precoVenda;}
    get qtdEstoque() {return this.#qtdEstoque;}
    get urlImagem() {return this.#urlImagem;}
    get dataValidade() {return this.#dataValidade;}
    get categoria() {return this.#categoria;}
    
    set codigo(novoCodigo) { this.#codigo=novoCodigo; } 
    set descricao(novoDescricao) { this.#descricao = novoDescricao; }
    set precoCusto(novoPrecoCusto) { this.#precoCusto = novoPrecoCusto; }
    set precoVenda(novoPrecoVenda) { this.#precoVenda = novoPrecoVenda; }
    set qtdEstoque(novoQtdEstoque) { this.#qtdEstoque = novoQtdEstoque; }
    set urlImagem(novoUrlImagem) { this.#urlImagem=novoUrlImagem; }
    set dataValidade(novoDataValidade) { this.#dataValidade = novoDataValidade; }
    set categoria(novoCategoria) { if(novoCategoria instanceof Categoria) this.#categoria = novoCategoria; }

    async gravar() {
        const produtoDAO = new DAO_Produto();
        await produtoDAO.gravar(this); 
    }

    async deletar() {
        const produtoDAO = new DAO_Produto();
        await produtoDAO.deletar(this);
    }

    async atualizar() {
        const produtoDAO = new DAO_Produto();
        await produtoDAO.atualizar(this);
    }

    async consultar(termo) {
        const produtoDAO = new DAO_Produto();
        return await produtoDAO.consultar(termo);
    }
}