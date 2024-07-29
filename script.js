const { cretaApp } = Vue;

cretaApp({
    data() {
        return {
            emails: null
        }
    },
    created () {
        this.getRandomEmails ();
    },
    methods: {
        getRandomEmails () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => { 
                this.emails = result.data.response
            });
        }

    }
    
}).mount('#app');
