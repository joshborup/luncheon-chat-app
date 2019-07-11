import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      returnedMessage: [],
      username: "",
      typedUsername: ""
    };
  }
  render() {
    const { username, typedUsername, message, returnedMessage } = this.state;

    return (
      <>
        <div className="App">
          {username ? (
            <div>
              <div>
                {returnedMessage.map(message => {
                  return <div className="message">{message}</div>;
                })}
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault();

                  this.setState({
                    message: ""
                  });
                }}
                className="message-box"
              >
                <input
                  autoFocus={true}
                  id="message"
                  type="text"
                  onChange={e => this.setState({ message: e.target.value })}
                  value={message}
                />
                <button>Submit</button>
              </form>
            </div>
          ) : (
            <form
              className="username-form"
              onSubmit={e => {
                e.preventDefault();
                this.setState({
                  username: typedUsername
                });
              }}
            >
              <span>Enter Username to join chat!</span>
              <div>
                <input
                  id="username"
                  type="text"
                  onChange={e =>
                    this.setState({ typedUsername: e.target.value })
                  }
                  value={typedUsername}
                />
                <button>Submit</button>
              </div>
            </form>
          )}
        </div>
      </>
    );
  }
}

export default App;
