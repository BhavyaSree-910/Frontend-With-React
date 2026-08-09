import React from 'react';
function Students(prop){
    return(
        <div>
            {prop.students.map((Student)=>(
                <p key={Student.id}>
                    {Student.name}-{Student.branch}-{Student.section}
                </p>
            ))}
        </div>
    )
}
export default Students;