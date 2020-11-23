import React from 'react'

const Login = React.lazy(() => import('./Login'))
const SignUp = React.lazy(() => import('./SignUp'))
const Post = React.lazy(() => import('./Post'))
const Notfound = React.lazy(() => import('./Notfound'))

const Pages = {
    Login,
    SignUp,
    Post,
    Notfound,
    
}

export default Pages;
