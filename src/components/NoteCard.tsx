function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden flex flex-col text-start outline-none relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">2 days ago</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
        voluptatum possimus, error unde velit cumque et enim consequatur
        doloremque magni praesentium ab ullam soluta recusandae molestiae ipsum
        quo eius quas.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}

export default NoteCard;
