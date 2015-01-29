/** Application popup page component. */
var PageResultsContent = React.createClass({
  displayName: 'PageResultsContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Results'),
      React.DOM.p(null, 'You got 75%, Good job. These are the answers that you got right and wrong'),
      React.DOM.p(null, 'Question 1 wrong, right answer...'),
      React.DOM.p(null, 'Question 2 right, answer...'),
      React.DOM.p(null, 'Question 3 right, answer...'),
      React.DOM.p(null, 'Question 4 right, answer...'),
      JQueryMobileButton({href:'#home'}, 'Show page "home"')
    );
  }
});

// Render application.
React.render(App(null), document.getElementById('content'));