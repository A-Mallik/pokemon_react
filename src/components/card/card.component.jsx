import React, { Component } from "react";
import "../card/card.styles.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      cardInfo: [],
      stats: []
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.character.name}`)
      .then(response => response.json())
      .then(info =>
        this.setState({ cardInfo: info.abilities, stats: info.stats })
      ); //returns a promise
  }

  render() {
    const capitalize = s => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
    const { ability } = this.state.cardInfo;
    return (
      <div className="card-container" onClick={() => {
        alert(
            this.state.stats.map(info => (
                    capitalize(info.stat.name) + " : " + info.base_stat + " "
        
        ))
        )
    
    }}>
        <img
          alt="monster"
          src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
            this.props.character.name
          }.png`}
          height="160"
          width="160"
        />
        <h2> {this.props.character.name.toUpperCase()} </h2>
        <hr
          style={{
            width: 250,
            opacity: 0.3
          }}
        />
        <p> {this.props.character.email} </p>
        <h3>Abilities</h3>

        {this.state.cardInfo.map(info => (
          <p>{info.ability.name.toUpperCase()} </p>
        ))}
        <hr
          style={{
            width: 250,
            opacity: 0.3
          }}
        />
        <h3>Base Stats</h3>
        {this.state.stats.map(info => (
          <p>
            {capitalize(info.stat.name)} : {info.base_stat}{" "}
          </p>
        ))}
      </div>
    );
  }
}

export default Card;
