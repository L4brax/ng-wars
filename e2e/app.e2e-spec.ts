import { NgWarsPage } from './app.po';

describe('ng-wars App', () => {
  let page: NgWarsPage;

  beforeEach(() => {
    page = new NgWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
