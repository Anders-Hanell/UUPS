class ConstantInfusion_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    Single compartment model, note that reality is often more complex.
    <br><br>
    The half life is calculated using:<br>
    \\[t_{1/2} = \\frac{\\text{ln 2} * V_D}{CL} \\]
    where<br>
    \\(t_{1/2}\\) is the half life,<br>
    \\(\\text{ln}\\) is the natural logarithm,<br>
    \\(V_D\\) is the volume of distribution, and<br>
    \\(CL\\) is the total clearance.
    `;

    MathJax.typeset();
  }
}
customElements.define('constant-infusion-description', ConstantInfusion_Description);