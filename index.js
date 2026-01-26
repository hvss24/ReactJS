const root = document.querySelector("#root");

const element = React.createElement("h1", null, "Hello, React world!");

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(element);