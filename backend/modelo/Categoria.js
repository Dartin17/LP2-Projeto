import DAO_Categoria from "../persistencia/Entidade_Categoria.js";

export default class Categoria{
    #codigo;
    #descricao;
    
    constructor(codigo=0,descricao=""){
        this.#codigo=codigo;
        this.#descricao=descricao;
    }
    
    get codigo() { return this.#codigo; }
    get descricao() { return this.#descricao; }
    set codigo(novoCodigo) { this.#codigo = novoCodigo; }
    set descricao(novoDescricao) { this.#descricao = novoDescricao; }

    async gravar(){
        const categoriaDAO = new DAO_Categoria();
        await categoriaDAO.gravar(this);
    }
    
    async deletar(){
        const categoriaDAO = new DAO_Categoria();
        await categoriaDAO.deletar(this);
    }
    
    async atualizar(){
        const categoriaDAO = new DAO_Categoria();
        await categoriaDAO.atualizar(this);  
    }

    async consultar(termo){
        const categoriaDAO = new DAO_Categoria();
        return await categoriaDAO.consultar(termo);
    }
}