import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { SIGNUP, SIGNIN } from '../hoc/User'
import { Mutation } from '../components/Container/Mutation'

export function NotRegisterUser() {
    const [message, setMessage] = useState(undefined);
    const { activateAuth } = useContext(Context)
    const signup = Mutation(SIGNUP);
    const login = Mutation(SIGNIN);

    const onSignup = ({ email, password }) =>
        signup.addVariables({ variables: { input: { email, password } } })
            .then(({ data }) => {
                const { signup } = data
                activateAuth(signup);
            })
            .catch(e => { setMessage(e.message) });

    const onLogin = ({ email, password }) =>{
        login.addVariables({ variables: { input: { email, password } } })
            .then(({ data })=> {
                const { login } = data
                activateAuth(login);
            })
            .catch(e => {setMessage(e.message)});
    }
    return (
        <Fragment>
            <UserForm disabled={login.loading} message={login.error} onSubmit={onLogin} tittle='Sign In' />
            <UserForm disabled={signup.loading} message={signup.error} onSubmit={onSignup} tittle='Sign Up' />
        </Fragment>
    )
}
