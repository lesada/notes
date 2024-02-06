import * as Dialog from "@radix-ui/react-dialog";
import DialogContent from "./DialogContent";

function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-4 space-y-3 flex flex-col text-start outline-none relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Record a audio note that will be transcribed to text automatically.
        </p>
      </Dialog.Trigger>
      <DialogContent>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="text-sm font-medium text-slate-200">Add note</span>
          <p className="text-sm leading-6 text-slate-400">
            Start{" "}
            <button className="font-medium text-lime-400 hover:underline">
              recording a new note
            </button>{" "}
            or{" "}
            <button className="font-medium text-lime-400 hover:underline">
              type it manually
            </button>
            .
          </p>
        </div>
        <button
          type="button"
          className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
        >
          Salvar nota
        </button>
      </DialogContent>
    </Dialog.Root>
  );
}

export default NewNoteCard;
