import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Desativa a verificação de senhas vazadas do Chrome
          launchOptions.args.push('--disable-features=PasswordLeakDetection');
          return launchOptions;
        }
      });
      
    },
  },
});

