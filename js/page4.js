


/** Application page one component. */
var PageFourContent = React.createClass({
  displayName: 'PageFourContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Four'),
      React.DOM.p(null,
        'I have an ',
        React.DOM.code(null, 'id'),
        ' of "four" on my page container. I\'m first in the source order so I\'m shown when the page loads.'
      ),
      React.DOM.p(null, 'This is a multi-page boilerplate template that you can copy to build your first jQuery Mobile page. This template contains multiple "page" containers inside, unlike a single page template that has just one page within it.'),
      React.DOM.p(null, 'Just view the source and copy the code to get started. All the CSS and JS is linked to the jQuery CDN versions so this is super easy to set up. Remember to include a meta viewport tag in the head to set the zoom level.'),
      React.DOM.p(null,
        'You link to internal pages by referring to the ',
        React.DOM.code(null, 'id'),
        ' of the page you want to show. For example, to ',
        React.DOM.a({href:'#Four'}, 'link'),
        ' to the page with an ',
        React.DOM.code(null, 'id'),
        ' of "Four", my link would have a ',
        React.DOM.code(null, 'href="#three"'),
        ' in the code.'
      ),
      React.DOM.h3(null, 'Show internal pages:'),
      JQueryMobileButton({href:'#popup', 'data-rel':'dialog', 'data-transition':'pop'}, 'Show page "popup" (as a dialog)')
    );
  }
});