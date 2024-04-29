"use client";

import clsx from "clsx/lite";
import { useState } from "react";

export default function ClientWeatherAlerts({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between bg-red-200 p-4 text-red-900",
          isOpen ? "rounded-t-md" : "rounded-md",
        )}
        onClick={toggleIsOpen}
      >
        {title}
        <span
          className={clsx(
            "transform transition-transform",
            isOpen && "rotate-180",
          )}
        >
          &#9660; {/* Chevron down icon */}
        </span>
      </div>
      {isOpen && (
        <div className="divide-y divide-dashed divide-white/20 rounded-b-md bg-red-900 p-4 text-red-100">
          {children}
        </div>
      )}
    </div>
  );
}
