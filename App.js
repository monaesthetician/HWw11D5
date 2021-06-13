
// I added Carousel images with text caption
// Created a new logo and put on Navbar 
// added the new logo on Footer section
// Since the theme color was changed so I changed color on About page to be in the same theme of the page color.






import React, { Component } from 'react';
import DemoCarousel from './pages/carouselDontUse';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";
import './Carousel.css';
import ContactForm from './pages/ContactForm';
import Footer from './Components/Footer';
import About from './pages/About';
import Covid from './Components/Covid';
import CarouselNew from './pages/carouselnew';
export default class App extends Component {
  render() {
    return (
      
      <div>
           <BrowserRouter>
              <Navbar />
               <CarouselNew/>      
       {/* <Route exact path='/' component= { CarouselNew } />   */}
                    <Route path='/about' component= { About } />
                    <Route path='/Covid' component= { Covid } />
                    <Route path='/new' component= { CarouselNew } />
                    <Route path='/contact' component= { ContactForm }/>
                    <Footer/>
           </BrowserRouter>
      </div>
    )
  }
}