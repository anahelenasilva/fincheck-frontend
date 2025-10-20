import { formatCurrency } from "../../../../../app/shared/number/formatCurrency";
import { mergeClassNames } from "../../../../../app/shared/strings/mergeClassNames";
import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: "CHECKING" | "INVESTMENT" | "CASH";
}

export function AccountCard({ color, name, balance, type }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span
          className={mergeClassNames("text-gray-800 font-medium tracking-[-0.5px] mt-4 block", !areValuesVisible && 'blur-sm')}
        >
          {formatCurrency(balance)}
        </span>

        <small
          className="text-gray-600 text-sm"
        >
          Saldo atual
        </small>
      </div>
    </div>
  );
}
