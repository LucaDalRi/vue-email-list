const { createApp } = Vue

createApp({
  data() {
    return {

      email: [],
      
    }
  },

  mounted() {

    for (i = 0 ; i < 10 ; i++) {
      
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta) => {
          this.email.push(risposta.data.response);
      });

    }
  
  }

}).mount('#app')