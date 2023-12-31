import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component.jsx";

const CardList = (props) => {
  return (
  <div className="card-list">
    {props.monsters.map((monster) => {
      return <CardContainer monster={monster} key={monster.id} />;
    })}
  </div>)
};

// Deprecated Class component

// class CardList extends Component {
//   render() {
//     console.log(this.props.monsters);
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return <CardContainer name={name} email={email} id={id} key={id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
