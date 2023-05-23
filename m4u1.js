//ESERCIZIO1

function somma (a, b) {
    let sommaVariabili = a + b
    if (a === b) {
        sommaVariabili = sommaVariabili *3 // oppure sommaVariabili *= 3
    } return sommaVariabili   
}

console.log(somma (2, 2))
///////

/*Questa funzione si chiama sommaConCondizione e accetta due argomenti numerici a e b. 
Prima di sommarli, controlla se sono entrambi numeri interi usando l'operatore typeof e il metodo Number.isInteger¹. 
Se uno dei due non lo è, lancia un errore personalizzato usando l'istruzione throw²³. Altrimenti, assegna la somma dei due numeri alla variabile somma e restituisce il valore di somma moltiplicato per 3 se a e b sono uguali, oppure il valore di somma se sono diversi. Questo si fa usando l'operatore ternario ?:.

```javascript
return a === b ? somma * 3 : somma;
```

Questo è equivalente a scrivere:

```javascript
if (a === b) {
  return somma * 3;
} else {
  return somma;
}
```
Quando si invoca la funzione con i parametri "a" e 5, si ottiene un errore perché "a" non è un numero intero. L'errore dice: I parametri devono essere numeri interi.
*/

/*function sommaConCondizione(a,b) {
    if (typeof a !== 'number' ||typeof b !== 'number' ||!Number.isInteger(a) ||!Number.isInteger(b));{
        throw new Error('I parametri devono essere numeri interi.');
    }
    const somma = a + b;
    return a === b ? somma * 3 : somma;
}
console.log(sommaConCondizione("a", 5)); //output 8*/

//ES2 - Crea una funzione che controlli sue numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

/*Questa funzione si chiama sommaVarie e accetta due argomenti numerici c e d. Prima di restituire un valore booleano, controlla se sono entrambi numeri interi usando l'operatore typeof e il metodo Number.isInteger¹. Se uno dei due non lo è, lancia un errore personalizzato usando l'istruzione throw²³. Altrimenti, restituisce true se c o d sono uguali a 50 oppure se la loro somma è uguale a 50. Questo si fa usando l'operatore logico || (OR) che restituisce true se almeno una delle condizioni è vera⁴.

```javascript
return c === 50 || d === 50 || (c+d) == 50;
```

Quando si invoca la funzione con i parametri 20 e "ciao", si ottiene un errore perché "ciao" non è un numero intero. L'errore dice: I parametri devono essere numeri interi.

 */

function sommaVarie (c,d) {
    if (typeof c !== 'number' || typeof d !== 'number' || !Number.isInteger(c) || !Number.isInteger(d)); {
         throw new Error ('I parametri devono essere numeri interi.')
    } return c === 50 || d === 50 || (c+d) == 50
}
console.log(sommaVarie(20, 'ciao' ));

//3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

