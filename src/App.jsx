import Navbar from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Teams from "./component/teams";
import Maintenance from "./pages/Maintenance";
function App() {
     return (
          <div>
               <Navbar />
               <Home />
               <About />
               <Services />
               <Teams/>
               {/* <Maintenance/> */}
          </div>
     );
}

export default App;
