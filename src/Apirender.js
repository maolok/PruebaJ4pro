import React,{useState,useEffect} from 'react';
import './Apirender.css';


function Apirender() {
    
    const [data,setData] = useState([]);
    const info = "Demo Api";

    useEffect(() =>{
        getData();

    },[])
    
    const getData = async() => {

        const url = 'http://3.137.142.169:5000/get_data';
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
        setData(data);

    }

  return (
    <div>
       <h2>{info}</h2>
       <ol className="center">
       {
       data.map(dato => (
            
            <li key={dato.id}>
                {dato.departamento}


               {

                   dato.ciudades.map(ciudades => (
                    <ul>
                       <li>{ciudades}</li>

                    </ul>
                
                   ))

                }  

            </li>
                 
          ))

       }
       </ol>
    </div>
     
  );
}


export default Apirender;
