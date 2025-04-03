const { defineConfig } = require('@playwright/test');

export default defineConfig({
  testDir: './tests',
  testMatch: 'Letcode.spec.js',
  letcodeURL_Home:'https://letcode.in/',
  letcodeURL_Workspace:'https://letcode.in/test',
  letcodeURL_Input:'https://letcode.in/edit',
  letcodeURL_Button:'https://letcode.in/button',
  letcodeURL_Dropdowns:'https://letcode.in/dropdowns',
  letcodeURL_Alert:'https://letcode.in/alert',
  letcodeURL_Iframe:'https://letcode.in/frame',
  letcodeURL_Radio:'https://letcode.in/radio',
  letcodeURL_Window:'https://letcode.in/window',
  letcodeURL_Element:'https://letcode.in/elements',
  letcodeURL_Drag:'https://letcode.in/draggable',
  letcodeURL_Drop:'https://letcode.in/droppable',
  retries: 0,
  outputDir: './test-results', // Custom output directory
  reporter: [
    ['list'],                     // Default console output
    ['html', { outputFolder: 'playwright-report' }],  // HTML report
    ['json', { outputFile: 'test-results.json' }],    // JSON report
    ['junit', { outputFile: 'results.xml' }]          // JUnit XML report
  ],
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null, // Ensures Playwright does not override the browser’s default size
    launchOptions: {
      args: ['--start-maximized'], // Maximizes the browser window
    },
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    { name: 'chrome', use: { browserName: 'chromium' } }
  ]
});
