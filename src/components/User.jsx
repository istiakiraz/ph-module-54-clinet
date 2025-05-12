import React, { use, useState } from 'react';

const User = ({userPromise}) => {

    const initialUser = use(userPromise);
    const [user, setUser] = useState(initialUser)


    console.log(user);

    const handleOnSub=(e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;

        const singleUser ={name, email}

        console.log(user);

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-type" : 'application/json'
            },
            body: JSON.stringify(singleUser)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log('data after post', data);
            const newUsers = [...user, data]
            setUser(newUsers)
            e.target.reset()
        })

    }

    return (
        <>
        <div>
                <form onSubmit={handleOnSub}>
                <input name='name' type="text" />
                <br />
                <input name='email' type="email" />
                <br />
                <button  type='submit' >Add User</button>

                </form>
        </div>
        
        <div>
           <h1>Users</h1>
           {
            user.map(u => <p key={u.id} >{u.name} : {u.email}</p>)
           }
        </div>
        </>
    );
};

export default User;