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
      JQueryMobilePage({id:'popup', headerTheme:'b'}, PagePopUpContent(null))
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
      React.DOM.h4(null, 'Page footer')
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
      React.DOM.p(null,
        'I have an ',
        React.DOM.code(null, 'id'),
        ' of "home" on my page container. I\'m first in the source order so I\'m shown when the page loads.'
      ),
      React.DOM.p(null, 'This is a multi-page boilerplate template that you can copy to build your first jQuery Mobile page. This template contains multiple "page" containers inside, unlike a single page template that has just one page within it.'),
      React.DOM.p(null, 'Just view the source and copy the code to get started. All the CSS and JS is linked to the jQuery CDN versions so this is super easy to set up. Remember to include a meta viewport tag in the head to set the zoom level.'),
      React.DOM.p(null,
        'You link to internal pages by referring to the ',
        React.DOM.code(null, 'id'),
        ' of the page you want to show. For example, to ',
        React.DOM.a({href:'#one'}, 'link'),
        ' to the page with an ',
        React.DOM.code(null, 'id'),
        ' of "two", my link would have a ',
        React.DOM.code(null, 'href="#two"'),
        ' in the code.'
      ),
      React.DOM.h3(null, 'Show internal pages:'),
      JQueryMobileButton({href:'#one'}, 'Show page "one"'),
      JQueryMobileButton({href:'#popup', 'data-rel':'dialog', 'data-transition':'pop'}, 'Show page "popup" (as a dialog)')
    );
  }
});
