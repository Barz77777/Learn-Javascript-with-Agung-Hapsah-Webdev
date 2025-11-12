//Part 11
//Challenge
//Buat variable number, tergantung nilai variable ini log teks jika nilainya satuan, puluhan, ratusan, dan jika lebih dari ratusan log nilainya langsung.
//Contoh:
//Nilai 14 seharusnya log "Puluhan".
//Nilai 5 seharunya log "satuan".
//Nilai 1000 seharusnya log "1000".

const number = 50;

if (number < 10 ) {
    console.log('satuan');
} else if (number <  100) {
    console.log('puluhan');
} else if (number <  1000) {
    console.log('ratusan');
} else {
    console.log(number);
}
