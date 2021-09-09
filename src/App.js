import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Faqs from "./pages/Faqs";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import MessengerCutomerChat from 'react-messenger-customer-chat'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch/>
        <Route path="/" component={Home} />
        <Route path="/" component={Features} />
        <Route path="/" component={Packages} />
        <Route path="/" component={Blog} />
        <Route path="/" component={Faqs}/>
        <Footer/>
        
      <MessengerCutomerChat style={{maxWidth:"30px", background:"aqua"}}
      pageId="213155580730598" appId="861192267848327"
      /> 
    </Router>
  );
}

export default App;

//Automatically refresh the app without reloading the webpage
if (module.hot) {
  module.hot.accept();
}
