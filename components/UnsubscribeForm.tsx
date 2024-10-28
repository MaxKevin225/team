import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import { useRouter } from 'next/router';

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const UnsubscribeForm: React.FC = () => {
  const router = useRouter();

  const sectionRef = useRef<HTMLDivElement>(null);
  // const isSecOnScreen = useOnScreen(sectionRef);
  const emailRef = useRef<HTMLInputElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  // const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const UnsubscribeForm = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    UnsubscribeForm && onSectionChange!("contact");
  }, [UnsubscribeForm]);

  const unsubscribe = async () => {
    if (emailRef && emailRef.current && !emailRef.current.value) return;
    try {
      const response = await fetch("/api/unsubscribe", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailRef?.current?.value }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("unsubscribed", data);
      router.push('/');
    } catch (error) {
      console.error("Failed to update or create user:", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[700px] text-center"
    >
      <div
        className="mt-20 mb-20 gap-5 flex justify-center items-center text-xl"
        ref={elementRef}
      >
        <label htmlFor="email">Enter your email to unsubscribe:</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          required
          className="text-black border border-green-400 rounded px-6 py-2 bg-green-100/50 w-[300px]"
        />
        <button
          type="submit"
          className="p-2 rounded bg-emerald-600 text-white"
          onClick={unsubscribe}
        >
          Unsubscribe
        </button>
      </div>
    </section>
  );
};

export default UnsubscribeForm;
