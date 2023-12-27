import clsx from "clsx";
import React, { FC, InputHTMLAttributes, PropsWithRef, useId } from "react";

export type TextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLElement>>;
};

const TextField: FC<TextFieldProps> = ({
  className,
  label,
  error,
  inputProps,
}) => {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "border rounded border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      />
      {error && <div className="text-sm text-rose-400">{error}</div>}
    </div>
  );
};

export default TextField;
