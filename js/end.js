/** Application popup page component. */
var PagePopUpContent = React.createClass({
  displayName: 'PagePopUpContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Popup'),
      React.DOM.p(null, 'I have an id of "popup" on my page container and only look like a dialog because the link to me had a ',
        React.DOM.code(null, 'data-rel="dialog"'),
        ' attribute which gives me this inset look and a ',
        React.DOM.code(null, 'data-transition="pop"'),
        ' attribute to change the transition to pop. Without this, I\'d be styled as a normal page.'),
      JQueryMobileButton({href:'#home'}, 'Show page "home"')
    );
  }
});

// Render application.
React.render(App(null), document.getElementById('content'));