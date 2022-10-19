var NavigationIsVisible = true;
var FullScreenIsActive = false;

var CurrentModel = "ConstantInfusion";

function PageFinishedLoading() {
  let bodyHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
  let bodyWidth = screen.availWidth - (window.outerWidth - window.innerWidth);

  document.body.style.height = bodyHeight + "px";
  document.body.style.width = bodyWidth + "px";
  
  AdjustFontSize("MainTitlePanel", 0.95, 0.60);
  AdjustButtonTextSize();
  
  UpdateSliderSize();
  UpdateSliderFontSizes();

  UpdateCheckboxFontSizes();

  UpdateGraph();

  document.addEventListener('fullscreenchange', FullScreenModeChanged, false);
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
  AdjustFontSize("TwoCompartmentButton", 0.80, 0.60);
  AdjustFontSize("AboutButton", 0.80, 0.60);

  AdjustFontSize("GraphButton", 0.80, 0.60);
  AdjustFontSize("ControlsButton", 0.80, 0.60);
  AdjustFontSize("BothButton", 0.80, 0.60);
  AdjustFontSize("DescriptionButton", 0.80, 0.60);
  AdjustFontSize("ToggleNavigationButton", 0.80, 0.60);
  AdjustFontSize("ToggleFullScreenButton", 0.80, 0.60);
}

function OnWindowResize() {
  if (CurrentModeIsFullScreen() != FullScreenIsActive) {
    FullScreenModeChanged();
  }
}

function CurrentModeIsFullScreen() {
  if (document.fullscreenElement != null) {
    return true;
  }

  if (screen.width - window.outerWidth <= 16 && screen.height - window.outerHeight <= 16) {
    return true;
  }

  return false;
}

function OnSidebarButtonClick(buttonId) {
  const conentContainer = document.getElementById("ContentContainer");
  
  if (buttonId == "ConstantInfusionButton") {
    CurrentModel = "ConstantInfusion";
    
    conentContainer.innerHTML = "<constant-infusion-both></constant-infusion-both>";
    
    AdjustButtonTextSize();
  
    UpdateSliderSize();
    UpdateSliderFontSizes();

    UpdateCheckboxFontSizes();
    
    UpdateGraph();
  }

  if (buttonId == "OralAdministrationButton") {
    CurrentModel = "OralAdmin";
    
    conentContainer.innerHTML = "<oral-admin-both></oral-admin-both>";
    
    UpdateSliderSize();
    UpdateSliderFontSizes();

    UpdateCheckboxFontSizes();

    OralAdmin_UpdateGraph();
  }

  if (buttonId == "TwoCompartmentButton") {
    CurrentModel = "TwoCompartment";
    
    conentContainer.innerHTML = "<two-compartment-both></two-compartment-both>";
    
    UpdateSliderSize();
    UpdateSliderFontSizes();

    UpdateCheckboxFontSizes();

    TwoCompartment_UpdateGraph();
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

function ToggleFullScreen() {
  if (FullScreenIsActive) {
    if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
  } else {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    }
  }
}

function FullScreenModeChanged() {
  const toggleButton = document.getElementById("ToggleFullScreenButton");

  if (CurrentModeIsFullScreen()) {
    toggleButton.textContent = "Leave full screen";
    FullScreenIsActive = true;
  } 
  else {
    toggleButton.textContent = "Display full screen";
    FullScreenIsActive = false;
  }

  UpdateGraph();
}

var CurrentTab = "Both";

function OnGraphButtonClick() {
  CurrentTab = "Graph";
  
  let container = document.getElementById("ContentContainer");
  
  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-graph></constant-infusion-graph>"
    container.firstChild.style.height = "100%";
    UpdateGraph();
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-graph></oral-admin-graph>"
    container.firstChild.style.height = "100%";
    OralAdmin_UpdateGraph();
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-graph></two-compartment-graph>"
    container.firstChild.style.height = "100%";
    TwoCompartment_UpdateGraph();
  }
}

function OnControlsButtonClick() {
  CurrentTab = "Controls";
  
  let container = document.getElementById("ContentContainer");
  
  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-controls></constant-infusion-controls>";
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-controls></oral-admin-controls>"
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-controls></two-compartment-controls>"
  }

  container.firstChild.style.height = "100%";

  UpdateSliderSize();
  UpdateSliderFontSizes();
  UpdateCheckboxFontSizes();
  UpdateCheckboxSize();
}

function OnBothButtonClick() {
  CurrentTab = "Both";

  let container = document.getElementById("ContentContainer");

  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-both></constant-infusion-both>";
    UpdateGraph();
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-both></oral-admin-both>"
    OralAdmin_UpdateGraph();
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-both></two-compartment-both>"
    TwoCompartment_UpdateGraph();
  }

  UpdateSliderSize();
  UpdateSliderFontSizes();
  UpdateCheckboxFontSizes();
}

function OnDescriptionButtonClick() {
  CurrentTab = "Description";
  
  let container = document.getElementById("ContentContainer");
  
  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-description></constant-infusion-description>"
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-description></oral-admin-description>"
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-description></two-compartment-description>"
  }
}

function OnCheckboxChange() {
  if (CurrentModel == "ConstantInfusion") {
    ConstantInfusion_OnCheckboxChange();
  }

  if (CurrentModel == "OralAdmin") {
    OralAdmin_OnCheckboxChange();
  }

  if (CurrentModel == "TwoCompartment") {
    TwoCompartment_OnCheckboxChange();
  }
}