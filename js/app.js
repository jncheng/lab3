/**

 * - App
 *   |-- JQueryMobilePage (one)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageOneContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (two)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageTwoContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (popup)
 *       |-- JQueryMobileHeader
 *       |-- JQueryMobileContent
 *       |   |-- PagePopUpContent
 *       |       |-- JQueryMobileButton
 *       |-- JQueryMobileFooter
 */

 /* global document, React */

'use strict';

/** Main application component. */
var App = React.createClass({
  displayName: 'App',

  render: function() {
    return React.DOM.div({className:'app'},
      JQueryMobilePage({id:'home'}, PageHomeContent(null)),
      JQueryMobilePage({id:'one'}, PageOneContent(null)),
      JQueryMobilePage({id:'two'}, PageTwoContent(null)),
      JQueryMobilePage({id:'three'}, PageThreeContent(null)),
      JQueryMobilePage({id:'four'}, PageFourContent(null)),
      JQueryMobilePage({id:'results', headerTheme:'b'}, PageResultsContent(null))
    );
  }
});

/** jQuery Mobile button component. */
var JQueryMobileButton = React.createClass({
  displayName: 'JQueryMobileButton',

  getDefaultProps: function() {
    return {className:'ui-btn ui-shadow ui-corner-all'};
  },

  render: function() {
    return React.DOM.p(null,
      React.DOM.a(this.props, this.props.children)
    );
  }
});

/** jQuery Mobile page content component. */
var JQueryMobileContent = React.createClass({
  displayName: 'JQueryMobileContent',

  render: function() {
    return React.DOM.div({role:'main', className:'ui-content'},
      this.props.children
    );
  }
});

/** jQuery Mobile footer component. */
var JQueryMobileFooter = React.createClass({
  displayName: 'JQueryMobileFooter',

  render: function() {
    return React.DOM.div({'data-role':'footer'},
      React.DOM.h4(null, 'Page footerr')
    );
  }
});

/** jQuery Mobile header component. */
var JQueryMobileHeader = React.createClass({
  displayName: 'JQueryMobileHeader',

  render: function() {
    return React.DOM.div({'data-role':'header', 'data-theme':this.props.headerTheme},
      React.DOM.h1(null, this.props.title)
    );
  }
});

/** jQuery Mobile page component. */
var JQueryMobilePage = React.createClass({
  displayName: 'JQueryMobilePage',

  getDefaultProps: function() {
    return {'data-role':'page', 'data-theme':'a', headerTheme:'a'};
  },

  render: function() {
    return this.transferPropsTo(React.DOM.div(null,
      JQueryMobileHeader({title:'Question ' + this.props.id, headerTheme:this.props.headerTheme}),
      JQueryMobileContent(null, this.props.children),
      JQueryMobileFooter(null)
    ));
  }
});

/** Application page home component. */
var PageHomeContent = React.createClass({
  displayName: 'PageHomeContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Home'),
      React.DOM.p(null, 'This is a quiz to help you determine how prepared you are for an earthquake.'),
      React.DOM.p(null, ' An earthquake is inevitable in the near future'),
      React.DOM.p(null, 'Follow along and answer the questions, your result will be shown once you finish the quiz.'),
      React.DOM.h3(null, 'Show internal pages:'),
      JQueryMobileButton({href:'#one'}, 'Begin quiz')
    );
  }
});
