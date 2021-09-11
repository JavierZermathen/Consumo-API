const consumo = document.getElementById ("fetch");
const fragmento = document.createDocumentFragment();


fetch ("https://jsonplaceholder.typicode.com/users  ")

    .then((res) => { 

        console.log(res)
        
       // return res.json()

        //el return se usa cuando usamos llaves {}

        

        return res.ok?       res.json()       :Promise.reject(res);

    })

    .then ( (data) => {

        //console.log(data)

        data.forEach(element=>{

            

            const lista=document.createElement("li");
            //arriba hace referencia a la etiqueta de httml que quiero llamar
            lista.innerHTML = `${element.name}   ${element.email}   ${element.phone}    <br> <br>`

            
            fragmento.appendChild(lista);

            //console.log(fragmento)

        });

        consumo.appendChild(fragmento);

        //console.log(consumo)

    })

    .catch(err=> {

        consumo.innerHTML =` Error ${err.status} : "error en la pagina " `;

    })

   