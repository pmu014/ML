import './App.css';
import logo from './dalpenguin.png';

function App() {
  const style = {
    height: "120px",
    fontSize: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
  };
  
  const logoStyle = {
    height: "90px",
    padding: "20px",
  }

  const tabStyle = {
    height: "80px",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
  };

  const tabBoxStyle = {
    width: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "25px",
    border: "1px solid black",
  };

  return (
    <div>
      <main style={style}>
        <img src={logo} style={logoStyle}/>
        Minuk's Life
      </main>
      <section style={tabStyle}>
        <div style={tabBoxStyle}>
          Content
        </div>
        <div style={tabBoxStyle}>
          Sports
        </div>
        <div style={tabBoxStyle}>
          Health
        </div>
        <div style={tabBoxStyle}>
          Diary
        </div>
      </section>
    </div>
  );
}

export default App;
