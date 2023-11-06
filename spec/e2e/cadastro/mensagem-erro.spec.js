import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Builder, By } from 'selenium-webdriver';


describe('Testando mensagens de erros ao inserir valores inválidos nos campos', () => {
  let driver;
  const url = 'http://localhost:5500/cadastro.html';

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(url);
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('Verificar se o campo de nome completo respeita o seu erro de quantidade mínima de caracteres', async () => {
    const campoNome = await driver.findElement(By.name('nome-completo'));

    await campoNome.sendKeys('a');

    const mensagensErroTag = await driver.findElements(By.className('mensagem-erro'));

    mensagensErroTag.forEach(async mensagemErroTag => {
      const mensagemErroTexto = await mensagemErroTag.getAttribute('innerText');

      if(mensagemErroTexto !== '') {
        expect(mensagemErroTexto).toBe('O nome deve conter 3 ou mais caracteres!');
      }
    });
  });
});
