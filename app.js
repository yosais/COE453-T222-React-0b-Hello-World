function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Greeting name="John" />;
}

ReactDOM.render(<App />, document.getElementById('root'));
