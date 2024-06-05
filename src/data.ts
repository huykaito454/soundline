import { v4 as uuidv4 } from "uuid";
export const phoneNumberData = [
  {
    id: uuidv4(),
    type: "phoneNumber",
    position: { x: 120, y: 40 },
    data: {
      phoneNumber: "4259475220",
    },
  },
];
export const conditionalData = [
  {
    id: uuidv4(),
    type: "conditional",
    position: { x: 120, y: 40 },
    data: {
      name: "auto",
      lineLimit: "0",
      lineGroup: "0",
    },
  },
];
export const departmentData = [
  {
    id: uuidv4(),
    type: "department",
    position: { x: 120, y: 40 },
    data: {
      ext: "300",
      name: "auto",
      hours: "9:00-17:00,mon-fri,*,*/o",
      vmBox: "700",
      greeting: "greeting",
      greetingAfterHours: "greetingAfterHours",
    },
  },
];
export const menuData = [
  {
    id: uuidv4(),
    type: "menu",
    position: { x: 120, y: 40 },
    data: {
      name: "auto",
      timeout: "3",
      maxDigits: "3",
      msgFile: "greeting",
    },
  },
];
