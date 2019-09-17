import React from "react";
export const Login = ({login = f => f}) => {
    let _email, _password;
    const handleSubmit = e => {
        e.preventDefault();
        login(_email.value, _password.value);
    };
    return (
        <div className={"col-12 row shadow login-frame p-5 my-5"}>
            <form id="login-form" action="" onSubmit={handleSubmit} method="post">
                <h3>Login Form</h3>
                <input
                    ref={input => (_email = input)}
                    autoComplete="off"
                    id="email-input"
                    name="email"
                    type="text"
                    className="center-block"
                    placeholder="email"
                />
                <input
                    ref={input => (_password = input)}
                    autoComplete="off"
                    id="password-input"
                    name="password"
                    type="password"
                    className="center-block"
                    placeholder="password"
                />
                <button
                    type="submit"
                    className="landing-page-btn center-block text-center"
                    id="email-login-btn"
                >
                    Login
                </button>
            </form>
        </div>
    );
};
