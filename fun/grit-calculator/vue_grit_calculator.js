Vue.component('shape-selector', {
  props: ['shape'],
  methods: {
    log: function() {
      console.log('hey')
    }
  },
  // template: `<div v-bind:style="goodies" v-on:click="log">{{ shape }}</div>`
  template: `<div v-bind:class="shape" v-on:click="log">{{ shape }}</div>`
})





const App = new Vue({
  el: '#app',
  data: {
    rectangle: '#rectangle',
    cylinder: '#cylinder',
    stadium: '#stadium',
    style_rectangle: {
      backgroundColor: 'green',
      color: 'white'
    },
    style_cylinder: {
      backgroundColor: 'blue',
      color: 'white'
    },
    style_stadium: {
      backgroundColor: 'blue',
      color: 'white'
    },
    state: {
      active_shape: 'rectangle'
    }
  },
  methods: {
    selectShape: function(shape) {
      console.log(shape);
    },
    change: function() {
      console.log('you clicked the shape!')
    },
    resetShapeStyles: function() {
    },
    changeColor: function() {
      this.color = 'green'
    }
  }
})










