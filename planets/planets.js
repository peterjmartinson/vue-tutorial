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
      can_see: {
        Mercury: false,
        Venus: false,
        Earth: false,
        Mars: false,
        Jupiter: false,
        Saturn: false,
        Uranus: false,
        Neptune: false
      },
      active_count: 0
    }
  },
  methods: {
    activate: function(planet) {
    },
    pushPlanet: function() {
      if (this.active_count < this.planets.length) {
        for (planet in this.can_see) {
          this.can_see[planet] = false;
        }
        this.active_count++;
        count = 0;
        for (planet in this.can_see) {
          if (count === this.active_count) {
            break;
          }
          this.can_see[planet] = true;
          count++;
        }
      }
      console.log(`after: ${this.active_count}`);
    },
    popPlanet: function() {
      for (planet in this.can_see) {
        this.can_see[planet] = false;
      }
      if (this.active_count > 0) {
        this.active_count--;
        count = 0;
        for (planet in this.can_see) {
          if (count === this.active_count) {
            break;
          }
          this.can_see[planet] = true;
          count++;
        }
      }
      console.log(`after: ${this.active_count}`);
    }
  },
  template: '<div>\
      <button class="control" id="add" v-on:click="pushPlanet">ADD</button>\
      <button class="control" id="subtract" v-on:click="popPlanet">SUBTRACT</button>\
      <br>\
      <div class="planet-container">\
        <my-component\
          v-for="planet in planets"\
          v-bind:message="planet"\
          v-show="can_see[planet]"\
          v-bind:class="planet"\
        ></my-component>\
      </div>\
    </div>'
})