/*

Questa funzione si chiama removeSez e accetta due argomenti: una stringa str1 e un numero posizione. La funzione restituisce una nuova stringa che è uguale a str1 ma senza il carattere alla posizione indicata. Per fare questo, usa il metodo slice() che estrae una porzione di una stringa o di un array²³⁴⁵. 
Il metodo slice() prende due parametri: l'indice di inizio e l'indice di fine dell'estrazione. 
Se l'indice di fine è omesso, l'estrazione avviene fino alla fine della stringa o dell'array²³⁴⁵.

```javascript
return str1.slice(0, posizione) + str1.slice(posizione +1)
```

La funzione removeSez sottrae 1 al parametro posizione perché gli indici delle stringhe partono da 0³. Quindi, se vogliamo rimuovere il primo carattere della stringa, dobbiamo usare la posizione 0. La funzione poi concatena due porzioni di str1: la prima va dall'inizio fino alla posizione esclusa e la seconda va dalla posizione successiva fino alla fine.

```javascript
str1.slice(0, posizione) // prima porzione
str1.slice(posizione +1) // seconda porzione
```

Quando si invoca la funzione con i parametri "ciao" e 1, si ottiene la stringa "iao" perché si rimuove il carattere alla posizione 0 che è "c".

*/

    function removeSez (str1, posizione) {
        posizione = posizione -1
        return str1.slice(0, posizione) + str1.slice(posizione +1)
    }
    console.log (removeSez("ciao", 1));

  //  4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.

  /*

  Questa funzione si chiama checkNum e accetta tre argomenti: tre numeri e, f e g. 
  La funzione restituisce il valore massimo tra i tre numeri. 
  Per fare questo, usa una variabile locale valoreMax che inizialmente è uguale a e. 
  Poi confronta valoreMax con f e se f è maggiore di valoreMax, assegna f a valoreMax. 
  Infine confronta valoreMax con g e se g è maggiore di valoreMax, assegna g a valoreMax.

```javascript
let valoreMax = e // inizializza valoreMax con il primo numero
if (valoreMax < f) { // confronta valoreMax con il secondo numero
    valoreMax = f // se il secondo numero è maggiore, lo assegna a valoreMax
} if (valoreMax < g) { // confronta valoreMax con il terzo numero
    valoreMax = g // se il terzo numero è maggiore, lo assegna a valoreMax
}
```

Quando si invoca la funzione con i parametri 10, 20 e 12, si ottiene il numero 20 perché è il più alto tra i tre. 
Tuttavia, c'è un errore nella sintassi del console.log che impedisce di stampare correttamente il risultato. 
Bisogna usare l'operatore + per concatenare la stringa "il numero più alto è " con il risultato della funzione checkNum.

```javascript
console.log("il numero più alto è " + checkNum(10,20,12)); // stampa "il numero più alto è 20"
```

  */

    function checkNum (e, f, g) {
        let valoreMax = e
        if (valoreMax < f) {
            valoreMax = f
        } if (valoreMax < g) {
            valoreMax = g
        }
    }

    console.log("il numero più alto è " (checkNum (10,20,12)));

    //5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

    /*

Questa funzione si chiama numeriCompresi e accetta due argomenti: due numeri v e o. 
La funzione restituisce true se entrambi i numeri sono compresi tra 40 e 100 (inclusi), altrimenti restituisce false.
Per fare questo, usa due variabili locali primoValore e secondoValore che inizialmente sono uguali a 0. 
Poi controlla se v e o soddisfano la condizione di essere tra 40 e 100 usando l'operatore logico && (and) per verificare entrambi i limiti e l'operatore logico || (or) per verificare uno dei limiti. 
Se la condizione è vera, assegna 1 alla variabile corrispondente.

```javascript
if (v >= 40 && v <= 100){ // controlla se v è tra 40 e 100
    primoValore = 1 // se è vero, assegna 1 a primoValore
} if (o >= 40 && o <= 100) { // controlla se o è tra 40 e 100
    secondoValore = 1 // se è vero, assegna 1 a secondoValore
}
```

Infine confronta la somma di primoValore e secondoValore con il numero 2 usando l'operatore === (uguaglianza stretta) che verifica sia il valore che il tipo. 
Se la somma è uguale a 2, significa che entrambi i numeri sono tra 40 e 100 e quindi restituisce true. 
Altrimenti restituisce false.

```javascript
if (primoValore + secondoValore === 2) { // confronta la somma con il numero 2
    return true // se è uguale, restituisce true
} else {
    return false // altrimenti restituisce false
}
```

Quando si invoca la funzione con i parametri 40 e 1, si ottiene false perché solo il primo numero è tra 40 e 100 mentre il secondo no.

    */

    function numeriCompresi(v,o){
        let primoValore = 0;
        let secondoValore = 0;

        if (v >= 40 && v >= 60 || v>=70 || v<=100){
             primoValore = 1
        } if (o >= 40 && o >= 60 || o >=70 || o<=100) {
             secondoValore = 1
        } if (primoValore + secondoValore === 2) {
            return true
        } else {
            return false
        }
    }

    console.log(numeriCompresi(40,1));


//6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.

