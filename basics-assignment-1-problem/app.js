const app = Vue.createApp({
    data() {
        return {
            name: "Maksim",
            age: 33,
            imageUrl: 'https://i.pinimg.com/originals/53/81/e1/5381e15660bed8b0d2cba402fb30510d.jpg'
        };
    },
    methods: {
        outputAge() {
            return this.age + 5;
        },
        favNumber() {
            return Math.random();
        }
    }
});
app.mount('#assignment');