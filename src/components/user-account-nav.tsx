"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { User } from "@/payload-types";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant={"ghost"} className="relative bg-transparent">
          <div className="flex h-8 w-8 items-center justify-center rounded-full
           border-2 transition-all hover:border-black">
            <User2 />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white" align="end">
        <ol className="flex items-center justify-start gap-2 p-2">
          <li className="flex flex-col space-y-0.5 leading-none">
            <p className="text-blck text-sm font-medium">{user.email}</p>
          </li>
        </ol>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/sell"}>Seller Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={signOut}
          className="flex cursor-pointer items-center justify-between"
        >
          <p className="mt-1">Log out</p> <LogOut className="text-red-500" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