/* 

Questa funzione si chiama stringaz e accetta due argomenti: una stringa stri2 e un numero nume2. 
La funzione restituisce una nuova stringa che è il risultato della ripetizione di stri2 per nume2 volte. 
Per fare questo, usa il metodo repeat della classe String che prende come parametro il numero di volte da ripetere la stringa.

```javascript
return stri2.repeat(nume2) // restituisce la stringa ripetuta
```

Quando si invoca la funzione con i parametri "hello world " e 2, si ottiene la stringa "hello world hello world " perché la stringa viene ripetuta due volte.

*/


    function stringaz(stri2, nume2) {
        return stri2.repeat(nume2)
    }

    console.log(stringaz("hello world ", 2))


//7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.


/*

Questa funzione si chiama city e accetta un argomento: una stringa name. 
La funzione restituisce la stringa name se inizia con "Los" o "New", altrimenti restituisce false. 
Per fare questo, usa il metodo startsWith della classe String che prende come parametro una sottostringa e verifica se la stringa inizia con quella sottostringa. 
Usa l'operatore logico || (or) per controllare entrambe le possibilità.

```javascript
if (name.startsWith('Los')||name.startsWith('New')){ // controlla se la stringa inizia con Los o New
    return name // se è vero, restituisce la stringa
} else return false // altrimenti restituisce false
```

Quando si invoca la funzione con il parametro "Los Santos", si ottiene la stringa "Los Santos" perché inizia con "Los".


*/

    function city(name) {
        if (name.startsWith('Los')||name.startsWith('New')){
            return name
        } else return false
    }

    console.log(city('Los Santos'));

//8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.


/*

Questa funzione si chiama arrayySomma e accetta un argomento: un array di 3 elementi arrayy1. 
La funzione restituisce la somma degli elementi dell'array. 
Per fare questo, usa una variabile locale sommaArrayy che inizialmente è uguale a 0 e poi usa un ciclo for per iterare sugli elementi dell'array e aggiungerli alla variabile.

```javascript
let sommaArrayy = 0 // inizializza la variabile a 0
for (let i = 0; i < arrayy1.length; i++) { // itera sugli elementi dell'array
    sommaArrayy += arrayy1[i] // aggiunge l'elemento corrente alla variabile
}
return sommaArrayy // restituisce la variabile
```

Prima di eseguire il ciclo for, la funzione controlla se l'argomento è effettivamente un array di 3 elementi usando la funzione Array.isArray che verifica se il valore è un array e confrontando la proprietà length dell'array con il numero 3. 
Usa l'operatore logico || (or) per verificare entrambe le condizioni. 
Se una delle due condizioni è falsa, la funzione lancia un errore usando l'istruzione throw che interrompe l'esecuzione della funzione e passa il controllo al primo blocco catch nel call stack. 
Se non c'è nessun blocco catch tra le funzioni chiamanti, il programma termina.

```javascript
if (!Array.isArray(arrayy1) || arrayy1.length !== 3) { // controlla se l'argomento è un array di 3 elementi
    throw new Error ("i parametri devono essere un array di 3 elementi") // se è falso, lancia un errore
}
```

Quando si invoca la funzione con il parametro [2,3,3], si ottiene il numero 8 perché la somma degli elementi dell'array è 8.


*/

    function arrayySomma(arrayy1) {
        if (!Array.isArray(arrayy1) || arrayy1-length !== 3) {
            throw new Error ("i parametri devono essere un array di 3 elementi")
        }

        let sommaArrayy = 0
        for (let i = 0; i < arrayy1.length; i++) {
            sommaArrayy += arrayy1[i]
        
        }
        return sommaArrayy
    }

    console.log(arrayySomma([2,3,3]));



    //9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.


    //Un modo possibile per creare una funzione che controlli se un array di due elementi contiene il numero 1 o 3 è usare il metodo includes(). Questo metodo ritorna true se un array contiene un valore specificato, e false altrimenti.
    
    /*function checkArrayyy(arrayyy) {
        // controlla se l'array ha due elementi
        if (arrayyy.length === 2) {
          // controlla se l'array include 1 o 3
          return arrayyy.includes(1) || arrayyy.includes(3);
        } else {
          // ritorna false se l'array ha più o meno di due elementi
          return false;
        }
      }
      
      // casi di prova
      console.log(checkArrayyy([1, 2])); // true
      console.log(checkArrayyy([4, 5])); // false
      console.log(checkArrayyy([3, 6])); // true
      console.log(checkArrayyy([1, 3])); // true
      console.log(checkArrayyy([7, 8, 9])); // false */


      function dueNumeri (arrayNumeri) {
        return arrayNumeri.includes(1) || arrayNumeri.includes(3)
      }
      console.log(dueNumeri([2,4]))



