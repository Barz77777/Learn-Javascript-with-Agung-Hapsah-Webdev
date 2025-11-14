//Challenge 
//Buat variable "username" yaitu array yang isinya 3 string:
//1. "yandy"
//2. "dimas"
//3. "mita"
//log text dengan format "ada total ___ username"

// const username = [
//     'yandy',
//     'dimas',
//     'mita',
// ];

// const text = 'ada total ' + username.length + ' username'

// console.log(text)

//Challenge - 2
//Gunakan array usernames sebelumnya. Buat variable 'newUsername' yaitu string. 
//jika 'newUsername' sudah ada di dalam array username, log "Username sudah digunakan". kalau enggak log "Username tersedia"
const userName = [
    'yandy',
    'dimas',
    'mita',
];

const newUsername = 'agung';
const isTaken =  userName.includes('newUsername');

if (isTaken) {
    console.log('Username sudah digunakan')
} else {
    console.log('Username tersedia')
}

//Challenge - 3
//Buat array yang isinya 3 makanan favoritmu. Menggunakan bracket notation, log text dengan format:
//"Makanan favoritku yang kedua adalah__"

const favoritFood = [
    'Nasi gorang',
    'Ayam bakar',
    'Terong balado',
];

const text = 'Makanan favoritku yang kedua adalah ' + favoritFood[1]

console.log(text)
