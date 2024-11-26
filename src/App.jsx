import Navbar from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Teams from "./component/teams";
function App() {
     return (
          <div>
               <Navbar />
               <Home />
               <About />
               <Services />
               <Teams/>
          </div>
     );
}

export default App;
