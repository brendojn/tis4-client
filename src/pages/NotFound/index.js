import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <Fragment>
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar para a home</Link>
        </Fragment>
    )
}

export default Page