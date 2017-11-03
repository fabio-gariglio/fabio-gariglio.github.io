class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { };
    }
  
    componentDidMount() {
  
      var self = this;
  
      fetch('resume/resume.json')
        .then( response => response.json() )
        .then( responseJson => {
          self.setState( () => responseJson )
        });
  
    }
  
    render () {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.role}</h3>
        </div>
      );
    }
  
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));