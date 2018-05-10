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

const CalendarDay = extend(require("../../components/CalendarDay"));

function addChild(childName, ChildClass, componentInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(componentInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function CalendarWeekRow(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "weekDay1", $CalendarWeekRow$$WeekDay1_, this);
  addChild.call(this, "weekDay2", $CalendarWeekRow$$WeekDay2_, this);
  addChild.call(this, "weekDay3", $CalendarWeekRow$$WeekDay3_, this);
  addChild.call(this, "weekDay4", $CalendarWeekRow$$WeekDay4_, this);
  addChild.call(this, "weekDay5", $CalendarWeekRow$$WeekDay5_, this);
  addChild.call(this, "weekDay6", $CalendarWeekRow$$WeekDay6_, this);
  addChild.call(this, "weekDay7", $CalendarWeekRow$$WeekDay7_, this);
  addChild.call(this, "line", $CalendarWeekRow$$Line_, this);
}
CalendarWeekRow.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {
    backgroundColor: "rgba( 245, 126, 126, 0 )",
    flexProps: {
      flexDirection: "ROW"
    },
    height: 40,
    width: 355
  }
};
const CalendarWeekRow_ = FlexLayout(CalendarWeekRow);

function $CalendarWeekRow$$WeekDay1(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay1.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay1_ = CalendarDay($CalendarWeekRow$$WeekDay1);

function $CalendarWeekRow$$WeekDay2(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay2.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay2_ = CalendarDay($CalendarWeekRow$$WeekDay2);

function $CalendarWeekRow$$WeekDay3(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay3.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay3_ = CalendarDay($CalendarWeekRow$$WeekDay3);

function $CalendarWeekRow$$WeekDay4(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay4.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay4_ = CalendarDay($CalendarWeekRow$$WeekDay4);

function $CalendarWeekRow$$WeekDay5(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay5.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay5_ = CalendarDay($CalendarWeekRow$$WeekDay5);

function $CalendarWeekRow$$WeekDay6(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay6.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay6_ = CalendarDay($CalendarWeekRow$$WeekDay6);

function $CalendarWeekRow$$WeekDay7(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$WeekDay7.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {}
};
const $CalendarWeekRow$$WeekDay7_ = CalendarDay($CalendarWeekRow$$WeekDay7);

function $CalendarWeekRow$$Line(_super, pageInstance) {
  _super(this);
}
$CalendarWeekRow$$Line.$$styleContext = {
  classNames: "",
  userProps: {
    backgroundColor: "rgba( 228, 228, 228, 1 )",
    bottom: 1,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 1,
    left: 0,
    right: 0
  }
};
const $CalendarWeekRow$$Line_ = FlexLayout($CalendarWeekRow$$Line);

module && (module.exports = CalendarWeekRow_);