import React, { useEffect } from 'react';
import axios from 'axios';

export default function Login() {

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/oauth");
        console.log(response.data.fruits);
    }

    const datafromAPI = useEffect( () => {
        fetchAPI();
    }, [])


    return (
        <div>
            <h2> Hello world </h2>
            <a href='{SERVER_ENDPOINT_OAUTH}'>Continue with TikTok</a>
        </div>
    )
}