class BasicInfusion_Controls extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.id = "ControlsContainer";
    this.innerHTML = `
    <div class="ControlPanelColumn">
      <slider-container id="BasicInfusion_BolusDoseSlider"></slider-container>
      <slider-container id="BasicInfusion_InfusionRateSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <slider-container id="BasicInfusion_HalflifeSlider"></slider-container>
      <slider-container id="BasicInfusion_InfusionTimeSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "BasicInfusion_DisplayPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "BasicInfusion_DisplayInfusionRateCheckbox"></checkbox-container>
      <checkbox-container id = "BasicInfusion_DisplayEliminationRateCheckbox"></checkbox-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "BasicInfusion_DisplayHalflifeMarkerCheckbox"></checkbox-container>
      <checkbox-container id = "BasicInfusion_DisplayClearanceCheckbox"></checkbox-container>
      <checkbox-container id = "BasicInfusion_DisplayTherapeuticWindowCheckbox"></checkbox-container>
    </div>
    `;

    ConfigureBasicInfusion_BolusDoseSlider();
    ConfigureBasicInfusion_InfusionRateSlider();
    ConfigureBasicInfusion_HalflifeSlider();
    ConfigureBasicInfusion_InfusionTimeSlider();

    ConfigureBasicInfusion_DisplayPlasmaConcentrationCheckbox();
    ConfigureBasicInfusion_DisplayInfusionRateCheckbox();
    ConfigureBasicInfusion_DisplayEliminationRateCheckbox();
    
    ConfigureBasicInfusion_DisplayHalflifeMarkerCheckbox();
    ConfigureBasicInfusion_DisplayClearanceCheckbox();
    ConfigureBasicInfusion_DisplayTherapeuticWindowCheckbox();
  }
}
customElements.define('basic-infusion-controls', BasicInfusion_Controls);

class BasicInfusion_Graph extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  }
}
customElements.define('basic-infusion-graph', BasicInfusion_Graph);

class BasicInfusion_Both extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <basic-infusion-graph></basic-infusion-graph>
    <basic-infusion-controls></basic-infusion-controls>
    `;
  }
}
customElements.define('basic-infusion-both', BasicInfusion_Both);

class BasicInfusion_Description extends HTMLElement {
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
customElements.define('basic-infusion-description', BasicInfusion_Description);