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
function CalendarDay(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "dayNum", $CalendarDay$$DayNum_, this);
}
CalendarDay.$$styleContext = {
  classNames: ".calendar.day",
  userProps: {
    height: 63.15789473684211,
    width: 80.70175438596492
  }
};
const CalendarDay_ = FlexLayout(CalendarDay);

function $CalendarDay$$DayNum(_super, pageInstance) {
  _super(this);
}
$CalendarDay$$DayNum.$$styleContext = {
  classNames: ".calendar.day_label",
  userProps: {}
};
const $CalendarDay$$DayNum_ = Button($CalendarDay$$DayNum);

module && (module.exports = CalendarDay_);