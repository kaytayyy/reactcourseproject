import React, { useState } from 'react';

let url = 'http://localhost:3500/photos'
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(() => {
    console.log('data added successfully')
})

