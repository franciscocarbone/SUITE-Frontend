import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Ember.Route.reopen({
  perfil: Ember.inject.service(),
  notificador: Ember.inject.service(),

  beforeModel(transition) {
    let permisoQueRequiere = this.get("requiere");

    if (permisoQueRequiere) {
      if (!this.get("perfil").tienePermiso(permisoQueRequiere)) {
        this.get("notificador").error("No tiene permisos para ingresar aquí.");
        return this.transitionTo("app");
      }
    }

    this._super(transition);
    return true;
  }
});

/* Se asegura de reiniciar la posición del scroll cuando se cambia de ruta. */
Ember.Router.reopen({
  analytics: Ember.inject.service("analytics"),
  rutaAnterior: "",

  didTransition() {
    this._super(...arguments);

    let rutaActual = this.get("currentRouteName");
    let haCambiadoDeRuta = this.get("rutaAnterior") !== rutaActual;

    this.get("analytics").notifificarTransicion(this.get("url"));

    if ($(".ui.pushable")[0]) {
      if (haCambiadoDeRuta) {
        $(".ui.pushable")[0].scrollTop = 0;
      }
    }

    this.set("rutaAnterior", rutaActual);
  }
});

Router.map(function() {
  this.route("login");
  this.route("app", function() {
    this.route("ui", function() {
      this.route("tabla");
      this.route("formularios");
      this.route("modales");
      this.route("otros");
      this.route("planilla");
      this.route("grafico-de-barras");
      this.route("selector-de-region");
    });

    this.route("personas", function() {
      this.route("crear");
      this.route("detalle", { path: "detalle/:perfil_id" });
      this.route("edicion", { path: "edicion/:perfil_id" });
      this.route("informe", { path: "informe/:perfil_id" });
      this.route("clave", { path: "clave/:perfil_id" });
    });

    this.route("agenda", function() {
      this.route("crear");
      this.route("editar", { path: "editar/:evento_id" });
      this.route("lista");
      this.route("detalle", { path: "detalle/:evento_id" });
      this.route("index", function() {
        this.route("calendario");
        this.route("lista");
      });
    });

    this.route("escritorio", function() {});

    this.route("distritos", function() {
      this.route("detalle", { path: "detalle/:distrito_id" });
    });
    this.route("escuelas", function() {
      this.route("detalle", { path: "detalle/:escuela_id" });
      this.route("edicion", { path: "edicion/:escuela_id" });
      this.route("conformar", { path: "conformar/:escuela_id" });
      this.route("crear");
      this.route("todas");
    });
    this.route("mi-perfil");
    this.route("tareas", function() {
      this.route("detalle", { path: "detalle/:tarea_id" });
      this.route("crear");
      this.route("editar", { path: "editar/:evento_id" });
    });
    this.route("validaciones", function() {
      this.route("detalle", { path: "edicion/:validacion_id" });
      this.route("crear");
      this.route("editar", { path: "editar/:validacion_id" });
    });
    this.route("programas", function() {
      this.route("detalle", { path: "detalle/:programa_id" });
    });
    this.route("paquetes", function() {
      this.route("crear");
      this.route("crearMasivo");
      this.route("admin");
    });
    this.route("grupos", function() {
      this.route("detalle", { path: "detalle/:group_id" });
    });

    this.route("pisos", function() {
      this.route("crear");
      this.route("editar", { path: "editar/:piso_id" });
    });
  });

  this.route("tablas", function() {
    this.route("regiones", function() {
      this.route("acciones");
    });
  });
  this.route("logout");

  this.route("validaciones", function() {});
});

export default Router;
