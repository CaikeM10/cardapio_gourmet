"use client";

import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function AccordionSection({ title, children }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-base font-medium">{title}</span>
        <span className="text-xl">{open ? "⌃" : "⌄"}</span>
      </button>

      {open && <div className="pb-4 text-sm text-gray-600">{children}</div>}
    </div>
  );
}
