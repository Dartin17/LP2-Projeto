const url = 'https://luizzoff-lp2-backend.vercel.app/produtos/';

export async function gravar(produto) {
    const res = await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(produto)
    })
    return await res.json();
}

export async function deletar(produto) {
    const res = await fetch(url + produto.codigo,{
        method:'DELETE'
    })
    return await res.json();
}

export async function atualizar(produto) {
    const res = await fetch(url + produto.codigo,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(produto)
    })
    return await res.json();
}

export async function consultar() {
    const res = await fetch(url,{
        method:'GET',
    })
    return await res.json();
}   