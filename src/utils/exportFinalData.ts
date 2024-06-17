export const getDataFlow = (nodes: any, edges: any, type = "phone-number") => {
  let finalData: any = { source: "", busy: "" };
  let typeRules: any = ["source", "busy", "close", "down", "menu-source"];
  try {
    typeRules.forEach((rule: any) => {
      if (rule != "menu-source") {
        let firstNote = edges.find(
          (x: any) => x.source == "0" && x.sourceHandle == rule
        );
        if (firstNote) {
          let allEdgesValid = getEdgesValid(firstNote, [firstNote], edges);
          finalData[rule] = getCommand(allEdgesValid, nodes, type);
          finalData[rule] = finalData[rule].slice(0, -1);
        }
      } else {
        finalData[rule] = getCommand(edges, nodes, type);
        finalData[rule] = finalData[rule].slice(0, -1);
      }
    });

    return finalData;
  } catch (error) {
    return finalData;
  }
};
const getNodeById = (nodes: any, id: any) => {
  try {
    const node = nodes.find((x: any) => x.id == id);
    return node;
  } catch (error) {
    return null;
  }
};
const getEdgesValid: any = (edge: any, allEdges: any, edges: any) => {
  if (edge == null) {
    return allEdges;
  } else {
    let edgeValid = edges.find((x: any) => {
      return x.source == edge.target;
    });
    if (edgeValid) {
      allEdges.push(edgeValid);
    }
    return getEdgesValid(edgeValid, allEdges, edges);
  }
};
const getCommand = (edges: any, nodes: any, type = "phone-number") => {
  let finalData = "";
  try {
    edges.forEach((edge: any) => {
      const node = getNodeById(nodes, edge.target);
      if (node) {
        //SubFlows
        if (node.type == "link") {
          finalData = finalData + getLink(node.data, edge, type);
        }
        if (node.type == "goToConditional") {
          finalData = finalData + getConditional(node.data, edge, type);
        }
        if (node.type == "goToDepartment") {
          finalData = finalData + getDepartment(node.data, edge, type);
        }
        if (node.type == "goToMenu") {
          finalData = finalData + getMenu(node.data, edge, type);
        }
        //Set
        if (node.type == "setCallerIDNumber") {
          finalData = finalData + getCallerIDNumber(node.data, edge, type);
        }
        if (node.type == "setCallerIDPostfix") {
          finalData = finalData + getCallerIDPostfix(node.data, edge, type);
        }
        if (node.type == "setCallerIDPrefix") {
          finalData = finalData + getCallerIDPrefix(node.data, edge, type);
        }
        if (node.type == "class") {
          finalData = finalData + getClass(node.data, edge, type);
        }
        if (node.type == "blf") {
          finalData = finalData + getBLF(node.data, edge, type);
        }
        if (node.type == "language") {
          finalData = finalData + getLanguage(node.data, edge, type);
        }
        if (node.type == "ringtone") {
          finalData = finalData + getRingtone(node.data, edge, type);
        }
        //Actions
        if (node.type == "answer") {
          finalData = finalData + getAnswer(node.data, edge, type);
        }
        if (node.type == "busy") {
          finalData = finalData + getBusy(node.data, edge, type);
        }
        if (node.type == "callback") {
          finalData = finalData + getCallBack(node.data, edge, type);
        }
        if (node.type == "databaseForward") {
          finalData = finalData + getDatabaseForward(node.data, edge, type);
        }
        if (node.type == "directory") {
          finalData = finalData + getDirectory(node.data, edge, type);
        }
        if (node.type == "forward") {
          finalData = finalData + getForward(node.data, edge, type);
        }
        if (node.type == "goToDepartmentClass") {
          finalData = finalData + getDepartmentClass(node.data, edge, type);
        }
        if (node.type == "goToExtension") {
          finalData = finalData + getExtension(node.data, edge, type);
        }
        if (node.type == "goToQueue") {
          finalData = finalData + getQueue(node.data, edge, type);
        }
        if (node.type == "hangup") {
          finalData = finalData + getHangup(node.data, edge, type);
        }
        if (node.type == "menuRecord") {
          finalData = finalData + getMenuRecord(node.data, edge, type);
        }
        if (node.type == "nameScreenRecord") {
          finalData = finalData + getNameScreenRecord(node.data, edge, type);
        }
        if (node.type == "playback") {
          finalData = finalData + getPlayback(node.data, edge, type);
        }
        if (node.type == "privacy") {
          finalData = finalData + getPrivacy(node.data, edge, type);
        }
        if (node.type == "repeatMenu") {
          finalData = finalData + getRepeatMenu(node.data, edge, type);
        }
        if (node.type == "returnToPreviousMenu") {
          finalData =
            finalData + getReturnToPreviousMenu(node.data, edge, type);
        }
        if (node.type == "ringGroup") {
          finalData = finalData + getRingGroup(node.data, edge, type);
        }
        if (node.type == "trunk") {
          finalData = finalData + getTrunk(node.data, edge, type);
        }
        if (node.type == "startRecord") {
          finalData = finalData + getStartRecord(node.data, edge, type);
        }
        if (node.type == "voiceMail") {
          finalData = finalData + getVoiceMail(node.data, edge, type);
        }
        if (node.type == "wait") {
          finalData = finalData + getWait(node.data, edge, type);
        }
        if (node.type == "zap") {
          finalData = finalData + getZap(node.data, edge, type);
        }
      }
    });
    return finalData;
  } catch (error) {
    return finalData;
  }
};

