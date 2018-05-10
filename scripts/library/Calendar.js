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
const CalendarBody = extend(require("../../components/CalendarBody"));

function addChild(childName, ChildClass, componentInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(componentInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function Calendar(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "navbar", $Calendar$$Navbar_, this);
  addChild.call(this, "calendarDays", $Calendar$$CalendarDays_, this);
  addChild.call(this, "line1", $Calendar$$Line1_, this);
  addChild.call(this, "line2", $Calendar$$Line2_, this);
  addChild.call(this, "body", $Calendar$$Body_, this);
}
Calendar.$$styleContext = {
  classNames: ".calendar-self",
  userProps: {
    height: 300
  }
};
const Calendar_ = FlexLayout(Calendar);

function $Calendar$$Navbar(_super, pageInstance) {
  _super(this);
}
$Calendar$$Navbar.$$styleContext = {
  classNames: ".calendar.header_navbar",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )"
  }
};
const $Calendar$$Navbar_ = CalendarNavBar($Calendar$$Navbar);

function $Calendar$$CalendarDays(_super, pageInstance) {
  _super(this);
  addChild.call(this, "dayName_0", $Calendar$$CalendarDays$$DayName_0_, pageInstance);
  addChild.call(this, "dayName_1", $Calendar$$CalendarDays$$DayName_1_, pageInstance);
  addChild.call(this, "dayName_2", $Calendar$$CalendarDays$$DayName_2_, pageInstance);
  addChild.call(this, "dayName_3", $Calendar$$CalendarDays$$DayName_3_, pageInstance);
  addChild.call(this, "dayName_4", $Calendar$$CalendarDays$$DayName_4_, pageInstance);
  addChild.call(this, "dayName_5", $Calendar$$CalendarDays$$DayName_5_, pageInstance);
  addChild.call(this, "dayName_6", $Calendar$$CalendarDays$$DayName_6_, pageInstance);
}
$Calendar$$CalendarDays.$$styleContext = {
  classNames: ".calendar.header_dayNames",
  userProps: {}
};
const $Calendar$$CalendarDays_ = FlexLayout($Calendar$$CalendarDays);

function $Calendar$$CalendarDays$$DayName_0(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_0.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_0_ = TextView($Calendar$$CalendarDays$$DayName_0);

function $Calendar$$CalendarDays$$DayName_1(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_1.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_1_ = TextView($Calendar$$CalendarDays$$DayName_1);

function $Calendar$$CalendarDays$$DayName_2(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_2.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_2_ = TextView($Calendar$$CalendarDays$$DayName_2);

function $Calendar$$CalendarDays$$DayName_3(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_3.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_3_ = TextView($Calendar$$CalendarDays$$DayName_3);

function $Calendar$$CalendarDays$$DayName_4(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_4.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_4_ = TextView($Calendar$$CalendarDays$$DayName_4);

function $Calendar$$CalendarDays$$DayName_5(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_5.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_5_ = TextView($Calendar$$CalendarDays$$DayName_5);

function $Calendar$$CalendarDays$$DayName_6(_super, pageInstance) {
  _super(this);
}
$Calendar$$CalendarDays$$DayName_6.$$styleContext = {
  classNames: ".calendar.header_dayNames_dayName.weekday",
  userProps: {}
};
const $Calendar$$CalendarDays$$DayName_6_ = TextView($Calendar$$CalendarDays$$DayName_6);

function $Calendar$$Line1(_super, pageInstance) {
  _super(this);
}
$Calendar$$Line1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 228, 228, 228, 1 )",
    height: 1,
    width: null
  }
};
const $Calendar$$Line1_ = FlexLayout($Calendar$$Line1);

function $Calendar$$Line2(_super, pageInstance) {
  _super(this);
}
$Calendar$$Line2.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 228, 228, 228, 1 )",
    height: 1,
    width: null
  }
};
const $Calendar$$Line2_ = FlexLayout($Calendar$$Line2);

function $Calendar$$Body(_super, pageInstance) {
  _super(this);
}
$Calendar$$Body.$$styleContext = {
  classNames: ".calendar.body",
  userProps: {}
};
const $Calendar$$Body_ = CalendarBody($Calendar$$Body);

module && (module.exports = Calendar_);