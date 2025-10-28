import { useState } from "react";

export function useFiltersModal() {
  const currentYear = new Date().getFullYear();

  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(currentYear);

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(prevState => prevState === bankAccountId ? null : bankAccountId);
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => (prevState ?? currentYear) + step);
  }

  return {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  }
}
