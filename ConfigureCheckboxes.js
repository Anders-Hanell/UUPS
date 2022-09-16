var BasicInfusion_DisplayPlasmaConcentration = true;
var BasicInfusion_DisplayInfusionRate = false;
var BasicInfusion_DisplayEliminationRate = false;
var BasicInfusion_DisplayHalflifeMarker = false;
var BasicInfusion_DisplayClearance = false;

function ConfigureBasicInfusion_DisplayPlasmaConcentrationCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display plasma concentration";
  checkbox.checked = BasicInfusion_DisplayPlasmaConcentration;
}

function ConfigureBasicInfusion_DisplayInfusionRateCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayInfusionRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display infusion rate";
  checkbox.checked = BasicInfusion_DisplayInfusionRate;
}

function ConfigureBasicInfusion_DisplayEliminationRateCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayEliminationRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display elimination rate";
  checkbox.checked = BasicInfusion_DisplayEliminationRate;
}

function ConfigureBasicInfusion_DisplayHalflifeMarkerCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayHalflifeMarkerCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display 5 half-lifes marker";
  checkbox.checked = BasicInfusion_DisplayHalflifeMarker;
}

function ConfigureBasicInfusion_DisplayClearanceCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayClearanceCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display clearance level";
  checkbox.checked = BasicInfusion_DisplayClearance;
}

function UpdateCheckboxFontSizes() {
  const checkboxContainers = document.querySelectorAll('checkbox-container');

  for (var i = 0; i<checkboxContainers.length; i++) {
    const checkbox = checkboxContainers[i];
    const label = checkbox.querySelector('p');
    AdjustFontSizeForContainer(label, 0.95, 0.70);
  }
}

function UpdateCheckboxSize() {
  const checkboxContainers = document.querySelectorAll('checkbox-container');

  for (var i = 0; i<checkboxContainers.length; i++) {
    const checkbox = checkboxContainers[i];
    const marker = checkbox.querySelector("input");

    const availableHeight = checkbox.scrollHeight;
    const markerSize = availableHeight * 0.5;

    marker.style.height = markerSize + "px";
    marker.style.width = markerSize + "px";
  }
}