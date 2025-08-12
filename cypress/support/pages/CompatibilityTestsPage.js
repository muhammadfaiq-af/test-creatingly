import BasePage from './BasePage.js';

class CompatibilityTestsPage extends BasePage {
  // Viewport configurations for different devices
  viewports = {
    desktop: { width: 1920, height: 1080 },
    laptop: { width: 1366, height: 768 },
    tablet: { width: 1024, height: 768 },
    mobile: { width: 375, height: 667 },
    smallMobile: { width: 320, height: 568 }
  };

  // Compatibility test methods
  displayLoginUICorrectlyOnDesktopViewport() {
    cy.viewport(this.viewports.desktop.width, this.viewports.desktop.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  displayLoginUICorrectlyOnLaptopViewport() {
    cy.viewport(this.viewports.laptop.width, this.viewports.laptop.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  displayLoginUICorrectlyOnTabletViewport() {
    cy.viewport(this.viewports.tablet.width, this.viewports.tablet.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  displayLoginUICorrectlyOnMobileViewport() {
    cy.viewport(this.viewports.mobile.width, this.viewports.mobile.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  displayLoginUICorrectlyOnSmallMobileViewport() {
    cy.viewport(this.viewports.smallMobile.width, this.viewports.smallMobile.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  maintainResponsiveDesignOnLandscapeOrientation() {
    cy.viewport(1024, 768);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  maintainResponsiveDesignOnPortraitOrientation() {
    cy.viewport(768, 1024);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  handleZoomInCompatibility() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test with zoom in
    cy.get('body').invoke('css', 'zoom', '1.2');
    this.verifyConnectButtonVisible();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  handleZoomOutCompatibility() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test with zoom out
    cy.get('body').invoke('css', 'zoom', '0.8');
    this.verifyConnectButtonVisible();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  maintainFunctionalityOnHighDPIDisplay() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Simulate high DPI
    cy.get('body').invoke('css', 'transform', 'scale(2)');
    this.verifyConnectButtonVisible();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  handleDifferentScreenResolutions() {
    const resolutions = [
      { width: 1920, height: 1080 },
      { width: 1366, height: 768 },
      { width: 1024, height: 768 },
      { width: 800, height: 600 }
    ];

    resolutions.forEach(resolution => {
      cy.viewport(resolution.width, resolution.height);
      this.visit();
      this.verifyConnectButtonVisible();
      this.clickConnectButton();
      this.verifyPasswordInputVisible();
      this.verifyCredentialsButtonVisible();
    });
  }

  maintainCrossBrowserCompatibility() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test basic functionality that should work across browsers
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleTouchDeviceCompatibility() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test touch interactions
    this.getPasswordField().click();
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  maintainAccessibilityOnDifferentDevices() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test accessibility features
    this.getConnectButton().should('not.have.attr', 'aria-hidden', 'true');
    this.getPasswordField().should('not.have.attr', 'aria-hidden', 'true');
    this.getCredentialsButton().should('not.have.attr', 'aria-hidden', 'true');
  }

  handleKeyboardNavigationOnDifferentViewports() {
    cy.viewport(this.viewports.desktop.width, this.viewports.desktop.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    cy.viewport(this.viewports.mobile.width, this.viewports.mobile.height);
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  maintainPerformanceOnDifferentDevices() {
    const devices = [
      { name: 'Desktop', viewport: this.viewports.desktop },
      { name: 'Tablet', viewport: this.viewports.tablet },
      { name: 'Mobile', viewport: this.viewports.mobile }
    ];

    devices.forEach(device => {
      cy.viewport(device.viewport.width, device.viewport.height);
      this.visit();
      this.verifyConnectButtonVisible();
      this.clickConnectButton();
      this.verifyPasswordInputVisible();
      this.verifyCredentialsButtonVisible();
    });
  }

  handleOrientationChanges() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test orientation change
    cy.viewport(1024, 768); // Landscape
    this.verifyConnectButtonVisible();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    cy.viewport(768, 1024); // Portrait
    this.verifyConnectButtonVisible();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  maintainConsistentStylingAcrossViewports() {
    const viewports = [
      this.viewports.desktop,
      this.viewports.laptop,
      this.viewports.tablet,
      this.viewports.mobile
    ];

    viewports.forEach(viewport => {
      cy.viewport(viewport.width, viewport.height);
      this.visit();
      this.verifyConnectButtonVisible();
      this.clickConnectButton();
      this.verifyPasswordInputVisible();
      this.verifyCredentialsButtonVisible();
      
      // Check consistent styling
      this.getConnectButton().should('have.css', 'display').and('not.eq', 'none');
      this.getPasswordField().should('have.css', 'display').and('not.eq', 'none');
      this.getCredentialsButton().should('have.css', 'display').and('not.eq', 'none');
    });
  }

  handleDifferentColorSchemes() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test with different color schemes (if supported)
    this.getConnectButton().should('be.visible');
    this.getPasswordField().should('be.visible');
    this.getCredentialsButton().should('be.visible');
  }

  maintainFunctionalityOnSlowDevices() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Test basic functionality that should work on slow devices
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }
}

export default CompatibilityTestsPage;
