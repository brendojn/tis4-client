import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <Fragment>
        <h1>Página inicial</h1>
        <Link to="/about">Sobre</Link>
        </Fragment>
    )
}

export default Page