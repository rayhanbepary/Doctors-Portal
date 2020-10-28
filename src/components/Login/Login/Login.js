import React, { useContext } from 'react';
import LoginImg from '../../../images/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then( res => {
            setLoggedInUser(res);
            history.replace(from);
        })
    }

    const login ={
        border: '2px solid #f1f1f1',
        padding: '10px',
        borderRadius: '50px',
        marginTop: '30px',
        cursor: 'pointer'
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center" style={{height: '400px'}}>
                    <div style={{border: '1px solid #000000',padding: '40px',width: '100%',marginTop: '170px',borderRadius: '10px'}}>
                        <h3 className="text-center">Login</h3>
                        <div style={login} className="google-login" onClick={googleSignIn}>
                            <FontAwesomeIcon className="mr-5" icon={faGoogle} /> 
                            <span>Continue with Google</span>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={LoginImg} alt="login image" style={{width: '100%', height: '100vh'}}/>
                </div>
            </div>
        </div>
    );
};

export default Login;