import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const user = useLoaderData();

    return (
        <div>
            {/* <pre>
                {JSON.stringify(user, null, 2)}
            </pre> */}

            <h1>{user.login} -{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>Blog: <a href={user.blog} target='_blank' rel='noreferrer'>{ user.blog }</a></p>
        </div>
    );
}

export default User;
