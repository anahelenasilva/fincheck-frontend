import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { formatDate } from "../../app/shared/date/formatDate";
import { mergeClassNames } from "../../app/shared/strings/mergeClassNames";
import { DatePicker } from "./DatePicker";
import { Popover } from "./Popover";

interface DatePickerInputProps {
  className?: string;
  error?: string;
}

export function DatePickerInput({ className, error }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={mergeClassNames(
              'bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 w-full focus:border-gray-800 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className
            )}
          >
            <span
              className="text-gray-700 text-xs left-[13px] top-2 pointer-events-none absolute"
            >Data
            </span>

            <span>
              {formatDate(selectedDate)}
            </span>
          </button>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)} />
        </Popover.Content>
      </Popover.Root>

      {
        error && (
          <div className="text-red-900 flex gap-2 items-center mt-2">
            <CrossCircledIcon />
            <span className="text-xs">
              {error}
            </span>
          </div>
        )
      }
    </div>
  );
}
