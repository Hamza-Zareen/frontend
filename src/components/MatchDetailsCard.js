import {React} from 'react';

export const MatchDetailsCard = ({match}) => {
    if(match == null) return null;
  return (
    <div className="MatchDetailsCard">
      <p>{match.team1} vs {match.team2}</p>
    </div>
  );
}
