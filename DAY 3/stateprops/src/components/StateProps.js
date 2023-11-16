import {useState} from "react";
function StateProps() {
    const[name,setName]=useState("Harsshitha!");
    const[num,setNum]=useState("1120");
    const[dep,setDep]=useState({dept:"Information Technology",class:"IT-A"});
    const[college,setCollege]=useState("Sri Krishna College of Engineering and Technology");
    const nameHandler = ()=> {
        setName("Mike");
    };
    const numHandler = ()=> {
        let value=num;
        setNum(++value);
    };
    return (
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi!..I am {name}</h2>
            <h2>Registration number : {num}</h2>
            <h2>Department : {dep.dept}</h2>
            <h2>Class : {dep.class}</h2>
            <h2>College : {college}</h2>
            <button onClick={nameHandler}>Change Name</button><br></br>
            <button onClick={numHandler}>Increment Number</button><br></br>
        </div>
    );
}
export default StateProps;