import React, { useState } from 'react';
import axios from 'axios';


function SummonerData() {
  const [summonerName, setSummonerName] = useState('');
  const [summonerData, setSummonerData] = useState({});
  const [profileId, setProfileId] = useState('');
  const [profileData, setProfileData] = useState({});
  const API_KEY = "RGAPI-e264804c-9433-4a78-be3d-5e1341427c41"

  const handleSummonerNameChange = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSummonerSearch = () => {
    var APICallString = "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com//lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + API_KEY;
    axios.get(APICallString)
      .then((response) => {
        setSummonerData(response.data);
        setProfileId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfileSearch = () => {
    var SecondAPICallString = "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + profileId + "?api_key=" + API_KEY;
    axios.get(SecondAPICallString)
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <h1>League of Legend Player Search</h1>
      <label>
        Summoner Name:
        <input type="text" value={summonerName} onChange={handleSummonerNameChange} />
      </label>
      <button onClick={handleSummonerSearch}>Search Summoner</button>
      {summonerData.name && (
        <div>
          <h2>{summonerData.name}</h2>
          <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/" + summonerData.profileIconId + ".png"}></img>
          <p>Level: {summonerData.summonerLevel}</p>
          <button onClick={handleProfileSearch}>View Profile Data</button>
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
  );
}

export default SummonerData;