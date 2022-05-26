import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = { email: email, name: name };

        if (email) {
            fetch(`https://bike-backup.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token)
                    setToken(data.token);
                })

        }

    }, [user])

    return [token, setToken]
}

export default useToken;