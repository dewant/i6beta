module.exports = {
    init: function (next) {
        sails.log.info('[i6-core] starting Historian');
        setTimeout(next, 3000);
        record();

    }
};


function record() {
    setTimeout(function () {
        var hrsg1 = {
            CO: i6.dataSource.hrsg1.CO.value,
            CO2: i6.dataSource.hrsg1.CO2.value,
            FLOW: i6.dataSource.hrsg1.FLOW.value,
            NOX: i6.dataSource.hrsg1.NOX.value,
            O2: i6.dataSource.hrsg1.O2.value,
            OPACITY: i6.dataSource.hrsg1.OPACITY.value,
            DUST: i6.dataSource.hrsg1.DUST.value,
            SO2: i6.dataSource.hrsg1.SO2.value
        }
        var hrsg2 = {
            CO: i6.dataSource.hrsg1.CO.value,
            CO2: i6.dataSource.hrsg1.CO2.value,
            FLOW: i6.dataSource.hrsg1.FLOW.value,
            NOX: i6.dataSource.hrsg1.NOX.value,
            O2: i6.dataSource.hrsg1.O2.value,
            OPACITY: i6.dataSource.hrsg1.OPACITY.value,
            DUST: i6.dataSource.hrsg1.DUST.value,
            SO2: i6.dataSource.hrsg1.SO2.value
        }

        Record_hrsg1.create(hrsg1).exec(function (err, res) {
            Record_hrsg2.create(hrsg2).exec(function (err, res) {
            })
        })
        record();

    }, 15000);
}
