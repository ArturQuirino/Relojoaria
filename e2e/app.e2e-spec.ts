import { RelojoariaPage } from './app.po';

describe('relojoaria App', () => {
  let page: RelojoariaPage;

  beforeEach(() => {
    page = new RelojoariaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
