import Navbar from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Teams from "./component/teams";
import Maintenance from "./pages/Maintenance";
import Footer from "./component/Footer";
function App() {
     return (
          <div>
               {/* <Navbar />
               <Home />
               <About />
               <Services />
               <Teams/>
               <Footer/> */}
               <Maintenance/>
          </div>
     );
}

export default App;
