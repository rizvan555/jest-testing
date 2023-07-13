import './App.css';

function App({ suffix }) {
  return (
    <div className="App">
      <p>Modern Testing</p>
      <button>Button</button>
      <button>Button1</button>
      <label htmlFor="user-name">Mylabel</label>
      <input type="text" id="user-name" />
      <input type="text" placeholder="Hallo" />
      <input type="text" value="Modern Testing" />
      <img src="#" alt="MyTest" />
      <h1 title="mytest">My Test</h1>
      <div data-testid="myTestId">MyTestId</div>
      <ul>
        <li>product1</li>
        <li>product2</li>
        <li>product3</li>
      </ul>
      {suffix ? suffix : 'Suffix yoxdur'}
    </div>
  );
}

export default App;
