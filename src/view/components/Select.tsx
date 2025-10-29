import {
  ChevronDownIcon,
  ChevronUpIcon,
  CrossCircledIcon
} from "@radix-ui/react-icons";
import * as RadixSelect from "@radix-ui/react-select";
import { useState } from "react";
import { mergeClassNames } from "../../app/shared/strings/mergeClassNames";

interface SelectProps {
  options: { value: string; label: string }[];
  className?: string;
  error?: string;
  placeholder?: string;
}

export function Select({ options, className, error, placeholder }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState('');

  function handleSelect(value: string) {
    setSelectedValue(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={
            mergeClassNames("absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-700 pointer-events-none",
              selectedValue && 'text-xs left-[13px] top-2 transition-all translate-y-0'
            )}
        >
          {placeholder}
        </label>

        <RadixSelect.Root onValueChange={handleSelect}>
          <RadixSelect.Trigger
            className={mergeClassNames(
              'bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full focus:border-gray-800 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className
            )}
          >
            <RadixSelect.Value />

            <RadixSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="w-6 h-6 text-gray-800" />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px_rgba(0.0.0,0.10)]">
              <RadixSelect.ScrollUpButton
                className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800"
              >
                <ChevronUpIcon />
              </RadixSelect.ScrollUpButton>

              <RadixSelect.Viewport className="p-2">
                {options.map(option => (
                  <RadixSelect.Item
                    key={option.value}
                    value={option.value}
                    className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-50 hover:bg-gray-50 focus:bg-gray-50 rounded-lg transition-colors"
                  >
                    <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Viewport>

              <RadixSelect.ScrollDownButton
                className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800"
              >
                <ChevronDownIcon />
              </RadixSelect.ScrollDownButton>

            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>

      {error && (
        <div className="text-red-900 flex gap-2 items-center mt-2">
          <CrossCircledIcon />
          <span className="text-xs">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}
