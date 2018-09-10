Vue.component('shape-selector', {
  props: ['shape'],
  template: '<h3 class="test">{{ shape }}</h3>'
})





const App = new Vue({
  el: '#app',
  data: {
    rectangle: '#rectangle',
    cylinder: '#cylinder',
    stadium: '#stadium'
  },
  methods: {
    selectShape(shape) {
      console.log(shape);
    }
  }
})



// window.onload = function() {
//   'use strict';

//   var background_primary = '#0D7479',
//       background_accent  = '#104577',
//       color_primary      = '#000000',
//       color_accent       = '#ffffff';
//   var dom = {};
//   dom.form           = document.getElementById('volume-form');
//   dom.output         = document.getElementById('output');
//   dom.button         = document.getElementById('calculate');
//   dom.icon_rectangle = document.getElementById('rectangle');
//   dom.icon_cylinder  = document.getElementById('cylinder');
//   dom.icon_stadium   = document.getElementById('stadium');

//   var container = {
//     shape : 'rectangle',
//     dimensions : {
//       height : 0,
//       width  : 0,
//       length : 0
//     }
//   };

//   function calculate() {
//     var volume = 0;
//     var pi = 3.1415926535897932384626433832795;
//     var val = dom.button.form;
//     console.log(JSON.stringify(dom.height_unit.options[dom.height_unit.selectedIndex].value));
//     var dim = {};
//     // var dim = container.dimensions;
//     switch (container.shape) {
//       case 'rectangle':
//         dim = {
//           height : dom.height_unit.options[dom.height_unit.selectedIndex].value == 'inches' ? val.height.value : val.height.value*12,
//           width  : dom.width_unit.options[dom.width_unit.selectedIndex].value == 'inches' ? val.width.value : val.width.value*12,
//           length : dom.length_unit.options[dom.length_unit.selectedIndex].value == 'inches' ? val.length.value : val.length.value*12
//         }
//         volume = dim.height * dim.width * dim.length;
//         break;
//       case 'cylinder':
//         dim = {
//           height : dom.height_unit.options[dom.height_unit.selectedIndex].value == 'inches' ? val.height.value : val.height.value*12,
//           diameter  : dom.diameter_unit.options[dom.diameter_unit.selectedIndex].value == 'inches' ? val.diameter.value : val.diameter.value*12
//         }
//         volume = (pi * dim.diameter/2 * dim.diameter/2) * dim.height;
//         break;
//       case 'stadium':
//         dim = {
//           height : dom.height_unit.options[dom.height_unit.selectedIndex].value == 'inches' ? val.height.value : val.height.value*12,
//           width  : dom.width_unit.options[dom.width_unit.selectedIndex].value == 'inches' ? val.width.value : val.width.value*12,
//           length : dom.length_unit.options[dom.length_unit.selectedIndex].value == 'inches' ? val.length.value : val.length.value*12
//         }
//         volume = dim.height * ((pi * dim.width * dim.width) + (dim.width * (dim.length - dim.width)));
//         break;
//       default:
//         return 0;
//     }
//     return volume + ' cubic inches<br>' +
//            cubicFeet(volume) +  ' cubic feet<br>' +
//            cubicYards(volume) + ' cubic yards<br>' +
//            gallons(volume) +    ' gallons<br>' +
//            pounds(volume) +     ' pounds<br>' +
//            tons(volume) +       ' tons';
//   }

//   // Conversion Functions
//   function feetToInches(feet) {
//     return feet*12;
//   }

//   function cubicYards(cubic_inches) {
//     return cubic_inches / (1728 * 27);
//   }

//   function cubicFeet(cubic_inches) {
//     return cubic_inches / 1728;
//   }

//   function gallons(cubic_inches) {
//     return cubic_inches * 7.48 / 1728;
//   }

//   function pounds(cubic_inches) {
//     return cubic_inches / 1728 * 119;
//   }

//   function tons(cubic_inches) {
//     return cubic_inches / 1728 * 119 * 0.0005;
//   }
  
//   dom.button.onclick = function() {
//     dom.output.innerHTML = calculate();
//   };

