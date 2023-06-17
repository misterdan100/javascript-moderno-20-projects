for(let i = 0; i < 5; i++) {

    if(i === 3) {
        console.log('Este es el 3.');
        continue;
    }
    console.log(`Numero ${i}`);
}

// Numero 0 
// Numero 1 
// Numero 2
// Este es el 3.
// Numero 4