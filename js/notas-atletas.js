let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   for(let i = 0; i < atletas.length; i++){
            atletas[i].notas;
            let notasNew = atletas[i].notas;
            notasNew = notasNew.sort();   

        notasNew = notasNew.slice(1,4);
        let soma = 0;
        notasNew.forEach(function(nota){
            soma = soma + nota;
        })

        let media = soma / notasNew.length;
        
        console.log("Atleta:"+ atletas[i].nome)
        console.log("Notas:"+ atletas[i].notas)
        console.log("Média:"+ media)
        
   }

   
   