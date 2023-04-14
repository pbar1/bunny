import { Command, commands, defaultCommand } from "../components/command";

const queryParams = new URLSearchParams(window.location.search);
const queryParamQ = queryParams.get("q");

if (queryParamQ) {
  // Trim leading and trailing whitespace then split on any contiguous
  // whitespace character
  const [command, ...args] = queryParamQ.trim().split(/\s+/);
  const arg = args.join(" ");

  let commandUrl: string;
  if (command in commands) {
    commandUrl = commands[command].url.replace("%s", arg);
  } else {
    // Fallback to default command if the given command does not resole. Rejoin
    // the command with args and search using the default command
    // FIXME: Assumes defaultCommand has a searchUrl
    commandUrl = commands[defaultCommand].url.replace("%s", command + " " + arg);
  }

  // Redirect to the resolved command URL
  window.location.replace(commandUrl);
} else {
  // TODO: no query param "q", should be 404
}
