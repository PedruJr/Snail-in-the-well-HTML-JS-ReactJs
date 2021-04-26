import React, { useState } from "react";
import worm from "../assets/worm.png";
import "./wormHole.css";

// COMPONENTE
export default function WormHole() {

  // VARIAVEIS DINAMICAS
  const [hole, setHole] = useState(20);
  const [climb, setClimb] = useState(5);
  const [fall, setFall] = useState(2);
  const [css, setCss] = useState("noColor");
  const [text, setText] = useState("Inicie o percurso!");
  const [topText, setTopText] = useState("Defina os valores em cm!");

  //DADOS PARAMETROS PARA A LOGICA
  const data = {
    hole,
    climb,
    fall,
    css,
  };

  // ESTRUTURA DO METODO PARA FUGIR DO BURACO
  function startClimbing(event) {
    //PREVINIR ATUALIZAÇÃO NA PAGINA
    event.preventDefault();

    // VARIAVEIS AUXILIARES
    var half = data.hole / 2;
    let total = 0;
    let i = 0;

    //RESETS E SETS P/ ANUNCIAR O INICIO DA FUNÇÃO
    setText("A minhoca iniciou sua jornada!");
    setCss("none");

    //METODO PROMISE PARA ESPERAR O TEMPO DESEJADO ATRAVEZ DE ASYNC AWAIT
    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    function oneSec() {
      return sleep(1000).then(console.log("one second..."));
    }

    //VERIFICAR NO CONSOLE A DATA RECEBIDA
    console.log(data);

    //ESTRUTURA FOR DENTRO DE VAR P/ APLICAR ASYNC E AWAIT
    const forLoop = async () => {

      for (; total <= data.hole; ) {
        await oneSec();

        total = total + data.climb - data.fall;
        console.log(total);
        i++;

        if (total <= half) {
          setText("A minhoca subiu: " + i + " vezes");
        }

        if (total >= half) {
          setCss("yellow");
          setText(
            "A minhoca esta na metade do buraco! subindo um total de: " +
              i +
              " vezes"
          );
        }
        if (total > data.hole) {
          setCss("green");
          setText(
            "A minhoca saiu do buraco! subindo um total de: " + i + " vezes"
          );
        }
      }
    };
    //CHAMANDO O LOOP
    forLoop();
  }

  //FUNÇÃO PARA ATIVAR O SUBMIT DO FORMS
  function setValues(event) {
    event.preventDefault();
    console.log(data);
    setTopText("Valores definidos!");
  }

  return (
    <div>
      <header className="App-header">Escape do buraco</header>

      <div className="content">
        <section className="inputs">
          <form onSubmit={setValues}>
            <span className="inputs-span">{topText}</span>
            <input
              type="number"
              onChange={(e) => setHole(parseInt(e.target.value))}
              placeholder="Definir comprimento do buraco..."
            ></input>
            <input
              type="number"
              onChange={(e) => setClimb(parseInt(e.target.value))}
              placeholder="Definir altura ao subir..."
            ></input>
            <input
              type="number"
              onChange={(e) => setFall(parseInt(e.target.value))}
              placeholder="Definir a distancia ao cair..."
            ></input>
            <button className="button" type="submit">
              Definir
            </button>
          </form>
        </section>

        <section className="worm-section">
          <div className={css}>
            <img src={worm} alt="Logo" />
          </div>
          <span className="worm-view">{text}</span>
          <button className="button" type="submit" onClick={startClimbing}>
            Iniciar
          </button>
        </section>
      </div>
    </div>
  );
}
