'use client'; // useState and localStorage only work in the browser, so this page is a Client Component.

import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import Container from '@/components/Container';
import Button from '@/components/Button';

/**
 * 🛠 THE PLAYGROUND — a working to-do list, and the most useful page to read.
 * Everything an app does is here: it remembers things, it reacts to clicks,
 * and it saves your data so a refresh does not wipe it.
 */

// One to-do. `id` tells them apart, `done` flips when you click it.
type Todo = { id: number; text: string; done: boolean };

// The name our list is saved under in the browser. Any text would do.
const STORAGE_KEY = 'playground-todos';

export default function PlaygroundPage() {
  // STATE = things that change while you use the page.
  // Call the set... function and React redraws the page for you.
  const [todos, setTodos] = useState<Todo[]>([]); // the whole list
  const [text, setText] = useState(''); // what is typed in the box right now
  const [loaded, setLoaded] = useState(false); // have we looked for a saved list yet?

  // LOADING. This runs once, after the page has appeared in the browser.
  // It has to be in here: when the site is built into HTML files there is no
  // browser yet, so localStorage does not exist and reading it would crash.
  /* eslint-disable react-hooks/set-state-in-effect -- loading saved data on
     first paint is exactly what this effect is for. The rule warns because
     setting state inside an effect makes the page draw twice; here that is
     the point: once empty, then again with your saved list. */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    try {
      // JSON.parse turns the saved text back into a real list.
      if (saved) setTodos(JSON.parse(saved));
    } catch {
      // If the saved text was somehow damaged, start with an empty list
      // instead of showing a blank broken page.
    }
    setLoaded(true);
  }, []); // the empty [] means "only once"
  /* eslint-enable react-hooks/set-state-in-effect */

  // SAVING. This runs every time the list changes.
  // We wait until loading has finished, otherwise the empty starting list
  // would save over the one you had before.
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); // lists must be saved as text
  }, [todos, loaded]);

  // Add what is in the box to the end of the list.
  function addTodo() {
    if (text.trim() === '') return; // ignore an empty box
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
    setText(''); // empty the box, ready for the next one
  }

  // Tick or un-tick one to-do. We build a NEW list rather than changing the old
  // one, because React only notices a change when the list itself is new.
  function toggleTodo(id: number) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }

  // Remove one to-do: keep everything whose id is NOT this one.
  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Remove every finished one: keep the ones that are not done.
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  // Worked out fresh on every redraw, so it is never out of date.
  const left = todos.filter((todo) => !todo.done).length;

  return (
    <Container>
      <h1 className="text-3xl font-bold">Playground</h1>
      <p className="mt-4 opacity-70">
        A to-do list that remembers itself. Refresh the page and it is still here.
      </p>

      {/* The input and the add button. onSubmit fires on the button AND on Enter. */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // stop the browser reloading the page
          addTodo();
        }}
        className="mt-8 flex gap-3"
      >
        <input
          className="w-full rounded-xl border border-current/10 bg-transparent p-3 outline-none focus:border-brand"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you need to do?"
        />
        <Button type="submit">Add</Button>
      </form>

      {/* The list itself. */}
      <ul className="mt-6 grid gap-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 rounded-xl border border-current/10 p-5"
          >
            {/* Click the text to tick it off. line-through + opacity show it is done. */}
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`flex-1 text-left ${todo.done ? 'line-through opacity-40' : ''}`}
            >
              {todo.text}
            </button>

            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Delete ${todo.text}`}
              className="opacity-40 transition hover:text-brand hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p className="opacity-70">
          {left} {left === 1 ? 'thing' : 'things'} left to do
        </p>
        <Button variant="secondary" onClick={clearCompleted}>
          Clear completed
        </Button>
      </div>
    </Container>
  );
}
