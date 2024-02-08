import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import DialogContent from "./DialogContent";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

function NoteCard({ note }: NoteCardProps) {
  const { date, content } = note;

  const formattedDate = formatDistanceToNow(date, { addSuffix: true });

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-800 p-5 gap-3 overflow-hidden flex flex-col text-start outline-none relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          {formattedDate}
        </span>
        <p className="text-sm leading-6 text-slate-400">{content}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <DialogContent>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="text-sm font-medium text-slate-200">
            {formattedDate}
          </span>
          <p className="text-sm leading-6 text-slate-400">{content}</p>
        </div>
        <button
          type="button"
          className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group"
        >
          Do you want to{" "}
          <span className="text-red-400 group-hover:underline">
            delete this note
          </span>
          ?
        </button>
      </DialogContent>
    </Dialog.Root>
  );
}

export default NoteCard;
