/// <reference types="cypress" />

describe('UI Test Cases', () => {
  let uiTestsPage;

  beforeEach(() => {
    uiTestsPage = new UITestsPage();
    uiTestsPage.clearSession();
  });

  // UI - Positive Test Cases
  describe('UI - Positive Test Cases', () => {
    it('should display connect button on page load', () => {
      uiTestsPage.displayConnectButtonOnPageLoad();
    });

    it('should display password input after clicking connect', () => {
      uiTestsPage.displayPasswordInputAfterClickingConnect();
    });

    it('should have proper button styling and hover effects', () => {
      uiTestsPage.checkButtonStylingAndHoverEffects();
    });

    it('should display password field as masked input', () => {
      uiTestsPage.displayPasswordFieldAsMaskedInput();
    });

    it('should have proper focus indicators', () => {
      uiTestsPage.checkFocusIndicators();
    });

    it('should maintain consistent layout during interactions', () => {
      uiTestsPage.maintainConsistentLayoutDuringInteractions();
    });

    it('should have proper element positioning', () => {
      uiTestsPage.checkElementPositioning();
    });

    it('should display proper text alignment', () => {
      uiTestsPage.checkTextAlignment();
    });

    it('should have consistent font styling', () => {
      uiTestsPage.checkFontStyling();
    });

    it('should have proper button dimensions', () => {
      uiTestsPage.checkButtonDimensions();
    });

    it('should have proper input field dimensions', () => {
      uiTestsPage.checkInputFieldDimensions();
    });
  });

  // UI - Negative Test Cases
  describe('UI - Negative Test Cases', () => {
    it('should not display password in plain text', () => {
      uiTestsPage.checkPasswordNotInPlainText();
    });

    it('should not show sensitive information in page source', () => {
      uiTestsPage.checkSensitiveInformationNotInPageSource();
    });

    it('should not have broken images or missing assets', () => {
      uiTestsPage.checkNoBrokenImages();
    });

    it('should not have overlapping elements', () => {
      uiTestsPage.checkNoOverlappingElements();
    });

    it('should not have invisible interactive elements', () => {
      uiTestsPage.checkNoInvisibleInteractiveElements();
    });

    it('should not have elements with zero dimensions', () => {
      uiTestsPage.checkNoElementsWithZeroDimensions();
    });

    it('should not display error messages before user interaction', () => {
      uiTestsPage.checkNoErrorMessagesBeforeUserInteraction();
    });

    it('should not have accessibility violations', () => {
      uiTestsPage.checkNoAccessibilityViolations();
    });

    it('should not have elements outside viewport', () => {
      uiTestsPage.checkNoElementsOutsideViewport();
    });

    it('should not have broken styling', () => {
      uiTestsPage.checkNoBrokenStyling();
    });
  });
});
