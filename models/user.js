let db = require('../db')

let user = {}

user.all = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM user", (err, results) => {
            if(err)
                return reject(err)
            return resolve(results)
        })
    })
}

user.one = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM user WHERE id = ?", [id] , (err, results) => {
            if(err)
                return reject(err)
            return resolve(results[0])
        })
    })
}

module.exports = user