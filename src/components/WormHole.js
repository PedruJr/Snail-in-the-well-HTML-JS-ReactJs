import React, { useState } from "react";
import worm from "../assets/worm.png";
import "./wormHole.css";

export default function WormHole() {
  const [hole, setHole] = useState(20);
  const [climb, setClimb] = useState(5);
  const [fall, setFall] = useState(2);
  const [stop, setStop] = useState(1);
  const [totalClimb, setTotalClimb] = useState(0);
  const [index, setIndex] = useState(0);
  const [css, setCss] = useState("noColor");
  const [text, setText] = useState("Inicie o percurso!");

  const data = {
    hole,
    climb,
    fall,
    stop,
    totalClimb,
    index,
    css,
  };

  function cssYellow() {
    setCss("yellow");
  }

  function cssGreen() {
    setCss("green");
  }

  function startClimbing(event) {
    event.preventDefault();

    var half = data.hole / 2;
    let total = 0;
    let i = 0;
    let oneSecond = 0;

    setText("A minhoca iniciou sua jornada!");
    setCss("none");

    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    function oneSec() {
      return sleep(1000).then(console.log("one second..."));
    }

    console.log(data);

    const forLoop = async () => {
      for (; total <= data.hole; ) {
        oneSecond = await oneSec();

        total = total + data.climb - data.fall;
        console.log(total);
        i++;

        if (total <= half) {
            setText("A minhoca subiu: "+i+" vezes")
        }
        if (total >= half) {
          cssYellow();
          setText(
            "A minhoca esta na metade do buraco! subindo um total de: " +
              i +
              " vezes"
          );
          console.log(data.css);
        }
        if (total > data.hole) {
          cssGreen();
          setText(
            "A minhoca saiu do buraco! subindo um total de: " + i + " vezes"
          );
          console.log("green works");
        }
      }
    };

    forLoop();
  }

  function setValues(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <header className="App-header">Escape do buraco</header>

      <div className="content">
        <section className="inputs">
          <form onSubmit={setValues}>
            <span className="inputs-span">Defina os valores em cm! </span>
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
