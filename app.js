const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image });
const log = (text, type, date = new Date()) => ({text, type, date});

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
            phoneVisibility: false,
            search: '',
            modalVisibility: false,
            logs: []
        }
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCar = index;
        },
        togglePhone() {
            this.phoneVisibility = !this.phoneVisibility
        },
        newOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`New order: ${this.car.name} - ${this.car.model}`, 'ok')
            );
        },
        cancelOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cancel')
            );
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show Phone';
        },
        filteredCars() {
            return this.cars.filter(car => {
                return (car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) ||
                        (car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});