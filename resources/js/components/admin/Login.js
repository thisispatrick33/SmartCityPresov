import React from "react";
export const Login = ({login = f => f}) => {
    let _email, _password;
    const handleSubmit = e => {
        e.preventDefault();
        login(_email.value, _password.value);
    };
    return (
        <div className={"col-12 row login-frame p-5 my-5 justify-content-center align-items-start"} style={{minHeight : '90vh'}}>
            <form className="row col-10 justify-content-center" id="login-form" action="" onSubmit={handleSubmit} method="post">
                <h3 className='col-12 px-0 text-center'>Login Form</h3>
                <input
                    ref={input => (_email = input)}
                    autoComplete="off"
                    id="email-input"
                    name="email"
                    type="text"
                    className="center-block p-3 col-8"
                    placeholder="Zadajte email"
                />
                <input
                    ref={input => (_password = input)}
                    autoComplete="off"
                    id="password-input"
                    name="password"
                    type="password"
                    className="center-block p-3 col-8 mt-3"
                    placeholder="Zadajte heslo"
                />
                <button
                    type="submit"
                    className="landing-page-btn border-0 rounded mt-4 col-5 py-2 submit-sl center-block text-center"
                    id="email-login-btn"
                >
                    Prihlásiť sa
                </button>
            </form>
        </div>
    );
};
