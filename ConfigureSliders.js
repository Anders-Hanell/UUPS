var BasicInfusion_BolusDoseSliderValue = 1000;
var BasicInfusion_InfusionRateSliderValue = 50;
var BasicInfusion_ClearanceSliderValue = 0.05;
var BasicInfusion_InfusionTimeSliderValue = 750;

function ConfigureBasicInfusion_BolusDoseSlider() {
  const container = document.getElementById('BasicInfusion_BolusDoseSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  mainLabel.textContent = "Bolus dose (mg)";
  minLabel.textContent = "0";
  valueLabel.textContent = BasicInfusion_BolusDoseSliderValue;
  maxLabel.textContent = "10000";

  slider.min = "0";
  slider.max = "10000";
  slider.step = "10";
  slider.value = BasicInfusion_BolusDoseSliderValue;
}

function ConfigureBasicInfusion_InfusionRateSlider() {
  const container = document.getElementById('BasicInfusion_InfusionRateSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  mainLabel.textContent = "Infusion rate (mg/min)";
  minLabel.textContent = "0";
  valueLabel.textContent = BasicInfusion_InfusionRateSliderValue;
  maxLabel.textContent = "100";

  slider.min = "0";
  slider.max = "100";
  slider.step = "1";
  slider.value = BasicInfusion_InfusionRateSliderValue;
}

function ConfigureBasicInfusion_ClearanceSlider() {
  const container = document.getElementById('BasicInfusion_ClearanceSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  mainLabel.textContent = "Clearance (ml/min)";
  minLabel.textContent = "0.0";
  valueLabel.textContent = BasicInfusion_ClearanceSliderValue;
  maxLabel.textContent = "0.1";

  slider.min = "0.0";
  slider.max = "0.1";
  slider.step = "0.001";
  slider.value = BasicInfusion_ClearanceSliderValue
}

function ConfigureBasicInfusion_InfusionTimeSlider() {
  const container = document.getElementById('BasicInfusion_InfusionTimeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  mainLabel.textContent = "Infusion time (min)";
  minLabel.textContent = "0";
  valueLabel.textContent = BasicInfusion_InfusionTimeSliderValue;
  maxLabel.textContent = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "1";
  slider.value = BasicInfusion_InfusionTimeSliderValue
}

function UpdateSliderValueLabels() {
  let container = document.getElementById('BasicInfusion_BolusDoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  valueLabel.textContent = slider.value;
  BasicInfusion_BolusDoseSliderValue = slider.value;

  container = document.getElementById('BasicInfusion_InfusionRateSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueLabel.textContent = slider.value;
  BasicInfusion_InfusionRateSliderValue = slider.value;

  container = document.getElementById('BasicInfusion_ClearanceSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueLabel.textContent = slider.value;
  BasicInfusion_ClearanceSliderValue = slider.value;

  container = document.getElementById('BasicInfusion_InfusionTimeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueLabel.textContent = slider.value;
  BasicInfusion_InfusionTimeSliderValue = slider.value;
}