import { useState } from "react";
import MyUI from "./pages/MyUI";
import NameInput from "./pages/NameInput";
import Son from "./pages/Son";
import Daughter from "./pages/Daughter";



const App =() => {
  // const name ="techspire";
  // return <NameInput></NameInput>;  
  
    // <div style={{backgroundColor:"red"}}> // it returns two node(two div) but app must return only one div  or node 
    //   <p>{name}</p>    //dynamic concept             
    //   <p>I am react</p>
    // </div>
    // <>
    // <p>{name}</p>
    // <p>I am a react</p> 
    // </>
    
    // const[jagga, setJagga] = useState("Durbar marg"); //useState = hook
    // return <Son property={jagga} changeJagga={setJagga}/>  
    //<Daughter property={jagga}  changeproperty={setJagga}/>
        //</> 
    const[products,setProduct]=useState([
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Smartphone", price: 800 },
      { id: 3, name: "Headphones", price: 150 }
    ])
      return (
        <>
          {products.map((item) => (
            <div key={item.id}>item name is {item.name}</div>
          ))}
        </>
      );
};
export default App;
