import './App.css';

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

function App() {
  return (
    <div className="App">
      <div className='box'>
        <div className='container'>

          <div className="top">
            <span>Portfolio Genrator</span>
            <header>Enter Your Details</header>
          </div>

          <div className="input-field">
            <input type="text" className="input" placeholder="Name" id="" />
            <i className='bx bx-user'></i>
          </div>

          <div class="input-field">
            <input type="Password" class="input" placeholder="Password" id="" />
            <i class='bx bx-lock-alt'></i>
          </div>

          <div class="input-field">
            <input type="Password" class="input" placeholder="Password" id="" />
            <i class='bx bx-lock-alt'></i>
          </div>

          <div class="input-field">
            <input type="Password" class="input" placeholder="Password" id="" />
            <i class='bx bx-lock-alt'></i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
