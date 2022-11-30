// Dall'oggetto globale Vue, estrai in una variabile la funzione "createApp"
const { createApp } = Vue;

// invochiamo la funzione passando come argomento un oggetto

// crea l'istanza di Vue. Sull'istanza invochiamo la funzione
// mount. Questa si aspetta come un argomento un selettore html valido
createApp({
  // data: function () {}
    data () {
    // la funzione data deve SEMPRE ritornare un oggetto
    return {
        listaEmail: [],
        counter: 0,
        listaTemporanea: [],
    };
},
methods: {
    fetchData (){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            console.log(resp); 

            this.listaTemporanea.push(resp.data.response); //una stringa di email
            
            this.counter++;

            if(this.counter === 10){
                this.listaEmail = this.listaTemporanea; //this in questo caso equivale al value usato in js 
                //in questo modo sto vedendo la stringa di lista Temporanea che rappresenta l'email
            }

        });
    },
    },
    mounted() {
        for (let i = 0; i <= 10; i++){
            this.fetchData();
        }
    }
}).mount("#app")