import React from "react";

class User extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    );
  }
}

export default User;