# Creatingly Platform Test Suite

A comprehensive automation test suite for the Creatingly Platform using Cypress with Page Object Model (POM) design pattern.

## 🏗️ Architecture

This test suite follows the **Page Object Model (POM)** design pattern, which provides:

- **Maintainability**: Centralized element selectors and test data
- **Reusability**: Common methods shared across test files
- **Readability**: Clean, descriptive test methods
- **Scalability**: Easy to extend with new test scenarios

## 📁 Project Structure

```
test-creatingly/
├── cypress/
│   ├── e2e/                          # Test files
│   │   ├── functional_positive_tests.cy.js
│   │   ├── functional_negative_tests.cy.js
│   │   ├── ui_tests.cy.js
│   │   ├── usability_tests.cy.js
│   │   ├── performance_tests.cy.js
│   │   └── compatibility_tests.cy.js
│   ├── support/
│   │   ├── pages/                    # Page Object Models
│   │   │   ├── BasePage.js           # Base page with common methods
│   │   │   ├── FunctionalPositivePage.js
│   │   │   ├── FunctionalNegativePage.js
│   │   │   ├── UITestsPage.js
│   │   │   ├── UsabilityTestsPage.js
│   │   │   ├── PerformanceTestsPage.js
│   │   │   └── CompatibilityTestsPage.js
│   │   ├── commands.js               # Custom Cypress commands
│   │   └── e2e.js                    # Global imports and configuration
│   ├── fixtures/                     # Test data files
│   ├── screenshots/                  # Test failure screenshots
│   └── downloads/                    # Downloaded files
├── cypress.config.js                 # Cypress configuration
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## 🎯 Page Object Model Implementation

### BasePage.js
The foundation class that contains:
- **Common selectors**: Centralized element locators
- **Test data**: Shared test credentials and data
- **Base methods**: Common actions like visit, click, type
- **Verification methods**: Standard assertions

### Specialized Page Objects
Each test category has its own page object extending BasePage:

#### FunctionalPositivePage.js
- Methods for positive functional testing
- Password validation scenarios
- Multiple login attempts
- Various input types (mixed case, punctuation, emoji, etc.)

#### FunctionalNegativePage.js
- Methods for negative functional testing
- Invalid input handling
- Edge case scenarios
- Error condition testing

#### UITestsPage.js
- UI element verification methods
- Styling and layout checks
- Visual feedback testing
- Accessibility validation

#### UsabilityTestsPage.js
- User interaction testing
- Keyboard navigation
- Mouse interactions
- Copy-paste functionality
- Browser behavior testing

#### PerformanceTestsPage.js
- Performance measurement methods
- Load time testing
- Response time validation
- Memory usage testing
- Stress testing scenarios

#### CompatibilityTestsPage.js
- Cross-browser compatibility
- Responsive design testing
- Viewport testing
- Device compatibility

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd test-creatingly

# Install dependencies
npm install
```

### Configuration
The base URL is configured in `cypress.config.js`:
```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-run-tests-575d44c88c.platform.creatingly.com/',
    // ... other configuration
  },
});
```

## 🧪 Running Tests

### All Tests
```bash
npm test
```

### Specific Test Categories
```bash
# Functional Tests
npm run test:functional-positive
npm run test:functional-negative

# UI Tests
npm run test:ui-only

# Usability Tests
npm run test:usability-only

# Performance Tests
npm run test:performance-only

# Compatibility Tests
npm run test:compatibility-only
```

### Browser-Specific Tests
```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### Interactive Mode
```bash
npm run test:open
```

## 📊 Test Categories

### 1. Functional Tests
- **Positive**: Valid password scenarios, successful login flows
- **Negative**: Invalid inputs, error handling, edge cases

### 2. UI Tests
- Visual element verification
- Styling and layout consistency
- Accessibility compliance
- Responsive design validation

### 3. Usability Tests
- User interaction patterns
- Keyboard and mouse navigation
- Copy-paste functionality
- Browser behavior testing

### 4. Performance Tests
- Page load times
- Response time measurement
- Memory usage optimization
- Stress testing scenarios

### 5. Compatibility Tests
- Cross-browser testing
- Responsive design validation
- Device compatibility
- Viewport testing

## 🔧 POM Benefits

### 1. Maintainability
```javascript
// Before POM - Hard to maintain
cy.get('#noVNC_connect_button').click();
cy.get('#noVNC_password_input').type('password');
cy.get('#noVNC_credentials_button').click();

// After POM - Easy to maintain
usabilityPage.loginWithPassword('password');
```

### 2. Reusability
```javascript
// Common methods used across tests
basePage.visit();
basePage.clickConnectButton();
basePage.verifyElementsExist();
```

### 3. Readability
```javascript
// Clear, descriptive test methods
it('should allow keyboard navigation for login', () => {
  usabilityPage.allowKeyboardNavigationForLogin();
});
```

### 4. Scalability
```javascript
// Easy to add new test scenarios
class NewTestPage extends BasePage {
  newTestMethod() {
    // New functionality
  }
}
```

## 📝 Test Data Management

Test data is centralized in page objects:
```javascript
testData = {
  correctPassword: 'SnKW1GjphTjIq4FaWWrpnkeqz1AS0INypcUP',
  wrongPassword: 'wrongpassword123',
  // ... other test data
};
```

## 🎨 Element Selectors

All selectors are centralized in the `elements` object:
```javascript
elements = {
  connectButton: '#noVNC_connect_button',
  passwordInput: '#noVNC_password_input',
  credentialsButton: '#noVNC_credentials_button',
  // ... other selectors
};
```

## 🔄 Test Execution Flow

1. **Setup**: Page object instantiation and session clearing
2. **Action**: Test-specific method execution
3. **Verification**: Assertion and validation
4. **Cleanup**: Automatic cleanup by Cypress

## 📈 Performance Metrics

The test suite includes comprehensive performance testing:
- Page load time measurement
- Response time validation
- Memory usage monitoring
- Stress testing scenarios

## 🌐 Cross-Browser Compatibility

Tests are designed to work across multiple browsers:
- Chrome
- Firefox
- Edge
- Safari (when available)

## 📱 Responsive Testing

Comprehensive responsive design testing:
- Desktop viewports (1920x1080)
- Laptop viewports (1366x768)
- Tablet viewports (1024x768)
- Mobile viewports (375x667)
- Small mobile viewports (320x568)

## 🛠️ Best Practices

### 1. Page Object Design
- Keep methods focused and single-purpose
- Use descriptive method names
- Centralize common functionality in BasePage

### 2. Test Organization
- Group related tests in describe blocks
- Use clear, descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### 3. Error Handling
- Implement proper error handling in page objects
- Use meaningful error messages
- Handle edge cases gracefully

### 4. Performance
- Optimize test execution time
- Use efficient selectors
- Minimize unnecessary waits

## 🔍 Debugging

### Screenshots
Failed tests automatically capture screenshots in `cypress/screenshots/`

### Video Recording
Test execution videos are saved in `cypress/videos/`

### Console Logs
Use `cy.log()` for debugging information

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Page Object Model Best Practices](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)
- [Test Automation Patterns](https://martinfowler.com/bliki/PageObject.html)

## 🤝 Contributing

1. Follow the existing POM structure
2. Add new page objects for new test categories
3. Extend BasePage for common functionality
4. Maintain consistent naming conventions
5. Update documentation for new features

## 📄 License

This project is licensed under the ISC License.

---

**Note**: This test suite is specifically designed for the Creatingly Platform at `https://dev-run-tests-575d44c88c.platform.creatingly.com/` and may require modifications for other applications.