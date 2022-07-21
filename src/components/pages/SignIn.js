import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../AuthProvider';
import axios from "axios";

const LOGIN_URL = '/SignIn';

const SignIn = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            setUserName('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Response from the Server ');
            } else if (err.response?.status === 400) {
                setErrMsg('Username or Password does not exist');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed, please verify your credentials');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <h1 className='SignIn'>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUserName(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need to register, click here?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/SignUp">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
            </h1>
        </>
    )
}

export default SignIn