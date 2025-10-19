import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { authService } from "../../../app/services/authService";
import type { SigninParams } from "../../../app/services/authService/signin";

const schema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string()
    .nonempty('Senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync: signin, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data)
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await signin(data);
      console.dir(accessToken);
    } catch {
      toast.error('Credenciais inválidas!');
    }
  });
  return {
    handleSubmit,
    register,
    errors,
    isLoading,
  };
}
