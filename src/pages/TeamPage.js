import { React, useEffect, useState } from 'react';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';

export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();

    useEffect(
        () => {

            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8082/team/${teamName}`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches();

        }, []
    );

if(!team || !team.teamName){
  return <h1>Team Not Found</h1>
}

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailsCard teamName= {team.teamName} match={team.matches[0]}/>
      {team.matches.slice(1).map(match => <MatchSmallCard teamName= {team.teamName} match={match}/>)}
    </div>
  );
}
