import Ember from "ember";

export default Ember.Route.extend({
  requiere: "escuelas.crear",
  perfil: Ember.inject.service(),

  model() {
    return new Ember.RSVP.hash({
      estado: 1,
      nombre: "",
      area: this.store.findRecord("area", 1)
    }).then(valoresPorOmision => {
      let opciones = {
        estado: valoresPorOmision.estado,
        nombre: valoresPorOmision.nombre,
        area: valoresPorOmision.area
      };

      return this.store.createRecord("escuela", opciones);
    });
  },

  afterModel(model) {
    model.set("opciones", {
      niveles: this.store.findAll("nivel"),
      areas: this.store.findAll("area"),
      modalidades: this.store.findAll("modalidad"),
      tiposDeFinanciamiento: this.store.findAll("tipo-de-financiamiento"),
      tiposDeGestion: this.store.findAll("tipo-de-gestion"),
      localidades: this.store.findAll("localidad"),
      programas: this.store.findAll("programa")
    });
  },

  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    regresar() {
      return this.transitionTo("app.escuelas.index");
    },
    cancelar() {
      return this.transitionTo("app.escuelas.index");
    }
  }
});
