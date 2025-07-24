import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  const BASE_URL = 'http://localhost:3001'

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + '/users');
    console.log(response.data);
  }

  const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + '/users/' + id);
    console.log(response.data);
  }
  //getUserById fonksiyonu, belirli bir kullanıcıyı id ile alır.
  //template literals kullanarak url'yi dinamik hale getirebilirsin js dersler 94

  const createUser = async (user) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    console.log(response.data);
  }
  //Linki dinamik hale getirmek için template literals kullanabilirsin.
  //responsu yakalamasan da olur test için o 


  //async ve await kullanarak asenkron fonksiyonlar oluşturabiliriz.
  //Bunu js dersleri 108-110. video izleyebilirsin
  useEffect(() => {
    //getAllUsers();
    //getUserById(1);

    const newUser = {
      name: 'Enes',
      age: 25,
      email: 'enes@example.com',
      city: 'İstanbul'
    };
    createUser(newUser);

    // useEffect, component mount olduğunda çalışacak ve getAllUsers fonksiyonunu çağıracak.
  }, []);

  return (
    <div>
      <h1>Enes</h1>
    </div>
  )
}

export default App
