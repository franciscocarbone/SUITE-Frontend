import Ember from "ember";
import QueryParamsResetRouteMixin from "ember-query-params-reset/mixins/query-params-reset-route";

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  // queryParams: {},

  model() {
    let opciones = { };

    return this.store.createRecord("tarea", opciones);
  },

  // afterModel(model) {
    // model.set("buscarPersonas", this.get("buscarPersonas"));
    // model.set("categorias", this.store.findAll("categoriaDeEvento"));
  // },

  actions: {
    guardarTarea(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.tareas.index");
      });
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cancelar() {
      return this.transitionTo("app.tareas.index");
    }
  }
});
