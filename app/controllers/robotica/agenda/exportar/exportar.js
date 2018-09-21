import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";

export const parametros = new QueryParams({
  desde: {
    defaultValue: null,
    refresh: true,
    replace: true
  },
  hasta: {
    defaultValue: null,
    refresh: true,
    replace: true
  },
  criterio: {
    defaultValue: null,
    refresh: true,
    replace: true
  }
});

export default Ember.Controller.extend(parametros.Mixin, {
  descargas: Ember.inject.service(),

  reset(isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  setup() {
    this.get("tareaExportarTaller").perform();
  },

  tareaExportarTaller: task(function*() {
    let { desde, hasta, criterio } = this.get("allQueryParams");

    let url = `/api/eventos-de-robotica/export?inicio=${desde}&fin=${hasta}&criterio=${criterio}`;
    let nombre = `talleresDeRobotica_por_${criterio}_${desde}_${hasta}.xls`;

    return yield this.get("descargas").iniciar(url, nombre);
  }).drop()
});
