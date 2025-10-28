import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { mergeClassNames } from "../../app/shared/strings/mergeClassNames";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
}

export function Modal({ open, title, children, rightAction }: ModalProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={mergeClassNames(
            'fixed inset-0 bg-black/80 backdrop-blur-sm z-50',
            'data-[state=open]:animate-overlay-show',
          )}
        />

        <Dialog.Content
          className={mergeClassNames(
            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px]',
            'data-[state=open]:animate-content-show outline-none',
          )}
        >
          <header
            className="h-12 flex items-center justify-between text-gray-800"
          >
            <button className="w-12 h-12">
              <Cross2Icon className="w-6 h-6" />
            </button>

            <span className="text-lg tracking-[-1px] font-bold">{title}</span>

            <button className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </button>
          </header>

          <div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
};
