import SelectField from "@/shared/ui/select-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import TextField from "@/shared/ui/text-field";
import Button from "@/shared/ui/button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "Keyword", value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <SelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{
          ...register("type"),
        }}
      />

      <TextField
        className="grow"
        inputProps={{
          placeholder: type === "KeyWord" ? "Enter Key Word" : "Enter Website",
          ...register("data"),
        }}
      />

      <Button variant="primary" disabled={isLoading}>
        Add Block Item
      </Button>
    </form>
  );
}
