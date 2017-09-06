import Ember from "ember";
import Application from "../../app";
import config from "../../config/environment";
import "./esperar";
import "./login";
import "./click-sobre-el-texto";

export default function startApp(attrs) {
  let application;

  let attributes = Ember.assign({}, config.APP, attrs);

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
