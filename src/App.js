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
      <Projects/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
