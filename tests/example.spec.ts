import { test, expect } from '@playwright/test';

test('acessando página do SIL Homologa', async ({ page }) => {
  test.setTimeout(100000);

  // Acessa o SIL
  console.log('Iniciando teste...')
  await page.goto('https://silpainelhomologacao.opentechgr.com.br/');
  
  // await page.fill('input[type="text"]', 'ERICVN');
  // Loga no SIL
  await page.fill('xpath=//*[@id="txtUser"]', 'ERIC.VN');
  await page.fill('xpath=//*[@id="txtPass"]', 'ABCD@123');
  await page.click('xpath=//*[@id="btnAutenticar"]');
  await page.fill('xpath=//*[@id="txtCliente"]', 'OPENTECH - TESTE | 10.887.479/0001-83');
  await new Promise(resolve => setTimeout(resolve, 5000));
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await new Promise(resolve => setTimeout(resolve, 5000));
  await page.click('xpath=//*[@id="btnValidarCliente"]');
  await new Promise(resolve => setTimeout(resolve, 5000));

  await page.getByRole('button', { name: 'Operação'}).click();
  await page.getByRole('link', { name: 'Clipas Net', exact: true}).click();
  await page.getByRole('link', { name: 'Autorização de embarque'}).click();
  await page.getByRole('link', { name:'Emissão de Autorização de embarque'}).click();
  await new Promise(resolve => setTimeout(resolve, 10000));
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtCPFMot1').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtCPFMot1').fill('11111111111');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtCPFMot1').press('Tab');
  await new Promise(resolve => setTimeout(resolve, 10000));
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtCPFMot1').press('Tab');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtDDDCelularMot1').fill('47');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtDDDCelularMot1').press('Tab');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtCelularMot1').fill('9999999999');

  //await page.getByRole('link', { name: 'Dados cavalos/carretas'}).click();
  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Dados cavalos/carretas' }).click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPlacaCav1').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPlacaCav1').fill('mlt0015');
  await new Promise(resolve => setTimeout(resolve, 6000));

  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Dados viagem' }).click();
  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Dados viagem' }).click();
  await new Promise(resolve => setTimeout(resolve, 6000));
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#TpOperacaoViag').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#TpOperacaoViag').press('Tab');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtIniViag').fill('110220250000');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtIniViag').press('Tab');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtFimViag').fill('120220250000');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtFimViag').press('Tab');
  await new Promise(resolve => setTimeout(resolve, 6000));

  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Documentos', exact: true}).click();
  await new Promise(resolve => setTimeout(resolve, 5000));
  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Documentos', exact: true}).click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtNrDocumento').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtNrDocumento').fill('testeopen');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#cmbTpDocumento').click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPrevChegada').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPrevChegada').fill('110220250000');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPrevSaida').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPrevSaida').fill('120220250000');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtPrevSaida').press('Tab');

  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Dados complementares', exact: true}).click();
  await new Promise(resolve => setTimeout(resolve, 10000));
  await page.frameLocator('iframe[name="frawinActive_0"]').getByRole('link', { name: 'Dados complementares', exact: true}).click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#edtProdutoDoc').click();
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#edtProdutoDoc').fill('AUTOBOTS');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#edtProdutoDoc').press('Tab');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtValProdDoc').fill('111');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#txtValProdDoc').press('Tab');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#cmbRegras').click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.frameLocator('iframe[name="frawinActive_0"]').locator('#tlbProdutosDoc_tlbProdutosDocBtnAppend_CD').click();
  await new Promise(resolve => setTimeout(resolve, 10000));
})