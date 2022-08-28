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
    <p class="NavigationButton" onclick="OnGraphButtonClick()">Graph</p>
    <p class="NavigationButton" onclick="OnControlsButtonClick()">Controls</p>
    <p class="NavigationButton" onclick="OnBothButtonClick()">Both</p>
    <p class="NavigationButton" onclick="OnDescriptionButtonClick()">Description</p>
    <p class="NavigationButton" id="ToggleNavigationButton" onclick="ToggleNavigation()">Hide navigation</p>
        `;
  }
}
customElements.define('tab-panel', TabPanel);