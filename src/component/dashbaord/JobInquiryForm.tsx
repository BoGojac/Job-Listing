"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Modal } from "@/component/ui/Modal";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";

type JobInquiryFormProps = {
  open: boolean;
  jobTitle: string;
  company: string;
  onClose: () => void;
};

export default function JobInquiryForm({
  open,
  jobTitle,
  company,
  onClose,
}: JobInquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // This currently demonstrates successful submission.
    // Connect an API here when you're ready to save messages.
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  return (
    <Modal
      open={open}
      title={submitted ? "Thanks for reaching out." : "Ask about this role"}
      onClose={handleClose}>
      {submitted ? (
        <div className="grid gap-4">
          <CheckCircle2
            size={28}
            className="text-[#56966c]"
            aria-hidden="true"
          />

          <p className="m-0 text-[13px] leading-6 text-[#6f7983]">
            Your note is ready to be connected with the {company} team.
          </p>

          <Button type="button" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4.5">
          <label className="grid gap-2 text-xs font-bold text-[#556370]">
            Your name
            <Input
              name="name"
              required
              placeholder="Your name"
              className="border-[#e3dfd5] focus-within:border-[#e4b92d] focus-within:ring-2 focus-within:ring-[#f7ce3c]/20"
            />
          </label>

          <label className="grid gap-2 text-xs font-bold text-[#556370]">
            Your email
            <Input
              name="email"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 text-xs font-bold text-[#556370]">
            Message
            <textarea
              name="message"
              className="min-h-27.5 w-full resize-y rounded-md border border-[#dfe4df] px-3 py-2.5 text-sm font-normal text-[#152943] outline-none transition focus-within:border-[#e4b92d] focus-within:ring-2 focus-within:ring-[#f7ce3c]/20"
              required
              rows={4}
              defaultValue={`I would like to learn more about the ${jobTitle} role.`}
            />
          </label>

          <Button type="submit">Send message</Button>
        </form>
      )}
    </Modal>
  );
}
