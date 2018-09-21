Vue.component('my-component', {
  props: {
    'message': String
  },
  template: `<div></div>`
})

new Vue({
  el: '#app',
  data: function() {
    return {
      planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      can_see: {
        Mercury: true,
        Venus: true,
        Earth: true,
        Mars: true,
        Jupiter: true,
        Saturn: true,
        Uranus: true,
        Neptune: true
      },
      active_count: 8
    }
  },
  methods: {
    pushPlanet: function() {
      if (this.active_count >= this.planets.length) {
        return;
      }
      this.can_see[this.planets[this.active_count++]] = true;
    },
    popPlanet: function() {
      if (this.active_count <= 0) {
        return;
      }
      this.can_see[this.planets[--this.active_count]] = false;
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
