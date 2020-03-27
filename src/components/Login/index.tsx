import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik} from 'formik';

import styles from './styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className='card'>
                <CardHeader>
                    {/* <img src="" alt=""/> */}
                </CardHeader>
                <CardContent>
                    <span className='title'>Entrar:</span>

                    <Formik
                        initialValues={{user: '', password: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 3000);
                        }}
                    >
                        <Form className='form'>
                            <Field className='input' type='text' name='user' placeholder='Usuário' />
                            <Field className='input' type='password' name='password' placeholder='Senha' />

                            <button type='submit'>Entrar</button>
                        </Form>
                    </Formik>

                    <Link className='link-register' to='/register'>Não tem uma conta? Cadastre-se!</Link>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;