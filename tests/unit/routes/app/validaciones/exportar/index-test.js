import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/validaciones/exportar/index",
  "Unit | Route | app/validaciones/exportar/index",
  {
    // Specify the other units that are required for this test.
    needs: ["service:analytics", "service:notificador", "service:perfil"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
