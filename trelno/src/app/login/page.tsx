import { createClient } from "@/utils/supabase/server";
import { emailLogin, signup } from "./actions";
import { redirect } from "next/navigation";
import { OAuthButtons } from "./oauth-signin";
import Image from "next/image";

export default async function LoginPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4 bg-transparent">
          <label
            className="block text-white text-sm font-bold mb-2 bg-transparent"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:border-red-focus"
          />
        </div>
        <div className="mb-6 bg-transparent">
          <label
            className="block bg-transparent text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-white mb-3 leading-tight focus:outline-none focus:border-red-focus"
          />
        </div>
        <div className="flex flex-col gap-3 items-center justify-between bg-transparent">
          <button
            type="submit"
            formAction={emailLogin}
            className="bg-red-primary w-full hover:bg-red-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>

          <button
            type="submit"
            formAction={signup}
            className="bg-orange-900 w-full hover:bg-red-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
        </div>
        <OAuthButtons />
      </form>
      <div className="bg-transparent">
        <Image
          src="/organization-image.jpg"
          alt="Trello logo"
          width={600}
          height={600}
          className="rounded-lg shadow-lg w-auto pl-5 bg-transparent"
        />
      </div>
    </div>
  );
}
