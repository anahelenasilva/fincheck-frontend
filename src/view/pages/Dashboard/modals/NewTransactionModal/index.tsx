import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const { isNewTransactionModalOpen, newTransactionType, closeNewTransactionModal } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova despesa' : 'Nova receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form action="">
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 gap-4 flex flex-col">
          <Input
            type="text"
            name="name"
            placeholder={`Nome da ${isExpense ? 'Despesa' : 'Receita'}`}
          />

          <Select
            placeholder="Categoria"
            options={[
              {
                value: "INVESTMENT",
                label: "Investimento",
              },
              {
                value: "CHECKING",
                label: "Conta corrente",
              },
              {
                value: "CASH",
                label: "Dinheiro físico",
              }
            ]}
          />

          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
            options={[
              {
                value: "INVESTMENT",
                label: "Investimento",
              },
              {
                value: "CHECKING",
                label: "Conta corrente",
              },
              {
                value: "CASH",
                label: "Dinheiro físico",
              }
            ]}
          />

          <DatePickerInput />
        </div>

        <Button type="submit" className="mt-6 w-full">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
