function NewNoteCard() {
  return (
    <button className="rounded-md bg-slate-700 p-4 space-y-3 flex flex-col text-start outline-none relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Add note</span>
      <p className="text-sm leading-6 text-slate-400">
        Record a audio note that will be transcribed to text automatically
      </p>
    </button>
  );
}

export default NewNoteCard;
