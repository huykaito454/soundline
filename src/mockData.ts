export const customerNumbers = [
  {
    id: 1,
    phoneNumber: 4259475220,
    conditionalName: "1!/seton:salon_nm,closed",
  },
  { id: 2, phoneNumber: 4259475221, conditionalName: "" },
];
export const conditional = [
  {
    id: 1,
    name: "conditional1",
    rules:
      "t!9:00-17:00,mon-fri,*,*/e:701.5|clid!2069026370/c:conditional1|t!10:00-17:00,mon-fri,*,*/p:intro|1!/v:300|1!/rec:in",
    busyRules: "1!/v:700|/d:default",
    lineLimit: "0",
    lineGroup: "0",
  },
  {
    id: 2,
    name: "conditional2",
    rules: "",
    busyRules: "",
    lineLimit: "0",
    lineGroup: "0",
  },
];
export const department = [
  {
    id: 1,
    name: "department1",
    ext: "300",
    prefix: "D",
    hours: "7:00-23:00,mon-fri,*,*",
    vmbox: "300",
    custGreeting: "greeting",
    custGreetAfterHours: "greetingAfterHours",
    openRules: "p:info|rec:in",
    closedRules: "p:info2|rec:in",
    downRules: "p:info3|rec:in|v:300",
  },
  {
    id: 2,
    name: "department2",
    ext: "",
    prefix: "",
    hours: "7:00-23:00,mon-fri,*,*",
    vmbox: "700",
    custGreeting: "",
    custGreetAfterHours: "",
    openRules: "",
    closedRules: "",
    downRules: "",
  },
];
export const menu = [
  {
    id: 1,
    name: "menu1",
    menu: "0/vu:700|1/p:info|2/d:department ",
    menuTimeout: "3",
    maxDigits: "3",
    msgFile: "intro",
  },
];
