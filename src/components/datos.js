import React, { useEffect, useState } from "react"

function useDatos() {
  const [datos, setPostres] = useState([])

  useEffect(() => {
    fetch("json/datos.json")
      .then(response => response.json())
      .then(datos => {
        setPostres(datos)
      })
  }, [])

  return datos
}

export default function Datos() {

  const datos = useDatos()

  return (
          <div class="box">
            {datos.map(item => (
              
                <div class="item">
                  <div class="info" key={item.id}>
                    <div class="info">
                      <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.nombre} width="30px" className="img-fluid"/>
                    </div>
                  <h3>{item.name}</h3> 
                  <p class="price acount">
                    {item.discount}
                      <span class="price-currencySymbol">
                        €
                      </span>
                  </p>
                  <p class="price">
                    {item.price}
                      <span class="price-currencySymbol">
                      €
                      </span>
                  </p>
                  <p>
                    <button class="more-colours">
                      más colores
                      </button>
                  </p>
                  <p><button class="button" >añadir</button></p>
                  </div>
                </div>
        ))}
          </div>

  )
}