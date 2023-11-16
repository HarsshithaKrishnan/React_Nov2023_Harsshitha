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
            <h1>EMPLOYEE DETAILS</h1>
            <hr></hr>
            <table>
                {employee.map((emp)=>(
                    <tr>
                        <td>ID: {emp.id}</td>
                        <td>Name: {emp.Name}</td>
                        <td>age: {emp.age}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    );
}
export default ListItems;