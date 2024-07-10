import "./login.styles.css";

function Login() {
    return (
        <form className="contianer">
            <label>
                Username:
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="password" />
            </label>

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
