import React from 'react';

export default function LoginForm(props) {

    const {email, password} = props.values

    return (
        <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor='email'>
                email
                <input name='email' onChange={props.onChange} value={email}></input>
            </label>
            <label htmlFor='password'>
                password
                <input name='password' onChange={props.onChange} value={password}></input>
            </label>
            <input type='submit'/>
        </form>
        </div>
    )
};
