import './App.css';
import intro from './img/intro.png'
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='intro'>
        <img className='intro-img' src={intro} alt='Get Engaged Conference participants group'></img>
        <h1 className='intro-title'>Get Engaged Conference</h1>
      </div>
      
    </div>
  );
}

export default App;
