const ModelProjecte = require('./ModelProjecte.js');
const colleccio = "ProjectesTemporals";
const document = {

    "projecteTemporal":{
      "usuari_id":"",
      "nom_usuari":"",
      "titul":"",
      "descripcio":"",
      "imatges":[],
      "categoria":"",
      "tags":[],
      "te_donacio":false,
      "correu" : ""

    },

  "per_validar":{
    "confirmat" : false,
    "dataCaducitat":""
  }
}

class ProjecteTemporal extends ModelProjecte{

  constructor(colleccioEntrada = colleccio){
    super(colleccioEntrada , document);
  }


}

module.exports = ProjecteTemporal;
