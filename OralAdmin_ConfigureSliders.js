var OralAdmin_DailyDoseSliderSliderValue = 100;
var OralAdmin_TabletsPerDaySliderValue = 2;

function ConfigureOralAdmin_DailyDoseSlider() {
  const container = document.getElementById('OralAdmin_DailyDoseSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Daily dose (mg)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = OralAdmin_DailyDoseSliderSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "10";
  slider.value = OralAdmin_DailyDoseSliderSliderValue;
}

function ConfigureOralAdmin_TabletsPerDaySlider() {
  const container = document.getElementById('OralAdmin_TabletsPerDaySlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Tablets per day";
  minLabelSpan.innerText = "1";
  valueLabelSpan.innerText = OralAdmin_TabletsPerDaySliderValue;
  maxLabelSpan.innerText = "6";

  slider.min = "1";
  slider.max = "6";
  slider.step = "1";
  slider.value = OralAdmin_TabletsPerDaySliderValue;
}

function UpdateOralAdminSliderValueLabels() {
  let container = document.getElementById('OralAdmin_DailyDoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_DailyDoseSliderSliderValue = slider.value;

  container = document.getElementById('OralAdmin_TabletsPerDaySlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_TabletsPerDaySliderValue = slider.value;
}