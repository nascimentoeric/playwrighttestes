import { test, expect } from '@playwright/test';

test('acessando página do SIL Homologa', async ({ page }) => {
  // actions
  await page.goto('https://silpainelhomologacao.opentechgr.com.br/');
  
  // await page.fill('input[type="text"]', 'ERICVN');
  await page.fill('xpath=//*[@id="txtUser"]', 'ERIC.VN');
  await page.fill('xpath=//*[@id="txtPass"]', 'ABCD@123');
  await page.click('xpath=//*[@id="btnAutenticar"]');

  await page.fill('xpath=//*[@id="txtCliente"]', 'OPENTECH - TESTE | 10.887.479/0001-83');
  await new Promise(resolve => setTimeout(resolve, 5000));
})