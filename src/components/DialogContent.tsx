import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";

interface DialogContentProps extends PropsWithChildren {
  onClose?: () => void;
}

function DialogContent({ children, onClose }: DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 " />
      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 max-w-[640px] h-[60%] w-full rounded-md flex flex-col outline-none overflow-hidden">
        <Dialog.Close
          className="absolute right-0 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-100"
          onClick={onClose}
        >
          <X className="size-5" />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default DialogContent;
