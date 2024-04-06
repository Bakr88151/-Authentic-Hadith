import './App.css';
import { useState } from 'react';

function App() {
  const [hadith, setHadith] = useState("");

  async function clickHnadler(){
    const hd = await gethadith();
    console.log(hd)
    setHadith(hd);
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="text">{hadith}</div>
        <button onClick={clickHnadler}>get me a hadith</button>
      </div>
    </div>
  );
}

async function gethadith() {
  try {
    const response = await fetch('https://random-hadith-generator.vercel.app/bukhari/');

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const responseData = await response.json();

    const hadithEnglish = responseData.data.hadith_english;

    return hadithEnglish;
  } catch (error) {
      return error.message;
  }
}

export default App;
