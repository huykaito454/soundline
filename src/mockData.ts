export const customerNumbers = [
  {
    id: 1,
    phoneNumber: 4259475220,
    conditionalName:
      "1!/e:700.5|1!/c:conditional1|1!/p:intro|1!/v:300|1!/rec:in",
  },
  { id: 2, phoneNumber: 4259475221, conditionalName: "" },
];
export const conditional = [
  {
    id: 1,
    name: "conditional1",
    rules:
      "t!9:00-17:00,mon-fri,*,*/e:700.5|clid!2069026370/c:conditional1|1!/p:intro|1!/v:300|1!/rec:in",
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
    ext: "",
    prefix: "",
    hours: "7:00-23:00,mon-fri,*,*",
    vmbox: "300",
    custGreeting: "",
    custGreetAfterHours: "",
    openRules: "",
    closedRules: "",
    downRules: "",
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
    menu: "",
    menuTimeout: "",
    maxDigits: "",
    msg_file: "",
  },
];
