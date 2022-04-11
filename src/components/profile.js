import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import img from '../assets/images/promo.png'
import img1 from '../assets/images/foto_profile.png'
import img2 from '../assets/images/pn.png'


function Content({ name, description, children }) {
  const [greetingState, setGreeting] = useState("hi")
  const home = {
    color: 'blue',
  }
  return (
    <div className="content" style={home}>
     
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={img1}></img>
      <p class="alex">Alex Stanton</p>
      <p class="pwt">Purwokerto, Jawa Tengah</p>
      <img class="img2" src={img2}></img> 
    </div>
  );
}

export default Content;
