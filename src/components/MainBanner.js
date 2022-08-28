import React from 'react' 
import Newsletter from './Newsletter'
// import globalStyles.css
import Video from "../assets/video/promo-video.mp4";
import Shape01 from "../assets/images/shape/1.png";
import Shape02 from "../assets/images/shape/2.png";
import Shape03 from "../assets/images/shape/astronauta.webp";
import Shape04 from "../assets/images/shape/line.webp";


import './globalStyles.css'

 
class MainBanner extends React.Component {
  state = {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    isOpen: false
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  makeTimer = () => {
    let endTime = new Date('Jul 23, 2022 20:00:00 PDT')
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < '10') {
      hours = '0' + hours
    }
    if (minutes < '10') {
      minutes = '0' + minutes
    }
    if (seconds < '10') {
      seconds = '0' + seconds
    }
    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.makeTimer()
    }, 1000)
  }
  render() {
    return (
      <React.Fragment>
        

        <div className="main-banner video-banner" >
          <video loop muted autoPlay poster="#" className="video-background">
            <source
              src={Video}
              type="video/mp4"
            />
          </video>

          <div>
            <div style={{ padding: '0px' }}>
              <div className="main-banner-content banner-content-center">
                <p>
               
                </p>
                <h1>
                  Recursos gráficos que todo <span> Diseñador</span> <br />{' '}
                  necesita en <b>2</b>
                  <b>0</b>
                  <b>2</b>
                  <b>2</b>
                </h1>
                <ul>
                  <li>
                    <i className="icofont-compass"></i> Lima, Perú{' '}
                  </li>
                  <li>
                    <i className="icofont-calendar"></i>  07 de Mayo, 2022{' '}
                    (Evento Online - Sin costo)
                  </li>
                </ul>
                <div className="button-box">
                    
                    <Newsletter />

                  <div className="event-countdown">
                    <div id="timer">
                      <div id="days">
                        {this.state.days} <span>Días</span>
                      </div>
                      <div id="hours">
                        {this.state.hours} <span>Horas</span>
                      </div>
                      <div id="minutes">
                        {this.state.minutes} <span>Minutos</span>
                      </div>
                      <div id="seconds">
                        {this.state.seconds} <span>Segundos</span>
                      </div>
                    </div>
                    {/* Crear formulario para que el usuario pueda ingresar su nombre y correo */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape1">
            <img  src={Shape01} alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src={Shape02} alt="shape" />
          </div>
          <div className="shape3 rotateme">
            <img style={{width:'25%', marginTop:"200px" }} src={Shape03} alt="shape" />
          </div>
          <div className="shape4">
            <img src={Shape04} alt="shape" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MainBanner