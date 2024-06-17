export const subFlowMenu = [
  {
    type: "link",
    name: "DID-Link",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#1C2033" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#1C2033"><path fill="none" stroke="#1C2033" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m-1-4h2a4 4 0 0 1 0 8h-2M9 8H7a4 4 0 1 0 0 8h2"/></g></svg>',
    data: { phoneNumber: "" },
  },
  {
    type: "goToConditional",
    name: "Go To Conditional",
    icon: `     <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="25"
  height="25"
  viewBox="0 0 48 48"
>
  <circle cx="24" cy="24" r="20" fill="#03a9f4"></circle>
  <path
    fill="#fff"
    d="M18.684,26.139c0.083,0.084,0.109,0.141,0.022,0.281c-0.331,0.314-1.878,3.146-5.317,3.271 c-0.845,0.031-1.101-0.423-1.085-0.845c0.04-1.065,0.511-1.804,1.754-5.242l0.8-2.226c0.177-0.487,0.271-0.715,0.346-1.02 c0.037-0.153,0.045-0.215,0.047-0.328c0.004-0.197-0.227-0.226-0.422-0.078c-0.391,0.297-1.247,1.034-1.594,1.484 c-0.114,0.113-0.228,0.113-0.31,0.028l-0.281-0.285c-0.083-0.084-0.137-0.197-0.08-0.253c0.09-0.105,0.958-1.362,2.265-2.365 c0.8-0.615,1.717-1.186,2.862-1.186c0.873,0,1.231,0.451,1.222,1.015c-0.012,0.62-0.364,1.466-0.956,3.101l-1.698,4.285 c-0.192,0.521-0.311,0.881-0.383,1.145c-0.071,0.264-0.11,0.484,0.172,0.484c0.563,0,1.811-1.387,1.984-1.641 c0.058-0.084,0.171-0.084,0.226-0.028L18.684,26.139z M20.57,13.141C20.556,14.014,19.74,15,18.812,15 c-0.977,0-1.595-0.648-1.578-1.719c0.014-0.874,0.729-1.72,1.581-1.72C20.019,11.562,20.583,12.267,20.57,13.141z"
  ></path>
  <path
    fill="#fff"
    d="M23.578,17.76c0.453-1.4,0.655-3.299,2.953-5.807c0.689-0.762,2.318-1.931,4.094-1.931 c2.424,0,3.425,0.886,3.406,1.899c-0.012,0.705-0.683,1.566-1.5,1.566c-1.184,0-1.141-0.832-1.297-1.52 c-0.052-0.282-0.359-0.791-1.008-0.791c-1.859,0-2.927,3.573-3.711,6.588h2.245c0.169,0,0.224,0.084,0.192,0.254L28.8,18.724 c-0.031,0.197-0.09,0.282-0.315,0.282h-2.217c-0.66,2.311-1.607,7.586-2.674,10.544c-1.927,5.138-4.059,7.905-7.524,7.905 c-1.691,0-2.775-0.759-2.757-1.83c0.014-0.788,0.543-1.604,1.417-1.604c0.901,0,1.521,0.542,1.596,1.687 c0.022,0.282,0.217,0.479,0.612,0.479c1.381,0,2.489-2.044,3.762-7.115L23.25,19h-1.641c-0.142,0-0.224-0.113-0.192-0.254 l0.183-0.761c0.03-0.142,0.088-0.226,0.313-0.226H23.578z"
  ></path>
  <path
    fill="#fff"
    d="M30.299,27.891c-0.014,0.873-0.809,1.859-1.714,1.859c-0.953,0-1.554-0.648-1.538-1.719 c0.014-0.874,0.877-1.692,1.708-1.692C29.929,26.339,30.312,27.017,30.299,27.891z"
  ></path>
  <path
    fill="#fff"
    d="M35.127,27.891c-0.014,0.873-0.809,1.859-1.714,1.859c-0.953,0-1.554-0.648-1.538-1.719 c0.014-0.874,0.877-1.692,1.708-1.692C34.756,26.339,35.139,27.017,35.127,27.891z"
  ></path>
  <g>
    <path
      fill="#fff"
      d="M39.954,27.891c-0.014,0.873-0.809,1.859-1.714,1.859c-0.953,0-1.554-0.648-1.538-1.719 c0.014-0.874,0.877-1.692,1.708-1.692C39.584,26.339,39.967,27.017,39.954,27.891z"
    ></path>
  </g>
</svg>`,
    data: { name: "" },
  },
  {
    type: "goToDepartment",
    name: "Go To Department",
    icon: `    <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="25"
  height="25"
  viewBox="0 0 48 48"
>
  <circle cx="24" cy="24" r="20" fill="#ffca28"></circle>
  <path
    fill="#fff"
    d="M25,31v-3.436C25,25.901,21.669,25,20,25s-5,0.901-5,2.564V31H25z"
  ></path>
  <circle cx="20" cy="20" r="3" fill="#fff"></circle>
  <path
    fill="#fff"
    d="M33,27.56V31h-6v-3.44c0-0.93-0.36-1.69-0.92-2.3C26.78,25.09,27.47,25,28,25	C29.67,25,33,25.9,33,27.56z"
  ></path>
  <circle cx="28" cy="20" r="3" fill="#fff"></circle>
</svg>`,
    data: { name: "" },
  },
  {
    type: "goToMenu",
    name: "Go To Menu",
    icon: `              <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="25"
    height="25"
    viewBox="0 0 48 48"
  >
    <circle cx="24" cy="24" r="20" fill="#669df6"></circle>
    <path
      fill="#317be4"
      d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33	C37.97,18,42,22.03,42,27z"
    ></path>
    <rect width="1" height="2" x="29" y="15" fill="#fff"></rect>
    <path
      fill="#fff"
      d="M34,17v14c0,1.1-0.9,2-2,2l-1-1l-1,1h-3c-1.1,0-2-0.9-2-2V17c0-1.1,0.9-2,2-2v3c0,0.55,0.45,1,1,1h2	v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-6C33.1,15,34,15.9,34,17z"
    ></path>
    <path
      fill="#fff"
      d="M21,33h-5c-1.105,0-2-0.895-2-2V17c0-1.105,0.895-2,2-2h5c1.105,0,2,0.895,2,2v14	C23,32.105,22.105,33,21,33z"
    ></path>
    <path
      fill="#317be4"
      d="M20,29h-3c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h2v-2h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h3	c0.552,0,1,0.447,1,1v4c0,0.553-0.448,1-1,1h-2v2h2c0.552,0,1,0.447,1,1S20.552,29,20,29z"
    ></path>
    <path
      fill="#317be4"
      d="M32,30v3h-2v-2h-2c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1s-0.45,1-1,1h-2v2h2	C31.55,29,32,29.45,32,30z"
    ></path>
  </svg>`,
    data: { name: "" },
  },
];
export const menu = [
  {
    type: "answer",
    name: "Answer",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#7CC504" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#7CC504"><g id="evaPhoneCallFill0"><g id="evaPhoneCallFill1"><g id="evaPhoneCallFill2" fill="#7CC504"><path d="M13 8a3 3 0 0 1 3 3a1 1 0 0 0 2 0a5 5 0 0 0-5-5a1 1 0 0 0 0 2Z"/><path d="M13 4a7 7 0 0 1 7 7a1 1 0 0 0 2 0a9 9 0 0 0-9-9a1 1 0 0 0 0 2Zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a4.77 4.77 0 0 0-.06-.76a4.34 4.34 0 0 0-.19-.73Z"/></g></g></g></g></svg>',
    data: { seconds: "" },
  },
  {
    type: "busy",
    name: "Busy",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#E25113" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#E25113"><g id="evaPhoneMissedFill0"><g id="evaPhoneMissedFill1"><path id="evaPhoneMissedFill2" fill="#E25113" d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a4.77 4.77 0 0 0-.06-.76ZM15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73l.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73l-.73.73a1.05 1.05 0 0 0 0 1.47Z"/></g></g></g></svg>',
    data: {},
  },
  {
    type: "callback",
    name: "Callback Extension",
    icon: '<svg width="25px" height="25px" viewBox="0 0 48 48" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="#2196F3" d="M26.4 33.9s4-2.6 4.8-3c.8-.4 1.7-.6 2.2-.2c.8.5 7.5 4.9 8.1 5.3c.6.4.8 1.5.1 2.6c-.8 1.1-4.3 5.5-5.8 5.4c-1.5 0-8.4.4-20.3-11.4C3.6 20.7 4 13.8 4 12.3s4.3-5.1 5.4-5.8c1.1-.8 2.2-.5 2.6.1c.4.6 4.8 7.3 5.3 8.1c.3.5.2 1.4-.2 2.2c-.4.8-3 4.8-3 4.8s.7 2.8 5 7.2c4.4 4.3 7.3 5 7.3 5z"/><g fill="#3F51B5"><path d="M35 9H25v4h10c1.1 0 2 .9 2 2v10h4V15c0-3.3-2.7-6-6-6z"/><path d="m28 16l-6.7-5L28 6z"/></g></g></svg>',
    data: { phoneNumber: "" },
  },
  {
    type: "databaseForward",
    name: "Database Forward",
    icon: '<svg width="25px" height="25px" viewBox="0 0 16 16" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><g fill="#3A76F5"><path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z"/><path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"/><path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972c-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"/><path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972c-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"/></g></g></svg>',
    data: { name: "", callerId: "", isQualify: false },
  },
  {
    type: "directory",
    name: "Directory",
    icon: '<svg width="25px" height="25px" viewBox="0 0 36 36" fill="#E4AB00" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#E4AB00"><path fill="#E4AB00" d="M30 9H16.42l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2ZM6 11V7h6.49l2.72 4Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></g></svg>',
    data: { name: "", dialPlanContext: "", isExtension: false },
  },
  {
    type: "forward",
    name: "Forward Number",
    icon: '<svg width="25px" height="25px" viewBox="0 0 16 16" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="#3A76F5" d="m6.7 1.173l-.754-.138a2.266 2.266 0 0 0-2.063.71C2.623 3.117 1.996 5.26 2 8.174c.004 2.91.636 4.988 1.895 6.234c.533.528 1.324.72 2.075.505l.754-.216c.704-.202 1.175-.883 1.1-1.594l-.149-1.424A1.35 1.35 0 0 0 6.55 10.48l-1.604-.274A5.49 5.49 0 0 1 4.43 8.01c-.024-.787.103-1.508.382-2.162l1.714-.442a1.532 1.532 0 0 0 1.14-1.315l.144-1.432A1.354 1.354 0 0 0 6.7 1.173Zm5.154 2.973a.5.5 0 0 0-.708.708L13.293 7H8.5a.5.5 0 0 0 0 1h4.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3Z"/></g></svg>',
    data: { number: "", isQualify: false },
  },
  {
    type: "goToDepartmentClass",
    name: "Go To Department Class",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#d466ea" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#d466ea"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#d466ea" d="M12 3a3 3 0 0 0-1 5.83V11H8a3 3 0 0 0-3 3v1.17a3.001 3.001 0 1 0 2 0V14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.17a3.001 3.001 0 1 0 2 0V14a3 3 0 0 0-3-3h-3V8.83A3.001 3.001 0 0 0 12 3Z"/></g></g></svg>',
    data: { additional: "" },
  },
  {
    type: "goToExtension",
    name: "Go To Extension",
    icon: '<svg width="25px" height="25px" viewBox="0 0 48 48" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding: 2px" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="#009688" d="m39.2 8.4l-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L41 8.4c-.5-.5-1.3-.5-1.8 0zm-28 0l-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L13 8.4c-.5-.5-1.3-.5-1.8 0z"/><g fill="#2196F3"><path d="m25.3 18.6l5.4 5.4l-5.4 5.4z"/><path d="M16 22h11v4H16z"/></g></g></svg>',
    data: {
      number: "",
      ringtoneNumber: "",
      type: "e",
    },
  },
  {
    type: "goToQueue",
    name: "Go To Queue",
    icon: '<svg width="25px" height="25px" viewBox="0 0 36 36" fill="#8052F6" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#8052F6"><path fill="#8052F6" d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="#8052F6" d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z" class="clr-i-solid clr-i-solid-path-2"/><path fill="#8052F6" d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z" class="clr-i-solid clr-i-solid-path-3"/><path fill="#8052F6" d="M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44Z" class="clr-i-solid clr-i-solid-path-4"/><circle cx="17.87" cy="13.45" r="4.47" fill="#8052F6" class="clr-i-solid clr-i-solid-path-5"/><path fill="#8052F6" d="M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7Z" class="clr-i-solid clr-i-solid-path-6"/><path fill="none" d="M0 0h36v36H0z"/></g></svg>',
    data: { name: "", timeout: "", offMusic: false },
  },
  {
    type: "hangup",
    name: "Hangup",
    icon: '<svg width="25px" height="25px" viewBox="0 0 48 48" fill="#000000" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding: 2px" xmlns="http://www.w3.org/2000/svg"><g fill="black"><path fill="#47528b" d="m43.5 16.8l-2.3-2.3c-8.1-7.9-27.5-6.8-34.5 0l-2.3 2.3c-.6.6-.6 1.6 0 2.3L9 23.6c.6.6 1.7.6 2.3 0l5.1-4.9l-.4-5.3c1.6-1.6 14.4-1.6 16 0l-.3 5.5l4.9 4.7c.6.6 1.7.6 2.3 0l4.6-4.5c.7-.7.7-1.7 0-2.3z"/><g fill="#47528b"><path d="M24 40.5L16 31h16z"/><path d="M21 24h6v7.5h-6z"/></g></g></svg>',
    data: { type: "", isHandler: false },
  },
  {
    type: "menuRecord",
    name: "Menu Record",
    icon: '<svg width="25px" height="25px" viewBox="0 0 32 32" fill="#E8403E" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#E8403E"><path fill="#E8403E" d="M23 14v3a7 7 0 0 1-14 0v-3H7v3a9 9 0 0 0 8 8.94V28h-4v2h10v-2h-4v-2.06A9 9 0 0 0 25 17v-3Z"/><path fill="#E8403E" d="M16 22a5 5 0 0 0 5-5V7a5 5 0 0 0-10 0v10a5 5 0 0 0 5 5Z"/></g></svg>',
    data: { name: "" },
  },
  {
    type: "nameScreenRecord",
    name: "Name Screen Record",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#E8403E" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#E8403E"><path fill="#E4AB00" d="M19.125 15.125q-.275-.275-.288-.7t.263-.775q.775-.95 1.212-2.138T20.75 9q0-1.3-.438-2.475T19.1 4.4q-.275-.35-.275-.775t.3-.725q.35-.35.838-.35t.787.35q1.05 1.275 1.65 2.825T23 9q0 1.725-.6 3.275T20.75 15.1q-.3.35-.787.363t-.838-.338ZM15.9 11.9q-.275-.275-.313-.713t.213-.862q.175-.3.263-.637T16.15 9q0-.35-.087-.688t-.263-.637q-.25-.425-.213-.862T15.9 6.1q.35-.35.85-.337t.775.387q.425.625.675 1.338T18.45 9q0 .8-.25 1.513t-.675 1.337q-.275.375-.775.388t-.85-.338ZM9 13q-1.65 0-2.825-1.175T5 9q0-1.65 1.175-2.825T9 5q1.65 0 2.825 1.175T13 9q0 1.65-1.175 2.825T9 13Zm-7 8q-.425 0-.713-.288T1 20v-1.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9 14q1.925 0 3.525.45t2.875 1.1q.75.375 1.175 1.1T17 18.2V20q0 .425-.288.713T16 21H2Z"/></g></svg>',
    data: { param: "" },
  },
  {
    type: "playback",
    name: "Playback",
    icon: '<svg width="25px" height="25px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding: 2px" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="#00007f" d="M17.229 4a.9.9 0 0 0-.569.232l-7.6 6.32a1.158 1.158 0 0 1-.955.328H3.208A1.2 1.2 0 0 0 2 12.088v7.826a1.2 1.2 0 0 0 1.208 1.206H8.1a1.158 1.158 0 0 1 .955.328l7.6 6.32c.521.433 1.081.224 1.081-.289V4.522A.494.494 0 0 0 17.229 4ZM27 6.3l-1.791 1.793a14.708 14.708 0 0 1 0 15.844l1.785 1.776A17.19 17.19 0 0 0 27 6.3Zm-4.333 4.323L20.905 12.4a6.035 6.035 0 0 1 0 7.237l1.756 1.756a8.554 8.554 0 0 0 .01-10.769Z"/></g></svg>',
    data: {
      name: "",
      type: "p",
    },
  },
  {
    type: "privacy",
    name: "Privacy",
    icon: '<svg width="25px" height="25px" viewBox="0 0 20 20" fill="#d12323" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#d12323"><path fill="#d12323" d="M10 9.6c-.6 0-1 .4-1 1c0 .4.3.7.6.8l-.3 1.4h1.3l-.3-1.4c.4-.1.6-.4.6-.8c.1-.6-.3-1-.9-1zm.1-4.3c-.7 0-1.4.5-1.4 1.2V8h2.7V6.5c-.1-.7-.6-1.2-1.3-1.2zM10 2L3 5v3c.1 4.4 2.9 8.3 7 9.9c4.1-1.6 6.9-5.5 7-9.9V5l-7-3zm4 11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h.3V6.5C7.4 5.1 8.6 4 10 4c1.4 0 2.6 1.1 2.7 2.5V8h.3c.6 0 1 .4 1 1v4z"/></g></svg>',
    data: {},
  },
  {
    type: "repeatMenu",
    name: "Repeat Menu",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="#3A76F5" d="M17 17v-3q0-.425.288-.713T18 13q.425 0 .713.275t.287.7V18q0 .425-.288.713T18 19H6.85l.825.825q.3.3.313.725t-.288.725q-.3.3-.713.3T6.3 21.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7l2.575-2.575q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-.85.85H17ZM7 7v3q0 .425-.288.713T6 11q-.425 0-.713-.275t-.287-.7V6q0-.425.288-.713T6 5h11.15l-.825-.825q-.3-.3-.313-.725t.288-.725q.3-.3.713-.3t.687.275l2.6 2.6q.275.275.275.7t-.275.7l-2.575 2.575q-.3.3-.713.3t-.712-.3q-.3-.3-.3-.713t.3-.712l.85-.85H7Z"/></g></svg>',
    data: {},
  },
  {
    type: "returnToPreviousMenu",
    name: "Return To Previous Menu",
    icon: '<svg width="25px" height="25px" viewBox="0 0 256 256" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="#3A76F5" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-32 96a8 8 0 0 1-8 8H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 128H168v-24a8 8 0 0 1 16 0Z"/></g></svg>',
    data: {},
  },
  {
    type: "ringGroup",
    name: "Ring Group",
    icon: '<svg width="25px" height="25px" viewBox="0 0 48 48" fill="#6b3ce2" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#6b3ce2"><mask id="ipSCircularConnection0"><g fill="none" stroke="#fff" stroke-width="4"><path d="M13.5 39.37A16.927 16.927 0 0 0 24 43c3.963 0 7.61-1.356 10.5-3.63M19 9.747C12.051 11.882 7 18.351 7 26c0 1.925.32 3.775.91 5.5M29 9.747C35.949 11.882 41 18.351 41 26c0 1.925-.32 3.775-.91 5.5"/><path fill="#fff" stroke-linecap="round" stroke-linejoin="round" d="M43 36c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 43 36Zm-28 0c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 15 36ZM29 9c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 29 9Z"/></g></mask><path fill="#6b3ce2" d="M0 0h48v48H0z" mask="url(#ipSCircularConnection0)"/></g></svg>',
    data: {
      type: "rgo",
      timeout: "",
      exitContext: "",
      extensions: [{ number: "", ringtoneNumber: "" }],
    },
  },
  {
    type: "trunk",
    name: "SIP Trunk",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#2b3a82" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#2b3a82"><path fill="#2b3a82" d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3ZM12.5 8q-.2 0-.35-.15T12 7.5q0-.2.15-.35T12.5 7H14V6h-1.5q-.2 0-.35-.15T12 5.5v-2q0-.2.15-.35T12.5 3h2q.2 0 .35.15t.15.35q0 .2-.15.35T14.5 4H13v1h1.5q.2 0 .35.15t.15.35v2q0 .2-.15.35T14.5 8h-2Zm4 0q-.2 0-.35-.15T16 7.5v-4q0-.2.15-.35T16.5 3q.2 0 .35.15t.15.35v4q0 .2-.15.35T16.5 8Zm2 0q-.2 0-.35-.15T18 7.5v-4q0-.2.15-.35T18.5 3h2q.2 0 .35.15t.15.35v2q0 .2-.15.35T20.5 6H19v1.5q0 .2-.15.35T18.5 8Zm.5-3h1V4h-1v1Z"/></g></svg>',
    data: { sip: "", number: "" },
  },
  {
    type: "startRecord",
    name: "Start Record",
    icon: '<svg width="25px" height="25px" viewBox="0 0 26 26" fill="#E8403E" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#E8403E"><path fill="#E8403E" d="M18.813 2.031a.95.95 0 0 0-.75.969v19a.95.95 0 1 0 1.875 0V3a.95.95 0 0 0-1.032-.969a.95.95 0 0 0-.093 0zm-12 1a.95.95 0 0 0-.75.969v17a.95.95 0 1 0 1.875 0V4a.95.95 0 0 0-1.032-.969a.95.95 0 0 0-.093 0zm9 3a.95.95 0 0 0-.75.969v11a.95.95 0 1 0 1.874 0V7a.95.95 0 0 0-1.03-.969a.95.95 0 0 0-.095 0zm-12 1a.95.95 0 0 0-.75.969v9a.95.95 0 1 0 1.874 0V8a.95.95 0 0 0-1.03-.969a.95.95 0 0 0-.095 0zm6 1a.95.95 0 0 0-.75.969v7a.95.95 0 1 0 1.874 0V9a.95.95 0 0 0-1.03-.969a.95.95 0 0 0-.095 0zm12 0a.95.95 0 0 0-.75.969v7a.95.95 0 1 0 1.875 0V9a.95.95 0 0 0-1.032-.969a.95.95 0 0 0-.093 0zm-21 2a.95.95 0 0 0-.75.969v3a.95.95 0 1 0 1.875 0v-3a.95.95 0 0 0-1.032-.969a.95.95 0 0 0-.094 0zm12 0a.95.95 0 0 0-.75.969v3a.95.95 0 1 0 1.874 0v-3a.95.95 0 0 0-1.03-.969a.95.95 0 0 0-.095 0zm12 0a.95.95 0 0 0-.75.969v3a.95.95 0 1 0 1.875 0v-3a.95.95 0 0 0-1.032-.969a.95.95 0 0 0-.093 0z"/></g></svg>',
    data: {
      name: "",
    },
  },
  {
    type: "voiceMail",
    name: "VoiceMail",
    icon: '<svg width="25px" height="25px" viewBox="0 0 256 256" fill="#7CC504" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding: 2px" xmlns="http://www.w3.org/2000/svg"><g fill="#7CC504"><path fill="#7CC504" d="M196 68a60 60 0 0 0-48 96h-40a60 60 0 1 0-48 24h136a60 60 0 0 0 0-120ZM24 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36Zm172 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36Z"/></g></svg>',
    data: {
      voicemailBox: "",
      type: "v",
    },
  },
  {
    type: "wait",
    name: "Wait",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#2d3a7b" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#2d3a7b"><path fill="#2d3a7b" d="M6 2h12v6l-4 4l4 4v6H6v-6l4-4l-4-4V2m10 14.5l-4-4l-4 4V20h8v-3.5m-4-5l4-4V4H8v3.5l4 4M10 6h4v.75l-2 2l-2-2V6Z"/></g></svg>',
    data: { seconds: "" },
  },
  {
    type: "zap",
    name: "Zapateller",
    icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#e25113" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#e25113"><path fill="#e25113" d="M21.78 2.22a.75.75 0 0 1 0 1.06L18.56 6.5l3.22 3.22a.75.75 0 1 1-1.06 1.06L17.5 7.56l-3.22 3.22a.75.75 0 0 1-1.06-1.06l3.22-3.22l-3.22-3.22a.75.75 0 1 1 1.06-1.06l3.22 3.22l3.22-3.22a.75.75 0 0 1 1.06 0ZM9.368 3.312l.86 2.028c.375.883.167 1.922-.514 2.568L7.82 9.706c.117 1.076.478 2.135 1.084 3.177a8.678 8.678 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778c-2.539-.792-4.873-3.143-7.003-7.053c-2.133-3.916-2.885-7.24-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404l1.076-.344c1.008-.322 2.086.199 2.518 1.217Z"/></g></svg>',
    data: {},
  },
];
export const menuSet = [
  {
    type: "setCallerIDNumber",
    name: "Set Caller ID Number",
    icon: `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#28AE9B" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#28AE9B"><path fill="#28AE9B" d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1m3.85-4h1.65l1.5 2l-2 2c-1.3-1-2.27-2.39-2.72-4c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3 2.72-4l2 2l-1.5 2h-1.65c-.22.63-.35 1.3-.35 2s.13 1.37.35 2Z"/></g></svg>`,
    data: { number: "", isCell: false },
  },
  {
    type: "setCallerIDPostfix",
    name: "Set Caller ID Postfix",
    icon: `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#26AF74" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#26AF74"><path fill="#26AF74" d="m9.367 3.312l.86 2.027c.375.883.167 1.922-.514 2.568L7.82 9.705c.117 1.076.478 2.135 1.084 3.178a8.678 8.678 0 0 0 2.271 2.594l2.276-.759c.862-.287 1.801.043 2.33.82l1.232 1.81c.616.904.505 2.15-.258 2.917l-.818.82c-.814.818-1.976 1.114-3.052.779c-2.539-.792-4.873-3.144-7.003-7.054c-2.133-3.916-2.885-7.239-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404l1.076-.344c1.008-.322 2.086.199 2.518 1.218Zm7.782-1.31l.102-.006a.75.75 0 0 1 .743.648l.007.102V6h3.251a.75.75 0 0 1 .744.649l.006.102a.75.75 0 0 1-.648.743l-.102.007H18v3.248a.75.75 0 0 1-.648.743l-.101.007a.75.75 0 0 1-.744-.648l-.006-.102V7.5h-3.252a.75.75 0 0 1-.743-.647l-.007-.102a.75.75 0 0 1 .648-.743L13.249 6H16.5V2.745a.75.75 0 0 1 .649-.743l.102-.007l-.102.007Z"/></g></svg>`,
    data: { number: "", isCell: false },
  },
  {
    type: "setCallerIDPrefix",
    name: "Set Caller ID Prefix",
    icon: `<svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="#3A76F5" d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></g></svg>`,
    data: { number: "", name: "", type: "number", isCell: false },
  },

  {
    type: "class",
    name: "Set Class Name",
    icon: `<svg width="25px" height="25px" viewBox="0 0 20 20" fill="#2a40b2" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#2a40b2"><path fill="#2a40b2" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3v6.5a.5.5 0 0 1-.8.4L8.5 7.625L6.8 8.9a.5.5 0 0 1-.8-.4V2Zm4 0H7v5.5l1.2-.9a.5.5 0 0 1 .6 0l1.2.9V2Z"/></g></svg>`,
    data: { name: "" },
  },
  {
    type: "blf",
    name: "Set BLF",
    icon: `<svg width="25px" height="25px" viewBox="0 0 36 36" fill="#f2c540" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#f2c540"><path fill="#f2c540" d="M23.86 29.15H12.11a.8.8 0 1 0 0 1.6h11.75a.8.8 0 0 0 0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/><path fill="#f2c540" d="M22 32.15h-8a.8.8 0 1 0 0 1.6h8a.8.8 0 1 0 0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/><path fill="#f2c540" d="M22.5 6a7.47 7.47 0 0 1 .5-2.56a11 11 0 0 0-16 9.8a10.68 10.68 0 0 0 1 4.63a16.36 16.36 0 0 0 1.12 1.78a17 17 0 0 1 2 3.47a16.19 16.19 0 0 1 .59 4h5.69v-5.51l-2.86-3.13l3-3a.8.8 0 0 1 1.13 1.13l-1.89 1.89L19 21v6.17h5.3a16.19 16.19 0 0 1 .59-4a17 17 0 0 1 2-3.47A16.31 16.31 0 0 0 28 17.86a10.63 10.63 0 0 0 1-4.43A7.5 7.5 0 0 1 22.5 6Zm-4 6l-2.73 2.73a.8.8 0 1 1-1.13-1.13l2.73-2.73A.8.8 0 1 1 18.45 12Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/><circle cx="30" cy="6" r="5" fill="#f2c540" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/><path fill="none" d="M0 0h36v36H0z"/></g></svg>`,
    data: {
      name: "",
      type: "seton",
      specificValue: "",
      onValue: "",
      offValue: "",
    },
  },

  {
    type: "language",
    name: "Set Language",
    icon: `<svg width="25px" height="25px" viewBox="0 0 36 36" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="#3A76F5" d="m11 16.5l-1 3.1h2l-1-3.1z" class="clr-i-solid clr-i-solid-path-1"/><path fill="#3A76F5" d="M30.3 3h-16v5h4v2h-13c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1h6.7v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM13.1 22.9l-.5-1.6H9.5l-.6 1.6H6.5L9.8 14h2.4l3.3 8.9h-2.4zM28.3 15v2c-1.3 0-2.7-.4-3.9-1c-1.2.6-2.6.9-4 1l-.1-2c.7 0 1.4-.1 2.1-.3c-.9-.9-1.5-2-1.8-3.2h2.1c.3.9.9 1.6 1.6 2.2c1.1-.9 1.8-2.2 1.9-3.7h-6V8h3V6h2v2h3.3l.1 1c.1 2.1-.7 4.2-2.2 5.7c.7.2 1.3.3 1.9.3z" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></g></svg>`,
    data: { language: "" },
  },
  {
    type: "ringtone",
    name: "Set Ringtone",
    icon: `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="#f4d125" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle;padding:2px" xmlns="http://www.w3.org/2000/svg"><g fill="#f4d125"><path fill="#f4d125" d="m5.705 3.71l-1.41-1.42C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71zm13.999-1.42l-1.408 1.42C21 6.396 21 8.009 21 11l2-.063c0-3.002 0-5.374-3.296-8.647zM12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"/></g></svg>`,
    data: { name: "" },
  },
];
