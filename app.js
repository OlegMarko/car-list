const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image });

const cars = [
    car('Ford', 'Focus', 'Oleg', 2016, '+380 98 123 45 67', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Oleg', 2018, '+380 98 123 45 67', 'images/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Oleg', 2015, '+380 98 123 45 67', 'images/panamera.jpg')
];


new Vue({
    el: '#app',
    data() {
        return {
            cars,
            car: cars[0],
            selectedCar: 0,
            phoneVisibility: false
        }
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCar = index;
        },
        togglePhone() {
            this.phoneVisibility = !this.phoneVisibility
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show Phone';
        }
    }
});