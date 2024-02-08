import Logo from "@/assets/logo-nlw-expert.svg?react";
import NewNoteCard from "@/components/NewNoteCard";
import NoteCard from "@/components/NoteCard";
import { Note } from "@/interfaces/note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-8">
      <Logo />
      <form className="w-full">
        <input
          type="text"
          placeholder="Search inside your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>
      <hr className="border-0 h-px bg-slate-700" />
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
