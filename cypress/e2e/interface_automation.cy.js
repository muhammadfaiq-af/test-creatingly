// cypress/e2e/interface_automation.cy.js
// Test cases for Functional, Performance, UI, Usability, and Compatibility

describe('noVNC Interface Automation', () => {
  const baseUrl = 'https://dev-run-tests-575d44c88c.platform.creatingly.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // Functional Tests
  it('should load the website successfully', () => {
    cy.url().should('include', 'creatingly.com');
    cy.get('body').should('be.visible');
  });

  it('should toggle full screen mode', () => {
    cy.contains('Full Screen').click();
    // Add assertion for full screen mode
    cy.contains('Full Screen').click(); // Exit full screen
  });

  it('should open and close settings panel', () => {
    cy.contains('Settings').click();
    // Add assertion for settings panel open
    cy.contains('Settings').click(); // Close settings
  });

  // UI Tests
  it('should display all main UI elements', () => {
    cy.contains('Full Screen').should('be.visible');
    cy.contains('Settings').should('be.visible');
    cy.get('img').should('be.visible');
  });

  // Usability Tests
  it('should allow easy opening and closing of settings', () => {
    cy.contains('Settings').click();
    cy.contains('Settings').click();
  });

  // Performance Test (basic)
  it('should load the page within 3 seconds', () => {
    cy.visit(baseUrl, { timeout: 3000 });
  });

  // Compatibility (example: viewport)
  it('should display correctly on mobile viewport', () => {
    cy.viewport('iphone-6');
    cy.visit(baseUrl);
    cy.contains('Full Screen').should('be.visible');
  });

  // Negative Test: Rapid clicks
  it('should handle rapid clicks on Full Screen', () => {
    for (let i = 0; i < 5; i++) {
      cy.contains('Full Screen').click();
    }
  });

  // Negative Test: Settings in full screen
  it('should open settings while in full screen', () => {
    cy.contains('Full Screen').click();
    cy.contains('Settings').click();
    // Add assertion for settings panel in full screen
  });
});
