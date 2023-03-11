class button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
        
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/style.css">
        no pude hacer esto. No me funciona el exportar componentes (más de uno), y no sé cómo mostrar en pantalla la información de planesTourísticos. Mucho menos cómo hacer un botón que lo marque y desmarque como reservado. Intenté hacer un constructor normal, pero eso no aplica para webcomponents. Lo siento.
        <button class="si/no"></button>
        `;
    }

}


customElements.define('comp-button', button);