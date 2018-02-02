var _ = require('underscore');

module.exports = {
    init : function(next){
        sails.log.info('[i6-core] starting Monitoring');
        setTimeout(next, 3000);

        setInterval(function(){

            var data = {
                hrsg1 : {},
                hrsg2 : {},
                report1 :{},
                report2 : {}
            };
            _.each(i6.dataSource.hrsg1, function(tag){
                data.hrsg1[tag.name] = tag;
                if(typeof(tag.value)=='number') data.hrsg1[tag.name].value = tag.value.toFixed(2);
            });
            _.each(i6.dataSource.hrsg2, function(tag){
               data.hrsg2[tag.name] = tag;
               if(typeof(tag.value)=='number') data.hrsg2[tag.name].value = tag.value.toFixed(2);
            });
            _.each(i6.dataSource.report1, function(tag){
                data.report1[tag.name] = tag;
                if(typeof(tag.value)=='number') data.report1[tag.name].value = tag.value.toFixed(2);
             });
             _.each(i6.dataSource.report2, function(tag){
                data.report2[tag.name] = tag;
                if(typeof(tag.value)=='number') data.report2[tag.name].value = tag.value.toFixed(2);
             });
            sails.sockets.blast('realtime_update',data) ;
        }, 1000);
   
    }
};
