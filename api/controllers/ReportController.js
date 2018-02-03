/**
 * ReportController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var XlsxTemplate = require('xlsx-template');
var fs = require('fs');
var path = require('path');
var moment = require('moment');


module.exports = {
    generate : async function(req, res) {
        var query = {
            area : req.query.area,
            type : req.query.type,
            date : req.query.date,
            hour : req.query.hour
        }

        var record_data = await sails.helpers.getReportData(query);

        var template_path = path.join(process.cwd(), 'user_data', 'template_hourly.xlsx');

        var output_cache = path.join(process.cwd(),'user_data', 'temp.xlsx')

        var report_data = {
            operator : 'Bay',
            tanggal : query.date,
            record : record_data
        }

        fs.readFile(template_path, function(err, data) {

            // Create a template
            var template = new XlsxTemplate(data);
            
            var sheetNumber = 1;

          // Perform substitution
            template.substitute(sheetNumber, report_data);

            // Get binary data
            var binaryData = template.generate();

            //Write report file
            fs.writeFile (output_cache, binaryData, 'binary', function(err) {
                res.download(output_cache, function(err){
                    fs.unlinkSync(output_cache);            
                });
            });
        });
    }  

};

