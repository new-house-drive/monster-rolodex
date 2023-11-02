import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props);
    const {monsters} = this.props
    return (
        monsters.map((monster) => {
            return (
            <div key={monster.id}>
                <h3>{monster.name}</h3>
            </div>
            )
        })
      
    );
  }
}

export default CardList;
