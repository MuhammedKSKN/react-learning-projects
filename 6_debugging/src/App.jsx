import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);
  const ortalamaBul = () => {
    const ortalama = (vize1 + vize2) / 2;
    console.log("Ortalama:", ortalama);
  }

  //fonksiyon altına üstüne debgger atarak debug yapabilirsiniz
  //sonra sayfada f12 a basarak source kısmında debugger ı görebilirsiniz
  return (
    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
        {/* burada e.target.value string bir değer döndürür */}
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalama Bul</button>
      </div>
    </div>
  )
}

export default App
