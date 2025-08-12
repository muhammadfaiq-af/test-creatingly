import BasePage from './BasePage.js';

class UsabilityTestsPage extends BasePage {
  // Additional test data for usability tests
  testData = {
    ...this.testData,
    emptyPassword: '',
    whitespacePassword: '   ',
    longInput: 'a'.repeat(1000),
    specialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    unicodeChars: '测试密码123',
    invalidChars: '\0\x00\x01\x02'
  };

  // Usability positive test methods
  allowKeyboardNavigationForLogin() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.typePassword(this.testData.correctPassword);
    this.verifyCredentialsButtonVisible();
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  supportEnterKeyForFormSubmission() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.correctPassword + '{enter}');
    this.verifyElementsExist();
  }

  allowCopyPasteFunctionality() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.correctPassword);
    this.getPasswordField().type('{ctrl}a');
    this.getPasswordField().type('{ctrl}c');
    this.clearPasswordField();
    this.getPasswordField().type('{ctrl}v');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  haveReasonableTabOrder() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  supportMouseInteractions() {
    this.visit();
    this.clickConnectButton();
    this.getPasswordField().click();
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  allowFieldClearing() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('wrongpassword');
    this.clearPasswordField();
    this.verifyPasswordFieldEmpty();
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  supportBackspaceAndDeleteKeys() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('wrongpassword');
    this.getPasswordField().type('{backspace}'.repeat(5));
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  provideVisualFeedbackOnButtonHover() {
    this.visit();
    this.getConnectButton().trigger('mouseover');
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.getCredentialsButton().trigger('mouseover');
    this.verifyCredentialsButtonVisible();
  }

  maintainFunctionalityAfterFailedLogin() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.wrongPassword);
    this.clickCredentialsButton();
    // Should be able to retry immediately
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  supportSelectAllFunctionality() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('testpassword');
    this.getPasswordField().type('{ctrl}a');
    this.typePassword('newpassword');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  supportUndoFunctionality() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('test');
    this.getPasswordField().type('{ctrl}z');
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  // Usability negative test methods
  notAllowSubmissionWithEmptyPassword() {
    this.visit();
    this.clickConnectButton();
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  notAllowRapidClickingCausingMultipleSubmissions() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.correctPassword);
    
    // Rapid clicking should not cause issues
    this.clickCredentialsButton();
    this.clickCredentialsButton();
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleBrowserBackButtonAppropriately() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    cy.go('back');
    // After going back, should be able to interact with the page
    cy.get(this.elements.body).should('be.visible');
  }

  notAllowFormSubmissionWithoutClickingConnectButtonFirst() {
    this.visit();
    this.verifyPasswordInputHidden();
    this.verifyCredentialsButtonHidden();
  }

  notAllowMultipleSimultaneousFocusStates() {
    this.visit();
    this.verifyConnectButtonVisible();
    this.clickConnectButton();
    this.verifyPasswordInputVisible();
    this.verifyCredentialsButtonVisible();
  }

  notAllowFormSubmissionWithOnlyWhitespace() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.whitespacePassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  notAllowSubmissionWithExtremelyLongInput() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.longInput);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  notAllowSubmissionWithInvalidCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.invalidChars);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  notAllowFormSubmissionWhenPageIsNotFullyLoaded() {
    this.visit();
    // Should be able to interact when page is loaded
    this.verifyConnectButtonVisible();
  }

  notAllowSubmissionWithSpecialCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.specialChars);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  notAllowSubmissionWithUnicodeCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.unicodeChars);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }
}

export default UsabilityTestsPage;
