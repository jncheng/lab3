/** Application page one component. */
var PageThreeContent = React.createClass({
  displayName: 'PageThreeContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Example Question'),
      React.DOM.p(null, 'This is a sample question'),
      React.DOM.p(null, 'There will be 4 answers, but only 1 will be correct'),
      React.DOM.p(null, 'Answer 1'),
      React.DOM.p(null, 'Answer 2'),
      React.DOM.p(null, 'Answer 3'),
      React.DOM.p(null, 'Answer 4'),
      React.DOM.h3(null, ''),
      JQueryMobileButton({href:'#four'}, 'Next Question'),
      JQueryMobileButton({href:'#two'}, 'Last Question')
    );
  }
});