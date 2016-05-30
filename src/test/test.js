describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('/index.html');

    expect(browser.getTitle()).toEqual('proyecto');
  });
});