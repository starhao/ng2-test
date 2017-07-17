import { Ng2TestPage } from './app.po';

describe('ng2-test App', () => {
  let page: Ng2TestPage;

  beforeEach(() => {
    page = new Ng2TestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
