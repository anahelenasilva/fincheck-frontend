import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form action="">
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo</span>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 gap-4 flex flex-col">
          <Input
            type="text"
            name="name"
            placeholder="Nome da conta"
          />

          <Select
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
            placeholder="Tipo"
          />
        </div>
      </form>
    </Modal>
  );
}
