import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import img from '../assets/images/promo.png'
import img1 from '../assets/images/Search.png'
import img2 from '../assets/images/filter_icon.png'
import img3 from '../assets/images/vespa.png'
import img4 from '../assets/images/toyota.png'
import img5 from '../assets/images/nissan.png'
import img6 from '../assets/images/ktm.png'
import img7 from '../assets/images/duacti.png'
import img8 from '../assets/images/audy.png'
import img9 from '../assets/images/play.png'

function Content({ name, description, children }) {
  const [greetingState, setGreeting] = useState("hi")
  const home = {
    color: 'blue',
  }
  return (
    <div className="content" style={home}>
     
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={img}/>
      <img class="search" src={img1}/>  
      <img class="filter" src={img2}/>
      <Row id="near">
        <Col xs={6}><h5 class="near">Nearest Gerage</h5> </Col>
        <Col xs={6}><p class="view">View More</p></Col>
      </Row>
      <Row id="item">
        <Col><img src={img3}/></Col>
        <Col><img src={img4}/></Col>
       </Row>    
       <Row id="pop">
        <Col xs={6}><h5 class="near">Popular Garage</h5> </Col>
        <Col xs={6}><p class="view">View More</p></Col>
      </Row>  
      <img class="nissan" src={img5}/>
      <img class="with" src={img6}/>
      <img class="with" src={img7}/>
      <img class="with" src={img8}/>
      <p class="bot">Harga Promo di Bulan Ramadhan!</p>
      <p class="bot1">Maksimalkan service kendaraan Anda sebelum mudik libur Ramadhan dengan harga Promo.</p>
      <img class="play" src={img9}/>
      <p class="bot2">Syarat & Ketentuan | Pusat Bantuan</p>
      <p class="bot2">Copyright © 2022 Beon. All Rights Reserved</p>
     
    </div>
  );
}

export default Content;
