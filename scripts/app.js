class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    var self = this;

    fetch('resumee/resumee.json').then(response => response.json()).then(responseJson => {
      self.setState(() => responseJson);
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.state.name
      ),
      React.createElement(
        "h3",
        null,
        this.state.role
      )
    );
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
