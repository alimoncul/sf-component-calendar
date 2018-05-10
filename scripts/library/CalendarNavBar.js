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
function CalendarNavBar(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "monthLabel", $CalendarNavBar$$MonthLabel_, this);
  addChild.call(this, "prevWeek", $CalendarNavBar$$PrevWeek_, this);
  addChild.call(this, "nextMonth", $CalendarNavBar$$NextMonth_, this);
  addChild.call(this, "nextWeek", $CalendarNavBar$$NextWeek_, this);
  addChild.call(this, "prevMonth", $CalendarNavBar$$PrevMonth_, this);
}
CalendarNavBar.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1,
      flexDirection: "ROW",
      flexWrap: "WRAP"
    },
    height: 45,
    maxHeight: null,
    minHeight: null,
    paddingBottom: null,
    width: 348
  }
};
const CalendarNavBar_ = FlexLayout(CalendarNavBar);

function $CalendarNavBar$$MonthLabel(_super, pageInstance) {
  _super(this);
}
$CalendarNavBar$$MonthLabel.$$styleContext = {
  classNames: ".label .calendar.header_navbar_monthLabel",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    bottom: 0,
    flexProps: {
      flexGrow: null,
      positionType: "ABSOLUTE"
    },
    height: null,
    left: 0,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
    right: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarNavBar$$MonthLabel_ = TextView($CalendarNavBar$$MonthLabel);

function $CalendarNavBar$$PrevWeek(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarNavBar$$PrevWeek.$$styleContext = {
  classNames: ".calendar.header_navbar_arrow",
  userProps: {
    alpha: 1,
    left: 30,
    visible: false,
    width: 30
  }
};
const $CalendarNavBar$$PrevWeek_ = Button($CalendarNavBar$$PrevWeek);

function $CalendarNavBar$$NextMonth(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarNavBar$$NextMonth.$$styleContext = {
  classNames: ".calendar.header_navbar_arrow",
  userProps: {
    right: 0
  }
};
const $CalendarNavBar$$NextMonth_ = Button($CalendarNavBar$$NextMonth);

function $CalendarNavBar$$NextWeek(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarNavBar$$NextWeek.$$styleContext = {
  classNames: ".calendar.header_navbar_arrow",
  userProps: {
    ios: {
      shadowOpacity: 0
    },
    right: 30,
    visible: false,
    width: 30
  }
};
const $CalendarNavBar$$NextWeek_ = Button($CalendarNavBar$$NextWeek);

function $CalendarNavBar$$PrevMonth(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarNavBar$$PrevMonth.$$styleContext = {
  classNames: ".calendar.header_navbar_arrow",
  userProps: {}
};
const $CalendarNavBar$$PrevMonth_ = Button($CalendarNavBar$$PrevMonth);

module && (module.exports = CalendarNavBar_);