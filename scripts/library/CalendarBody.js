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
function CalendarBody(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "week1", $CalendarBody$$Week1_, this);
  addChild.call(this, "week2", $CalendarBody$$Week2_, this);
  addChild.call(this, "week3", $CalendarBody$$Week3_, this);
  addChild.call(this, "week4", $CalendarBody$$Week4_, this);
  addChild.call(this, "week5", $CalendarBody$$Week5_, this);
  addChild.call(this, "week6", $CalendarBody$$Week6_, this);
}
CalendarBody.$$styleContext = {
  classNames: "",
  userProps: {
    height: 247.3684210526316,
    width: 356.140350877193
  }
};
const CalendarBody_ = FlexLayout(CalendarBody);

function $CalendarBody$$Week1(_super, pageInstance) {
  _super(this);
}
$CalendarBody$$Week1.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarBody$$Week1_ = CalendarWeekRow($CalendarBody$$Week1);

function $CalendarBody$$Week2(_super, pageInstance) {
  _super(this);
}
$CalendarBody$$Week2.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarBody$$Week2_ = CalendarWeekRow($CalendarBody$$Week2);

function $CalendarBody$$Week3(_super, pageInstance) {
  _super(this);
}
$CalendarBody$$Week3.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarBody$$Week3_ = CalendarWeekRow($CalendarBody$$Week3);

function $CalendarBody$$Week4(_super, pageInstance) {
  _super(this);
}
$CalendarBody$$Week4.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarBody$$Week4_ = CalendarWeekRow($CalendarBody$$Week4);

function $CalendarBody$$Week5(_super, pageInstance) {
  _super(this);
}
$CalendarBody$$Week5.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarBody$$Week5_ = CalendarWeekRow($CalendarBody$$Week5);

function $CalendarBody$$Week6(_super, pageInstance) {
  _super(this);
}
$CalendarBody$$Week6.$$styleContext = {
  classNames: ".calendar.weekRow",
  userProps: {}
};
const $CalendarBody$$Week6_ = CalendarWeekRow($CalendarBody$$Week6);

module && (module.exports = CalendarBody_);