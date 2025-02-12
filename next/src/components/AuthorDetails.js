'use client'

import fetchAuthorDetails from '@/app/actions';
import {useState } from 'react'

const AuthorDetails = () => {
    const [user, setUser] = useState(null);

    const handleFetchAuthorDetails = async () => {
        const authorDetails = await fetchAuthorDetails(userId);
        setUser (authorDetails)
    }

    return(
        <>

            <button>
                onClick={ handleFetchAuthorDetails }
                className ="bg-emerald-400"


            </button>
            <div> AuthorDetails</div>
            <p>username: {user.name }</p>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
        </>
    )

}
export default AuthorDetails