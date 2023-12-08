
let rows = 3;
let columns = 3;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        if (i === 1 && j === 1) {
            break; // Exit the inner loop when i is 1 and j is 1
        }
        if (i === 0 && j === 2) {
            continue; // Skip the rest of the inner loop when i is 0 and j is 2
        }
        console.log(`Row: ${i}, Column: ${j}`);
    }
}


//break and continue diffrence 

// in break => Agr break statement is applied then vo pure control flow se bahr aajayega ; 
// in continue ==> it skips the current iteration and doesnt moves out of the whole control flow ;

///WHILE LOOP ;
let count = 0;

while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}

//DO WHILE LOOP 


let count1 = 0;

do {
    console.log(`Count: ${count}`);
    count1++;
} while (count1 < 5);

//EK SPECIAL PROPERTY OF DO LOOP WHILE LOOP IS THAT THEY RUN FOR AT LEAST ON TIME;
