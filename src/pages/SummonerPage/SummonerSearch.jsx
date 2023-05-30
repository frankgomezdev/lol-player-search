import React, { useState } from "react";
import axios from "axios";
import styles from "./Summoner.module.css";
import { Button } from "@mui/material";
import { Context } from "../../contexts/context";
import { IS_MATT_LOCAL } from "../../constants/environment";

function SummonerSearch() {
 
  const [summonerName, setSummonerName] = useState();
  const [summonerData, setSummonerData] = useState();
  const [profileId, setProfileId] = useState();
  const [profileData, setProfileData] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const baseUrl =
    "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com//lol/";

  const handleSummonerNameChange = (event) => {
    setSummonerName(event.target.value);
  };

  const spoofSommonerSearch = () => {
    setSummonerData({
      name: "TEST PLAYER",
      summonerLevel: "42",
    });
    setSummonerName("TEST PLAYER");
  };

  const spoofHandleProfileSearch = () => {
    setProfileData({
      rank: 2000,
      tier: 12,
      wins: 101,
      losses: 0,
    });
  };

  const handleSummonerSearch = () => {
    var APICallString =
      baseUrl +
      "summoner/v4/summoners/by-name/" +
      summonerName +
      "?api_key=" +
      API_KEY;
    axios
      .get(APICallString)
      .then((response) => {
        setSummonerData(response.data);
        setProfileId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfileSearch = () => {
    var SecondAPICallString =
      baseUrl +
      "league/v4/entries/by-summoner/" +
      profileId +
      "?api_key=" +
      API_KEY;
    axios
      .get(SecondAPICallString)
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Context.Provider value={{ summonerData }}>
      <div className={styles.container}>
        <h1>League of Legend Player Search</h1>
        <label>
          Summoner Name:
          <input
            className={styles.input}
            type="text"
            value={summonerName}
            onChange={handleSummonerNameChange}
          />
        </label>
        <Button
          variant="contained"
          size="small"
          className={styles.summonerbtn}
          onClick={IS_MATT_LOCAL ? spoofSommonerSearch : handleSummonerSearch}
        >
          Search Summoner
        </Button>
        {summonerData?.name && (
          <div>
            <h2>{summonerData.name}</h2>
            <img
              height="50"
              width="50"
              src={
                IS_MATT_LOCAL
                  ? "https://www.a2048.com/wp-content/uploads/2019/07/bc4a27df619fe52ade14f0d5a82d0f69.jpg"
                  : "http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/" +
                    summonerData.profileIconId +
                    ".png"
              }
              alt={"playerIcon"}
            ></img>
            <p>Level: {summonerData.summonerLevel}</p>
            <Button
              variant="contained"
              size="small"
              onClick={
                IS_MATT_LOCAL ? spoofHandleProfileSearch : handleProfileSearch
              }
            >
              View Profile Data
            </Button>
          </div>
        )}
        {profileData?.rank && (
          <div>
            <h2>Profile Data</h2>
            <p>Tier: {profileData.tier} </p>
            <p>Rank: {profileData.rank}</p>
            <p>Wins: {profileData.wins}</p>
            <p>Losses: {profileData.losses}</p>
          </div>
        )}
      </div>
    </Context.Provider>
  );
}

export default SummonerSearch;
