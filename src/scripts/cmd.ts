import { Command, defaultCommand } from "../data/command";
import { get } from "idb-keyval";

const queryParams = new URLSearchParams(window.location.search);
const queryParamQ = queryParams.get("q");

if (queryParamQ) {
  // Trim leading and trailing whitespace then split on any contiguous
  // whitespace character
  const [commandName, ...args] = queryParamQ.trim().split(/\s+/);
  const arg = args.join(" ");

  // Fallback to default command if the given command does not resole. Rejoin
  // the command with args and search using the default command
  // FIXME: Assumes defaultCommand has a searchUrl
  let command: Command;
  let replaceArg: string;
  command = <Command>await get(commandName);
  if (command !== undefined) {
    replaceArg = arg;
  } else {
    command = <Command>await get(defaultCommand);
    replaceArg = commandName + " " + arg;
  }

  const commandUrl = command.url.replace("%s", replaceArg);

  // Redirect to the resolved command URL
  window.location.replace(commandUrl);
} else {
  // FIXME: no query param "q", should be 404
}
