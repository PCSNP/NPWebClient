import { NPWebClientPage } from './app.po';

describe('npweb-client App', () => {
  let page: NPWebClientPage;

  beforeEach(() => {
    page = new NPWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
