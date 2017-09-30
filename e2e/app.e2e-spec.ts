import { GitshowcasePage } from './app.po';

describe('gitshowcase App', () => {
  let page: GitshowcasePage;

  beforeEach(() => {
    page = new GitshowcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
