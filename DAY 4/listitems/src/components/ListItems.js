import React,{useState} from "react";
function ListItems()
{
    const[students]=useState([
        {
            id:1,
            name:"JOHN",
            age:22,
        },
        {
            id:2,
            name:"MIKE",
            age:23,
        },
        {
            id:3,
            name:"ZAYN",
            age:24,
        },
    ]);
    return(
        <div>
            <h1>LIST ITEMS</h1>
            <hr></hr>
            <ul style={{ listStyleType:"none"}}>
                {students.map((student)=>(
                    <li key={student.id}>
                        <h2>ID: {student.id}</h2>
                        <p>NAME: {student.name}</p>
                        <p>AGE: {student.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ListItems;