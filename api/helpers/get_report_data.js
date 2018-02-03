var moment = require('moment');


module.exports = {


  friendlyName: 'Report',


  description: 'Report something.',


  inputs: {
    area : {
      type : 'string',
      description : 'area CEMS',
      example : 'hrsg1'
    },

    type : {
      type : 'string',
      description : 'Tipe report',
      example : 'horly, daily, monthly'
    },

    date : {
      type : 'string',
      description : 'Tanggal mulai',
      example : 'YYYY-MM-DD'
    },

    hour : {
      type : 'number',
      description : 'Jam perekaman data',
      example : 7
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var time_start, time_end, start, end;
    switch(inputs.type){
      case 'hourly' :
        time_start = moment(inputs.date + ' ' + inputs.hour, 'YYYY-MM-DD H').toDate();
        time_end = moment(time_start).add(1, 'hours');

        start = time_start.valueOf();
        end = time_end.valueOf();

        break;
      case 'daily' :


        break;
      case 'weekly' :
        break;
      case 'monthly':
        break;
    }

    //Read report data
    var where = {
        createdAt : { '>=' : start,  '<' : end}, 
        // createdAt : { '<' : end},
      };

    var record_data  = await sails.models['record_' + inputs.area].find(where);

    record_data.forEach(record => {
      record_data.waktu = moment(new Date(record.createdAt)).format('mm:ss');

    });


    // console.log(record_data);



    // All done.
    return exits.success(record_data);

  }


};

