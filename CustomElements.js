class SliderContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <p class="SliderMainLabel">The slider</p>
        <div class="SliderValueContainer">
          <p class="SliderMinLabel">Min</p>
          <p class="SliderValueLabel">Value</p>
          <p class="SliderMaxLabel">Max </p>
        </div>
        <input class="my-slider" name="weight" type="range" oninput="OnNewSliderValue()">`;
  }
}
customElements.define('slider-container', SliderContainer);

class CheckboxContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <input type="checkbox" oninput="OnCheckboxChange()" checked>
        <p>The Checkbox</p>
        `;
  }
}
customElements.define('checkbox-container', CheckboxContainer);

class TabPanel extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <div class="ButtonContainer" id="GraphButton" onclick="OnGraphButtonClick()">
      <span>Graph</span>
    </div>

    <div class="ButtonContainer" id="ControlsButton" onclick="OnControlsButtonClick()">
      <span>Controls</span>
    </div>

    <div class="ButtonContainer" id="BothButton" onclick="OnBothButtonClick()">
      <span>Both</span>
    </div>

    <div class="ButtonContainer" id="DescriptionButton" onclick="OnDescriptionButtonClick()">
      <span>Description</span>
    </div>
    
    <div class="ButtonContainer" id="ToggleNavigationButton" onclick="ToggleNavigation()">
      <span>Hide navigation</span>
    </div>
        `;
  }
}
customElements.define('tab-panel', TabPanel);