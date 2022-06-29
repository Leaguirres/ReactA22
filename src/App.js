import React from 'react'//para utilizar as tags html, jsx
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAle from './components/basicos/NumeroAle'
import Modelo from './components/Modelo'
import './app.css'
import Nome from './components/basicos/Nome'
import Formulario from './components/basicos/Formulario'

export default function App(props) {
    return (
        <div className='app'>
      
            <h1>Fundamentos do React</h1>

            <div className='cards'>

            <Modelo titulo='formulario' color='blue'> <Formulario/> </Modelo>

            <Modelo titulo='utilizando UseState' color='#d2691e'> <Nome/> </Modelo>

            <Modelo titulo="Primeiro componente" color='yellow'> <Primeiro /> </Modelo>

            <Modelo titulo="Utilizando Parâmetros" color='blue'><ComParametro titulo="Frio em Sp" subtitulo="Neve" /></Modelo>

            <Modelo titulo="Utilizando Parâmetros" color='pink'><ComParametro titulo="Calor no Rio de Janeiro" subtitulo="Chuva de verão" /></Modelo>

            <Modelo titulo="Utilizando Parâmetros" color='black'><ComParametro titulo="Start A22" subtitulo="lindos" /></Modelo>

            <Modelo titulo="Utilizando Fragmento" color='green'><Fragmento /></Modelo>

            <Modelo titulo="Números aleatórios" color='puplenpm'><NumeroAle min={1}  max={80}/></Modelo>

            <Modelo titulo="Números aleatórios" color='brown'><NumeroAle min={10}  max={80}/></Modelo>

            <Modelo titulo="Números aleatórios"><NumeroAle min={30}  max={80}/></Modelo>

            <Modelo titulo="Números aleatórios"><NumeroAle min={50}  max={80}/></Modelo>
          







            </div>

            </div>


       
    )
}