var _ = require('underscore');

module.exports = {
    init : function(next){
        sails.log.info('[i6-core] starting Monitoring');
        setTimeout(next, 3000);

        setInterval(function(){

            var data = {
                hrsg1 : {},
                hrsg2 : {},
            };
            _.each(i6.dataSource.hrsg1, function(tag){
                data.hrsg1[tag.name] = tag;
                if(typeof(tag.value)=='number') {
                    data.hrsg1[tag.name].value = tag.value.toFixed(2);
                    data.hrsg1[tag.name].persen = (tag.value - tag.out_min) / (tag.out_max - tag.out_min) * 100;
                };

            });
            _.each(i6.dataSource.hrsg2, function(tag){
               data.hrsg2[tag.name] = tag;
               if(typeof(tag.value)=='number') {
                   data.hrsg2[tag.name].value = tag.value.toFixed(2);
                   data.hrsg2[tag.name].persen = (tag.value - tag.out_min) / (tag.out_max - tag.out_min) * 100;
                };

            });
            sails.sockets.blast('realtime_update',data) ;
        }, 1000);
   
    }
};



// function record(){
//     setTimeout(function(){
//         var hrsg1 : {
//             co : i6.dataSource.hrsg1.CO.value,
//             co2 : hj,
//         },

//         Simpan1.create(hrsg1).exec(function(err,res){
//             Simpan2(){
//                 record();
//             }        
//         });

//     }, 15000);
// }

// record();