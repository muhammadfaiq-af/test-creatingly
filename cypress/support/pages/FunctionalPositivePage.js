import BasePage from './BasePage.js';

class FunctionalPositivePage extends BasePage {
  // Additional selectors for functional positive tests
  elements = {
    ...this.elements,
    // Add any additional elements specific to functional positive tests
  };

  // Additional test data for functional positive tests
  testData = {
    ...this.testData,
    mixedCasePassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP',
    punctuationPassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP!@#',
    emojiPassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP😀',
    mathSymbolPassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP+×÷=',
    currencyPassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP$€¥'
  };

  // Functional positive test methods
  handleCorrectPasswordInput() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithMixedCase() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.mixedCasePassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithPunctuation() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.punctuationPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithEmoji() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.emojiPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithMathSymbols() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.mathSymbolPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithCurrencySymbols() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.currencyPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  allowMultipleLoginAttempts() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.wrongPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
    
    // Second attempt
    this.clickConnectButton();
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithNumbers() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP123');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithSpecialCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP!@#$%');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithSpaces() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP ');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithUnderscores() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP_');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithHyphens() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP-');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handlePasswordWithDots() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP.');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }
}

export default FunctionalPositivePage;
