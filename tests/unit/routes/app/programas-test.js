import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/programas", "Unit | Route | app/programas", {
  // Specify the other units that are required for this test.
  needs: ["service:analytics", "service:perfil", "service:notificador"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
