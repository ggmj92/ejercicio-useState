import React, { useState } from 'react';
import './App.css'

// function App() {
//  const [name, setName] = useState('Sofia');
//  const [newName, setNewName] = useState('');

//  const handleClick = (newTeacherName) => {
//     setName(newTeacherName);
//  };

//  const teachers = ['Data', 'Reyes', 'Yolanda'];

//  return (
//     <div>
//         <h2>Teacher Name: {name}</h2>
//         <ul>
//             {teachers.map((teacher, index) => (
//                 <li key={index} onClick={() => handleClick(teacher)}>
//                     {teacher}
//                 </li>
//             ))}
//         </ul>
//     </div>
//  );
// };

function App () {
 const [name, setName] = useState('Sofia');
 const [newName, setNewName] = useState('');
 const [teachers, setTeachers] = useState(['Data', 'Reyes', 'Yolanda']);

 const changeName = (event) => {
    event.preventDefault();
    if (newName.trim() !== '') {
        if (!teachers.includes(newName)) {
            setTeachers([...teachers, newName]);
        }
        setName(newName);
        setNewName('');
    }
 };

 return (
    <div>
        <h2>Teacher Name: {name}</h2>
        <form onSubmit={changeName}>
            <input 
            type="text" 
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder='Add a Name'
            />
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {teachers.map((teacher, index) => (
                <li key={index} onClick={() => setName(teacher)}>
                    {teacher}
                </li>
            ))}
        </ul>
    </div>
 );
};

export default App;
