import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';

const UserLogin = () => {
    let history = useHistory();
    return (
        <div>
            <Button className="btnVoterLogin" onClick= {() => {history.push("/registervoter")}} >Voter Register</Button>
        </div>
    );
}

export default UserLogin; 