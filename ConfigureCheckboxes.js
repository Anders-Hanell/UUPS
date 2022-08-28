var BasicInfusion_DisplayPlasmaConcentration = true;
var BasicInfusion_DisplayInfusionRate = false;
var BasicInfusion_DisplayEliminationRate = false;
var BasicInfusion_DisplayHalflifeMarker = false;

function ConfigureBasicInfusion_DisplayPlasmaConcentrationCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('p');

  label.textContent = "Display plasma concentration";
  checkbox.checked = BasicInfusion_DisplayPlasmaConcentration;
}

function ConfigureBasicInfusion_DisplayInfusionRateCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayInfusionRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('p');

  label.textContent = "Display infusion rate";
  checkbox.checked = BasicInfusion_DisplayInfusionRate;
}

function ConfigureBasicInfusion_DisplayEliminationRateCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayEliminationRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('p');

  label.textContent = "Display elimination rate";
  checkbox.checked = BasicInfusion_DisplayEliminationRate;
}

function ConfigureBasicInfusion_DisplayHalflifeMarkerCheckbox() {
  const container = document.getElementById('BasicInfusion_DisplayHalflifeMarkerCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('p');

  label.textContent = "Display 5 half-lifes marker";
  checkbox.checked = BasicInfusion_DisplayHalflifeMarker;
}