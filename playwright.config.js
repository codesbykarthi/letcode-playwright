const { defineConfig } = require('@playwright/test');
const letcodeBaseUrl = 'https://letcode.in/';

export default defineConfig({
  letcodeBaseUrl,
  letcodeURL_Workspace:`${letcodeBaseUrl}test`,
  letcodeURL_Input:`${letcodeBaseUrl}edit`,
  letcodeURL_Button:`${letcodeBaseUrl}button`,
  letcodeURL_Dropdowns:`${letcodeBaseUrl}dropdowns`,
  letcodeURL_Alert:`${letcodeBaseUrl}alert`,
  letcodeURL_Iframe:`${letcodeBaseUrl}frame`,
  letcodeURL_Radio:`${letcodeBaseUrl}radio`,
  letcodeURL_Window:`${letcodeBaseUrl}window`,
  letcodeURL_Element:`${letcodeBaseUrl}elements`,
  letcodeURL_Drag:`${letcodeBaseUrl}draggable`,
  letcodeURL_Drop:`${letcodeBaseUrl}droppable`,
  letcodeURL_Sort:`${letcodeBaseUrl}sortable`,
  letcodeURL_MultiSelect:`${letcodeBaseUrl}selectable`,
  letcodeURL_Slider:`${letcodeBaseUrl}slider`,
  letcodeURL_Wait:`${letcodeBaseUrl}waits`,
  letcodeURL_Table:`${letcodeBaseUrl}table`,
  letcodeURL_AdvancedTable:`${letcodeBaseUrl}advancedtable`,
  letcodeURL_Calendar:`${letcodeBaseUrl}calendar`,
  letcodeURL_Form:`${letcodeBaseUrl}forms`,
  letcodeURL_File:`${letcodeBaseUrl}file`,
  letcodeURL_Shadow:`${letcodeBaseUrl}shadow`,

  testDir: './tests',
  testMatch: 'Letcode.spec.js',
  retries: 0,
  outputDir: './test-results',                        // Custom output directory
  reporter: [
    ['list'],                                         // Default console output
    ['html', { outputFolder: 'playwright-report' }],  // HTML report
    ['json', { outputFile: 'test-results.json' }],    // JSON report
    ['junit', { outputFile: 'results.xml' }]          // JUnit XML report
  ],
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null, 
    launchOptions: {
      args: ['--start-maximized'], 
    },
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    { name: 'chrome', use: { browserName: 'chromium' } }
  ]
});
