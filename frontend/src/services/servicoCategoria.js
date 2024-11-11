const url = 'https://luizzoff-lp2-backend.vercel.app/categorias/';

export async function gravar(categoria) {
    const res = await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(categoria)
    })
    return await res.json();
}

export async function deletar(categoria) {
    const res = await fetch(url + categoria.codigo,{
        method:'DELETE'
    })
    return await res.json();
}

export async function atualizar(categoria) {
    const res = await fetch(url + categoria.codigo,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(categoria)
    })
    return await res.json();
}

export async function consultar() {
    const res = await fetch(url,{
        method:'GET',
    })
    return await res.json();
}   