const { exec } = require("../mysql/mysql.js")

const login = (username, password)=>{
    let sql = `
        select username, realname from users where
        username="${username}" and password="${password}"
    `
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}

module.exports = {
    login
}