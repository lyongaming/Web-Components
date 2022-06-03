const template = document.createElement("template");
template.innerHTML = `
    <input id="edit-btn" type="number"></input>
`;

class Edit extends HTMLElement {

    constructor() {
        super();
        this.value = this.hasAttribute("value") ? this.getAttribute("value") : 0;
    }

    
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const input = this.shadowRoot.getElementById("edit-btn");
        input.setAttribute("value", this.value);
        input.addEventListener("change", e => this.changeValue.bind(Edit.prototype, e)());
    }
    
    changeValue(e) {
        this.attributeChangedCallback("value", this.value, e.target.value);
        console.log(this.compareValues("2"));
    }
    
    static get observedAttributes() {
        return ["value"];
    }
    
    attributeChangedCallback(property, oldValue, newValue) {
    
        if(oldValue === newValue) return;
        this[property] = newValue;

    }
    
    isEqual(value) {
        return this.value === value;
    }

    compareValues(value) {
        const nums = [ this.value, value ];
        const [ num1, num2 ] = nums.map(num => parseInt(num))
        return num1 - num2;
    }

}

window.customElements.define("x-edit", Edit);