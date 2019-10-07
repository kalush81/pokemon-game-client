import React from 'react';

export default function SignUpForm(props) {

    const {email, password, name} = props.values

    return (
        <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor='email'>
                Email
                <input name='email' onChange={props.onChange} value={email}></input>
            </label>
            <label htmlFor='password'>
                Password
                <input name='password' onChange={props.onChange} value={password}></input>
            </label>
            <label htmlFor='name'>
                Name
                <input name='name' onChange={props.onChange} value={name}></input>
            </label>
            <input type='submit'/>
        </form>
        </div>
    )
};
