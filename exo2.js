
function add(params){
    if (params === '')
    {
        //si le paramètre est vide, on affiche 0
        console.log(0);
    }
    else
    {
        //sinon on split notre paramètre en tableau
        const numbers = params.split(',');

        //on initialise la somme avant le foreach
        let somme = 0;

        numbers.forEach(element => {
            //on additionne chaque element des paramètres qu'on a split en tableaux
            somme += parseFloat(element);
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