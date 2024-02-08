import Logo from "@/assets/logo-nlw-expert.svg?react";
import NewNoteCard from "@/components/NewNoteCard";
import NoteCard from "@/components/NoteCard";
import { Note } from "@/interfaces/note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesFromLocalStorage = localStorage.getItem("notes");

    if (notesFromLocalStorage) {
      return JSON.parse(notesFromLocalStorage);
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const search = event.target.value.toLowerCase();

    const notesFromLocalStorage = localStorage.getItem("notes");

    if (notesFromLocalStorage) {
      const notesArray = JSON.parse(notesFromLocalStorage);

      const filteredNotes = notesArray.filter((note: Note) =>
        note.content.toLowerCase().includes(search)
      );

      setNotes(filteredNotes);
    }
  }

  function handleDeleteNote(id: string) {
    const notesArray = notes.filter((note) => note.id !== id);

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-8">
      <Logo />
      <form className="w-full">
        <input
          type="text"
          placeholder="Search inside your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
        />
      </form>
      <hr className="border-0 h-px bg-slate-700" />
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onNoteDeleted={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
