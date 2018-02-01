/*===============================================================
    Render view dari model View

=================================================================*/
module.exports = function(req,res){
    let data1_name = req.param('data1') || 'index';
    if(view_name){
        Data1.findOne({name:data1_name}).exec((err,viewdata)=>{
            if(viewdata){
                return res.view('pages/render',{view : viewdata});
            }else{
                return res.view('pages/render',{view : {code : '<h3>Data1 tidak ditemukan.</h3>'}});
            }
        });

    }
}