import { Component } from "react";
import axios from "axios";
const URL="http://localhost:8080/api/player";
class PlayerService extends Component
{
   
        getAllPlayer()
        {
            return axios.get(URL+'/getAllplayer')
        }  
        addplayer(player)
        {
            return axios.post(URL+'/createPlayer',player)
        }
        getPlayerById(id)
        {
             return axios.get(URL+"/getPlayerById?id="+id)
        }
        updatePlayer(id,player)
        {
            return axios.put(URL+'/updatePlayer?id='+id,player)
        }
        deletePlayer(id)
        {
            return axios.delete(URL+"/deletePlayer?id="+id)
        }
}

export default new PlayerService();