import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { toast } from "sonner";
import DialogContent from "./DialogContent";

function NewNoteCard() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  function handleStartEditor() {
    setShowOnboarding(false);
  }

  function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value === "") setShowOnboarding(true);
  }

  function handleSaveNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(event.currentTarget.content?.value || "");

    toast.success("Note saved successfully!");
  }

  return (
    <Dialog.Root onOpenChange={(open) => !open && handleStartEditor}>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-4 space-y-3 flex flex-col text-start outline-none relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Record a audio note that will be transcribed to text automatically.
        </p>
      </Dialog.Trigger>
      <DialogContent>
        <form className="flex-1 flex flex-col" onSubmit={handleSaveNote}>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-200">Add note</span>
            {showOnboarding ? (
              <p className="text-sm leading-6 text-slate-400">
                Start{" "}
                <button className="font-medium text-lime-400 hover:underline">
                  recording a new note
                </button>{" "}
                or{" "}
                <button
                  className="font-medium text-lime-400 hover:underline"
                  onClick={handleStartEditor}
                >
                  type it manually
                </button>
                .
              </p>
            ) : (
              <textarea
                autoFocus
                className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                onChange={handleContentChange}
                name="content"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </form>
      </DialogContent>
    </Dialog.Root>
  );
}

export default NewNoteCard;
