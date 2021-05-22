import {React} from 'react';

export const MatchDetailsCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div className="MatchDetailsCard">
      <h3>Latest Matches</h3>
      <h1>vs {otherTeam}</h1>
      <h2>{match.date}</h2>
      <h2>at {match.venue}</h2>
      <h2>{match.matchWinner} won by {match.resultMargin} {match.result}</h2>
    </div>
  );
}
