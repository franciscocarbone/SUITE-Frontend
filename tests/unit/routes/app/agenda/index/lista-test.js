import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/agenda/index/lista",
  "Unit | Route | app/agenda/index/lista",
  {
    needs: [
      "service:ajax",
      "service:perfil",
      "service:analytics",
      "service:perfil",
      "service:notificador"
    ]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
