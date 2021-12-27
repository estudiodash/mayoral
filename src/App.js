import {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';




function App() {
  const [datos, setDatos]= useState([]);
  const [tablaDatos, setTablaDatos]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const colums =document.getElementById('box');


function changeClass() {
  colums.classList.add('boxTwo');
  colums.classList.remove('box');
  console.log(colums);
}

function changeClassFour() {
  colums.classList.add('box');
  colums.classList.remove('boxTwo');
  console.log(colums);
}

const peticionGet=async()=>{
  await axios.get("/json/datos.json")
    .then(response=>{
    setDatos(response.data);
    setTablaDatos(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaDatos.filter((element)=>{
    if(element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return element;
    }
  });
  setDatos(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

  return (
    <div className="App">
       <header>               
          <nav>
            
              <button  onClick={changeClass} className="icons-colums" ><i className="fa fa-minus fa-2x"></i></button>
              <button  onClick={changeClassFour}  className="icons-colums" ><i className="fa fa-plus fa-2x"></i></button>
        </nav>
        <form className="search-from">
          <span className="icon"><i className="fa fa-search"></i></span>
          <input 
            id="search"
            value={busqueda}
            placeholder="Buscar..."
            onChange={handleChange} />
        </form>
      </header>
     <div id="box" className="box">
            {datos && 
              datos.map((dato)=>(
            <div id="item" className="item">
            <div className="info" >
              <div className="info">
                <img src={`${process.env.PUBLIC_URL}/img/${dato.img}`} alt={dato.nombre} width="auto" className="img-fluid"/>
              </div>
            <h2>{dato.name}</h2> 
            <p className="price acount">
              {dato.discount}
                
            </p>
            <p className="price">
              {dato.price}
                
            </p>
            <p>
              <button className="more-colours">
                más colores
                </button>
            </p>
            <p><button className="button" >añadir</button></p>
            </div>
          </div>
           ))}

     </div>
    </div>
  );
}

export default App;