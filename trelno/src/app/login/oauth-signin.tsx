"use client";
import { Provider } from "@supabase/supabase-js";
import { FaGithub } from "react-icons/fa";
import { oAuthSignIn } from "./actions";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="flex flex-col space-y-4 pt-10 bg-transparent">
      {oAuthProviders.map((provider) => (
        <button
          key={provider.name}
          className="flex w-[100%] items-center justify-center h-12 px-4 text-white bg-gray-800 rounded-md hover:bg-red-secondary"
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
        >
          {provider.icon}
          <span className="ml-2 bg-transparent">
            Continue with {provider.displayName}
          </span>
        </button>
      ))}
    </div>
  );
}
