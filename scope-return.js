//Part - 16
//Challenge - 1
//Apakah ini akan error? 

//case 1
const a = 'a';

function x() {
    console.log(a);
};

x();

// tidak error, hasil nya = 'a'

// case 2
if (true) {
    const a = 'a';
    
};
console.log(a);

// error, karena berada di luar global scope

// case 3
function x() {
    const a = 'a';
    if (true) {
        console.log(a);
    };
};

x();

// tidak error, hasil nya = 'a'

// Challenge - 2
//Buat function yang menerima 2 angka dan mengembalikan hasil perkalian 2 angka tersebut.
//Panggil function dan simpan hasiilnya dalam variable.
//Selanjutnya log variable itu.


function getNumber(g, y) {
      return g + y;
};

console.log(getNumber(10, 6));