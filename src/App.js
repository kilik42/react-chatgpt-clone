
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Let's build a chat app</h1>
      <section className='side-bar'>  
          <button>+ new chat</button>
          <ul className="history">
            <li>bludd</li>
          </ul>
          <nav>
              <p>made by marvin</p>
            </nav>
        </section>
      <section className='main'>   
       <h1>Ania GPT</h1>
        <ul className="messages">
          <li>Hi</li>
          <li>How are you?</li>
          <li>What's up?</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
