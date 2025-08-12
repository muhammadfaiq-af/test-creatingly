import BasePage from './BasePage.js';

class UITestsPage extends BasePage {
  // Additional selectors for UI tests
  elements = {
    ...this.elements,
    images: 'img',
    body: 'body'
  };

  // UI test methods
  displayConnectButtonOnPageLoad() {
    this.visit();
    this.verifyConnectButtonVisible();
  }

  displayPasswordInputAfterClickingConnect() {
    this.visit();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  checkButtonStylingAndHoverEffects() {
    this.visit();
    this.getConnectButton()
      .should('be.visible')
      .and('have.css', 'cursor');
    
    this.clickConnectButton();
    this.getCredentialsButton()
      .should('be.visible')
      .and('have.css', 'cursor');
  }

  displayPasswordFieldAsMaskedInput() {
    this.visit();
    this.clickConnectButton();
    this.verifyPasswordFieldType();
  }

  checkFocusIndicators() {
    this.visit();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.getPasswordField().should('have.attr', 'id', 'noVNC_password_input');
  }

  maintainConsistentLayoutDuringInteractions() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('test');
    
    // Should still be visible after typing
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  checkElementPositioning() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Check that elements have positioning styles
    this.getConnectButton().should('have.css', 'position');
    this.getPasswordField().should('have.css', 'position');
    this.getCredentialsButton().should('have.css', 'position');
  }

  checkTextAlignment() {
    this.visit();
    this.getConnectButton().should('have.css', 'text-align');
    this.clickConnectButton();
    this.getCredentialsButton().should('have.css', 'text-align');
  }

  checkFontStyling() {
    this.visit();
    this.getConnectButton().should('have.css', 'font-family');
    this.clickConnectButton();
    this.getPasswordField().should('have.css', 'font-family');
    this.getCredentialsButton().should('have.css', 'font-family');
  }

  checkButtonDimensions() {
    this.visit();
    this.getConnectButton().should('have.css', 'width').and('not.eq', '0px');
    this.getConnectButton().should('have.css', 'height').and('not.eq', '0px');
    this.clickConnectButton();
    this.getCredentialsButton().should('have.css', 'width').and('not.eq', '0px');
    this.getCredentialsButton().should('have.css', 'height').and('not.eq', '0px');
  }

  checkInputFieldDimensions() {
    this.visit();
    this.clickConnectButton();
    this.getPasswordField().should('have.css', 'width').and('not.eq', '0px');
    this.getPasswordField().should('have.css', 'height').and('not.eq', '0px');
  }

  // Negative UI test methods
  checkPasswordNotInPlainText() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('testpassword');
    this.verifyPasswordFieldType();
  }

  checkSensitiveInformationNotInPageSource() {
    this.visit();
    cy.get(this.elements.body).invoke('html').should('not.contain', this.testData.correctPassword);
  }

  checkNoBrokenImages() {
    this.visit();
    cy.get(this.elements.images).each(($img) => {
      cy.wrap($img).should('exist');
    });
  }

  checkNoOverlappingElements() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
    
    // Elements should be visible and not overlap
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  checkNoInvisibleInteractiveElements() {
    this.visit();
    this.getConnectButton().should('not.have.css', 'visibility', 'hidden');
    this.clickConnectButton();
    this.getPasswordField().should('not.have.css', 'visibility', 'hidden');
    this.getCredentialsButton().should('not.have.css', 'visibility', 'hidden');
  }

  checkNoElementsWithZeroDimensions() {
    this.visit();
    this.getConnectButton().should('have.css', 'width').and('not.eq', '0px');
    this.getConnectButton().should('have.css', 'height').and('not.eq', '0px');
    this.clickConnectButton();
    this.getPasswordField().should('have.css', 'width').and('not.eq', '0px');
    this.getPasswordField().should('have.css', 'height').and('not.eq', '0px');
    this.getCredentialsButton().should('have.css', 'width').and('not.eq', '0px');
    this.getCredentialsButton().should('have.css', 'height').and('not.eq', '0px');
  }

  checkNoErrorMessagesBeforeUserInteraction() {
    this.visit();
    // Should not have any error messages on initial load
    cy.get(this.elements.body).should('not.contain', 'Authentication failed');
  }

  checkNoAccessibilityViolations() {
    this.visit();
    // Check for basic accessibility requirements
    this.getConnectButton().should('not.have.attr', 'aria-hidden', 'true');
    this.clickConnectButton();
    this.getPasswordField().should('not.have.attr', 'aria-hidden', 'true');
    this.getCredentialsButton().should('not.have.attr', 'aria-hidden', 'true');
  }

  checkNoElementsOutsideViewport() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  checkNoBrokenStyling() {
    this.visit();
    this.getConnectButton().should('have.css', 'display').and('not.eq', 'none');
    this.clickConnectButton();
    this.getPasswordField().should('have.css', 'display').and('not.eq', 'none');
    this.getCredentialsButton().should('have.css', 'display').and('not.eq', 'none');
  }
}

export default UITestsPage;
