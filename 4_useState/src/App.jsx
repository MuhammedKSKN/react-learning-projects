import './App.css'
import { useState } from 'react';
function App() {
  //değişken tanımlama işini react'te useState ile yapıyoruz
  //useState bir hooktur. Hooklar, fonksiyon bileşenlerinde state ve
  //diğer React özelliklerini kullanmamızı sağlar.
  //useState, bir state değişkeni ve bu değişkeni güncellemek için
  //bir fonksiyon döner.
  // useState, başlangıç değeri olarak bir argüman alır. '' içine yazılır.
  const [firstName, setFirstName] = useState('ENES');
  const [lastName, setLastName] = useState('YILMAZ');
  const [names, setNames] = useState(['ENES', 'YILMAZ']);
  const [userInfo, setUserInfo] = useState({ username: 'ENES', age: 25 });
  const [show, setShow] = useState(false);
  console.log(names);
  //        |          |       
  //state değişkeni  | güncelleme fonksiyonu

  const handleChange = () => {
    debugger;
    //state değişkenlerini güncellemek için güncelleme fonksiyonlarını kullanıyoruz.
    //Bu fonksiyonlar, state değişkeninin yeni değerini alır ve bileşenin yeniden render edilmesini sağlar.
    //useState ile birden fazla state değişkeni tanımlamak için
    //birden fazla useState çağrısı yapabiliriz.
    //Bu durumda, her bir state değişkeni için ayrı bir useState çağrısı
    //yapmamız gerekir.
    setFirstName('MUSTAFA');
    setLastName('KARA');
  }
  //useState bir değerini set kullanarak güncellendiğinde, bileşen yeniden render edilir.
  //Bu, bileşenin güncellenmiş state ile yeniden render edilmesini sağlar.
  //Yani state ile arttırıldığında app.jsx dosyası yeniden render edilir. 1000 satır kod varsa 1000 kez çalışıyor bu da sistemi yavaşlatır.

  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{firstName} {lastName}</div>
      <div>
        <button onClick={() => setFirstName('MUSTAFA')}>Set First Name</button>
        <button onClick={() => setLastName('KARA')}>Set Last Name</button>
      </div>
      {/* useState ile birden fazla state değişkeni tanımlamak için birden fazla useState çağrısı yapabiliriz. */}
      <div>
        <button onClick={handleChange}>Set Both Name</button>
      </div>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <div>
        {userInfo.username} - {userInfo.age}
      </div>
      <div>
        {show ? <div>{userInfo.username} - {userInfo.age}</div> : <div>Hide</div>}
      </div>
      <button onClick={() => setShow(!show)}>Toggle User Info</button>
      <div>
        {count}
      </div>
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>

    </div>



  )
}

export default App
