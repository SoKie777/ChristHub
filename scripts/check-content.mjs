// Checks the book content before a build: unique ids, valid answers, and
// fill-in sentences that read well once completed. `npm run check:content`
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
const { book } = await server.ssrLoadModule("/src/data/book.ts");
await server.close();

const ids = new Set();
const problems = [];
let exercises = 0;

for (const chapter of book.chapters) {
  for (const portion of chapter.portions) {
    for (const id of [portion.id, ...portion.exercises.map((e) => e.id)]) {
      if (ids.has(id)) problems.push(`identifiant en double : ${id}`);
      ids.add(id);
    }
    if (portion.mirror.choices.length < 2) problems.push(`${portion.id} : miroir sans choix`);
    for (const e of portion.exercises) {
      exercises++;
      if ((e.kind === "choice" || e.kind === "fill") && !(e.answer >= 0 && e.answer < e.options.length))
        problems.push(`${e.id} : réponse hors des options`);
      if (e.kind === "order" && e.items.length < 2) problems.push(`${e.id} : ordre trop court`);
      if (e.kind === "match" && e.pairs.length < 2) problems.push(`${e.id} : paires trop peu nombreuses`);
      if (e.kind === "fill") {
        const sentence = `${e.before} ${e.options[e.answer]} ${e.after}`;
        // An apostrophe followed by a space ("d' être") reads badly once the blank is filled.
        if (/['’] /.test(sentence)) problems.push(`${e.id} : « ${sentence} »`);
      }
    }
  }
}

for (const c of book.chapters)
  console.log(`Chapitre ${c.number} : ${c.portions.length} portions, ${c.portions.reduce((n, p) => n + p.exercises.length, 0)} exercices`);
console.log(`Total : ${exercises} exercices.`);
if (problems.length) {
  console.error(`${problems.length} problème(s) :\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Contenu valide.");
