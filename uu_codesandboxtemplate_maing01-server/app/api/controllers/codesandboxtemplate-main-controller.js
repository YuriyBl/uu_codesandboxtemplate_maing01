"use strict";
const CodesandboxtemplateMainAbl = require("../../abl/codesandboxtemplate-main-abl.js");

class CodesandboxtemplateMainController {
  init(ucEnv) {
    return CodesandboxtemplateMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return CodesandboxtemplateMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return CodesandboxtemplateMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new CodesandboxtemplateMainController();
