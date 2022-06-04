const template = document.createElement("template");
template.innerHTML = `
    <input id="edit-input" type="number"></input>
`;

class Edit extends HTMLElement {

    constructor() {
        super();
        this.value = this.hasAttribute("value") ? this.getAttribute("value") : 0;
        this.compare = this.hasAttribute("compare");
        this.secondValue = this.hasAttribute("compareWith") ? this.getAttribute("compareWith") : undefined;
        this.relation = "Equal";
    }

    
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const input = this.shadowRoot.getElementById("edit-input");
        input.setAttribute("value", this.value);
        input.addEventListener("change", e => this.changeValue.bind(Edit.prototype, e)());

        // Set relationship respect the second value  
        
    }
    
    changeValue(e) {
        this.attributeChangedCallback("value", this.value, e.target.value);
        if(this.compare && this.secondValue) {
            
            // Idk what in the actual hell I was thinking to do here
            this.relation

        }
    }
    
    static get observedAttributes() {
        return ["value", "compare", "compareWith"];
    }
    
    attributeChangedCallback(property, oldValue, newValue) {
    
        if(oldValue === newValue) return;
        this[property] = newValue;

    }
    
    areEqual(value) {
        return this.value === value;
    }

    compareValues(value) {
        const nums = [ this.value, value ];
        const [ num1, num2 ] = nums.map(num => parseInt(num))
        return num1 - num2;
    }

    // Function to make brief the changing relationship
    // I upload this like this because I want to upload something :v
    setRelation() {
        if(this.compare && this.secondValue) {
            
            this.relation 

        }
    }

}

window.customElements.define("x-edit", Edit);