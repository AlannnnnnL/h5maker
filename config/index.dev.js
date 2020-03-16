const all = {
    port: 9000,
    ip: process.env.ip || '0.0.0.0',
    secrets: {
        session: 'h5maker'
    },
    mongo: {
        // uri: 'mongodb://192.168.234.28:27017/h5maker',
        uri: 'mongodb://127.0.0.1:27017/h5maker'
        // user: 'root',
        // pass: 'root'
    },
    userRoles: ['guest', 'user', 'admin']
}
module.exports = all