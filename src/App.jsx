import Navbar from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Teams from "./component/teams";
import Footer from "./component/Footer";
import Blog from "./component/Blog";
import Maintenance from "./pages/Maintenance";
function App() {
     return (
          <div>
              <Navbar />
              <Home />
              <About />
              <Services />
              <Teams />
              <Blog />
              <Footer />
               {/*<Maintenance />*/}
          </div>
     );
}

export default App;
