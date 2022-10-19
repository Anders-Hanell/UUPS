class TwoCompartment_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    Two compartment model using a bolus dose and constant rate infusion.
    `;

    MathJax.typeset();
  }
}
customElements.define('two-compartment-description', TwoCompartment_Description);