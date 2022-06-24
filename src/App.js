import {
  Navbar,
  About,
  Projects,
  Work,
  Skills
} from './components'
import Footer2 from './components/footer2/Footer2';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Work/>
      <Skills/>
      <Footer2/>
    </div>
  );
}

export default App;
