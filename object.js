//Part 12
//Challenge - 1
//Buat object "person" dengan property-property berikut.
//1. Nama (String)
//2. Umur (number)
//3. tahun lahir (number)
//4. punya pekerjaan atau tidak (boolean)
const person1 = {
    name: 'Akbar',
    age: 19,
    dateOfBirth: 2006,
    isEmployed: true,
};

const text = (person1.name + ' ' + 'lahir pada tahun' + ' ' + person1.dateOfBirth);

//Challenge - 2
//Menggunakan object person sebelumnya, log text dengan format:
//"___lahir pada tahun___"

console.log(text)