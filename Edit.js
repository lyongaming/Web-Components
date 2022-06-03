const template = document.createElement("template");
template.innerHTML = `
    <input type="text" placeholder="qlo"></input>
`;

class WhatsUp extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

window.customElements.define("whats-up", WhatsUp);