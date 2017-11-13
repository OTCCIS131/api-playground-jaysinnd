$(function() {
    const vm = new Vue({
        el: '#app',
        data: {
            dogs: [],
            
        },
        methods: {
            loadDogs() {
                this.loading = true
                this.$http.get('https://dog.ceo/api/breeds/list')
                    .then(resp => {
                        this.dogs = resp.body.message
                        
                    })
            },

        }
    })
})