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
  const buttonText = toggleButton.textContent;

  if (buttonText == "Hide navigation"){
    toggleButton.textContent = "Show navigation";
    HideNavigation();
  }
  else {
    toggleButton.textContent = "Hide navigation";
    ShowNavigation();
  }
}

function HideNavigation() {
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
  gridContainer.style.gridTemplateColumns = "15fr 85fr";
  
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