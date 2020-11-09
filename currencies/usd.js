#!/usr/bin/env node
const getCurrency = require('./get-currency');

const axios = require('axios');

(async () => {
    const amount = await getCurrency('USD');
    console.log('$' + amount);
})()