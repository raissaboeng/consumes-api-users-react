import React, { useState, useEffect } from 'react';
import PersonList from './components/PersonList';
import Global from "./styles/global";

export default function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getContent(){
  try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    if(response){
      let data = await response.json();
      data.sort(function(a,b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
      setUsers(data);
      setLoading(false);
    }
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    getContent();
  },[]);

  
  function deleteUser(id) {
    const remainingUsers = users.filter(user => id !== user.id);
    setUsers(remainingUsers);
  }

  return (
    <>
    <Global />
      <div className="App">

        <h1>Lista de usuários</h1>
        {loading || !users ? (
          <div> <i className="fas fa-spinner"></i> </div>
        ): (
          <PersonList listUsers={users} deleteUser={deleteUser}/>
        )}
      
      </div>
    </>
  );

}