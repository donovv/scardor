// MapleClasses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'mapleClasses';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    classname: {type: String, required: true , unique: true},
    classtype: {type: String},
    early: { 
      keyinput: {type: Number},
      mobility: {type: Number},
      mobbing: {type: Number},
      bossing: {type: Number},
      survivability: {type: Number},
      levelingspeed: {type: Number},
    },
    mid: {
      keyinput: {type: Number},
      mobility: {type: Number},
      mobbing: {type: Number},
      bossdmg: {type: Number},
      bossutil: {type: Number},
      survivability: {type: Number},
      levelingspeed: {type: Number},
    },
    mobbing: {
      late: {
        keyinput: {type: Number},
        mobility: {type: Number},
        levelingspeed: {type: Number},
      },
      end: {
        keyinput: {type: Number},
        mobility: {type: Number},
        levelingspeed: {type: Number},
      },
    },
    bossing: {
      keyinput: {type: Number},
      bossutil: {type: Number},
      burst: {type: Number},
      offburst: {type: Number},
      survivabilty: {type: Number},
    },
    rating: Number,
    description: String,
    linkskill: {
      name: String,
      value: String,
    },
    legionskill: {
      name: String,
      value: String,
    },
    pros: {
      pro1: String,
      pro2: String,
    },
    cons: {
      con1: String,
      con2: String,
    },
    links: Array,
    classimg: String
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
