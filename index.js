const components = Array.from(document.querySelectorAll("x-edit"));
const [ input1, input2 ] = components.map(comp => comp.shadowRoot.getElementById("edit-input"));

components[0].setAttribute("compareWith", input2.getAttribute("value"));