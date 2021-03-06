import { moduleForModel, test } from "ember-qunit";

moduleForModel("escuela", "Unit | Model | escuela", {
  // Specify the other units that are required for this test.
  needs: [
    "model:localidad",
    "model:tipoDeFinanciamiento",
    "model:tipoDeGestion",
    "model:nivel",
    "model:area",
    "model:programa",
    "model:piso",
    "model:contacto",
    "model:nivel",
    "model:evento",
    "model:motivoDeConformacion",
    "model:validacion",
    "model:modalidad",
    "model:perfil"
  ]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
