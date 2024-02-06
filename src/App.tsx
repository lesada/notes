import Logo from "@/assets/logo-nlw-expert.svg?react";
import NewNoteCard from "@/components/NewNoteCard";
import NoteCard from "@/components/NoteCard";

function App() {
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
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content: "Hello, World!",
          }}
        />
      </div>
    </div>
  );
}

export default App;
