import { Noticia } from "../domain/noticias";

export async function listarNoticiasDeHoje(): Promise<Array<Noticia> | undefined> {
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();
    const data = `${mes}-${dia}-${ano}`;
    let noticias;
    const url = `https://servicodados.ibge.gov.br/api/v3/noticias/?de=${data}`;
    await fetch(url, { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(dados => {
            noticias = dados.items;
        });
    return noticias;
}
