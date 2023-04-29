export interface Command {
  name: string;
  url: string;
}

export const defaultCommand = "g";

export const commands: { [key: string]: Command } = {
  g: {
    name: "Google",
    url: "https://www.google.com/search?q=%s",
  },
  fb: {
    name: "Facebook",
    url: "https://facebook.com",
  },
  wa: {
    name: "WhatsApp",
    url: "https://web.whatsapp.com",
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
  nixver: {
    name: "Nix package version search",
    url: "https://lazamar.co.uk/nix-versions/?channel=nixpkgs-unstable&package=%s",
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
  bgs: {
    name: "All GitHub code search (strings)",
    url: "https://github.com/search?q=%s&type=code",
  },
  bgr: {
    name: "All GitHub code search (regex)",
    url: "https://github.com/search?q=%2F%s%2F&type=code",
  },
  bgf: {
    name: "All GitHub code search (files)",
    url: "https://github.com/search?q=path%3A%s&type=code",
  },
  pbgs: {
    name: "pbar1 GitHub code search (strings)",
    url: "https://github.com/search?q=%s+user%3Apbar1&type=code",
  },
  pbgr: {
    name: "pbar1 GitHub code search (regex)",
    url: "https://github.com/search?q=%2F%s%2F+user%3Apbar1&type=code",
  },
  pbgf: {
    name: "pbar1 GitHub code search (files)",
    url: "https://github.com/search?q=path%3A%s+user%3Apbar1&type=code",
  },
  nbgs: {
    name: "Nixpkgs GitHub code search (strings)",
    url: "https://github.com/search?q=%s+repo%3ANixOS%2Fnixpkgs&type=code",
  },
  nbgr: {
    name: "Nixpkgs GitHub code search (regex)",
    url: "https://github.com/search?q=%2F%s%2F+repo%3ANixOS%2Fnixpkgs&type=code",
  },
  nbgf: {
    name: "Nixpkgs GitHub code search (files)",
    url: "https://github.com/search?q=path%3A%s+repo%3ANixOS%2Fnixpkgs&type=code",
  },
  bp: {
    name: "Bulbapedia search",
    url: "https://bulbapedia.bulbagarden.net/wiki/index.php?title=Special%3ASearch&search=%s&go=Go"
  },
  qbit: {
    name: "Qbittorrent",
    url: "https://qbittorrent.xnauts.net",
  },
  ods: {
    name: "Grafana",
    url: "https://grafana.xnauts.net",
  },
  quip: {
    name: "Quip",
    url: "https://quip.com/all",
  },
  rustdoc: {
    name: "Docs.rs crate search",
    url: "https://docs.rs/releases/search?query=%s",
  },
  rs: {
    name: "Lib.rs crate search",
    url: "https://lib.rs/search?q=%s",
  },
  r: {
    name: "Reddit",
    url: "https://www.reddit.com/search/?q=%s",
  },
  maps: {
    name: "Google Maps",
    url: "https://www.google.com/maps",
  },
  cal: {
    name: "Google Calender",
    url: "https://calendar.google.com/calendar/u/0/r"
  },
  drive: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/my-drive"
  },
  ah: {
    name: "Artifact Hub",
    url: "https://artifacthub.io/packages/search?ts_query_web=%s"
  },
  router: {
    name: "Router",
    url: "https://192.168.0.1",
  },
  modem: {
    name: "Modem",
    url: "http://192.168.100.1",
  },
  sonarr: {
    name: "Sonarr",
    url: "https://sonarr.xnauts.net",
  },
  radarr: {
    name: "Radarr",
    url: "https://radarr.xnauts.net",
  },
  readarr: {
    name: "Readarr",
    url: "https://readarr.xnauts.net",
  },
  plex: {
    name: "Plex",
    url: "https://app.plex.tv/desktop",
  },
};
