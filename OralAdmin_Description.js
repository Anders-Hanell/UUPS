class OralAdmin_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    Oral administration.
    `;

    MathJax.typeset();
  }
}
customElements.define('oral-admin-description', OralAdmin_Description);