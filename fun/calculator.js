const App = new Vue({
  el: '#app',
  data: {
    add_left: 0,
    add_right: 0,
    subtract_left: 0,
    subtract_right: 0,
    multiply_left: 0,
    multiply_right: 0,
    divide_left: 0,
    divide_right: 0
  },
  methods: {
    sum() {
      let add_left = this.add_left*1;
      let add_right = this.add_right*1;
      return add_left + add_right;
    },
    difference() {
      let subtract_left = this.subtract_left*1;
      let subtract_right = this.subtract_right*1;
      return subtract_left - subtract_right;
    },
    product() {
      let multiply_left = this.multiply_left*1;
      let multiply_right = this.multiply_right*1;
      return multiply_left * multiply_right;
    },
    quotient() {
      let divide_left = this.divide_left*1;
      let divide_right = this.divide_right*1;
      return divide_left / divide_right;
    }
  }
})

