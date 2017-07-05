import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to Email Sender</h2>
        </div>
        <p className="email-form">
          <div className="rows">
            <div className="col-md-4 col-md-offset-4">
              <form>
                <div className="form-group">
                  <label for="emails">To</label>
                  <input type="emails" className="form-control" id="to" placeholder="Emails" />
                </div>
                <div className="form-group">
                  <label for="emails">CC</label>
                  <input type="emails" className="form-control" id="cc" placeholder="Emails" />
                </div>
                <div className="form-group">
                  <label for="emails">BCC</label>
                  <input type="emails" className="form-control" id="bcc" placeholder="Emails" />
                </div>
                <div className="form-group">
                  <label for="emails">From</label>
                  <input type="emails" className="form-control" id="from" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="text">Message</label>
                  <textarea id="text" className="form-control" rows="10"></textarea>
                  <p className="help-block">Example block-level help text here.</p>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
