/**
 * MILKY WAY
 * 
 * ====== CLI APP =====
 * Feature:
 *  1. input data user via cli
 *  2. baca list data yang sudah tersimpan
 * 
 * user:
 *  nama
 *  umur
 *  alamat
 *  jenisKelamin
 * 
 * 
 * Logic:
 * 1. input data user via cli
 *    a. jalan apps dan pilih input data
 *    b. inputan tersebut ditampung ke variabel
 *    c. variabel tersebut akan dimasukan ke file
 * 
 * 2. baca list data yang sudah tersimpan
 *    a. baca file yang disimpan
 *    b. asign variable dari file
 *    c. tampilkan di cli
 */

const readlineSync = require('readline-sync')
const { createUserDashboard } = require('./create-user')
const { getUserAll } = require('./get-user')

const main = () => {
    console.log("================================")
    console.log(" Pilih option berikut")
    console.log("   1. Create user")
    console.log("   2. Baca data user")
    console.log("================================")
    const option = readlineSync.question("Berapa pilihanmu? ")
    const optionNum = parseInt(option)

    if (optionNum > 2 || optionNum <= 0) {
        console.log("Pilihanmu tidak tersedia!")
    }

    if (optionNum === 1) {
        const createUserSuccess = createUserDashboard()
        const createUserSuccessNum = parseInt(createUserSuccess)

        if (createUserSuccessNum === 1) {
            main()
        }
    } else if (optionNum === 2) {
        const getUserAllSuccess = getUserAll()
        const getUserAllSuccessNum = parseInt(getUserAllSuccess)

        if (getUserAllSuccessNum === 1) {
            main()
        }
    }

    // jika option = 2 maka tampil list user yang sudah disimpan di db
}

main()