import Image from 'next/image'
import Link from 'next/link'
import { listarNoticiasDeHoje } from './lib/infra/noticias'

export default async function Home() {

  const noticias = await listarNoticiasDeHoje();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm">
        <p className="text-2xl">Estudos de Jamstack com Next.js</p>
        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="/protegido">Área Protegida</Link>
        <br />
        <br />
        <p className="text-lg">Notícias de Hoje - {new Date().toLocaleDateString()}</p>
        <ul className="mx-5">
          {noticias &&
            noticias.map((noticia) =>
              <li className="my-5" key={noticia.id}>
                <p className="font-bold">{noticia.titulo}</p>
                <p>{noticia.introducao}</p>
              </li>)}
        </ul>
      </div>
    </main>
  )
}
