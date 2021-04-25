import React, { useState } from 'react'
import worm from '../assets/worm.png';
import './wormHole.css';

export default function WormHole() {

    const[hole, setHole] = useState('20');
    const[climb, setClimb] = useState('5');
    const[fall, setFall] = useState('2');
    const[stop, setStop] = useState('1');
    const[totalClimb, setTotalClimb] = useState('');
    const[index, setIndex] = useState('0');
    const[css, setCss] = useState('none');
    
        const number = 2;
            const data = {
            hole,
            climb,
            fall,
            stop,
            totalClimb,
            index,
            css
        };
    
     function startClimbing  (e,data) =>{    
        event.preventDefault();


        var half = data.hole/2;
        console.log(number);
        
        for(var i; i < 10; i++) {
            var calc;
            calc++;
            setTotalClimb(calc);
            console.log(totalClimb);
        }
    }

  
        return(
            <div>
                <header className="App-header">
                    Fuga da minhoca
                </header>

                <div className="content">
                    <section className="inputs">
                    <form>
                        <span className="inputs-span">Defina os valores! </span>
                        <input type="text" id="hole" placeholder="Definir comprimento do buraco..."></input>
                        <input type="text" id="climb" placeholder="Definir altura ao subir..."></input>
                        <input type="text" id="fall" placeholder="Definir a distancia ao cair..."></input>
                        <button className="button" type="submit">Definir</button>
                    </form>
                    </section>

                    <section className="worm-section">
                    <div className="">
                        <img src={worm} alt="Logo" />
                    </div>
                    <span className="worm-view"> Go minhoca!</span>
                    <button className="button" type="submit" onClick={startClimbing}>Iniciar</button>
                    </section>
                </div>
            </div>
        )
    }
