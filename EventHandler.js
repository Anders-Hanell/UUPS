var NavigationIsVisible = true;

function PageFinishedLoading() {
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

function OnStartup() {
  let bodyHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
  let bodyWidth = screen.availWidth - (window.outerWidth - window.innerWidth);

  document.body.style.height = bodyHeight + "px";
  document.body.style.width = bodyWidth + "px";

  AdjustFontSize("MainTitlePanel", 0.95, 0.60);
  AdjustButtonTextSize();
  UpdateSliderFontSizes();
}

function AdjustFontSize(containerId, maxWidthPercent, maxHeightPercent) {
  const container = document.getElementById(containerId);
  const textSpan = container.querySelector('span');

  container.style.fontSize = "1px";

  let availableWidth = container.scrollWidth * maxWidthPercent;
  let availableHeight = container.scrollHeight * maxHeightPercent;

  let currentTextWidth = textSpan.scrollWidth;
  let currentTextHeigth = textSpan.scrollHeight;

  let widthScaling = availableWidth / currentTextWidth;
  let heightScaling = availableHeight / currentTextHeigth;
  let scaling = Math.min(widthScaling, heightScaling);

  container.style.fontSize = scaling + "px";
}

function AdjustButtonTextSize() {
  AdjustFontSize("ConstantInfusionButton", 0.80, 0.60);
  AdjustFontSize("OralAdministrationButton", 0.80, 0.60);
  AdjustFontSize("DepotTabletsButton", 0.80, 0.60);
  AdjustFontSize("ZeroOrderButton", 0.80, 0.60);
  AdjustFontSize("IonTrappingButton", 0.80, 0.60);
  AdjustFontSize("AboutButton", 0.80, 0.60);

  AdjustFontSize("GraphButton", 0.80, 0.60);
  AdjustFontSize("ControlsButton", 0.80, 0.60);
  AdjustFontSize("BothButton", 0.80, 0.60);
  AdjustFontSize("DescriptionButton", 0.80, 0.60);
  AdjustFontSize("ToggleNavigationButton", 0.80, 0.60);
}

function OnWindowResize() {
  
}

function OnSidebarButtonClick(buttonId) {
  const conentContainer = document.getElementById("ContentContainer");
  
  if (buttonId == "ConstantInfusionButton") {
    conentContainer.innerHTML = "<basic-infusion-both></basic-infusion-both>";
    UpdateGraph();
  }

  if (buttonId == "AboutButton") {
    conentContainer.innerHTML = "<h1>Created in Uppsala!</h1>";
  }
}

function ToggleNavigation() {
  const toggleButton = document.getElementById("ToggleNavigationButton");
  
  if (NavigationIsVisible) {
    toggleButton.textContent = "Show navigation";
    HideNavigation();
  }
  else {
    toggleButton.textContent = "Hide navigation";
    ShowNavigation();
  }

  NavigationIsVisible = !NavigationIsVisible;
}

function HideNavigation() {
  console.log("Attempting to hide the navigation!");
  
  const titlePanel = document.getElementById("MainTitlePanel");
  titlePanel.style.display = "none";

  const sidebar = document.getElementById("Sidebar");
  sidebar.style.display = "none";

  const gridContainer = document.getElementById("GridContainer");
  gridContainer.style.gridTemplateRows = "0fr 10fr 90fr";
  gridContainer.style.gridTemplateColumns = "0fr 100fr";
}

function ShowNavigation() {
  const gridContainer = document.getElementById("GridContainer");
  gridContainer.style.gridTemplateRows = "10fr 10fr 80fr";
  gridContainer.style.gridTemplateColumns = "10fr 90fr";
  
  const titlePanel = document.getElementById("MainTitlePanel");
  titlePanel.style.display = "flex";

  const sidebar = document.getElementById("Sidebar");
  sidebar.style.display = "flex";
}

var CurrentTab = "Both";

function OnGraphButtonClick() {
  CurrentTab = "Graph";
  
  let container = document.getElementById("ContentContainer");
  container.innerHTML = "<basic-infusion-graph></basic-infusion-graph>";

  container.firstChild.style.height = "100%";

  UpdateGraph();
}

function OnControlsButtonClick() {
  CurrentTab = "Controls";
  
  let container = document.getElementById("ContentContainer");
  container.innerHTML = "<basic-infusion-controls></basic-infusion-controls>";

  container.firstChild.style.height = "100%";
}

function OnBothButtonClick() {
  CurrentTab = "Both";

  let container = document.getElementById("ContentContainer");
  container.innerHTML = "<basic-infusion-both></basic-infusion-both>";

  UpdateGraph();
}

function OnDescriptionButtonClick() {
  CurrentTab = "Description";
  
  let container = document.getElementById("ContentContainer");
  
  container.innerHTML = "<basic-infusion-description></basic-infusion-description>"
}

function OnCheckboxChange() {
  let container = document.getElementById("BasicInfusion_DisplayPlasmaConcentrationCheckbox");
  let checkbox = container.querySelector('input');
  BasicInfusion_DisplayPlasmaConcentration = checkbox.checked;

  container = document.getElementById("BasicInfusion_DisplayInfusionRateCheckbox");
  checkbox = container.querySelector('input');
  BasicInfusion_DisplayInfusionRate = checkbox.checked;

  container = document.getElementById("BasicInfusion_DisplayEliminationRateCheckbox");
  checkbox = container.querySelector('input');
  BasicInfusion_DisplayEliminationRate = checkbox.checked;

  container = document.getElementById("BasicInfusion_DisplayHalflifeMarkerCheckbox");
  checkbox = container.querySelector('input');
  BasicInfusion_DisplayHalflifeMarker = checkbox.checked;

  UpdateGraph();
}