import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website,
    },
  });

  const addBlockItemMutation = useAddBlockItemMutation();
  const type = watch("type");

  return {
    // @ts-ignore
    isLoading: addBlockItemMutation.isLoading,
    register,
    type,
    handleSubmit: handleSubmit((data) => {
      addBlockItemMutation.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    }),
  };
}