//10. Crea una funzione che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.



/*Una possibile soluzione è usare il metodo `some` per verificare se uno dei due elementi dell'array è uguale a 1 o a 3, e poi negare il risultato con l'operatore `!`.


function checkArray(arr) {
    // controlla se arr ha due elementi
    if (arr.length !== 2) {
      return false;
    }
    // controlla se almeno uno degli elementi è uguale a 1 o a 3
    let contains = arr.some(el => el === 1 || el === 3);
    // ritorna il contrario di contains
    return !contains;
  }

checkArray([2, 4]); // ritorna true
checkArray([1, 5]); // ritorna false
checkArray([3, 6]); // ritorna false
checkArray([7]); // ritorna false


//Questa funzione ritorna `true` se l'array non contiene i numeri 1 o 3, altrimenti ritorna `false`. */

function dueNumeri (arrayNumeri) {
  return !arrayNumeri.includes(1) || arrayNumeri.includes(3)
}
console.log(dueNumeri([2,5]))



// 11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e tritorna la stringa più lunga.


/*function longestString(arr) {
  // inizializza una variabile per memorizzare la stringa più lunga
  let longest = "";
  // scorri tutti gli elementi dell'array
  for (let str of arr) {
    // controlla se la lunghezza della stringa corrente è maggiore di quella della stringa più lunga
    if (str.length > longest.length) {
      // se sì, aggiorna la variabile con la stringa corrente
      longest = str;
    }
  }
  // ritorna la variabile con la stringa più lunga
  return longest;
}


console.log(longestString(["ciao", "buongiorno", "arrivederci"])); // ritorna "buongiorno"
console.log(longestString(["gatto", "cane", "elefante"])); // ritorna "elefante"
console.log(longestString(["rosa", "giallo", "verde"])); // ritorna "giallo" o "verde"
console.log(longestString([])); // ritorna ""


Questa funzione accetta un array di stringhe come parametro e ritorna la stringa più lunga. Se l'array è vuoto, ritorna una stringa vuota.

Questa funzione ritorna la prima stringa che ha la lunghezza massima nell'array. Se ci sono due o più stringhe con la stessa lunghezza massima, ritorna una di esse a caso. Se l'array è vuoto, ritorna una stringa vuota.*/

function arrayLungo (arrayStringa){
  let stringaLunga = ""
  for (let i = 0; i < arrayStringa.length; i++) {
    if (arrayStringa[i].length>stringaLunga.length) {
      stringaLunga = arrayStringa[i]
    }
  }
  return stringaLunga
}

console.log(arrayLungo(["ciao", "bao", "miaaaaaao", "hello"]))



/*12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° ⇒ ritorna “acuto”
Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
Angolo retto: 90° ⇒ ritorna “retto”
Angolo piatto: 180° ⇒ ritorna “piatto”


function tipoAngolo(gradi) {
  // controlla se i gradi sono validi
  if (gradi < 0 || gradi > 180) {
    return "Angolo non valido";
  }
  // controlla il tipo di angolo
  if (gradi < 90) {
    return "Acuto";
  } else if (gradi == 90) {
    return "Retto";
  } else if (gradi < 180) {
    return "Ottuso";
  } else {
    return "Piatto";
  }
}

console.log(tipoAngolo(45));
console.log(tipoAngolo(95));

/*La funzione si chiama tipoAngolo e accetta un parametro gradi che rappresenta il valore in gradi dell'angolo. La prima cosa che fa è controllare se i gradi sono validi, cioè se sono compresi tra 0 e 180. Se non lo sono, restituisce la stringa "Angolo non valido". Altrimenti, procede a controllare il tipo di angolo usando delle condizioni if-else. Se i gradi sono minori di 90, restituisce la stringa "Acuto". Se i gradi sono uguali a 90, restituisce la stringa "Retto". Se i gradi sono minori di 180, restituisce la stringa "Ottuso". Infine, se nessuna delle condizioni precedenti è vera, restituisce la stringa "Piatto". Questo significa che i gradi sono uguali a 180.*/

