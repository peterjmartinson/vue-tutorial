Vue.component('shape-selector', {
  props: ['shape', 'goodies'],
  methods: {
    log: function() {
      console.log('hey')
    }
  },
  template: `<div v-bind:style="goodies" v-on:click="log">{{ shape }}</div>`
})





const App = new Vue({
  el: '#app',
  data: {
    rectangle: '#rectangle',
    cylinder: '#cylinder',
    stadium: '#stadium',
    shapeStyle: {
      color: 'red'
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










