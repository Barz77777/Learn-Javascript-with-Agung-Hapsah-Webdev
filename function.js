//Part 15
//Challenge 
//Buat function yang log nya nama kamu. selanjutnya panggil function ini.

function sayMyName() {
    console.log('Muhammad Akbar')
};

sayMyName();

//Challenge - 2
function logNumberType(number) {
    if (number < 10 ){
        console.log('satuan')
    } else if (number < 100) {
        console.log('puluhan')
    } else if (number < 1000) {
        console.log('ratusan')
    } else {
        console.log(number)
    }
}

logNumberType(90)

function sayHappyBirthday(name, age) {
    console.log('Selamat ulang tahun ke ' + age +  ', ' + name);
}

sayHappyBirthday('Agung', 20)

//Challenge - 3
//Buat Function yang mempunyai 2 parameter yaitu x dan y.
//Function ini akan log text dengan format:
//"x ditambah y sama dengan z"
function logHasilAngka(x, y) {
    const z = x + y
    console.log(x + ' ditambah ' + y + ' sama dengan ' + z)
}

logHasilAngka(10, 10)