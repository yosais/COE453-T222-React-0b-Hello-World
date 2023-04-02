function HelloComponent() {
  return <h1>Hello World</h1>;
}

function App() {
  return <HelloComponent />;
}

ReactDOM.render(<App />, document.getElementById('root'));

