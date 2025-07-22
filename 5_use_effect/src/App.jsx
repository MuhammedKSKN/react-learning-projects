import { Children, use, useEffect, useState } from 'react'
import './App.css'

//use effect bir hooktur ve component mount olduktan sonra çalışır.
//sayfa ilk render edildikten sonra çalışır.
//bir seyin değiştiğinde de çalışabilir.
//hook ise bir fonksiyondur ve component içinde kullanılır.


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    // component mount olduktan sonra çalışacak kodlar buraya yazılır
    console.log("Her zaman Çalışır");
    //veritabanından veri çekme, api çağrısı yapma gibi işlemler burada yapılır.
    //sayfa her render edildiğinde çalışır.
    //ama sunucuyu kitleyebilir

  });

  useEffect(() => {
    // component mount olduktan sonra çalışacak kodlar buraya yazılır
    console.log("İlk render edildikten sonra çalışır");
  }, []);
  // boş array ile kullanılırsa sadece component mount olduktan sonra çalışır.
  //2. parametresi çalışma şeklini belirtler
  //sayfa yüklendiğinde 1 kez çalışması için boş array kullanılır.

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName değiştiğinde çalışır");
  }, [firstName]);

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName değiştiğinde çalışır");
  }, [lastName]);
  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName veya firstName değiştiğinde çalışır");
  }, [lastName, firstName]);

  return (

    <div>
      <div>
        <button onClick={() => setFirstName("Ahmet")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Yılmaz")}>Soyadı Değiştir</button>
      </div>
    </div>


  )
}

export default App
