import React, { useEffect, useState } from 'react'
import PlayerService from '../Services/PlayerService';
import { Link } from 'react-router-dom';

const PlayerList = () => {
/*  const [playerId,setPlayerId]=useState(0);
  const [playerName,setPlayerName]=useState('');
  const [PlayerJerseyNumber,setPlayerJerseyNumber]=useState(0);
  const [PlayerRole,setPlayerRole]=useState('');
  const [totalMatches,setTotalMatches]=useState(0);
  const [TeamName,setTeamName]=useState('');
  const [CountryStateName,setCountryStateName]=useState('');
  const [PlayerDescription,setPlayerDescription]=useState('');*/
  const [playerarray,setPlayerarray]=useState([])
  const deletePlayer=(id)=>{
    
             PlayerService.deletePlayer(id).then(
              (response)=>{
                console.log("player with"+id+" is deleted"+response.data)
                getAllplayers();
              }
             )
                
  }
  const getAllplayers=()=>{
    PlayerService.getAllPlayer().then((response)=>{
      setPlayerarray(response.data)
})
  }
  useEffect(()=>{
    getAllplayers();
},[])
  return (
    <div>
      <h1>Player details</h1>
       <Link to="/addPlayer" className="btn btn-primary">Add Player</Link>
        <table className="table table-bordered table-striped table-primary">
  ...      <thead>
                <tr className="table-info">
                   <th>playerId</th>
                   <th>playerName</th>
                   <th>PlayerJerseyNumber</th>
                   <th>PlayerRole</th>
                   <th>totalMatches</th>
                   <th>TeamName</th>
                   <th>CountryStateName</th>
                   <th>PlayerDescription</th>
                   <th>Update</th>
                   <th>Delete</th>
                </tr>
          </thead>
          <tbody>
                   {
                       playerarray.map((player,key)=>(
                           <tr key={key}>
                                 <td>{player.playerId}</td>
                                 <td>{player.playerName}</td>
                                 <td>{player.playerJerseyNumber}</td>
                                 <td>{player.playerRole}</td>
                                 <td>{player.totalMatches}</td>
                                 <td>{player.teamName}</td>
                                 <td>{player.countryStateName}</td>
                                 <td>{player.playerDescription}</td>
                                 <td>
                                  <Link to={`/updatePlayer/${player.playerId}`} className="btn btn-success">Update</Link>
                                </td>
                                <td><button onClick={()=>{deletePlayer(player.playerId)} } className="btn btn-danger">Delete</button></td>
                           </tr>
                       )
                     )
                   }
          </tbody>
        </table>
    </div>
  )
}

export default PlayerList