function trovaAngolo (angoloo) {
  if (angoloo > 180){
    throw new Error ("Sbagliato!")
  }
  if (angoloo < 90) {
    return "acutoo"
  } else if (angoloo == 90) {
    return "rettoo"
  } else if (angoloo < 180) {
    return "ottusoo"
  } else {
    return "piattoo"
  }
} 

console.log(trovaAngolo(180))

//13. Crea una funzione che trovi e ritorni **l’indice**  del numero più alto in un array passato come parametro.

/*function indiceMassimo(array) {
    let indice = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[indice]) {
        indice = i;
      }
    }
    return indice;
  }

  let numeri = [10, 5, 8, 12, 3, 20];

  console.log(indiceMassimo(numeri));

  /*Questa domanda è un po' più complessa di quelle precedenti. Ti consiglio di seguire questi passi per creare la funzione:

1. Definisci il nome della funzione e il parametro che rappresenta l'array. Per esempio:

```javascript
function indiceMassimo(array) {
  // corpo della funzione
}
```

2. Crea una variabile che memorizza l'indice del numero più alto. Inizializzala a 0. Per esempio:

```javascript
var indice = 0;
```

3. Crea un ciclo for che scorre tutti gli elementi dell'array. Per esempio:

```javascript
for (var i = 0; i < array.length; i++) {
  // istruzioni da eseguire ad ogni iterazione
}
```

4. Dentro il ciclo, confronta l'elemento corrente dell'array con quello memorizzato nella variabile indice. Se l'elemento corrente è maggiore, aggiorna la variabile indice con il valore di i. Per esempio:

```javascript
if (array[i] > array[indice]) {
  indice = i;
}
```

5. Fuori dal ciclo, restituisci la variabile indice usando la parola chiave return. Per esempio:

```javascript
return indice;
```

6. Metti insieme tutti i pezzi e ottieni la funzione completa:

```javascript
function indiceMassimo(array) {
  var indice = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[indice]) {
      indice = i;
    }
  }
  return indice;
}

Per usare la funzione in console log, devi prima definire un array di numeri. Per esempio:

```javascript
var numeri = [10, 5, 8, 12, 3];
```

Poi devi passare l'array come parametro alla funzione indiceMassimo e stampare il valore restituito con console.log. Per esempio:

```javascript
console.log(indiceMassimo(numeri));
```

Questo ti restituirà l'indice del numero più alto nell'array numeri. 

L'array di numeri lo devi inserire fuori dalla funzione. La funzione è una porzione di codice che puoi riutilizzare con diversi parametri. L'array di numeri è uno dei possibili parametri che puoi passare alla funzione. Se inserisci l'array dentro la funzione, la funzione sarà limitata a lavorare solo con quell'array e non potrai cambiarlo facilmente. Invece, se definisci l'array fuori dalla funzione e lo passi come parametro, potrai usare la stessa funzione con altri array senza dover modificare il codice della funzione.*/



//14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.

