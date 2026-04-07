import React from "react";
import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();

  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="welth logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-3">
          <Show when={"signed-in"}>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </Show>
          <Show when={"signed-out"}>
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button variant="outline" className="cursor-pointer">
                Login
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button variant="default" className="cursor-pointer">
                SignUp
              </Button>
            </SignUpButton>
          </Show>
          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
