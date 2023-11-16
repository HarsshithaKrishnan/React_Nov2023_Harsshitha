import React,{useState} from "react";
function Toogle() {
    const[name,setName]=useState("Kaioken");
    const[count,setCount]=useState(0);
    const transformationHanlder = ()=> {
        let value=count;
        setCount(++value);
        if(count=== 3)
        {
            if(name==="Kaioken")
            setName("SuperSaiyan");
            else 
             setName("Kaioken");
             setCount(0);
        }
    };
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={transformationHanlder}>Toogle</button>
        </div>
    )
}
export default Toogle;