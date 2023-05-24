import React, { useState } from "react";
import axios from "axios";
import styles from "./Summoner.module.css";
import { Button } from "@mui/material";
import { Context } from "../../contexts/context";

function SummonerSearch() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState({});
  const [profileId, setProfileId] = useState("");
  const [profileData, setProfileData] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleSummonerNameChange = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSummonerSearch = () => {
    var APICallString =
      "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com//lol/summoner/v4/summoners/by-name/" +
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
      "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
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
        onClick={handleSummonerSearch}
      >
        Search Summoner
      </Button>
      {summonerData.name && (
        <div>
          <h2>{summonerData.name}</h2>
          <img
            height="50"
            width="50"
            src={
              "http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/" +
              summonerData.profileIconId +
              ".png"
            }
          ></img>
          <p>Level: {summonerData.summonerLevel}</p>
          <Button
            variant="contained"
            size="small"
            onClick={handleProfileSearch}
          >
            View Profile Data
          </Button>
        </div>
      )}
      {profileData.rank && (
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
