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


  //async ve await kullanarak asenkron fonksiyonlar oluşturabiliriz.
  //Bunu js dersleri 108-110. video izleyebilirsin
  useEffect(() => {
    getAllUsers();
  }, []);
  // useEffect, component mount olduğunda çalışacak ve getAllUsers fonksiyonunu çağıracak.

  return (
    <div>
      <h1>Enes</h1>
    </div>
  )
}

export default App
