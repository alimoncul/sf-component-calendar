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
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, componentInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(componentInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function CalendarWeekNavBar(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "nextWeek", $CalendarWeekNavBar$$NextWeek_, this);
  addChild.call(this, "prevWeek", $CalendarWeekNavBar$$PrevWeek_, this);
}
CalendarWeekNavBar.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1,
      flexDirection: "ROW",
      flexWrap: "WRAP"
    },
    height: 20,
    maxHeight: null,
    minHeight: null,
    paddingBottom: null,
    width: 285.9375
  }
};
const CalendarWeekNavBar_ = FlexLayout(CalendarWeekNavBar);

function $CalendarWeekNavBar$$NextWeek(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekNavBar$$NextWeek.$$styleContext = {
  classNames: ".calendar.header_navbar_arrow",
  userProps: {
    font: {
      size: 16,
      family: "FontAwesome5FreeSolid",
      bold: false,
      italic: false
    },
    right: 0
  }
};
const $CalendarWeekNavBar$$NextWeek_ = Button($CalendarWeekNavBar$$NextWeek);

function $CalendarWeekNavBar$$PrevWeek(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekNavBar$$PrevWeek.$$styleContext = {
  classNames: ".calendar.header_navbar_arrow",
  userProps: {
    font: {
      size: 16,
      family: "FontAwesome5FreeSolid",
      bold: false,
      italic: false
    }
  }
};
const $CalendarWeekNavBar$$PrevWeek_ = Button($CalendarWeekNavBar$$PrevWeek);

module && (module.exports = CalendarWeekNavBar_);