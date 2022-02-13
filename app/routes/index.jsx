import { Form, useActionData, json } from "remix";
import search from "~/utils/search";

export const action = async ({ request }) => {
  const form = await request.formData();

  return json(
    search(
      form.get("exclude"),
      form.get("include"),
      form.get("1"),
      form.get("2"),
      form.get("3"),
      form.get("4"),
      form.get("5")
    )
  );
};

export default function Index() {
  const result = useActionData([]);

  return (
    <div className="flex flex-col items-center min-h-screen justify-between gap-4 py-8 px-2">
      <h1 className="text-3xl font-bold">Wordle Solver</h1>
      <div className="flex-1 w-full flex flex-col items-center">
        <Form
          method="post"
          autoComplete="off"
          className="mt-16 flex flex-col gap-4 text-xl max-w-lg w-full"
        >
          <button type="reset" className="w-24 ml-auto text-sm">
            Clear All
          </button>
          <label htmlFor="include">Exclude</label>
          <input
            id="exclude"
            type="text"
            name="exclude"
            placeholder="EX: ABCDEFG"
            className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 max-w-11/12 w-full uppercase"
          />
          <label htmlFor="include">Include</label>
          <input
            id="include"
            type="text"
            name="include"
            placeholder="EX: HIJKLMN"
            className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 max-w-11/12 w-full uppercase"
          />

          <label htmlFor="green-squares">Green Squares</label>
          <div id="green-squares" className="flex gap-4">
            <input
              type="text"
              name="1"
              className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 w-full uppercase text-center"
            />
            <input
              type="text"
              name="2"
              className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 w-full uppercase text-center"
            />
            <input
              type="text"
              name="3"
              className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 w-full uppercase text-center"
            />
            <input
              type="text"
              name="4"
              className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 w-full uppercase text-center"
            />
            <input
              type="text"
              name="5"
              className="bg-zinc-900 border border-zinc-200 rounded px-4 py-2 w-full uppercase text-center"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full text-zinc-900 bg-zinc-200 rounded px-4 py-2"
          >
            Search
          </button>
        </Form>
        {result && (
          <>
            <h1 className="mt-16 italic text-2xl">Result</h1>
            {result?.length === 0 && (
              <p className="text-zinc-400 my-8 text-xl">No result found</p>
            )}
            <div className="flex flex-wrap my-8 max-w-xl text-l">
              {result?.map((word) => (
                <div className="rounded text-zinc-900 bg-zinc-200 px-4 py-2 m-2 capitalize">
                  {word}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <footer>
        Made with ♥️ by{" "}
        <a
          href="https://twitter.com/MarkSShenouda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mark Shenouda
        </a>
      </footer>
    </div>
  );
}
