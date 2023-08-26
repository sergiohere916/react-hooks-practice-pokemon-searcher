import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {id, name, sprites, hp} = pokemon;
  const {front, back} = sprites;
  const [isFlipped, setIsFlipped] = useState(false); 
  
  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          {isFlipped ? (<img src={back} alt="oh no!" />) : (<img src={front} alt="oh no!" />)}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
