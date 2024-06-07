let sonlar = [1, 2, 3, 4];

alert(`Uzunligini ${sonlar.length}`);
 
let del = confirm("Tasdiqlang"); 

if (del) {
    sonlar.pop();
} 

alert(`Uzunligini ${sonlar.length}`);