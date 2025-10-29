import { NumericFormat } from "react-number-format";

export function InputCurrency() {
  return (
    <NumericFormat
      className="text-gray-800 text-[32px] tracking-[-1px] font-bold outline-none w-full"
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      defaultValue="0"
    />
  );
}
