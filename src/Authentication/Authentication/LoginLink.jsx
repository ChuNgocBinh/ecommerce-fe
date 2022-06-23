import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deleteSession } from '../Redux/Action/ActionSession';


function LoginLink(props) {

    const dispatch = useDispatch()

    const onRedirect = () => {

        sessionStorage.clear()

        const action = deleteSession('')
        dispatch(action)

    }

    return (
        <li className="nav-item" onClick={onRedirect}>
            <Link className="nav-link" to="/signin">
                ( Logout )
            </Link>
        </li>
    );
}

export default LoginLink;