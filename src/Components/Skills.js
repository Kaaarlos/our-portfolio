import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
<<<<<<< HEAD
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
=======
>>>>>>> e960d24 (se agrego mi portafolio completo)
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h3>Carlos</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>3D Models</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
        <br></br>        <br></br>        <br></br>        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h3>Mariana</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Videogames</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>pyhthon</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

        <br></br>        <br></br>        <br></br>        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h3>Alejandro</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Rust</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
=======
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
>>>>>>> e960d24 (se agrego mi portafolio completo)
