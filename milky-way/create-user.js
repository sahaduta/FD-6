const readlineSync = require('readline-sync')
const { User } = require('./models/users')

const createUserDashboard = () => {
    console.clear()
    console.log("================================")
    console.log(" Masukan data user yang akan anda simpan")
    console.log("================================\n")
    
    const name = readlineSync.question("Masukan nama user: ")
    const age = readlineSync.question("Masukan umur user: ")
    const address = readlineSync.question("Masukan alamat user: ")
    const sex = readlineSync.question("Masukan jenisKelamin user: ")

    const user = new User()
    user.create(name, age, address, sex)

    console.log("\n================================")
    console.log("Data user berhasil disimpan")
    console.log("================================\n")
    
    const option = readlineSync.question("Tekan 1 untuk kembali: ")
    console.clear()

    return option
}

module.exports = { createUserDashboard }