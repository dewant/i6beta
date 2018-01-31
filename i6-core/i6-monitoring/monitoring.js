module.exports = {
    init : function(next){
        sails.log.info('[i6-core] starting Monitoring');
        setTimeout(next, 3000);

        setInterval(function(){
            sails.sockets.blast('realtime_update',i6.dataSource) ;
        }, 1000);
   
    }
};
