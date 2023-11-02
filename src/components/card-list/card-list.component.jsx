import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <h3 key={monster.id}>{monster.name}</h3>
        ))}
      </div>
    );
  }
}

export default CardList;
