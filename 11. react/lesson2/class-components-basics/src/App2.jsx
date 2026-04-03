import React from "react";

/* ---------------- Parent Component ---------------- */

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent Component</h1>

        <User name="Param" age={22} city="Ahmedabad" />
        <User name="Vinay" age={25} city="Surat" />
      </div>
    );
  }
}

/* ---------------- Child Component ---------------- */

class User extends React.Component {

  constructor(props) {
    super(props);   // mandatory if constructor is used
    console.log("Constructor called with props:", props);
  }

  render() {
    // Destructuring props
    const { name, age, city } = this.props;

    return (
      <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    );
  }
}

export default App;
