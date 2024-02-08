import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { toast } from "sonner";
import DialogContent from "./DialogContent";

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void;
}

let recognition: SpeechRecognition | null = null;

function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShowOnboarding(false);
  }

  function handleContentChange(newContent: string) {
    setContent(newContent);

    if (newContent === "") setShowOnboarding(true);
  }

  function handleSaveNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!content) {
      toast.error("Note content can't be empty!");
      return;
    }

    onNoteCreated(content || "");

    toast.success("Note saved successfully!");

    setContent("");
    setShowEditor(false);
    setShowOnboarding(true);
  }

  const handleRecording = () => {
    setIsRecording(true);
    setShowOnboarding(false);

    const isSpeechRecognitionSupported =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionSupported) {
      toast.error("Your browser doesn't support speech recognition!");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const result = Array.from(event.results).reduce(
        (text, result) => text.concat(result[0].transcript),
        ""
      );

      if (!result) return;

      setContent(result);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };

    recognition.start();
  };

  const handleRecordNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsRecording(false);
    recognition?.stop();
  };

  return (
    <Dialog.Root
      onOpenChange={(open) => !open && handleStartEditor}
      open={showEditor}
    >
      <Dialog.Trigger
        className="rounded-md bg-slate-700 p-4 space-y-3 flex flex-col text-start outline-none relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400"
        onClick={() => setShowEditor(true)}
      >
        <span className="text-sm font-medium text-slate-200">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Record a audio note that will be transcribed to text automatically.
        </p>
      </Dialog.Trigger>
      <DialogContent onClose={() => setShowEditor(false)}>
        <form
          className="flex-1 flex flex-col"
          onSubmit={isRecording ? handleRecordNote : handleSaveNote}
        >
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-200">Add note</span>
            {showOnboarding ? (
              <p className="text-sm leading-6 text-slate-400">
                Start{" "}
                <button
                  type="button"
                  className="font-medium text-lime-400 hover:underline"
                  onClick={handleRecording}
                >
                  recording a new note
                </button>{" "}
                or{" "}
                <button
                  type="button"
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
                onChange={(event) => handleContentChange(event.target.value)}
                value={content}
                name="content"
              />
            )}
          </div>
          <>
            {isRecording ? (
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100 animate-pulse"
              >
                <div className="size-3 rounded-full bg-red-500" />
                Recording! (Click to stop)
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500 disabled:bg-slate-300 disabled:cursor-not-allowed"
                disabled={showOnboarding}
              >
                Save note
              </button>
            )}
          </>
        </form>
      </DialogContent>
    </Dialog.Root>
  );
}

export default NewNoteCard;
