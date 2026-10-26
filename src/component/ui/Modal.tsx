"use client";

import type { ReactNode, MouseEvent } from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null;

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[rgba(18,36,58,0.54)] p-4 sm:p-5 motion-safe:animate-[fadeIn_200ms_ease]"
      onMouseDown={handleBackdropClick}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative my-auto w-full max-w125 rounded-2xl bg-white p-6 shadow-[0_20px_70px_rgba(14,33,55,0.25)] sm:p-8">
        <button
          className="absolute right-4.5 top-4.5 grid size-8 place-items-center rounded-full bg-[#f2f3ef] text-[#82909a] transition hover:bg-[#e8ece7] hover:text-[#152943] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7eaa8b]"
          type="button"
          onClick={onClose}
          aria-label="Close dialog">
          <X size={16} aria-hidden="true" />
        </button>

        <h2
          id="modal-title"
          className="mb-5 pr-9 text-2xl font-bold leading-tight tracking-[-0.045em] text-[#152943] sm:text-[34px]">
          {title}
        </h2>

        {children}
      </section>
    </div>
  );
}
