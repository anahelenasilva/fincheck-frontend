import type { ComponentProps } from "react";
import { mergeClassNames } from "../../app/utils/mergeClassNames";

type ButtonProps = ComponentProps<'button'>;

export function Button({ className, ...props }: ButtonProps) {

  return (
    <button
      {...props}
      className={mergeClassNames(
        "bg-teal-900 hover:bg-teal-800 px-6 h-12 rounded-2xl text-white font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all",
        className
      )}
    />
  );
}
