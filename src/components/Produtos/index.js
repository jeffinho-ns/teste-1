import React, { useState } from 'react'
import { IoHeartCircleOutline } from "react-icons/io5";
import tv from '../../img/tv.png'
import './style.css'

export const Produtos = () => {
    const [id, setId] = useState("")

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            
            titulo: "Monitor LED 27 Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50.",
            precode: "R$ 2.813,00",
            precopor: "R$ 2.599,00"
            
        },

        {
            id: 2,
            
            titulo: "Monitor LED 27 Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50.",
            precode: "R$ 2.813,00",
            precopor: "R$ 2.599,00"
        },
    ])

    return (
        <div>
            <ul>
                {
                    produtos.map(product => (
                        <div className="container" key={product.id}>
                            <img src={tv} alt="" width="300" />
                            <span>
                                <IoHeartCircleOutline 
                                    onClick={() => setId(product.id)}
                                    className={`${product.id === id ? 'favoritar' : ''}`}
                                />
                            </span>
                            <div className="titulo">{product.titulo}</div>
                            <div className="precode">{product.precode}</div>
                            <div className="precopor">{product.precopor}</div>
                            <small>em até <span>10x de R$ 229,00</span> sem juros<br></br><br></br></small>
                            <button 
                                className="btn-adicionar" 
                                onClick={() => setId(product.id)}
                            >
                                {`${product.id === id ? "√ adicionado" : "Adicionar"}`} 
                            </button>.
                            
                        </div>
                    ))
                }
            </ul>
           
        </div>
    )
}