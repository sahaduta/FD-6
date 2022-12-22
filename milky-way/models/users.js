const fs = require('fs')

class User {
    constructor() {
        this.data = require('../databases/users.json')
    }

    getUsers() {
        return this.data
    }

    create(name, age, address, sex) {
        this.data.push({
            nama: name,
            umur: age,
            alamat: address,
            jenisKelamin: sex
        })

        fs.writeFileSync("./databases/users.json", JSON.stringify(this.data))
    }
}

module.exports = {
    User
}