
import "./App.css";
import Navbars from "./Components/Nav/Navbars";
import Home from "./Pages/Home";
import Footer from "./Components/Nav/Footer/Footer";
import Contact from "./Pages/Contact";
import Book from "./Pages/Book";
import Services from "./Pages/Services";

import LatestNews from "./Pages/LatestNews";





function App() {
  
  return (
  <>
       <Navbars/>
       <Home />
       <Book />
       <Services />
       <LatestNews />
       <Contact />
       <Footer/> 

  </>

  );
}
export default App;
