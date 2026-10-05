'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { profile } from '@/lib/profile';

/**
 * The contact form.
 *
 * ⚠️ HONEST EXPLANATION OF HOW THIS WORKS
 * A normal contact form sends your message to a *server*, which emails it on.
 * This site has no server — it is only HTML files sitting on a free host — so
 * there is nowhere to send it to. Instead this form checks what you typed and
 * then opens your own email app with the message already filled in, and you
 * press send. That is a real technique, and it costs nothing.
 *
 * If you later want messages to arrive without the visitor pressing send in
 * their email app, you need something that receives them for you. The usual
 * options are a free form service (Formspree, Netlify Forms, Tally) where you
 * point the form at their web address, or your own small backend. Both mean
 * signing up for something, which is why this template does not do it.
 *
 * 'use client' at the top of this file is important: useState only works in a
 * Client Component. Leave it off and you get an error.
 */
export default function ContactPage() {
  // One piece of state per box in the form — this is what the visitor typed.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // The problems we found, if any. Starts out empty.
  const [errors, setErrors] = useState<string[]>([]);

  // Flips to true once the email app has been opened, so we can say thank you.
  const [sent, setSent] = useState(false);

  // Runs when the visitor presses Send.
  function handleSubmit(event: React.FormEvent) {
    // Stops the browser doing its own old-fashioned form submit (which reloads the page).
    event.preventDefault();

    // Check the three boxes and collect anything that is wrong.
    const found: string[] = [];
    if (name.trim() === '') found.push('Please tell me your name.');
    if (!email.includes('@')) found.push('That email address does not look right.');
    if (message.trim().length < 10) found.push('Please write a bit more (at least 10 letters).');

    setErrors(found);

    // Something was wrong? Stop here and let the visitor fix it.
    if (found.length > 0) return;

    // All good. Build a mailto: link and open it. encodeURIComponent makes the
    // text safe to put inside a web address (spaces, line breaks and so on).
    const subject = encodeURIComponent(`Website message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  // Shared classes for the three input boxes, so they match.
  const field =
    'w-full rounded-xl border border-current/10 bg-transparent p-3 outline-none focus:border-brand';

  return (
    <Container>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 opacity-70">
        Fill this in and your email app will open with the message ready to send.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm opacity-70">Your name</span>
          {/* value + onChange is how a React input works: the state is the truth,
              and every keypress updates it. */}
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm opacity-70">Your email</span>
          <input
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm opacity-70">Message</span>
          <textarea
            className={field}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello!"
          />
        </label>

        {/* The errors, only shown when there are some. */}
        {errors.length > 0 && (
          <ul className="grid gap-1 text-sm text-brand">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit">
            <Mail size={16} /> Send message
          </Button>

          {/* The success state. */}
          {sent && <p className="text-sm opacity-70">Thanks! Check your email app.</p>}
        </div>
      </form>

      <p className="mt-10 text-sm opacity-70">
        Or email me directly at{' '}
        <a href={`mailto:${profile.email}`} className="text-brand hover:underline">
          {profile.email}
        </a>
        .
      </p>
    </Container>
  );
}
