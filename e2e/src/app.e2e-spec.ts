import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('componentSample App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('ページタイトル', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('ComponentSample');
//    expect(page.getTitleText()).toEqual('Welcome to componentSample!');
  });
  it('初期ページの「title」要素', () => {
    expect(page.getTitleText2()).toEqual('メンバー一覧');
  });

  it('「メンバーを追加する」に遷移', () => {
    page.navigateTo();
    expect(page.openNewMember()).toEqual('メンバー作成');
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

