// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import Page Object Models
import BasePage from './pages/BasePage.js'
import FunctionalPositivePage from './pages/FunctionalPositivePage.js'
import FunctionalNegativePage from './pages/FunctionalNegativePage.js'
import UITestsPage from './pages/UITestsPage.js'
import UsabilityTestsPage from './pages/UsabilityTestsPage.js'
import PerformanceTestsPage from './pages/PerformanceTestsPage.js'
import CompatibilityTestsPage from './pages/CompatibilityTestsPage.js'

// Make page objects globally available
global.BasePage = BasePage
global.FunctionalPositivePage = FunctionalPositivePage
global.FunctionalNegativePage = FunctionalNegativePage
global.UITestsPage = UITestsPage
global.UsabilityTestsPage = UsabilityTestsPage
global.PerformanceTestsPage = PerformanceTestsPage
global.CompatibilityTestsPage = CompatibilityTestsPage