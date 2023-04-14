interface Command {
  name: string;
  url: string;
}

const defaultCommand = "g";
const commands: { [key: string]: Command } = {
  g: {
    name: "Google",
    url: "https://www.google.com/search?q=%s",
  },
  fb: {
    name: "Facebook",
    url: "https://facebook.com",
  },
  amz: {
    name: "Amazon",
    url: "https://www.amazon.com/s?k=%s",
  },
  yt: {
    name: "YouTube",
    url: "https://www.youtube.com/results?search_query=%s",
  },
  nix: {
    name: "Nix package search",
    url: "https://search.nixos.org/packages?channel=unstable&from=0&size=50&sort=relevance&type=packages&query=%s",
  },
  nixopt: {
    name: "NixOS options search",
    url: "https://search.nixos.org/options?channel=unstable&from=0&size=50&sort=relevance&type=packages&query=%s",
  },
  hm: {
    name: "Home Manager options search",
    url: "https://mipmip.github.io/home-manager-option-search/?%s",
  },
  sg: {
    name: "Sourcegraph",
    url: "https://sourcegraph.com/search?q=%s&patternType=standard&sm=1"
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/%s",
  },
  ggs: {
    name: "All GitHub code search (strings)",
    url: "https://github.com/search?q=%s&type=code",
  },
  ggr: {
    name: "All GitHub code search (regex)",
    url: "https://github.com/search?q=%2F%s%2F&type=code",
  },
  ggf: {
    name: "All GitHub code search (files)",
    url: "https://github.com/search?q=path%3A%s&type=code",
  },
  pggs: {
    name: "pbar1 GitHub code search (strings)",
    url: "https://github.com/search?q=%s+user%3Apbar1&type=code",
  },
  pggr: {
    name: "pbar1 GitHub code search (regex)",
    url: "https://github.com/search?q=%2F%s%2F+user%3Apbar1&type=code",
  },
  pggf: {
    name: "pbar1 GitHub code search (files)",
    url: "https://github.com/search?q=path%3A%s+user%3Apbar1&type=code",
  },
  bp: {
    name: "Bulbapedia search",
    url: "https://bulbapedia.bulbagarden.net/wiki/index.php?title=Special%3ASearch&search=%s&go=Go"
  },
};

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
