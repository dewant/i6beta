/**
 * Data1.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      name : {
        type : 'string',
        required : true,
        unique : true
      },
  
      security : {
        type : 'number',
        defaultsTo : 1,
        description : 'Level security yang diijinkan untuk mengakses data1 ini'
      },
  
      title : {
        type : 'string',
        required : true,
        description : 'Judul data1 yang ditampilkan'
      },
  
      icon : {
        type : 'string',
        defaultsTo : 'window-maximize',
        description : 'Icon untuk data1. Menggunakan standar icon font awesome.',
        example : 'window-maximize'
      },
  
      code : {
        type : 'string',
        defaultsTo : '<h3> Ini adalah contoh raw code </h3>',
        description : 'Kode untuk data1 dalam format standar HTML'
      }
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    },
  
  };
  
  