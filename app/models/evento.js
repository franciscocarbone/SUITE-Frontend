import DS from "ember-data";
import Ember from "ember";
import {
  validatePresence,
  validateLength
} from "ember-changeset-validations/validators";

export default DS.Model.extend({
  titulo: DS.attr("string"),

  fecha: DS.attr("string"),

  inicio: DS.attr("string"),
  fin: DS.attr("string"),

  todoElDia: DS.attr("boolean"),
  responsable: DS.belongsTo("perfil"),

  color: Ember.computed("titulo", function() {
    return "white";
  }),

  borderColor: Ember.computed("titulo", function() {
    return "#ccc";
  }),

  validaciones: {
    titulo: [validatePresence(true), validateLength({ min: 2 })]
  }
});
