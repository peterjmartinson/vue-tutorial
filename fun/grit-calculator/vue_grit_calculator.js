Vue.component('shape-selector', {
  props: ['shape'],
  methods: {
    log: function() {
      console.log('hey')
    }
  },
  template: `<div v-bind:class="shape" v-on:click="$emit('make-active')">{{ shape }}</div>`
})





const App = new Vue({
  el: '#app',
  data: function() {
    return {
      active_shape_color: 'green',
      passive_shape_color: 'blue',
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
    }
  },
  methods: {
    setShapeColor: function(shape) {
      switch (shape) {
        case 'rectangle':
          this.state.active_shape = 'rectangle';
          this.style_rectangle.backgroundColor = this.active_shape_color;
          this.style_cylinder.backgroundColor = this.passive_shape_color;
          this.style_stadium.backgroundColor = this.passive_shape_color;
          break;
        case 'cylinder':
          this.state.active_shape = 'cylinder';
          this.style_rectangle.backgroundColor = this.passive_shape_color;
          this.style_cylinder.backgroundColor = this.active_shape_color;
          this.style_stadium.backgroundColor = this.passive_shape_color;
          break;
        case 'stadium':
          this.state.active_shape = 'stadium';
          this.style_rectangle.backgroundColor = this.passive_shape_color;
          this.style_cylinder.backgroundColor = this.passive_shape_color;
          this.style_stadium.backgroundColor = this.active_shape_color;
          break;
        default:
          break;
      }
      console.log("set shape color!");
    }
  }
})










