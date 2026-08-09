import React from "react";
function MapFunction() {
  const students=[
    {id:1,name:"Bhavya",branch:"CSE",section:"D"},
    {id:2,name:"Gayu",branch:"CSE",section:"A"},
    {id:3,name:"Tej",branch:"CSE",section:"D"},
    {id:4,name:"Vyshu",branch:"CSE",section:"B"},
  ];
  return(
        <div>
            <h1>Students List </h1>
            {students.map((student)=>(
                <p key={student.id}>
                    {student.name}-{student.branch}-{student.section}
                </p>

            ))}
            <h1>Student Deatils as Table</h1>
            <table border="1" style={{margin:"auto" ,alignContent:"center"}}>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=>(
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                            <td>{student.section}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
  );
}
export default MapFunction;