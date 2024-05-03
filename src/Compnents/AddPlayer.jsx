import React, { useEffect, useState } from 'react'
import PlayerService from '../Services/PlayerService';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';

export const AddPlayer = () => {
    const [playerName, setPlayerName] = useState('');
    const [playerJerseyNumber, setPlayerJerseyNumber] = useState(0); // Assuming initial value is 0
    const [playerRole, setPlayerRole] = useState('');
    const [totalMatches, setTotalMatches] = useState(0); // Assuming initial value is 0
    const [teamName, setTeamName] = useState('');
    const [countryStateName, setCountryStateName] = useState('');
    const [playerDescription, setPlayerDescription] = useState('');
    const {playerId}=useParams();
    const navigate=useNavigate();
    
const saveORupdatePlayer=(e)=>{
             e.preventDefault();
             const player={playerName,playerJerseyNumber,playerRole,totalMatches,teamName,countryStateName,playerDescription};
             if(playerId)
             {
                   
                     PlayerService.updatePlayer(playerId,player).then((response)=>{
                        console.log(JSON.stringify(response.data))
                        console.log("saved sucessfully");
                          navigate("/")
                      })
             }
             else{
                
                PlayerService.addplayer(player).then((response)=>{
                    console.log(JSON.stringify(response.data))
                    console.log("saved sucessfully");
                    
                })
            }

   }
const checkId=()=>{
      if(playerId)
      {
          return <h2>Update player</h2>
      }
      else{
          return <h2>Add player</h2>
      }
}
useEffect(()=>{
     if(playerId)
     {
        PlayerService.getPlayerById(playerId).then((response)=>{
            setPlayerName(response.data.playerName);
            setPlayerJerseyNumber(response.data.playerJerseyNumber);
            setPlayerRole(response.data.playerRole);
            setTotalMatches(response.data.totalMatches);
            setTeamName(response.data.teamName);
            setCountryStateName(response.data.countryStateName);
            setPlayerDescription(response.data.playerDescription);
            })
     }
},[])
  return (
<div className="container">
    <div className="card col-md-6 offset-md-3 w-100 h-100">
        {checkId()}
        <div className="card-body">
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Player Name</label>
                    <input type="text" placeholder="Enter player name" name="playerName" value={playerName} className="form-control" onChange={(e) => { setPlayerName(e.target.value) }} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Jersey Number</label>
                    <input type="text" placeholder="Enter jersey number" name="playerJerseyNumber" value={playerJerseyNumber} className="form-control" onChange={(e) => { setPlayerJerseyNumber(e.target.value) }} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Role</label>
                    <input type="text" placeholder="Enter player role" name="playerRole" value={playerRole} className="form-control" onChange={(e) => { setPlayerRole(e.target.value) }} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Total Matches</label>
                    <input type="text" placeholder="Enter total matches" name="totalMatches" value={totalMatches} className="form-control" onChange={(e) => { setTotalMatches(e.target.value) }} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Team Name</label>
                    <input type="text" placeholder="Enter team name" name="teamName" value={teamName} className="form-control" onChange={(e) => { setTeamName(e.target.value) }} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Country/State Name</label>
                    <input type="text" placeholder="Enter country/state name" name="countryStateName" value={countryStateName} className="form-control" onChange={(e) => { setCountryStateName(e.target.value) }} />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Player Description</label>
                    <input type="text" placeholder="Enter player description" name="playerDescription" value={playerDescription} className="form-control" onChange={(e) => { setPlayerDescription(e.target.value) }} />
                </div>
                <button onClick={(e) => saveORupdatePlayer(e)} className="btn btn-success">Save Player</button>
                &nbsp;
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        </div>
    </div>
</div>

  )
}
