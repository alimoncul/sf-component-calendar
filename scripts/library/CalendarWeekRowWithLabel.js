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

const CalendarDayLabel = extend(require("../../components/CalendarDayLabel"));

function addChild(childName, ChildClass, componentInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(componentInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function CalendarWeekRowWithLabel(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
  addChild.call(this, "weekDayLabel1", $CalendarWeekRowWithLabel$$WeekDayLabel1_, this);
  addChild.call(this, "weekDayLabel2", $CalendarWeekRowWithLabel$$WeekDayLabel2_, this);
  addChild.call(this, "weekDayLabel3", $CalendarWeekRowWithLabel$$WeekDayLabel3_, this);
  addChild.call(this, "weekDayLabel4", $CalendarWeekRowWithLabel$$WeekDayLabel4_, this);
  addChild.call(this, "weekDayLabel5", $CalendarWeekRowWithLabel$$WeekDayLabel5_, this);
  addChild.call(this, "weekDayLabel6", $CalendarWeekRowWithLabel$$WeekDayLabel6_, this);
  addChild.call(this, "weekDayLabel7", $CalendarWeekRowWithLabel$$WeekDayLabel7_, this);
}
CalendarWeekRowWithLabel.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW"
    },
    height: 63.28767227799925,
    paddingLeft: 3,
    paddingRight: 3,
    width: 344.6575426075557
  }
};
const CalendarWeekRowWithLabel_ = FlexLayout(CalendarWeekRowWithLabel);

function $CalendarWeekRowWithLabel$$WeekDayLabel1(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel1.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel1_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel1);

function $CalendarWeekRowWithLabel$$WeekDayLabel2(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel2.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel2_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel2);

function $CalendarWeekRowWithLabel$$WeekDayLabel3(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel3.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel3_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel3);

function $CalendarWeekRowWithLabel$$WeekDayLabel4(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel4.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel4_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel4);

function $CalendarWeekRowWithLabel$$WeekDayLabel5(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel5.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel5_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel5);

function $CalendarWeekRowWithLabel$$WeekDayLabel6(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel6.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel6_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel6);

function $CalendarWeekRowWithLabel$$WeekDayLabel7(_super, pageInstance) {
  _super(this, {
    text: ""
  });
}
$CalendarWeekRowWithLabel$$WeekDayLabel7.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    font: {
      bold: true
    },
    height: null,
    left: 0,
    textAlignment: "MIDCENTER",
    top: 0,
    width: null
  }
};
const $CalendarWeekRowWithLabel$$WeekDayLabel7_ = CalendarDayLabel($CalendarWeekRowWithLabel$$WeekDayLabel7);

module && (module.exports = CalendarWeekRowWithLabel_);