class BasePage {
  // Common selectors
  elements = {
    connectButton: '#noVNC_connect_button',
    passwordInput: '#noVNC_password_input',
    credentialsButton: '#noVNC_credentials_button',
    body: 'body'
  };

  // Common test data
  testData = {
    correctPassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP',
    wrongPassword: 'wrongpassword123'
  };

  // Common methods
  visit() {
    cy.visit('/');
  }

  clearSession() {
    cy.clearCookies();
    cy.clearLocalStorage();
  }

  clickConnectButton() {
    cy.get(this.elements.connectButton).click();
  }

  typePassword(password) {
    cy.get(this.elements.passwordInput).type(password);
  }

  clickCredentialsButton() {
    cy.get(this.elements.credentialsButton).click();
  }

  clearPasswordField() {
    cy.get(this.elements.passwordInput).clear();
  }

  getPasswordField() {
    return cy.get(this.elements.passwordInput);
  }

  getConnectButton() {
    return cy.get(this.elements.connectButton);
  }

  getCredentialsButton() {
    return cy.get(this.elements.credentialsButton);
  }

  // Login flow methods
  loginWithPassword(password) {
    this.clickConnectButton();
    this.typePassword(password);
    this.clickCredentialsButton();
  }

  loginWithCorrectPassword() {
    this.loginWithPassword(this.testData.correctPassword);
  }

  loginWithWrongPassword() {
    this.loginWithPassword(this.testData.wrongPassword);
  }

  // Verification methods
  verifyConnectButtonVisible() {
    cy.get(this.elements.connectButton).should('be.visible');
  }

  verifyPasswordInputVisible() {
    cy.get(this.elements.passwordInput).should('be.visible');
  }

  verifyCredentialsButtonVisible() {
    cy.get(this.elements.credentialsButton).should('be.visible');
  }

  verifyPasswordInputHidden() {
    cy.get(this.elements.passwordInput).should('not.be.visible');
  }

  verifyCredentialsButtonHidden() {
    cy.get(this.elements.credentialsButton).should('not.be.visible');
  }

  verifyElementsExist() {
    cy.get(this.elements.passwordInput).should('exist');
    cy.get(this.elements.credentialsButton).should('exist');
  }

  verifyPasswordFieldEmpty() {
    cy.get(this.elements.passwordInput).should('have.value', '');
  }

  verifyPasswordFieldType() {
    cy.get(this.elements.passwordInput).should('have.attr', 'type', 'password');
  }
}

export default BasePage;
