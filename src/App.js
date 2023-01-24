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

      <div className='quote'>
        <h2 className='quote-title'>NOT A TRADITIONAL ACADEMIC CONFERENCE</h2>
        <p className='quote-text'>Growing a network of young social entrepreneurs and change agents who are actively using the liberal arts as a tool to develop solutions to challenges in their communities.</p>
      </div>

    </div>
  );
}

export default App;
