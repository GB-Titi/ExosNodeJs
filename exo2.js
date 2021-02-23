
function add(params){
    if (params === '')
    {
        console.log(0); //si le paramètre est vide, on affiche 0
    }
    else
    {  
        const numbers = params.split(',');  // on split notre paramètre en tableau
        let somme = 0;  //on initialise la somme avant le foreach
        numbers.forEach(element => {
            somme += parseFloat(element);   //on additionne chaque element des paramètres qu'on a split en tableaux
        })

        //on affiche la somme dans la console (en int)
        console.log(typeof somme);
        console.log(somme);

        //si on le veux en string:
        console.log(typeof somme.toString());
        console.log(somme.toString());
    }
}

add('1.1,1.2,4');
//cela retourne 6.3 (en number puis en int)