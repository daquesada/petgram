import React, { Fragment, useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { Button } from '../Button'
export function UserForm({ tittle, onSubmit, disabled, message }) {
    const email = useInputValue('');
    const password = useInputValue('')

    const handlerSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }
    return (
        <Fragment>
            <Form disabled={disabled} onSubmit={handlerSubmit}>
                <Title>{tittle}</Title>
                <Input disabled={disabled} placeholder='email' type='email' {...email} />
                <Input disabled={disabled} placeholder='password' type='password' {...password} />
                <Button disabled={disabled}>{tittle}</Button>
                {message && <Error> {message.message} </Error>}
            </Form>
        </Fragment>
    )
}