/*Questa domanda è simile alla precedente, ma con una differenza: devi trovare il numero pari più alto e non il numero più alto in generale. Per fare questo, devi aggiungere una condizione per verificare se un numero è pari o dispari. Un numero è pari se il resto della divisione per 2 è uguale a 0. Un numero è dispari se il resto della divisione per 2 è diverso da 0. Puoi usare l'operatore modulo (%) per calcolare il resto di una divisione. Per esempio:

```javascript
10 % 2 // restituisce 0
11 % 2 // restituisce 1
```

Ti consiglio di seguire questi passi per creare la funzione:

1. Definisci il nome della funzione e il parametro che rappresenta l'array. Per esempio:

```javascript
function pariMassimo(array) {
  // corpo della funzione
}
```

2. Crea una variabile che memorizza l'indice del numero pari più alto. Inizializzala a -1, che significa che non hai ancora trovato nessun numero pari. Per esempio:

```javascript
var indice = -1;
```

3. Crea un ciclo for che scorre tutti gli elementi dell'array. Per esempio:

```javascript
for (var i = 0; i < array.length; i++) {
  // istruzioni da eseguire ad ogni iterazione
}
```

4. Dentro il ciclo, controlla se l'elemento corrente dell'array è un numero pari usando l'operatore modulo (%). Se lo è, confrontalo con quello memorizzato nella variabile indice. Se l'elemento corrente è maggiore o se la variabile indice è ancora -1, aggiorna la variabile indice con il valore di i. Per esempio:

```javascript
if (array[i] % 2 == 0) { // controlla se l'elemento corrente è pari
  if (array[i] > array[indice] || indice == -1) { // controlla se l'elemento corrente è maggiore o se non hai ancora trovato nessun numero pari
    indice = i; // aggiorna la variabile indice con il valore di i
  }
}
```

5. Fuori dal ciclo, controlla se la variabile indice è diversa da -1. Se lo è, restituisci l'elemento dell'array corrispondente all'indice usando la parola chiave return. Altrimenti, restituisci la stringa "Nessun numero pari trovato". Per esempio:

```javascript
if (indice != -1) { // controlla se hai trovato almeno un numero pari
  return array[indice]; // restituisci l'elemento dell'array corrispondente all'indice 
} else {
  return "Nessun numero pari trovato"; // restituisci la stringa "Nessun numero pari trovato"
}
```

6. Metti insieme tutti i pezzi e ottieni la funzione completa:


Per usare la funzione in console log, devi prima definire un array di numeri. Per esempio:

```javascript
var numeri = [10, 5, 8, 12, 3];
```

Poi devi passare l'array come parametro alla funzione pariMassimo e stampare il valore restituito con console.log. Per esempio:

```javascript
console.log(pariMassimo(numeri));
```

Questo ti restituirà il numero pari più alto nell'array numeri, cioè 12. Prova a scrivere queste istruzioni nella console e vedi cosa succede.*/


function pariMassimo(array) {
  let indice = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      if (array[i] > array[indice] || indice == -1) {
        indice = i;
      }
    }
  }
  
if (indice != -1) {
    return array[indice];
} else {
    return "Nessun numero pari trovato";
}
}

let numberz = [10, 5, 8, 12, 3];

console.log(pariMassimo(numberz));

/*function arrayyNumberzz (arrei) {
  let indexIniziale = arrei[0]
  let indiceMassi = 0
  for (let i = 0; i > arrei.length; i++) {
    if (array[i] > indexIniziale) {
      indexIniziale = array[i]
      indiceMassi = i
    }
  }
  return indiceMassi
}
console.log(arrayyNumberzz([2,7,9,5]))*/

//15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.

/*Questa domanda è diversa dalle precedenti, ma puoi usare lo stesso metodo per creare la funzione. Ti consiglio di seguire questi passi:

1. Definisci il nome della funzione e i due parametri che rappresentano i numeri. Per esempio:

```javascript
function positivoNegativo(num1, num2) {
  // corpo della funzione
}
```

2. Crea una variabile che memorizza il valore booleano da restituire. Inizializzala a false. Per esempio:

```javascript
var risultato = false;
```

3. Controlla se uno dei due numeri è positivo e l'altro è negativo usando gli operatori di confronto (<, >, ==). Se la condizione è vera, cambia il valore della variabile risultato a true. Per esempio:

```javascript
if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) { // controlla se uno dei due numeri è positivo e l'altro è negativo
  risultato = true; // cambia il valore della variabile risultato a true
}
```

4. Restituisci la variabile risultato usando la parola chiave return. Per esempio:

```javascript
return risultato;
```

5. Metti insieme tutti i pezzi e ottieni la funzione completa:

```javascript
function positivoNegativo(num1, num2) {
  var risultato = false;
  if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    risultato = true;
  }
  
return risultato;
}
*/

