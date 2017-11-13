$(function() {
    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            showing: 'dogs',
            showing: 'breeds',
            all: [],
            breed: [],
            dog: null

            
        },
        methods: {
            loadDogs() {
                this.loading = true
                this.$http.get('https://dog.ceo/api/breeds/list/all')
                    .then(resp => {
                        this.all = resp.body
                        this.loading = false
                    })
            },
            selectDog(dog) {
                this.dog = dog
                this.showing = 'breeds'
                this.loadBreeds()
            },
            loadBreeds() {
                this.breeds = []
                this.dogs.breeds.array.forEach(breed => {
                    this.$http.get(breed)
                        .then(resp => {
                            this.breed.push(resp.body)
                        })
                })
            }
        }
    })
})