import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
          // <h3 key={monster.id}>{monster.name}</h3>
          const { name, email, id} = monster
          return (
          <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>)
        })}
      </div>
    );
  }
}

export default CardList;