import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    // ページのタイトルを取得
    return browser.getTitle() as Promise<string>;
    // return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  getTitleText2() {
    // スタイルクラスを指定して取得
    // <div class="title">メンバー一覧</div>
    return element(by.className('title')).getText() as Promise<string>;
  }

  openNewMember() {
    // スタイルの要素を指定して取得
    // cssファイルに書かれた要素
    element(by.css('.button-wide ')).click();
    // return browser.getTitle() as Promise<string>;
    return element(by.className('title')).getText() as Promise<string>;
  }

}
