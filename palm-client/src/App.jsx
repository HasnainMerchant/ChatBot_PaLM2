import { useState, useEffect } from "react"

function App() {

  const [serverData, setServerData] = useState('');
  const [userPrompt, setUserPrompt] = useState('');

  function handleSubmit() {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'prompt': userPrompt})
    })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data)
        console.log(data);
      });
  }

  function handleInput(event) {
    setUserPrompt(event.target.value);
  }

  return (
    <main style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <h1 style={{padding: '10px', marginBottom: '0'}}>MyPrompter</h1>
      <div style={{margin: '0', flexGrow: '1', overflowY: 'scroll'}}>
        <div style={{width: '100%', height: '100%'}}>
          <article style={{margin: '0'}}>
            {serverData}
          </article>
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'end', backgroundColor: '#222', padding: '10px'}}>
        <textarea onChange={handleInput} style={{margin: '0', flexGrow: '1', overflowY: 'hidden'}} placeholder="Type In Your Prompt"/>
        <button style={{margin: '0', flex: '1', marginLeft: '10px'}} onClick={handleSubmit}>Go</button>
      </div>
    </main>
  )
}

export default App
