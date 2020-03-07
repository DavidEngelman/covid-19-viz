function create_ts(data_type, country_code){
    var chart = am4core.create("tsdiv", am4charts.XYChart);

    // Add data
    chart.data = tsData[data_type][country_code]

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    valueAxis.renderer.labels.template.fill = am4core.color("white");
    dateAxis.renderer.labels.template.fill = am4core.color("white");

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeWidth = 3;

    var bullet = series.bullets.push(new am4charts.CircleBullet());

    return chart


}

function setTsData(country, data_type){
    console.log(country, data_type)
    var country_code = isoCountries[country]
    create_ts(data_type, country_code)
} 