class OralAdmin_Both extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <oral-admin-graph></oral-admin-graph>
    <oral-admin-controls></oral-admin-controls>
    `;
  }
}
customElements.define('oral-admin-both', OralAdmin_Both);

class OralAdmin_Graph extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  }
}
customElements.define('oral-admin-graph', OralAdmin_Graph);

class OralAdmin_Controls extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.id = "ControlsContainer";
    this.innerHTML = `
    <div class="ControlPanelColumn">
      <slider-container id="OralAdmin_DailyDoseSlider"></slider-container>
      <slider-container id="OralAdmin_TabletsPerDaySlider"></slider-container>
    </div>
    `;

    ConfigureOralAdmin_DailyDoseSlider();
    ConfigureOralAdmin_TabletsPerDaySlider();
    
  }
}
customElements.define('oral-admin-controls', OralAdmin_Controls);