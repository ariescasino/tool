// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 3 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";

  // -----------------------------------------------------------------------
  // sales ratio
  // -----------------------------------------------------------------------
  var sales_ratio = {
    series: [
      {
        name: "Xtreme Admin ",
        data: [28, 40, 36, 52, 38, 60, 55, 50],
      },
      {
        name: "MaterialPro Admin ",
        data: [8.9, 6.6, 22.9, 6.8, 15.5, 10.1, 8.8, 18.4],
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
      strokeDashArray: 3,
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
    colors: ["#137eff", "#5ac146"],
    fill: {
      type: "solid",
      opacity: 0.1,
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#137eff", "#fff"],
        opacityFrom: 0.2,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 3,
      strokeColors: "transparent",
    },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
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
  // weather
  // -----------------------------------------------------------------------
  var option_weather_report = {
    series: [
      {
        name: "Day 1 ",
        data: [21, 15, 30, 45, 15],
      },
    ],
    chart: {
      type: "line",
      height: 74,
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
      width: 2,
      colors: ["#fff"],
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
      show: true,
      size: 2,
      colors: ["#fff"],
      strokeColors: "transparent",
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
  // campaign status
  // -----------------------------------------------------------------------

  var campaign_status = {
    series: [55, 18, 10],
    labels: ["Pending", "Bounced", "Failed"],
    chart: {
      type: "donut",
      fontFamily: "Rubik,sans-serif",
      height: 250,
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
          size: "73",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              fontSize: "13px",
              color: "#a1aab2",
              label: "Status",
            },
          },
        },
      },
    },
    colors: ["#137eff", "#8b5edd", "#5ac146"],
    tooltip: {
      show: true,
      fillSeriesColor: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 426,
        options: {
          chart: {
            height: 220,
          },
        },
      },
    ],
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#campaign-status"),
    campaign_status
  );
  chart_pie_donut.render();

  // -----------------------------------------------------------------------
  // Earnings
  // -----------------------------------------------------------------------
  var yearly_comparison = {
    series: [
      {
        name: "Last Year ",
        data: [5, 4, 5, 3, 12, 4, 15, 8, 10, 8, 7, 5],
      },
      {
        name: "This Year ",
        data: [4, 10, 5, 4, 8, 3, 3, 4, 9, 7, 10, 4],
      },
    ],
    chart: {
      fontFamily: "Rubik,sans-serif",
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#137eff", "#e9ecef"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  var chart_column_stacked = new ApexCharts(
    document.querySelector("#yearly-comparison"),
    yearly_comparison
  );
  chart_column_stacked.render();
});
