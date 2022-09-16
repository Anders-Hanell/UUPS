var BasicInfusion_BolusDoseSliderValue = 1000;
var BasicInfusion_InfusionRateSliderValue = 50;
var BasicInfusion_HalflifeSliderValue = 50;
var BasicInfusion_InfusionTimeSliderValue = 750;

function ConfigureBasicInfusion_BolusDoseSlider() {
  const container = document.getElementById('BasicInfusion_BolusDoseSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Bolus dose (mg)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = BasicInfusion_BolusDoseSliderValue;
  maxLabelSpan.innerText = "10000";

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

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Infusion rate (mg/min)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = BasicInfusion_InfusionRateSliderValue;
  maxLabelSpan.innerText = "100";

  slider.min = "0";
  slider.max = "100";
  slider.step = "1";
  slider.value = BasicInfusion_InfusionRateSliderValue;
}

function ConfigureBasicInfusion_HalflifeSlider() {
  const container = document.getElementById('BasicInfusion_HalflifeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Halflife (min)";
  minLabelSpan.innerText = "10";
  valueLabelSpan.innerText = BasicInfusion_HalflifeSliderValue;
  maxLabelSpan.innerText = "200";

  slider.min = "10";
  slider.max = "200";
  slider.step = "1";
  slider.value = BasicInfusion_HalflifeSliderValue
}

function ConfigureBasicInfusion_InfusionTimeSlider() {
  const container = document.getElementById('BasicInfusion_InfusionTimeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Infusion time (min)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = BasicInfusion_InfusionTimeSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "1";
  slider.value = BasicInfusion_InfusionTimeSliderValue
}

function UpdateSliderValueLabels() {
  let container = document.getElementById('BasicInfusion_BolusDoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  BasicInfusion_BolusDoseSliderValue = slider.value;

  container = document.getElementById('BasicInfusion_InfusionRateSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  BasicInfusion_InfusionRateSliderValue = slider.value;

  container = document.getElementById('BasicInfusion_HalflifeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  BasicInfusion_HalflifeSliderValue = slider.value;

  container = document.getElementById('BasicInfusion_InfusionTimeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  BasicInfusion_InfusionTimeSliderValue = slider.value;
}

function UpdateSliderFontSizes() {
  const sliderContainers = document.querySelectorAll('slider-container');

  for (var i = 0; i<sliderContainers.length; i++) {
    const mainLabel = sliderContainers[i].querySelector('.SliderMainLabel');
    AdjustFontSizeForContainer(mainLabel, 0.95, 0.60);

    const valueLabelsContainer = sliderContainers[i].querySelector('.SliderValueContainer');
    const valueLabels = valueLabelsContainer.querySelectorAll('p');
    for (var j = 0; j<valueLabels.length; j++) {
      AdjustFontSizeForContainer(valueLabels[j], 0.95, 0.50);
    }
  }
}

function UpdateSliderSize() {
  const contentContainer = document.getElementById('ContentContainer');

  const allInputContainers = contentContainer.querySelectorAll('.InputRangeContainer');
  for (let i = 0; i < allInputContainers.length; i++) {
    let aContainer = allInputContainers[i];
    let height = aContainer.clientHeight;

    let aSlider = aContainer.querySelector('.my-slider');
    aSlider.style.setProperty('--sliderSize', height + "px");
    aSlider.style.height = height + "px";
  }
}