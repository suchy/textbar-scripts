#!/usr/bin/env node
const getCurrency = require('./get-currency');

const axios = require('axios');

(async () => {
    const amount = await getCurrency('EUR');
    console.log('€' + amount);
})()