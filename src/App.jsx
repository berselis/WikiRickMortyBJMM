import './assets/css/App.css';
import HeaderComp from './components/HeaderComp';
import WikiBanner from './components/WikiBanner';
import WikiFinder from './components/WikiFinder';


function App() {
  return (
    <div className='body-content container-fluid'>
      <header>
        <HeaderComp />
        <WikiBanner />
      </header>
      <main>
        <WikiFinder/>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
