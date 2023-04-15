import { Event } from "./Event";

export function getEventData(): Event[] {
  return [
    "Taylor Swift",
    "A R Rahman",
    "Miley Cyrus",
    "The Backstreet Boys",
    "SZA",
  ].map((artist: string, index: number) => ({
    title: `Event ${index}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    artist,
  }));
}
