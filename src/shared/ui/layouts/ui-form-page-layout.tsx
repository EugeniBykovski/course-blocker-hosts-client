import { ReactNode } from "react";

const UiFormPageLayout = ({
  form,
  title,
  header,
}: {
  header?: ReactNode;
  form?: ReactNode;
  title: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      {header}
      <main className="grow flex flex-col pt-24">
        <div className="border rounded-xl border-slate-300 px-14 py-8 w-full max-w-[400px] bg-white self-center">
          <h1 className="text-2xl mb-8">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};

export default UiFormPageLayout;
