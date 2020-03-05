colors = {
  "confirmed": {"min": am4core.color("#3498db"), "max": am4core.color("#2980b9")},
  "deaths": {"min": am4core.color("#e74c3c"), "max": am4core.color("#c0392b")},
  "recovered": {"min": am4core.color("#2ecc71"), "max": am4core.color("#27ae60")}

}


function create_map() {
    am4core.useTheme(am4themes_animated);
     // Create map instance
    var chart = am4core.create("mapdiv", am4maps.MapChart);
    // Set map definition
    chart.geodata = am4geodata_worldHigh;

    // Set projection
    chart.projection = new am4maps.projections.EqualEarth();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];

    console.log(chart.colors.getIndex(1))

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: colors["confirmed"]["min"],
      max: colors["confirmed"]["max"]
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    polygonSeries.data = mapData["confirmed"];


    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");

    return polygonSeries

}



// am4core.ready(function() {
//
// }); // end am4core.ready()


function setMapData(map_name) {
    polygonSeries.data = mapData[map_name];
    polygonSeries.heatRules.pop()
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: colors[map_name]["min"],
      max: colors[map_name]["max"]
    });

}
