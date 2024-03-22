import React from "react";
import Link from "next/link";

export const ChatsideBar = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Link href="api/auth/logout">Logout</Link>
    </div>
  );
};
