const apiCovidIndonesia =
  "https://covid19.mathdro.id/api/countries/Indonesia/confirmed";

const apiCovidDunia = "https://covid19.mathdro.id/api/";

const apiCovidPageSearch = "https://covid19.mathdro.id/api/confirmed";

let result = [];

const getPostIndonesia = async (API) => {
  const response = await fetch(API);
  result = await response.json();
  console.log(response);
  console.log(result);

  const postCasesIndonesia = document.querySelector(".cases");
  result.forEach((item) => {
    postCasesIndonesia.innerText = `${Intl.NumberFormat().format(
      item.confirmed
    )}`;
    console.log(item);
  });
  const postRecoverIndonesia = document.querySelector(".recover");
  result.forEach((item) => {
    postRecoverIndonesia.innerText = `${Intl.NumberFormat().format(
      item.recovered
    )}`;
    console.log(item);
  });
  const postDeathIndonesia = document.querySelector(".death");
  result.forEach((item) => {
    postDeathIndonesia.innerText = `${Intl.NumberFormat().format(item.deaths)}`;
    console.log(item);
  });
};

const getPostDunia = async (API) => {
  const response = await fetch(API);
  result = await response.json();
  console.log(response);
  console.log(result);

  const postRecoverWorld = document.querySelector(".recoverworld");
  postRecoverWorld.innerText = `${Intl.NumberFormat().format(
    result.recovered.value
  )}`;

  const postDeathWorld = document.querySelector(".deathworld");
  postDeathWorld.innerText = `${Intl.NumberFormat().format(
    result.deaths.value
  )}`;

  const postCasesWorld = document.querySelector(".casesworld");
  postCasesWorld.innerText = `${Intl.NumberFormat().format(
    result.confirmed.value
  )}`;

  console.log(item);
};

const getPostGlobal = async () => {
  const response = await fetch("https://covid19.mathdro.id/api/confirmed");
  result = await response.json();
  displayGlobal(result);
  console.log(response);
  //   console.log(result);

  //   result = result.filter((item, index) => {
  //     if (index < 1000) return item;
  //   });
  //   console.log(result);
};

const postCasesGlobal = document.querySelector(".main");
const displayGlobal = (countries) => {
  const htmlString = countries
    .map((item) => {
      return `
      <div class="col">
        <div class="card border-dark mb-3" style="max-width: 18rem">
          <div class="card-header fw-bold">${item.combinedKey}</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6>Cases</h6>
                <p>${Intl.NumberFormat().format(item.confirmed)}</p>
              </div>
              <div class="col">
                <h6 class="text-primary">Recovered</h6>
                <p>${Intl.NumberFormat().format(item.recovered)}</p>
              </div>
              <div class="col">
                <h6 class="text-danger">Death</h6>
                <p>${Intl.NumberFormat().format(item.deaths)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
  postCasesGlobal.innerHTML = htmlString;
};

getPostIndonesia(apiCovidIndonesia);
getPostDunia(apiCovidDunia);
getPostGlobal();

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", (e) => {
  const target = e.target.value;
  const filteredCountry = result.filter((item) => {
    return (
      item.countryRegion.toLowerCase().includes(target.toLowerCase()) ||
      item.combinedKey.toLowerCase().includes(target.toLowerCase())
    );
  });
  if (Object.keys(filteredCountry).length === 0) {
    postCasesGlobal.innerHTML = `
    <div class="container-fluid mt-2 text-center" style="margin-left:350px">
    <img src ="notfound.svg" style="max-width: 50%">
    <h5>Sorry, We Couldn't find any results</h5>
    </div>`;
  } else {
    displayGlobal(filteredCountry);
    console.log(filteredCountry);
  }
});
