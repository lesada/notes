function NewNoteCard() {
  return (
    <div className="rounded-md bg-slate-700 p-4 space-y-3">
      <span className="text-sm font-medium text-slate-200">Add note</span>
      <p className="text-sm leading-6 text-slate-400">
        Record a audio note that will be transcribed to text automatically
      </p>
    </div>
  );
}

export default NewNoteCard;
