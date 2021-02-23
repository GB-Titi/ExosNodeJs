
const add = (params) => {
        if (params === '')
        {
            return 0; //si le paramètre est vide, on affiche 0
        }
        else
        {  
            const numbers = params.split(',');  // on split notre paramètre en tableau
            let somme = 0;  //on initialise la somme avant le foreach
            numbers.forEach(element => {
                somme += parseFloat(element);   //on additionne chaque element des paramètres qu'on a split en tableaux
            })
            //on affiche la somme (en int)
            return(somme);
    
            //si on veut return la somme en string: 
           // return(somme.toString())
        }
    }

console.log(add('1.1,1.2,4'));

//cela retourne 6.3