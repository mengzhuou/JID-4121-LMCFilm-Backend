// only these url are allowed to access our api, otherwise our api is open to the public
const allowedOrigins = [
    'http://localhost:3000',
    'https://lmcfilms.netlify.app',
    'https://lmcfilms-backend-ad47e3b57e1a.herokuapp.com/'
    // 'https://www.lmcfilms.lmc.gatech.edu/',
    // 'https://lmcfilms.lmc.gatech.edu/'
]

module.exports = allowedOrigins