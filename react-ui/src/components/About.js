import React, {Component} from 'react';
// import {Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Element} from 'react-scroll';


class About extends Component {

  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

  scroller.scrollTo('scroll-about', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 40, // Scrolls to element + 50 pixels down the page
})

  }

  render(){
    return(
 <Element name="scroll-about">
    <section id="about">
         <div className="row">

  <div className="three columns">

            {/* <div className="my-avatar"></div> */}

           </div>

            <div className="ten columns">
              <div>
                <div>
                  <h2>About Me</h2>

                  <p>
                  Well, about me, I love programming: it is kind of building amazing things just using a text editor. 
                  <br/>
                  I remember when I was a child and played video-games that I had a better time creating custom levels or even modifying a video-game by making a mod than actually playing it. 
                  <br/>
                  I have a pretty good level of web technologies:  HTML, CSS, JavaScript (both from Node.js and the web browser), although I am focused on React.
                  
                  </p>
                </div>
              </div>



               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
   						   <span>Kun Zhang</span><br/>
   						  
                        <span>kevinkunzhangui@gmail.com</span>
   					   </p>

                  </div>

                  <div className="columns download">
                     <p>
                        <a href={process.env.PUBLIC_URL + '/cv.pdf'} className="button" download><i className="fa fa-download"></i>Download Resume(简历）</a>
                   </p>
                  </div>

               </div>

            </div>

         </div>

      </section>
    </Element>
    );
  }
}

export default About;
