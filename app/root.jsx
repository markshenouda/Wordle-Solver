import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import tailwind from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: tailwind }];
}

export function meta() {
  return { title: "Wordle Solver by Mark Shenouda" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="twitter:title" content="Wordle Solver" />
        <meta
          name="twitter:description"
          content="A word search engine that solves wordle puzzles. Created by Mark Shenouda."
        />
        <meta name="twitter:image" content="/screenshot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-900 text-zinc-200">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
