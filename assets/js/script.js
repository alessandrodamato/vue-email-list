const { createApp } = Vue;

createApp({

  data(){
    return{
      emails: [],
      maxEmails: 10,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },

  methods:{

    getEmails(){
      axios.get(this.apiUrl)
      .then((res) => {
        this.emails.push(res.data.response)
      });
    },
    
    cycleEmails(){
      for (let i = 0; i < this.maxEmails; i++) {
        this.getEmails();
      }
      console.log(this.emails);
    }

  },

  mounted(){
    this.cycleEmails();
  }

}).mount('#app')