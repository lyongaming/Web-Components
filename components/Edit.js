const template = document.createElement("template");
template.innerHTML = `
    <input id="edit-button" type="number"></input>
`;

class Edit extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

window.customElements.define("x-edit", Edit);