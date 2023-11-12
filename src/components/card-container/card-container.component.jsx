import { Component } from "react";
import "./card-container.styles.css"

class CardContainer extends Component {
    render() {

        const {name, id, email } = this.props

        return (
            <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`} />
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
          )
    }
}

export default CardContainer;