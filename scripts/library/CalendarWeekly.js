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

const CalendarNavBar = extend(require("../../components/CalendarNavBar"));
const CalendarWeekRow = extend(require("../../components/CalendarWeekRow"));

function addChild(childName, ChildClass, componentInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(componentInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function CalendarWeekly(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "navbar", $CalendarWeekly$$Navbar_, this);
  addChild.call(this, "calendarDays", $CalendarWeekly$$CalendarDays_, this);
  addChild.call(this, "week", $CalendarWeekly$$Week_, this);
}
CalendarWeekly.$$styleContext = {
  classNames: ".calendarWeekly",
  userProps: {}
};
const CalendarWeekly_ = FlexLayout(CalendarWeekly);

function $CalendarWeekly$$Navbar(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$Navbar.$$styleContext = {
  classNames: " .calendar.header_navbar",
  userProps: {}
};
const $CalendarWeekly$$Navbar_ = CalendarNavBar($CalendarWeekly$$Navbar);

function $CalendarWeekly$$CalendarDays(_super, pageInstance) {
  _super(this);
  addChild.call(this, "dayName_0", $CalendarWeekly$$CalendarDays$$DayName_0_, pageInstance);
  addChild.call(this, "dayName_1", $CalendarWeekly$$CalendarDays$$DayName_1_, pageInstance);
  addChild.call(this, "dayName_2", $CalendarWeekly$$CalendarDays$$DayName_2_, pageInstance);
  addChild.call(this, "dayName_3", $CalendarWeekly$$CalendarDays$$DayName_3_, pageInstance);
  addChild.call(this, "dayName_4", $CalendarWeekly$$CalendarDays$$DayName_4_, pageInstance);
  addChild.call(this, "dayName_5", $CalendarWeekly$$CalendarDays$$DayName_5_, pageInstance);
  addChild.call(this, "dayName_6", $CalendarWeekly$$CalendarDays$$DayName_6_, pageInstance);
}
$CalendarWeekly$$CalendarDays.$$styleContext = {
  classNames: ".calendar.header_dayNames",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays_ = FlexLayout($CalendarWeekly$$CalendarDays);

function $CalendarWeekly$$CalendarDays$$DayName_0(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_0.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_0_ = TextView($CalendarWeekly$$CalendarDays$$DayName_0);

function $CalendarWeekly$$CalendarDays$$DayName_1(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_1.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_1_ = TextView($CalendarWeekly$$CalendarDays$$DayName_1);

function $CalendarWeekly$$CalendarDays$$DayName_2(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_2.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_2_ = TextView($CalendarWeekly$$CalendarDays$$DayName_2);

function $CalendarWeekly$$CalendarDays$$DayName_3(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_3.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_3_ = TextView($CalendarWeekly$$CalendarDays$$DayName_3);

function $CalendarWeekly$$CalendarDays$$DayName_4(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_4.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_4_ = TextView($CalendarWeekly$$CalendarDays$$DayName_4);

function $CalendarWeekly$$CalendarDays$$DayName_5(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_5.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_5_ = TextView($CalendarWeekly$$CalendarDays$$DayName_5);

function $CalendarWeekly$$CalendarDays$$DayName_6(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$CalendarDays$$DayName_6.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $CalendarWeekly$$CalendarDays$$DayName_6_ = TextView($CalendarWeekly$$CalendarDays$$DayName_6);

function $CalendarWeekly$$Week(_super, pageInstance) {
  _super(this);
}
$CalendarWeekly$$Week.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarWeekly$$Week_ = CalendarWeekRow($CalendarWeekly$$Week);

module && (module.exports = CalendarWeekly_);