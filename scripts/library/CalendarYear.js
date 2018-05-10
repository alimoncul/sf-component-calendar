//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const TextView = extend(require('sf-core/ui/textview'));

function addChild(childName, ChildClass, componentInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(componentInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function CalendarYear(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "yearLabel", $CalendarYear$$YearLabel_, this);
}
CalendarYear.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 235, 235, 235, 1 )",
    height: 40,
    width: 293.42105263157896
  }
};
const CalendarYear_ = FlexLayout(CalendarYear);

function $CalendarYear$$YearLabel(_super, pageInstance) {
  _super(this);
}
$CalendarYear$$YearLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 0,
    flexProps: {
      flexGrow: 1,
      positionType: "ABSOLUTE"
    },
    font: {
      size: 12
    },
    height: null,
    left: 10,
    marginLeft: null,
    marginRight: 10,
    right: null,
    textAlignment: "MIDLEFT",
    top: 0,
    width: 80
  }
};
const $CalendarYear$$YearLabel_ = TextView($CalendarYear$$YearLabel);

module && (module.exports = CalendarYear_);