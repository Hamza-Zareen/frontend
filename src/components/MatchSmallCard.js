import {React} from 'react';

export const MatchSmallCard = ({teamName, match}) => {
  if(!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div className="MatchSmallCard">
      <h3>vs {otherTeam}</h3>
      <h2>{match.matchWinner} won by {match.resultMargin} {match.result}</h2>
    </div>
  );
}
