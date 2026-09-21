import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  Mail01Icon,
  Message01Icon,
} from "@hugeicons/core-free-icons";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
    ).then(() => {
        setIsSent(true)
        form.current.reset()
        toast.success("Thank for for connecting..Stay tuned for reply😊",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick : true,
                pauseOnHover:true,
                theme:"light"
            }
        )
    },(error) => {
        console.log(error)
        toast.error("❌ Error sending the message. Please try again",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick : true,
                pauseOnHover:true,
                theme:"light"
            }
        )
    })
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="shadow-xl/20 dark:border-0 border-t-2 mx-auto text-gray-200 grid grid-cols-1 gap-4 px-6 py-8 bg-white rounded-lg dark:bg-gray-800"
    >
        <ToastContainer/>
      {/*heading */}
      <p className="flex justify-center items-center dark:text-gray-300 text-gray-800 gap-4 mb-5 font-semibold text-3xl">
        Let's Connect 🚀
      </p>

      {/* form fields */}
      <div className="formDiv bg-gray-100  dark:bg-gray-700">
        <HugeiconsIcon icon={UserIcon} className="text-purple-500" />
        <input
          name='name'
          type="text"
          placeholder="Enter your name"
          className="text-gray-900 bg-transparent outline-0 border-0 dark:text-gray-200 w-full"
          required
        />
      </div>

      <div className="formDiv bg-gray-100 dark:bg-gray-700">
        <HugeiconsIcon icon={Mail01Icon} className="text-purple-500" />
        <input
          name='email'
          type="email"
          placeholder="Enter your email"
          className="text-gray-900 bg-transparent outline-0 border-0  dark:text-gray-200 w-full"
          required
        />
      </div>

      <div className="formDiv bg-gray-100  dark:bg-gray-700">
        <HugeiconsIcon icon={Message01Icon} className="text-purple-500" />
        <textarea
          type="text"
          name='message'
          placeholder="Enter your message"
          cols="50"
          rows="5"
          required
          className="w-full resize-none  bg-transparent outline-0 border-0  text-gray-900 dark:text-gray-200"
        ></textarea>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-gray-100 text-[16px] px-2 py-2 rounded-lg cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
