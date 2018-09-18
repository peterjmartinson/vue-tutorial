Vue.component('my-component', {
  props: {
    'message': String
  },
  template: `<div>{{ message }}</div>`
})

new Vue({
  el: '#app',
  data: function() {
    return {
      vue_say: "It's a bound prop!",
      planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      active_planets: ['Mercury', 'Venus'],
      active_count: 2,
      isActive: false
    }
  },
  methods: {
    activate: function(planet) {
    },
    pushPlanet: function() {
      if (this.active_count >= 0 && this.active_count <= this.planets.length) {
        active_planets.push(planets[active_count]);
        active_count++;
      }
    },
    popPlanet: function() {
    }
  },
  template: '<div>\
      <div id="add" v-on:click="pushPlanet">ADD</div>\
      <div id="subtract" v-on:click="popPlanet">SUBTRACT</div>\
      <br>\
      <my-component\
        v-for="planet in planets"\
        v-bind:message="planet"\
        v-bind:class="{ active: isActive }"\
        v-on:click="activate(planet)"\
      ></my-component>\
    </div>'
})
