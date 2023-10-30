function UpdateSliderValueLabels() {
  if (CurrentModel == "SingleDose") {
    UpdateSingleDoseSliderValueLabels();
  }
  
  if (CurrentModel == "ConstantInfusion") {
    UpdateConstantInfusionSliderValueLabels();
  }  

  if (CurrentModel == "OralAdmin") {
    UpdateOralAdminSliderValueLabels();
  } 

  if (CurrentModel == "TwoCompartment") {
    UpdateTwoCompartmentSliderValueLabels();
  } 
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