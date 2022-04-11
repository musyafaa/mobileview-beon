import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Img from '../assets/images/icon_notification.png'
import { getUsers } from "../services/axios";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    console.log(users?.data?.data);
    setUsers(users?.data?.data || []);
  };
  return (
    <div className="App">
     
    <Row>
    <Col sm={8}><Content name={"Find Your Best Workshop"} >     
        
      
      <ul>
        {users.map((item) => {
          return <li>{item.first_name}</li>;
        })}
      </ul>
      
    </Content>
    <Link to="/profile">
          <Button class="btn ">profile</Button>
    </Link>
    </Col>
  </Row> 
  
      
    </div>
  );
}

export default Home;
