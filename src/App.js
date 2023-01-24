import './App.css';
import intro from './img/intro.png';
import info1 from './img/Poster.jpeg';
import info2 from './img/earth.png';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <h3 className='quote-text'>Growing a network of young social entrepreneurs and change agents who are actively using the liberal arts as a tool to develop solutions to challenges in their communities.</h3>
      </div>

      <div className='info'>

        <div className='info-wrapper'>
          <img className='info-img' src={info1} alt='Girl with a poster' />

          <div className='info-text-wrapper'>
            <h4 className='info-title'>ABOUT THE CONFERENCE</h4>
            <p className='info-text'>The Get Engaged Conference brings together students from across the world to develop community leadership skills and collaborate on solutions to local and global challenges. Workshops focus on leadership, public speaking, networking, social media, community partnerships, innovation and creativity, fundraising and grant writing, and emotional intelligence.</p>
          </div>

        </div>

        <div className='info-wrapper'>

          <div className='info-text-wrapper'>
            <h4 className='info-title'>GLOBAL ENGAGEMENT FELLOWS</h4>
            <p className='info-text'>Global Engagement Fellows promote and coordinate thematic civic engagement projects across international network institutions. Fellows have developed and sustained a civic engagement project and demonstrated leadership skills and a desire and aptitude for working with others.</p>
            <button className='info-button'>MEET THE 2022–23 GLOBAL FELLOWS</button>
          </div>

          <img className='info-img' src={info2} alt='Planet Earth' />
        </div>

      </div>

      <Footer />
      
    </div>
  );
}

export default App;
