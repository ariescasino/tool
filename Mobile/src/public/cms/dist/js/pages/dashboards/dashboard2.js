// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 2 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";
  // -----------------------------------------------------------------------
  // sales ratio
  // -----------------------------------------------------------------------

  var option_sales_ratio = {
    series: [
      {
        name: "Sales Ratio ",
        data: [28, 40, 36, 52, 38, 60, 55],
      },
    ],
    chart: {
      fontFamily: "Rubik,sans-serif",
      height: 210,
      type: "area",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 5,
        color: "#000",
        opacity: 0.2,
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
    colors: ["#137eff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
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
    fill: {
      type: "solid",
      opacity: 0.1,
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#40c4ff", "#fff"],
        opacityFrom: 0.2,
        opacityTo: 0,
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
    option_sales_ratio
  );
  chart_area_spline.render();

  // -----------------------------------------------------------------------
  // sales 2
  // -----------------------------------------------------------------------
  var option_sales2_report = {
    series: [
      {
        name: "Day 1 ",
        data: [22.5, 34.3, 24.7, 28.5, 11.4, 30.6, 44.5, 34],
      },
    ],
    chart: {
      type: "line",
      height: 150,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 5,
        color: "#000",
        opacity: 0.2,
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
      width: 3,
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
      show: false,
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
    document.querySelector("#sales2"),
    option_sales2_report
  );
  chart_area_basic.render();

  //  // -----------------------------------------------------------------------
  // //weather cards
  // -----------------------------------------------------------------------

  var option_weather_report = {
    series: [
      {
        name: "Day 1 ",
        data: [22.5, 34.3, 24.7, 28.5, 11.4, 30.6, 44.5, 34],
      },
    ],
    chart: {
      type: "line",
      height: 85,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 5,
        color: "#000",
        opacity: 0.2,
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
      width: 3,
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
      colors: "#fa5838",
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
    document.querySelector("#weather"),
    option_weather_report
  );
  chart_area_basic.render();

  // -----------------------------------------------------------------------
  // sales 4
  // -----------------------------------------------------------------------
  var sales_line = {
    series: [
      {
        name: "Sale % ",
        labels: ["2012", "2013", "2014", "2015"],
        data: [12, 19, 3, 5],
      },
    ],
    chart: {
      height: 40,
      type: "line",
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
    stroke: {
      curve: "smooth",
      colors: ["#8b5edd"],
      width: 2.3,
    },
    markers: {
      size: 3,
      colors: ["#8b5edd"],
      strokeColors: "transparent",
    },
    xaxis: {
      categories: ["2012", "2013", "2014", "2015"],
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
    fill: {
      type: "solid",
      colors: ["#FDD835"],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "10px",
        fontFamily: "Rubik,sans-serif",
      },
      x: {
        show: true,
      },
      y: {
        formatter: undefined,
      },
      marker: {
        show: false,
      },
      followCursor: true,
    },
  };

  var chart_line_basic = new ApexCharts(
    document.querySelector("#sales-line"),
    sales_line
  );
  chart_line_basic.render();

  // -----------------------------------------------------------------------
  // balance
  // -----------------------------------------------------------------------

  var main_balance = {
    series: [
      {
        name: "A ",
        data: [3, 8, 3.5, 5, 3.5, 5, 9, 6],
      },
      {
        name: "B ",
        data: [7, 6, 5, 8, 6, 7, 5, 9],
      },
    ],
    chart: {
      height: 50,
      type: "area",
      fontFamily: "Rubik,sans-serif",
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
    dataLabels: {
      enabled: false,
    },
    colors: ["#137eff", "#e9ecef"],
    stroke: {
      curve: "smooth",
      colors: ["#137eff", "#e9ecef"],
      opacity: [1, 0.2],
      width: 0,
    },
    markers: {
      size: 1,
      colors: ["#137eff", "#e9ecef"],
      strokeColors: "transparent",
    },
    fill: {
      type: "solid",
      colors: ["#137eff", "#e9ecef"],
      opacity: [1, 0.2],
    },
    grid: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_line_basic = new ApexCharts(
    document.querySelector("#main-balance"),
    main_balance
  );
  chart_line_basic.render();

  // -----------------------------------------------------------------------
  // sales 3
  // -----------------------------------------------------------------------

  var sales_bar = {
    series: [
      {
        name: "",
        data: [0.2, 9, 7, 10, 7, 9, 12],
      },
    ],
    chart: {
      type: "bar",
      height: 55,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      offsetX: 15,
    },
    colors: ["#5ac146"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "100%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
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

  var chart_column_basic = new ApexCharts(
    document.querySelector("#sales-bar"),
    sales_bar
  );
  chart_column_basic.render();

  // -----------------------------------------------------------------------
  // Revenue
  // -----------------------------------------------------------------------

  var option_statistics_year = {
    series: [45, 27, 18, 15],
    labels: ["Email", "Mobile", "Other", "Website"],
    chart: {
      type: "donut",
      height: 430,
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
          size: "80",
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
              color: "#a1aab2",
              fontSize: "13px",
              label: "Yearly Visit",
            },
          },
        },
      },
    },
    colors: ["#8b5edd", "#137eff", "#eceff1", "#5ac146"],
    tooltip: {
      show: true,
      fillSeriesColor: false,
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: "#a1aab2",
      },
    },
    responsive: [
      {
        breakpoint: 426,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#statistics_year"),
    option_statistics_year
  );
  chart_pie_donut.render();

  // -----------------------------------------------------------------------
  // product-sales
  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------
  // Overview
  // -----------------------------------------------------------------------
  var options_statistics_week = {
    series: [
      {
        name: "Page views",
        data: [0, 130, 80, 70, 180, 105, 250],
      },
      {
        name: "Referrals",
        data: [0, 100, 60, 200, 150, 90, 150],
      },
    ],
    chart: {
      height: 400,
      type: "area",
      stacked: false,
      fontFamily: "Rubik,sans-serif",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#b5b5b5", "#137eff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 0,
      curve: "straight",
    },
    fill: {
      type: "solid",
      colors: ["#b5b5b5", "#137eff"],
      opacity: 0.3,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    xaxis: {
      categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
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
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_line_overview = new ApexCharts(
    document.querySelector("#statistics_week"),
    options_statistics_week
  );
  chart_line_overview.render();

  // -----------------------------------------------------------------------
  // Conversation Rate
  // -----------------------------------------------------------------------
  var option_statistics_month = {
    chart: {
      height: 400,
      type: "radialBar",
      fontFamily: "Rubik,sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    series: [85],
    colors: ["#137eff"],
    fill: {
      opacity: 1,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "85%",
        },
        track: {
          show: true,
          background: "#dadada",
          opacity: 1,
        },
        dataLabels: {
          showOn: "always",
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
            fontWeight: 300,
            color: "#a1aab2",
            label: "Monthly Visit",
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 426,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
    stroke: {
      lineCap: "sqare",
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  var chart_radial = new ApexCharts(
    document.querySelector("#statistics_month"),
    option_statistics_month
  );

  chart_radial.render();

  // -----------------------------------------------------------------------
  // Our Visitor
  // -----------------------------------------------------------------------
  var option_campaign = {
    series: [35, 18, 15, 10],
    labels: ["Un-opened", "Bounced", "Clicked", "Open"],
    chart: {
      type: "donut",
      fontFamily: "Rubik,sans-serif",
      height: 170,
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
          size: "70",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 8,
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
      fillSeriesColor: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1025,
        options: {
          chart: {
            height: 150,
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: {
            height: 110,
          },
        },
      },
      {
        breakpoint: 426,
        options: {
          chart: {
            height: 140,
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
});