function positivoNegativo(numm1, numm2) {
    let risultato = false;
    if ((numm1 > 0 && numm2 < 0) || (numm1 < 0 && numm2 > 0)) {
      risultato = true;
    }
    
  return risultato;
  }

  let numm1= 7;
  let numm2 = -5;

  console.log(positivoNegativo(numm1, numm2));


//16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.


Ecco una funzione JavaScript che fa quello che hai chiesto:


function convertString(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let firstThree = str.substring(0, 3).toLowerCase();
    let restOfString = str.substring(3).toUpperCase();
    return firstThree + restOfString;
  }
}

console.log(convertString("stringa"));


//17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.


function sum(aa, bb) {
  let result = aa + bb;
  if (result >= 50 && result <= 80) {
      return 65;
  } else {
      return 80;
  }
}

let result = sum(30, 20);
console.log(result);

/*
In questa funzione, i parametri `aa` e `bb` rappresentano i due numeri da sommare. La variabile `risultato` viene inizializzata con la somma di `a` e `b`. Successivamente viene eseguito un controllo condizionale: se il valore di `risultato` è compreso tra 50 e 80 (inclusi), allora la funzione restituisce il valore `65`, altrimenti restituisce il valore `80`.

Alla fine del codice ho incluso una chiamata alla funzione con i valori di esempio `30` e `20`, salvando il risultato nella variabile `risultato`. Infine ho usato un comando `console.log` per stampare il valore di questa variabile sulla console.*/

/*18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
Il numero è divisibile per 3 ⇒ ritorna “Diego”
Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
Il numero è divisibile per 7 ⇒ ritorna “Stefano”
Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
 Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Esempio: 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.*/



function convertiNumero(numero) {
    let risultato = "";
    if (numero % 3 === 0) {
        risultato += "Diego";
    }
    if (numero % 5 === 0) {
        risultato += "Riccardo";
    }
    if (numero % 7 === 0) {
        risultato += "Stefano";
    }
    if (risultato === "") {
        return numero;
    } else {
        return risultato;
    }
}

let risultato = convertiNumero(15);
console.log(risultato);


/*In questa funzione, il parametro `numero` rappresenta il numero da convertire. La variabile `risultato` viene inizializzata con una stringa vuota. Successivamente vengono eseguiti tre controlli condizionali: se il numero è divisibile per 3, viene aggiunta la stringa `"Diego"` a `risultato`; se il numero è divisibile per 5, viene aggiunta la stringa `"Riccardo"` a `risultato`; se il numero è divisibile per 7, viene aggiunta la stringa `"Stefano"` a `risultato`.

Infine viene eseguito un ulteriore controllo condizionale: se la variabile `risultato` è ancora vuota (cioè non sono state soddisfatte le condizioni precedenti), allora la funzione restituisce il valore originale del parametro `numero`, altrimenti restituisce il valore di `risultato`.

Alla fine del codice ho incluso una chiamata alla funzione con il valore di esempio `15`, salvando il risultato nella variabile `risultato`. Infine ho usato un comando `console.log` per stampare il valore di questa variabile sulla console.*/

//19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.


function creaAcronimo(frase) {
    let parole = frase.split(" ");
    let acronimo = "";
    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i].charAt(0).toUpperCase();
    }
    return acronimo;
}

let resultt = creaAcronimo("Fabbrica Italiana Automobili Torino");
console.log(resultt);


/*In questa funzione, il parametro `frase` rappresenta la frase da cui creare l'acronimo. La variabile `parole` viene inizializzata con un array di stringhe ottenuto dividendo la frase originale in base agli spazi. La variabile `acronimo` viene inizializzata con una stringa vuota.

Successivamente viene eseguito un ciclo `for` per iterare su ogni parola dell'array `parole`. Ad ogni iterazione viene aggiunto il primo carattere della parola corrente (convertito in maiuscolo) alla variabile `acronimo`. Infine la funzione restituisce il valore di `acronimo`.

Alla fine del codice ho incluso una chiamata alla funzione con il valore di esempio `"Fabbrica Italiana Automobili Torino"`, salvando il risultato nella variabile risultato. Infine ho usato un comando console.log per stampare il valore di questa variabile sulla console.*/
