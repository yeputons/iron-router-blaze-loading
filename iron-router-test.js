if (Meteor.isClient) {
  Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'master',
  });
  Router.map(function() {
    this.route('hello', {
      path: '/',
      template: 'hello',
      waitOn: function() { return Meteor.subscribe('data'); },
    });
  });
}
