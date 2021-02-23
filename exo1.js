let number1 = "2";
let number2 = "3";

function addition(nb1, nb2){
  let number1 = Number(nb1); //on transforme le premier paramètre en nombre
  let number2 = Number(nb2); //on transforme le premier paramètre en nombre
  let somme = number1 + number2; //on en fait la somme
  console.log(somme.toString()); //on affiche la somme dans la console en utilisant "toString()" afin de le transformer en string à l'affichage
}

//on appelle la fonction d'addition avec nos deux nombres en paramètres
addition(number1, number2);