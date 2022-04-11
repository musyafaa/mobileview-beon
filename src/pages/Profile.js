import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Content from "../components/profile";
import Footer from "../components/Footer";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="App">
      
      <Content name={"Profile"} />
      <Button id="back" onClick={() => navigate("/")}>Back To Home</Button>
      
    </div>
  );
}

export default Profile;
