import React, { useState, useEffect } from "react";
import axios from 'axios'

// const App = () => {

//   const [usuarios, setUsuarios] = useState([
//     { name: "Rodolfo", email: "Rodolfo@saldivar.com", enlace: "Rodolfo.com" },
//     { name: "Platzi", email: "platzi@platzi.com", enlace: "platzi.com" }
//   ]);

//   return (
//     <div className="margen">
//       <table className="tabla">
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Correo</th>
//             <th>Enlace</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usuarios.map(item => (
//             <tr>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.enlace}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(resp => {
        setUsers(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.link}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;