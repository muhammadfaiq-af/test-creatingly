import BasePage from './BasePage.js';

class FunctionalNegativePage extends BasePage {
  // Additional test data for functional negative tests
  testData = {
    ...this.testData,
    emptyPassword: '',
    whitespacePassword: '   ',
    longPassword: 'a'.repeat(1000),
    specialCharsPassword: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    unicodePassword: '测试密码123',
    nullCharsPassword: '\0\x00\x01\x02'
  };

  // Functional negative test methods
  handleEmptyPassword() {
    this.visit();
    this.clickConnectButton();
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleIncorrectPassword() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.wrongPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleWhitespacePassword() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.whitespacePassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleLongPassword() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.longPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleSpecialCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.specialCharsPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleUnicodeCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.unicodePassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleRapidPasswordChanges() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('password1');
    this.clearPasswordField();
    this.typePassword('password2');
    this.clearPasswordField();
    this.typePassword('password3');
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleMultipleRapidClicks() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.correctPassword);
    this.clickCredentialsButton();
    this.clickCredentialsButton();
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleFormSubmissionWithoutPassword() {
    this.visit();
    this.clickConnectButton();
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleInvalidCharacters() {
    this.visit();
    this.clickConnectButton();
    this.typePassword(this.testData.nullCharsPassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleMixedInvalidInput() {
    this.visit();
    this.clickConnectButton();
    this.typePassword('test123!@#');
    this.clearPasswordField();
    this.typePassword(this.testData.unicodePassword);
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }

  handleRapidInputChanges() {
    this.visit();
    this.clickConnectButton();
    for (let i = 0; i < 5; i++) {
      this.typePassword(`password${i}`);
      this.clearPasswordField();
    }
    this.clickCredentialsButton();
    this.verifyElementsExist();
  }
}

export default FunctionalNegativePage;
