// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 1 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";

  // -----------------------------------------------------------------------
  // sales ratio
  // -----------------------------------------------------------------------

  var sales_ratio = {
    series: [
      {
        name: "This week",
        data: [24.5, 20.3, 42.7, 32, 34.9, 48.6, 40],
      },
      {
        name: "Last week",
        data: [8.9, 5.8, 21.9, 5.8, 16.5, 6.5, 14.5],
      },
    ],
    chart: {
      fontFamily: "Rubik,sans-serif",
      height: 270,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(0,0,0,.1)",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#137eff", "#e9ecef"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      borderColor: ["#137eff", "#e9ecef"],
    },
    markers: {
      size: 3,
      strokeColors: "transparent",
    },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7"],
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      categories: ["0k", "1k", "2k", "3k", "4k", "5k"],
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    fill: {
      type: "solid",
      opacity: [0.1, 0.2],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  var chart_area_spline = new ApexCharts(
    document.querySelector("#sales-ratio"),
    sales_ratio
  );
  chart_area_spline.render();

  // -----------------------------------------------------------------------
  // campaign
  // -----------------------------------------------------------------------

  var option_campaign = {
    series: [35, 18, 15, 10],
    labels: ["Un-opened", "Bounced", "Clicked", "Open"],
    chart: {
      type: "donut",
      fontFamily: "Rubik,sans-serif",
      height: 140,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "76",
          labels: {
            show: false,
            name: {
              show: false,
              offsetY: 10,
            },
            value: {
              show: false,
            },
            total: {
              show: false,
            },
          },
        },
      },
    },
    colors: ["#137eff", "#eceff1", "#8b5edd", "#5ac146"],
    tooltip: {
      show: true,
      theme: "dark",
      fillSeriesColor: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#campaign"),
    option_campaign
  );
  chart_pie_donut.render();

  // -----------------------------------------------------------------------
  // weather
  // -----------------------------------------------------------------------
  var option_weather_report = {
    series: [
      {
        name: "Day 1 ",
        type: "area",
        data: [21, 15, 30, 45, 15],
      },
    ],
    chart: {
      type: "line",
      height: 120,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      lineCap: "round",
      width: 2,
      colors: ["#5ac146"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    markers: {
      size: 2,
      strokeColors: "transparent",
      strokeWidth: 2,
      shape: "circle",
      colors: ["#5ac146"],
    },
    fill: {
      type: "solid",
      colors: ["#5ac146"],
      opacity: 0.2,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "13px",
        fontFamily: "Rubik,sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
      },
      marker: {
        show: false,
      },
      followCursor: true,
    },
    legend: {
      show: false,
    },
  };

  var chart_area_basic = new ApexCharts(
    document.querySelector("#weather-report"),
    option_weather_report
  );
  chart_area_basic.render();

  // -----------------------------------------------------------------------
  // Our Visitor
  // -----------------------------------------------------------------------
  var referral_earnings = {
    series: [
      {
        name: "",
        data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9],
      },
    ],
    chart: {
      type: "bar",
      height: 40,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#137eff"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "80%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "Rubik,sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
      },
    },
  };

  var chart_column_bar = new ApexCharts(
    document.querySelector("#referral-earnings"),
    referral_earnings
  );
  chart_column_bar.render();

  // -----------------------------------------------------------------------
  // world map
  // -----------------------------------------------------------------------
  jQuery("#visitfromworld").vectorMap({
    map: "world_mill_en",
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderOpacity: 0,
    borderWidth: 0,
    zoomOnScroll: false,
    color: "rgba(223,226,233, 0.8)",
    regionStyle: {
      initial: {
        fill: "rgba(223,226,233, 0.8)",
        "stroke-width": 1,
        stroke: "rgba(223,226,233, 0.8)",
      },
    },
    markerStyle: {
      initial: {
        r: 5,
        fill: "#dfe2e9",
        "fill-opacity": 1,
        stroke: "#dfe2e9",
        "stroke-width": 1,
        "stroke-opacity": 1,
      },
    },
    enableZoom: true,
    hoverColor: "#79e580",
    markers: [
      {
        latLng: [21.0, 78.0],
        name: "India : 9347",
        style: {
          fill: "#2961ff",
        },
      },
      {
        latLng: [-33.0, 151.0],
        name: "Australia : 250",
        style: {
          fill: "#2961ff",
        },
      },
      {
        latLng: [36.77, -119.41],
        name: "USA : 250",
        style: {
          fill: "#2961ff",
        },
      },
      {
        latLng: [55.37, -3.41],
        name: "UK   : 250",
        style: {
          fill: "#2961ff",
        },
      },
      {
        latLng: [25.2, 55.27],
        name: "UAE : 250",
        style: {
          fill: "#2961ff",
        },
      },
    ],
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#93d5ed", "#93d5ee"],
    selectedColor: "#cbd0db",
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function (element, code, region) {
      var message =
        'You clicked "' +
        region +
        '" which has the code: ' +
        code.toUpperCase();
      alert(message);
    },
  });
});
