import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/escuelas/edicion", "Unit | Route | app/escuelas/edicion", {
  // Specify the other units that are required for this test.
  needs: ["service:analytics", "service:perfil", "service:notificador"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
