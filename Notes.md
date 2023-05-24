# Notes

1. Using (/lol/summoner/v4/summoners/by-name/{summonerName}) will retrieve the "id" which is the encryptedSummonerID that can be used in other calls to receive more data. Next step is to figure out how to call (/lol/league/v4/entries/by-summoner/{encryptedSummonerId}) after the original call to get Ranked Match data per summoner.

2. Using the BasicCard component from MaterialUI to display the data once the information is retrieved and how to set it up.