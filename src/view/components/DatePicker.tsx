import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { capitalizeFirstLetter } from '../../app/shared/strings/capitalizeFirstLetter';

interface DatePickerProps {
  value: Date;
  onChange?(date: Date): void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={(date) => onChange?.(date ?? new Date())}
      classNames={{
        month_caption: 'flex items-center justify-between',
        nav: 'flex gap-1 flex items-center justify-end',
        button_previous: 'flex items-center justify-center !bg-transparent',
        button_next: 'flex items-center justify-center !bg-transparent',
        chevron: 'fill-teal-800 !bg-transparent outline-none',
        weekday: 'uppercase text-xs text-gray-500 font-medium pt-1 pb-2 w-full',
        weekdays: 'flex uppercase text-xs text-gray-500 font-medium pt-1 pb-2',
        day: 'text-gray-700 cursor-pointer w-10 h-10 hover:bg-teal-100 rounded-full flex items-center justify-center text-sm',
        today: 'bg-gray-100 font-bold text-gray-900',
        selected: '!bg-teal-900 text-white font-medium',
        month_grid: 'w-full border-collapse',
        week: 'flex',
      }}
      formatters={{
        formatCaption: (date, options) => {
          return capitalizeFirstLetter(format(date, 'LLLL yyyy', options));
          // (
          //   <span className="text-gray-900 tracking-[-0.408px] font-medium">
          //     {capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}
          //   </span>
          // );
        },
      }}
      components={{
        CaptionLabel: ({ children }) =>
          <span className="text-gray-900 tracking-[-0.408px] font-medium">
            {children}
          </span>,
      }}
    />
  );
}
