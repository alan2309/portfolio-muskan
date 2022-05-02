import {
  Navbar,
  About,
  Contact,
  Projects,
  Work,Footer
} from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
