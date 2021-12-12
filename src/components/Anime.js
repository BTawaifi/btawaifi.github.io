import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap";
import axios from "axios";
import "../assets/css/anime.css";

let itemsArray = [];

const Anime = () => {
  const [currentEpisode, usecurrentEpisode] = useState(1);
  const [animeUrl, useanimeUrl] = useState("");
  const [animeName, useanimeName] = useState("");
  const [maxEpisode, usemaxEpisode] = useState(1);

  useEffect((maxEpisode) => {
    useanimeUrl(localStorage.getItem("storage_animeUrl"));
    useanimeName(localStorage.getItem("selectedAnime"));
    usemaxEpisode(localStorage.getItem("storage_maxEpisode"));
    usecurrentEpisode(localStorage.getItem("currentEp"));

    if (maxEpisode === undefined) {
      initializeLoader();
    }
    return () => { };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    usecurrentEpisode(value);
  };

  const ref_found = useRef(null);
  const ref_foundStatus = useRef(null);
  const ref_btnStat = useRef(null);
  const ref_ifContainer = useRef(null);
  const ref_resolution = useRef(null);
  const ref_findTxt = useRef(null);
  const ref_animePic = useRef(null);

  ///////////////////////////

  function getAnimeList() {
    axios
      .get("https://corsgogo.herokuapp.com/https://anitrendz.net")
      .then((html) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html.data, "text/html");
        let sel = doc.querySelector(".at-m-top-anime").firstElementChild.firstElementChild.src;
        document.location.href = sel;
      })
      .catch(() => {
        ref_foundStatus.current.innerText = "Connection/Name Issue";
        ref_foundStatus.current.style.color = "red";
      });
  }

  function LoadFound() {
    let choice = ref_found.current.value - 1;
    let unmodhref = itemsArray[choice].children[1].children[0].href;
    let href = unmodhref.slice(unmodhref.indexOf("category"));
    usecurrentEpisode(1);
    ////selectedAnime

    let selMain = ref_found.current.value - 1;
    let sel1 = ref_found.current[selMain].innerHTML;
    let sel2 = sel1.lastIndexOf(":");
    selMain = sel1.trim().substr(0, sel2);
    selMain = selMain.replace(":", "");
    selMain = selMain.trim();
    //selMain = selMain.trimEnd(); <= causes all sort of compatibility problems
    useanimeName(selMain);
    ref_foundStatus.current.innerText = "Done";
    /////
    let mhref = "https://gogoanime.wiki/";
    mhref = mhref.concat(href);
    useanimeUrl(mhref);
    mhref = mhref.concat(`-episode-1`);
    if (mhref.indexOf("/category/" !== -1)) {
      mhref = mhref.replace("/category/", "/");
      useanimeUrl(mhref);
    }
    ref_foundStatus.current.innerText = "Loaded";
    autoEpisodeUpdate(mhref);
  }

  function autoEpisodeUpdate(Url) {
    axios.get(Url).then((html) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html.data, "text/html");
      let getend = doc.querySelector("#episode_page").lastElementChild
        .children[0].attributes.ep_end.value;
      usemaxEpisode(getend);

      localStorage.setItem("storage_maxEpisode", getend);

      let del = Url.indexOf("-episode-1");
      Url = Url.slice(0, del);
      useanimeUrl(Url);
    });
  }

  function changePic() {
    let choice = ref_found.current.value - 1;
    let imgHref =
      itemsArray[choice].children[0].firstElementChild.firstElementChild.src;
    ref_animePic.current.src = imgHref;
  }

  function Find() {
    //Text Mod
    ref_foundStatus.current.style.color = "white";
    ref_foundStatus.current.innerText = "Searching Please Wait";

    ref_found.current.innerHTML = "";
    let findTxt = ref_findTxt.current.value;
    try {
      findTxt = findTxt.replace(" ", "%20");
    } catch (error) {
      console.log(error);
    }
    let UrlF = "https://gogoanime.wiki/search.html?keyword=";
    UrlF = UrlF.concat(`${findTxt}`);
    //Get response from URL
    pingFindList(UrlF);
  }

  function pingFindList(UrlF) {
    axios
      .get(UrlF)
      .then((html) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html.data, "text/html");
        //handle pagination
        let pg = doc.getElementsByClassName(".pagination-list").children;
        if (pg) {
          for (let index = 0; index < pg.length; index++) {
            let temp = UrlF;
            temp = UrlF.concat(`&page=${index + 1}`);
            addToFindList(temp);
          }
        } else {
          addToFindList(UrlF);
        }
      })
      .catch(() => {
        ref_foundStatus.current.innerText = "Connection/Name Issue";
        ref_foundStatus.current.style.color = "red";
      });
  }

  function addToFindList(UrlF) {
    axios
      .get(UrlF)
      .then((html) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html.data, "text/html");

        let items = doc.querySelector(".items").children;
        itemsArray = Array.from(items);

        // Add -options- into the dropdown list from an array of html items (contains child nodes)
        let i = 0;
        itemsArray.forEach(function (E) {
          const row = document.createElement("option");
          i++; //keeps track of current item number
          let releaseDate = E.children[2].innerText;
          row.setAttribute("value", i);
          row.innerHTML = `${E.children[1].children[0].innerText}:${releaseDate.replace("Released: ", "")}`;

          ref_foundStatus.current.innerText = "Found";
          ref_foundStatus.current.style.color = "green";

          ref_found.current.appendChild(row);
        });

        //Modify img
        document.getElementById("animePic").src =
          itemsArray[0].children[0].firstElementChild.firstElementChild.src;
      })

      .catch(() => {
        ref_foundStatus.current.innerText = "Connection/Name Issue";
        ref_foundStatus.current.style.color = "red";
      });
  }

  function localStorageSave(Url) {
    localStorage.setItem("storage_animeUrl", Url);
    localStorage.setItem("currentEp", currentEpisode);
    localStorage.setItem("selectedAnime", animeName);
  }

  function initializeLoader() {
    useanimeUrl("");
    useanimeName("");
    usemaxEpisode(1);
    usecurrentEpisode(1);
  }
  function AddIframe() {
    let htmlC = `<iframe class='iframe' scrolling="no" src="" style="border: 0px none;  height: 600px; margin-top: -270px; width: 100%;"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    ref_ifContainer.current.innerHTML = htmlC;
  }

  function Watch() {
    AddIframe();
    let Url = animeUrl;
    let goUrl = parseURL(Url);
    console.log(goUrl);
    ref_ifContainer.current.children[0].src = goUrl;
  }

  function GoDownload() {
    let BtnStatus = ref_btnStat.current;

    BtnStatus.style.color = "white";
    BtnStatus.innerText = "Parsing URL...";
    //AddIframe();
    let Url = animeUrl;
    let parsedUrl = parseURL(Url);
    sendParsedRequest(parsedUrl);
  }

  function parseURL(Url) {
    if (Url.indexOf("/category/" !== -1)) {
      Url = Url.replace("/category/", "/");
    }
    if (Url.indexOf("-episode") !== -1) {
      let del = Url.indexOf("-episode");
      Url = Url.slice(0, del);
      useanimeUrl(Url);
      localStorageSave(Url);

      return Url.concat(`-episode-${currentEpisode}`);
    } else {
      localStorageSave(Url);
      return Url.concat(`-episode-${currentEpisode}`);
    }
  }

  function sendParsedRequest(link) {
    let BtnStatus = ref_btnStat.current;
    console.log(link);
    BtnStatus.innerText = "Waiting For Response...";
    let errr = document.querySelector("#webs");

    axios
      //.get(`https://corsgogo.herokuapp.com/${link}`)
      .get(`${link}`)
      .then((html) => {
        errr.style.color = "white";
        var parser = new DOMParser();
        var doc = parser.parseFromString(html.data, "text/html");
        let URL = doc.querySelector(".dowloads").firstChild.href;
        BtnStatus.innerText = "Response Granted";
        window.open(URL, '_blank');
        //processResponse(URL);
      })
      .catch(() => {
        BtnStatus.style.color = "red";
        ref_btnStat.current.innerText = "Url Or Connection Error Retry";
      });
  }
  return (
    <div className="anime-container">
      <header id="anime-section-title">
        <h1>BTanime</h1>
        <h2>Download Or Watch English Anime Online</h2>
      </header>
      <main className="anime-card">
        <Button onClick={getAnimeList} variant="outline-light" id="GTA">
          Anime Of The Week List
        </Button>
        <div id="anime-container-inner">
          <section id="anime-section-find">
            <div>
              <h2 style={{ fontFamily: "Prototype" }}>Anime Finder</h2>
              <InputGroup>
                <FormControl
                  ref={ref_findTxt}
                  id="findTxt"
                  placeholder="Anime Name"
                  aria-label="Anime Name"
                  aria-describedby="basic-addon2"
                />
                  <Button onClick={Find} id="FBtn" variant="outline-light">
                    Find
                  </Button>
              </InputGroup>

              <select
                className="form-control"
                id="found"
                onChange={changePic}
                ref={ref_found}
              >
                <option value="">&nbsp;Expand This After Search&nbsp;</option>
              </select>

              <Button variant="dark" onClick={LoadFound} id="LoadBtn">
                Load Into Downloader
              </Button>
              <div id="foundlistlbl" ref={ref_foundStatus}>

              </div>
            </div>
            <img
              ref={ref_animePic}
              id="animePic"
              src={require("../assets/img/anime.webp").default}
              width="200px"
              height="282px"
              alt="Anime pic"
            />
          </section>
          <section id="anime-section-download">
            <div>
              <h2 style={{ fontFamily: "Prototype" }}>Anime Downloader</h2>
              <InputGroup>
                <FormControl
                  disabled
                  id="webs"
                  placeholder="Anime Url"
                  aria-label="Anime Url"
                  aria-describedby="basic-addon2"
                  value={animeUrl}
                />
              </InputGroup>
              <InputGroup>
                <FormControl
                  disabled
                  id="selectedAnime"
                  placeholder="Selected Anime"
                  aria-label="Selected Anime"
                  aria-describedby="basic-addon2"
                  value={animeName}
                />
              </InputGroup>

              <label className="mt-3" htmlFor="ep">
                Episode Number:
              </label>
              <input
                className="form-control"
                type="number"
                id="ep"
                name="ep"
                min="1"
                max={maxEpisode}
                value={currentEpisode}
                onChange={handleInputChange}
              />
              <div style={{ textAlign: "right", paddingRight: "1rem" }}>
                Max Episodes: <span id="mx-ep">{maxEpisode}</span>
              </div>
              <label hidden={true} className="mt-2" htmlFor="resolution">
                Resolution:
              </label>
              <select hidden={true}
                className="form-control"
                id="resolution"
                ref={ref_resolution}
              >
                <option value="2">External Link</option>
                {/* <option value="1">First Internal</option>
                <option value="3">Second Internal</option>
                <option value="4">Third Internal</option>
                <option value="5">Extra(LOW) Internal</option>*/}
              </select>

              <div className="mt-2">
                <ButtonGroup
                  aria-label="Basic example"
                  style={{ display: "flex" }}
                >
                  <Button
                    onClick={GoDownload}
                    variant="dark"
                    type="submit"
                    id="Btn"
                  >
                    Download
                  </Button>
                  <Button
                    onClick={Watch}
                    variant="dark"
                    type="submit"
                    id="watchbtn"
                  >
                    Watch
                  </Button>
                </ButtonGroup>
              </div>
              <div id="btnStat" ref={ref_btnStat}>
              </div>
            </div>
          </section>
        </div>
        <div
          id="ifContainer"
          ref={ref_ifContainer}
          style={{
            border: "0px solid #D5CC5A",
            overflow: "hidden",
            margin: "15px auto",
            maxWidth: "612px",
          }}
        ></div>
      </main>
    </div>
  );
};

export default Anime;
