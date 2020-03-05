function create_ts(){
    var chart = am4core.create("tsdiv", am4charts.XYChart);

    // Add data
    chart.data = tsData["confirmed"]["BE"]

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeWidth = 3;

    var bullet = series.bullets.push(new am4charts.CircleBullet());

    return chart


}