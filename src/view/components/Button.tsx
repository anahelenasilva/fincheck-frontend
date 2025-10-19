import type { ComponentProps } from "react";
import { mergeClassNames } from "../../app/utils/mergeClassNames";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={mergeClassNames(
        "bg-teal-900 hover:bg-teal-800 px-6 h-12 rounded-2xl text-white font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center",
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6" />}
    </button>
  );
}
