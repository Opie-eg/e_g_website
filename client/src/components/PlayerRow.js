import React, {useState, useEffect} from 'react'
import {ListGroup } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import the Bootstrap CSS
import '../styles.css'; // Import your CSS file

function PlayerRow () {
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/guild/members')
        .then(response => {
          setMembers(response.data);
          
        })
        .catch(error => {
          setError(error);
        });
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    //  let class_color = "d-flex justify-content-between align-items-center dark-mode wow-" + members.player_class
    //  let spec_image = "/"+ members.player_class + "/" + members.player_spec +".jpg"


return(
    <ListGroup as="ol" numbered>
    {members.map(member => (
        <ListGroup.Item key={member.id} as="li" className= {"d-flex justify-content-between align-items-center dark-mode wow-" + member.player_class}>
        <div className="ms-0 me-auto d-flex align-items-center">
        <img
              src= {"/"+ member.player_class + "/" + member.player_spec +".jpg"} // Replace with the actual path to your logo image
              alt= "player spec"
              width="30"
              height="30"
              className="ms-1 me-auto d-inline-block align-top move-left spec-icons"
            />
          <div className="fw-bold ms-4 me-auto">{member.name}</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">{member.role}</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">ilvl</div>
        </div>
        </ListGroup.Item>
      ))}
   </ListGroup>
)


}
export default PlayerRow;