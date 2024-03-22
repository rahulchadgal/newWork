import Head from "next/head";
import { ChatsideBar } from "components/ChatsideBar";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatsideBar />
        <div className="flex flex-col bg-gray-700">
          <div className="flex-1">chat window</div>
          <footer className="bg-gray-800 p-10">footer</footer>
          <form onSubmit={handleSubmit}>
            <fieldset className="flex gap-2" disabled={generatingResponse}>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder={generatingResponse ? "" : "Send a message..."}
                className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
              />
              <button type="submit" className="btn">
                Send
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
