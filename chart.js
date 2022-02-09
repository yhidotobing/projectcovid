const getPostChart = async () => {
  const response = await fetch("https://covid19.mathdro.id/api/confirmed");
  result = await response.json();
  console.log(response);
  console.log(result);

  const listCountry = result
    .filter((item, index) => index < 10)
    .map((item) => {
      return item.countryRegion;
    });
  console.log(listCountry);

  const listConfirmed = result
    .filter((item, index) => index < 10)
    .map((item) => item.confirmed);

  const listDeath = result
    .filter((item, index) => index < 10)
    .map((item) => item.deaths);

  const listLastCases = result
    .filter((item, index) => index < 10)
    .map((item) => item.cases28Days);

  const listLastDeath = result
    .filter((item, index) => index < 10)
    .map((item) => item.deaths28Days);

  const data = {
    labels: listCountry,
    datasets: [
      {
        label: "Total Confirmed",
        data: listConfirmed,
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "Confirmed Last 28 Days",
        data: listLastCases,
        backgroundColor: ["rgb(255, 159, 64)"],
        borderColor: ["rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const data2 = {
    labels: listCountry,
    datasets: [
      {
        label: "Total Deaths",
        data: listDeath,
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "Deaths Last 28 Days",
        data: listLastDeath,
        backgroundColor: ["rgb(255, 159, 64)"],
        borderColor: ["rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };

  const config2 = {
    type: "bar",
    data: data2,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const ctx = document.getElementById("myChart");
  const ctxMonth = document.getElementById("monthChart");
  ctx.height = 20;
  ctx.width = 20;
  const myChart = new Chart(ctx.getContext("2d"), config);
  const monthChart = new Chart(ctxMonth.getContext("2d"), config2);
};

getPostChart();
