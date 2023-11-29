import './App.css';
import logo from './dalpenguin.png';

function Tab({ title }) {
  return (
    <div className="tabBoxStyle">
      {title}
    </div>
  );
}

function App() {
  return (
    <div>
      <main className='mainStyle'>
        <img src={logo} className='logoStyle'/>
        Minuk's Life
      </main>
      <section className='tabStyle'>
        <Tab title="Content" />
        <Tab title="Sports" />
        <Tab title="Health" />
        <Tab title="Diary" />
      </section>
    </div>
  );
}

export default App;
