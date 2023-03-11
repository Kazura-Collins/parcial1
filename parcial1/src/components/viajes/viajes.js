
      this.destino = destino;
      this.costo = costo;
      this.duracionEnDias = duracionEnDias;
      this.descripcion= descripcion;
      this.actividades= actividades;  

    class viajes extends HTMLElement {
        constructor(destino, costo, duracionEnDias, descripcion, actividades) {
            super();
            this.attachShadow({mode: 'open'})
        }
    
        connectedCallback(){
            this.render();
            
        }
    
        render(){
            this.shadowRoot.innerHTML = `
            ....
            `;
        }
    
    }
    
    
    
    customElements.define('comp-viajes', viajes);