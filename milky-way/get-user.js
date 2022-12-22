const readlineSync = require('readline-sync')
const { User } = require('./models/users')

const getUserAll = () => {
    console.clear()

    const user = new User()
    retrievedUser = user.getUsers();
    retrievedUser.forEach((data, index) => {
        console.log(`         DATA USER ${index+1}\n`)
        console.log(`Nama : ${data.nama}\n`)
        console.log(`Umur : ${data.umur}\n`)
        console.log(`Alamat : ${data.alamat}\n`)
        console.log(`Jenis Kelamin : ${data.jenisKelamin}\n`)
        console.log("================================\n")
        
    });
    // console.log(retrievedUser);
    
    const option = readlineSync.question("Tekan 1 untuk kembali: ")
    console.clear()

    return option
}

module.exports = { getUserAll }