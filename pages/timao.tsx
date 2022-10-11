import { NextPageContext } from 'next';
import React, {useState, useEffect} from 'react';

type TimaoProps = {
    frase: string;
    autor?: string;
}

async function getFrase() {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase, autor
    }
}

export default function Timao(props: TimaoProps) {
    const [frase, setFrase] = useState<string>(props.frase);
    const [autor, setAutor] = useState<string | undefined>(props.autor);
    let contador = 0;
    useEffect(() => {
        getFrase().then((data) => {
            console.log(`Executou ${contador} vez`, data)
        });
        contador++;
    }, [frase, autor]);

  return (
    <>
        <h1>{frase ? frase : "Seja bem-vindo!"}</h1>
        {autor && <h2>{autor}</h2>}

        <button onClick={(e) => setFrase("Capricho, é fazer o melhor que você pode.")}>Mudar Frase</button>
        <button onClick={(e) => setAutor("Isabella")}>Mudar Autor</button>

    </>
  )
}

// quiser carregar os props antes de iniciar a página
Timao.getInitialProps = async (ctx: NextPageContext) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase,
        autor
    }
}