/**
 * Your projects live here. Delete these three examples and write your own.
 *
 * The newest project goes at the TOP of the list — the home page shows
 * whatever is first.
 *
 * Each project needs:
 *   slug    – the bit that appears in the web address. lowercase-with-dashes, no spaces.
 *   title   – the name people read.
 *   summary – one sentence, shown on the cards.
 *   tags    – a list of short words, shown as little pills.
 *   body    – the longer description, shown on the project's own page.
 *   href    – OPTIONAL. A link to the live thing or the code. Delete the line if you have none.
 */

// `Project` is a TypeScript type: it is a checklist of what a project must have.
// The `?` on href means "this one is optional".
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  body: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: 'pixel-pet',
    title: 'Pixel Pet',
    summary: 'A little creature on a web page that gets happier when you feed it.',
    tags: ['JavaScript', 'Animation'],
    body:
      'Pixel Pet is a small animal drawn with CSS that lives on a web page. ' +
      'It has a hunger number that goes up over time, and a button that feeds it. ' +
      'I learned how to keep track of something that changes (the hunger) and how to ' +
      'make the picture react to it. The hardest part was making the timer stop when ' +
      'you leave the page.',
    href: 'https://github.com/yourname/pixel-pet',
  },
  {
    slug: 'homework-timer',
    title: 'Homework Timer',
    summary: 'A 25-minute study timer that rings and then makes you take a break.',
    tags: ['TypeScript', 'Timers'],
    body:
      'I kept losing track of time while revising, so I built a timer. ' +
      'You pick how long you want to work, it counts down, and then it will not let you ' +
      'start again until a five minute break is over. ' +
      'This project taught me about setInterval, and about why you have to clean it up ' +
      'afterwards or it keeps running forever in the background.',
  },
  {
    slug: 'bus-countdown',
    title: 'Bus Countdown',
    summary: 'A page that shows how many minutes until my bus leaves.',
    tags: ['HTML', 'CSS'],
    body:
      'My first ever project. It is a single page with the bus times typed into a list, ' +
      'and a bit of code that works out which one is next and how long I have to get ready. ' +
      'It is not clever, but I used it every morning for a month, which felt brilliant.',
    href: 'https://github.com/yourname/bus-countdown',
  },
];
