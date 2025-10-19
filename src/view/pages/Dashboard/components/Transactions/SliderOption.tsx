import { useSwiper } from "swiper/react";
import { mergeClassNames } from "../../../../../app/shared/strings/mergeClassNames";

interface SliderOptionProps {
  month: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ month, isActive, index }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={mergeClassNames('w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5px] font-medium', isActive && 'bg-white')}
    >
      {month}
    </button>
  );
}
