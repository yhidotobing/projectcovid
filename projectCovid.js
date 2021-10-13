const apiCovidIndonesia =
  "https://covid19.mathdro.id/api/countries/Indonesia/confirmed";

const apiCovidDunia = "https://covid19.mathdro.id/api/";

const apiCovidPageSearch = "https://covid19.mathdro.id/api/confirmed";

const searchBar = document.querySelector("#searchBar");

let result = [];

const getPostIndonesia = async (API) => {
  const response = await fetch(API);
  result = await response.json();
  console.log(response);
  console.log(result);

  const postCasesIndonesia = document.querySelector(".cases");
  result.forEach((item) => {
    postCasesIndonesia.innerText = `${item.confirmed}`;
    console.log(item);
  });
  const postRecoverIndonesia = document.querySelector(".recover");
  result.forEach((item) => {
    postRecoverIndonesia.innerText = `${item.recovered}`;
    console.log(item);
  });
  const postDeathIndonesia = document.querySelector(".death");
  result.forEach((item) => {
    postDeathIndonesia.innerText = `${item.deaths}`;
    console.log(item);
  });
};

const getPostDunia = async (API) => {
  const response = await fetch(API);
  result = await response.json();
  console.log(response);
  console.log(result);

  const postRecoverWorld = document.querySelector(".recoverworld");
  postRecoverWorld.innerText = `${result.recovered.value}`;

  const postDeathWorld = document.querySelector(".deathworld");
  postDeathWorld.innerText = `${result.deaths.value}`;

  const postCasesWorld = document.querySelector(".casesworld");
  postCasesWorld.innerText = `${result.confirmed.value}`;

  console.log(item);
};

const getPostGlobal = async (API) => {
  const response = await fetch(API);
  result = await response.json();
  console.log(response);
  console.log(result);

  result = result.filter((item, index) => {
    if (index < 50) return item;
  });
  console.log(result);

  const postCasesGlobal = document.querySelector(".tes");
  result.forEach((item) => {
    postCasesGlobal.innerHTML += `<div class="row">
      <div class="col">
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">${item.combinedKey}</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6>Kasus</h6>
                <p class="kasus">${item.confirmed}</p>
              </div>
              <div class="col">
                <h6>Sembuh</h6>
                <p class="sembuh">${item.recovered}</p>
              </div>
              <div class="col">
                <h6>Meninggal</h6>
                <p class="meninggal">${item.deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">${item.combinedKey}</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6>Kasus</h6>
                <p class="kasus">${item.confirmed}</p>
              </div>
              <div class="col">
                <h6>Sembuh</h6>
                <p class="sembuh">${item.recovered}</p>
              </div>
              <div class="col">
                <h6>Meninggal</h6>
                <p class="meninggal">${item.deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">${item.combinedKey}</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6>Kasus</h6>
                <p class="kasus">${item.confirmed}</p>
              </div>
              <div class="col">
                <h6>Sembuh</h6>
                <p class="sembuh">${item.recovered}</p>
              </div>
              <div class="col">
                <h6>Meninggal</h6>
                <p class="meninggal">${item.deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    console.log(item);
  });
};

getPostIndonesia(apiCovidIndonesia);
getPostDunia(apiCovidDunia);
getPostGlobal(apiCovidPageSearch);

searchBar.addEventListener("keyup", (e) => {
  const target = e.target.value;
  const filteredCountry = result.filter((item) => {
    return (
      item.countryRegion.toLowerCase().includes(target.toLowerCase()) ||
      item.combinedKey.toLowerCase().includes(target.toLowerCase())
    );
  });
  console.log(filteredCountry);
  getPostGlobal(filteredCountry);
});
