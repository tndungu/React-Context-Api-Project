import { DisplayLogin } from "./DisplayLogin";
import { useLoginContext } from "./useLoginContext";

export const Login = () => {
    const { loggedIn, setLoggedIn } = useLoginContext()

    return (
        <>
            <div className="pageLayout">
                <div>
                    <h3>Login</h3>
                </div>
                {loggedIn &&
                    <DisplayLogin />
                }
                <div>
                    <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        </>
    );
};