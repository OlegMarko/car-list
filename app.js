const car = (name, model, owner, year, phone, images) => ({ name, model, owner, year, phone, images });

const cars = [
    car('Ford', 'Focus', 'Oleg', 2016, '+380 98 123 45 67', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Oleg', 2018, '+380 98 123 45 67', 'images/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Oleg', 2015, '+380 98 123 45 67', 'images/panamera.jpg')
];


new Vue({
    el: '#app',
    data() {
        return {
            cars
        }
    }
});