//   dom.icon_rectangle.onclick = function() {
//     var inputs = '';
//     inputs += '<div id="inputs">';
//     inputs += '  <input type="number" name="height" id="height" placeholder="height" autofocus>';
//     inputs += '  <select id="height-units">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '  <input type="number" name="width" id="width" placeholder="width">';
//     inputs += '  <select id="width-units">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '  <input type="number" name="length" id="length" placeholder="length">';
//     inputs += '  <select id="length-units">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '</div>';
//     container.shape = 'rectangle';
//     container.dimensions = {
//       height : 0,
//       width  : 0,
//       length : 0
//     };
//     dom.form.innerHTML = inputs;
//     dom.height      = document.getElementById('height');
//     dom.height_unit = document.getElementById('height-units');
//     dom.width       = document.getElementById('width');
//     dom.width_unit  = document.getElementById('width-units');
//     dom.length      = document.getElementById('length');
//     dom.length_unit = document.getElementById('length-units');
//     dom.icon_rectangle.style.background = background_primary;
//     dom.icon_cylinder.style.background = background_primary;
//     dom.icon_stadium.style.background = background_primary;
//     dom.icon_rectangle.style.color = color_primary;
//     dom.icon_cylinder.style.color = color_primary;
//     dom.icon_stadium.style.color = color_primary;
//     this.style.background = background_accent;
//     this.style.color      = color_accent;
//   };
//   dom.icon_cylinder.onclick = function() {
//     var inputs = '';
//     inputs += '<div id="inputs">';
//     inputs += '  <input type="number" name="height" id="height" placeholder="height" autofocus>';
//     inputs += '  <select id="height-units" name="">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '  <input type="number" name="diameter" id="diameter" placeholder="diameter">';
//     inputs += '  <select id="diameter-units" name="">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '</div>';

//     container.shape = 'cylinder';
//     container.dimensions = {
//       diameter : 0,
//       height   : 0
//     };
//     dom.form.innerHTML = inputs;
//     dom.height      = document.getElementById('height');
//     dom.height_unit = document.getElementById('height-units');
//     dom.diameter      = document.getElementById('diameter');
//     dom.diameter_unit = document.getElementById('diameter-units');
//     dom.icon_rectangle.style.background = background_primary;
//     dom.icon_cylinder.style.background = background_primary;
//     dom.icon_stadium.style.background = background_primary;
//     dom.icon_rectangle.style.color = color_primary;
//     dom.icon_cylinder.style.color = color_primary;
//     dom.icon_stadium.style.color = color_primary;
//     this.style.background = background_accent;
//     this.style.color      = color_accent;
//   };

//   dom.icon_stadium.onclick = function() {
//     var inputs = '';
//     inputs += '<div id="inputs">';
//     inputs += '  <input type="number" name="height" id="height" placeholder="height" autofocus>';
//     inputs += '  <select id="height-units" name="">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '  <input type="number" name="width" id="width" placeholder="width" autofocus>';
//     inputs += '  <select id="width-units" name="">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '  <input type="number" name="length" id="length" placeholder="length" autofocus>';
//     inputs += '  <select id="length-units" name="">';
//     inputs += '    <option value="inches">inches</option>';
//     inputs += '    <option value="feet">feet</option>';
//     inputs += '  </select>';
//     inputs += '  <br>';
//     inputs += '</div>';
//     container.shape = 'stadium';
//     container.dimensions = {
//       height : 0,
//       length : 0,
//       width  : 0
//     };
//     dom.form.innerHTML = inputs;
//     dom.height      = document.getElementById('height');
//     dom.height_unit = document.getElementById('height-units');
//     dom.width       = document.getElementById('width');
//     dom.width_unit  = document.getElementById('width-units');
//     dom.length      = document.getElementById('length');
//     dom.length_unit = document.getElementById('length-units');
//     dom.icon_rectangle.style.background = background_primary;
//     dom.icon_cylinder.style.background = background_primary;
//     dom.icon_stadium.style.background = background_primary;
//     dom.icon_rectangle.style.color = color_primary;
//     dom.icon_cylinder.style.color = color_primary;
//     dom.icon_stadium.style.color = color_primary;
//     this.style.background = background_accent;
//     this.style.color      = color_accent;
//   };

//   dom.icon_rectangle.onclick();
// };