const getLink = (data: any, edge: any, type: any) => {
  let command = "link";
  try {
    if (data && data?.phoneNumber && data?.phoneNumber?.trim()) {
      command = command + ":" + data?.phoneNumber?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getConditional = (data: any, edge: any, type: any) => {
  let command = "c";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getDepartment = (data: any, edge: any, type: any) => {
  let command = "d";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getMenu = (data: any, edge: any, type: any) => {
  let command = "";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};

const getCallerIDNumber = (data: any, edge: any, type: any) => {
  let command = "cn";
  try {
    command = data && data.isCell ? "cncell " : "cn";
    if (data && data?.number && data?.number?.trim()) {
      command = command + ":" + data?.number?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getCallerIDPostfix = (data: any, edge: any, type: any) => {
  let command = "pn";
  try {
    command = data && data.isCell ? "pncell" : "pn";
    if (data && data?.number && data?.number?.trim()) {
      command = command + ":" + data?.number?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getCallerIDPrefix = (data: any, edge: any, type: any) => {
  let command = "pre";
  try {
    command = data && data.type == "number" ? "pren" : "pre";
    const typeCommand = data && data.isCell ? "cell" : "";
    command = command + typeCommand;
    if (data && data.type == "number" && data?.number && data?.number?.trim()) {
      command = command + ":" + data?.number?.trim();
    }
    if (data && data.type == "name" && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getClass = (data: any, edge: any, type: any) => {
  let command = "class";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getBLF = (data: any, edge: any, type: any) => {
  let command = data.type;
  try {
    if (data.type != "tog") {
      if (data && data?.name && data?.name?.trim()) {
        command = command + ":" + data?.name?.trim();
        if (data && data?.specificValue && data?.specificValue?.trim()) {
          command = command + "," + data?.specificValue?.trim();
        }
      }
    }
    if (data.type == "tog") {
      if (data && data?.name && data?.name?.trim()) {
        command = command + ":" + data?.name?.trim();
        if (data && data?.onValue && data?.onValue?.trim()) {
          command = command + "," + data?.onValue?.trim();
        }
        if (data && data?.offValue && data?.offValue?.trim()) {
          command = command + "," + data?.offValue?.trim();
        }
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getLanguage = (data: any, edge: any, type: any) => {
  let command = "lang";
  try {
    if (data && data?.language && data?.language?.trim()) {
      command = command + ":" + data?.language?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getRingtone = (data: any, edge: any, type: any) => {
  let command = "tone";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};

const getAnswer = (data: any, edge: any, type: any) => {
  let command = "a";
  try {
    if (data && data?.seconds && data?.seconds?.trim()) {
      command = command + ":" + data?.seconds?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getBusy = (data: any, edge: any, type: any) => {
  let command = "b";
  try {
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getCallBack = (data: any, edge: any, type: any) => {
  let command = "rb";
  try {
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getDatabaseForward = (data: any, edge: any, type: any) => {
  let command = "dbf";
  try {
    const typeCommand = data && data.isQualify ? "q" : "nq";
    command = command + typeCommand;
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
      if (data && data?.callerId && data?.callerId?.trim()) {
        command = command + "," + data?.callerId?.trim();
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getDirectory = (data: any, edge: any, type: any) => {
  let command = "dir";
  try {
    if (data && data.isExtension) {
      command = "dirne";
    }
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
      if (data && data?.dialPlanContext && data?.dialPlanContext?.trim()) {
        command = command + "," + data?.dialPlanContext?.trim();
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getForward = (data: any, edge: any, type: any) => {
  let command = "f";
  try {
    const typeCommand = data && data.isQualify ? "q" : "nq";
    command = command + typeCommand;
    if (data && data?.number && data?.number?.trim()) {
      command = command + ":" + data?.number?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getDepartmentClass = (data: any, edge: any, type: any) => {
  let command = "dc";
  try {
    if (data && data?.additional && data?.additional?.trim()) {
      command = command + ":" + data?.additional?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getExtension = (data: any, edge: any, type: any) => {
  let command = data.type;
  try {
    if (data && data?.number && data?.number?.trim()) {
      command = command + ":" + data?.number?.trim();
      if (data && data?.ringtoneNumber && data?.ringtoneNumber?.trim()) {
        command = command + "." + data?.ringtoneNumber?.trim();
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getQueue = (data: any, edge: any, type: any) => {
  let command = "q";
  try {
    command = data && data.offMusic ? "qr" : "q";
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
      if (data && data?.timeout && data?.timeout?.trim()) {
        command = command + "," + data?.timeout?.trim();
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getHangup = (data: any, edge: any, type: any) => {
  let command = "h";
  try {
    command = data && data.isHandler ? "hh" : "h";
    if (data && data?.isHandler && data?.type && data?.type?.trim()) {
      command = command + ":" + data?.type?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getMenuRecord = (data: any, edge: any, type: any) => {
  let command = "mr";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getNameScreenRecord = (data: any, edge: any, type: any) => {
  let command = "ns";
  try {
    if (data && data?.param && data?.param?.trim()) {
      command = command + ":" + data?.param?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getPlayback = (data: any, edge: any, type: any) => {
  let command = data.type;
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getPrivacy = (data: any, edge: any, type: any) => {
  let command = "privacy";
  try {
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getRepeatMenu = (data: any, edge: any, type: any) => {
  let command = "rm";
  try {
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getReturnToPreviousMenu = (data: any, edge: any, type: any) => {
  let command = "r";
  try {
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getRingGroup = (data: any, edge: any, type: any) => {
  let command = data.type;
  let extensionValid: any = [];
  try {
    if (data && data.extensions && data.extensions.length > 0) {
      data.extensions.forEach((extension: any) => {
        if (extension?.number && extension?.number?.trim()) {
          let ext = extension?.number?.trim();
          if (extension?.ringtoneNumber && extension?.ringtoneNumber?.trim()) {
            ext = ext + "." + extension?.ringtoneNumber;
          }
          extensionValid.push(ext);
        }
      });
    }
    if (extensionValid.length > 0) {
      command = command + ":" + extensionValid.toString();
      if (data && data?.timeout && data?.timeout?.trim()) {
        command = command + ";" + data?.timeout?.trim();
      }
      if (data && data?.exitContext && data?.exitContext?.trim()) {
        command = command + ";" + data?.exitContext?.trim();
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getTrunk = (data: any, edge: any, type: any) => {
  let command = "trunk";
  try {
    if (data && data?.sip && data?.sip?.trim()) {
      command = command + ":" + data?.sip?.trim();
      if (data && data?.number && data?.number?.trim()) {
        command = command + "," + data?.number?.trim();
      }
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getStartRecord = (data: any, edge: any, type: any) => {
  let command = "rec";
  try {
    if (data && data?.name && data?.name?.trim()) {
      command = command + ":" + data?.name?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getVoiceMail = (data: any, edge: any, type: any) => {
  let command = data.type;
  try {
    if (data && data?.voicemailBox && data?.voicemailBox?.trim()) {
      command = command + ":" + data?.voicemailBox?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getWait = (data: any, edge: any, type: any) => {
  let command = "wait";
  try {
    if (data && data?.seconds && data?.seconds?.trim()) {
      command = command + ":" + data?.seconds?.trim();
    }
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const getZap = (data: any, edge: any, type: any) => {
  let command = "zap";
  try {
    command = returnCommandFormat(command, edge, type);
    return command;
  } catch (error) {
    return command;
  }
};
const returnCommandFormat = (command: any, edge: any, type: any) => {
  try {
    if (edge.type == "custom" && edge.data.condition) {
      command = edge.data.condition + "!" + edge.data.value + "/" + command;
    }
    if (edge.type == "menu" && edge.data.value) {
      command = edge.data.value + "/" + command;
    }
    if (type.includes("/phone-number/")) {
      command = "1!/" + command;
    }
    command = command + "|";
    return command;
  } catch (error) {
    return command;
  }
};
