import "./components/index.js"

class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <comp-button></comp-button>
        `;
    }

}

customElements.define('comp-app', App);








  