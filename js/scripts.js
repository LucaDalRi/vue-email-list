const { createApp } = Vue

createApp({
  data() {
    return {
      listIsReady: false,
      email: [],

    }
  },



  
  mounted() {
    
    for (i = 0 ; i < 10 ; i++) {
      
      axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((risposta) => {
        
        this.email.push(risposta.data.response);

        if (this.email.length == 10) {
          this.listIsReady = true
        }

      });
      
      
    };
    
  },
  
}).mount('#app')