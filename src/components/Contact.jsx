import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      access_key: "97473482-4ee0-4310-b9a9-47a94344881a",
      name,
      email,
      message,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        toast.error("Something went wrong.");
        setStatus("error");
      }
    } catch (error) {
      toast.error("An error occurred, please try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container px-8 md:px-10 lg:px-24 mx-auto" id="projects">
        <h1 className="text-3xl text-center font-bold mb-20">Contact Me</h1>
        <div className="flex flex-col md:flex-row space-x-6 justify-items-center">
          <div className="flex-1">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Let's Talk
              </h1>
              <p>
                I'm open to discussing web development projects and partnership
                opportunities
              </p>
            </div>
            <div className="m-2">
              <FaEnvelope className="inline-block text-green-400 mr-4" />
              <a
                href="mailto:srishylamburla1@gmail.com"
                className="hover:underline"
              >
                srishylamburla1@gmail.com
              </a>
            </div>
            <div className="m-2">
              <FaPhoneAlt className="inline-block text-green-400 mr-4" />
              <span>+91 703-618-8347</span>
            </div>
            <div className="m-2">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-4" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
          <div className="flex-1 w-full mt-4">
            <form onSubmit={handleSend} className="space-y-4">
              {/* <input type="hidden" name="access_key" value="97473482-4ee0-4310-b9a9-47a94344881a"></input> */}
              <div>
                <label htmlFor="name" className="block mr-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-800"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-800"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-800"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-block text-white bg-gradient-to-r from-green-400 to-blue-500 
            hover:scale-105 px-8 py-2 rounded-xl"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <p className="text-sm text-green-400 mt-4">
                  Thank you for reaching out, I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 mt-4">
                  Something went wrong, Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
