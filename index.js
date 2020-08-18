import { cats } from './cats.js';

let shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
};

document.addEventListener('DOMContentLoaded', yall({
    observeChanges: true
}));

new Vue({
    el: '#cats',
    data: {
        cats: shuffle(cats),
        loaded: 12
    },
    methods: {
        load() {
            let amount = this.loaded + 12;
            if (amount > this.cats.length) {
                this.loaded += this.cats.length - this.loaded;
            } else {
                this.loaded += 12;
            }
        }
    }
}); z