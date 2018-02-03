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
            co: i6.dataSource.hrsg1.CO.value,
            co2: i6.dataSource.hrsg1.CO2.value,
            flow: i6.dataSource.hrsg1.FLOW.value,
            nox: i6.dataSource.hrsg1.NOX.value,
            o2: i6.dataSource.hrsg1.O2.value,
            opacity: i6.dataSource.hrsg1.OPACITY.value,
            dust: i6.dataSource.hrsg1.DUST.value,
            so2: i6.dataSource.hrsg1.SO2.value
        }
        var hrsg2 = {
            co: i6.dataSource.hrsg1.CO.value,
            co2: i6.dataSource.hrsg1.CO2.value,
            flow: i6.dataSource.hrsg1.FLOW.value,
            nox: i6.dataSource.hrsg1.NOX.value,
            o2: i6.dataSource.hrsg1.O2.value,
            opacity: i6.dataSource.hrsg1.OPACITY.value,
            dust: i6.dataSource.hrsg1.DUST.value,
            so2: i6.dataSource.hrsg1.SO2.value
        }

        Record_hrsg1.create(hrsg1).exec(function (err, res) {
            Record_hrsg2.create(hrsg2).exec(function (err, res) {
            })
        })
        record();

    }, 15000);
}
