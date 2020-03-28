import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Field, Form, Formik} from 'formik';
import Logo from '../../assets/imagens/logo1-web.svg';

import styles from './styles';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(styles);

const Login = () => {
    const classes = useStyles();
 
    return (
        <div className={classes.root}>
            <Card className='card'>

                <img className='img' src={Logo} alt=""/>

                <CardContent>
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

                            <button className='button' type='submit'>Acessar</button>
                        </Form>
                    </Formik>

                    <Link className='link-register' to='/register'>Ainda não possui uma conta? Cadastre-se!</Link>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;