import React from 'react'
import axios from 'axios';

export default  axios.create({
    baseURL: "https://sproute.onrender.com",
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});


