import { set } from "idb-keyval";
import { commands } from "../data/command";

// TODO: Use setMany
// FIXME: Error handling
for (const [k, v] of Object.entries(commands)) {
  set(k, v);
}
