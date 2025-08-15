import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Menu,
  Search,
  ShoppingCart,
  Settings,
  User,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CustomConnectButton } from "./CustomConnectButton";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center gap-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="PromptHash Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="hidden font-bold sm:inline-block text-purple-400 text-lg tracking-tight">
              PromptHash
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/browse"
              className="transition-colors hover:text-gray-300 text-white flex items-center gap-1"
            >
              <Search className="h-4 w-4" />
              <span>Browse</span>
            </Link>
            <Link
              href="/sell"
              className="transition-colors hover:text-gray-300 text-white flex items-center gap-1"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Sell</span>
            </Link>
            <Link
              href="/governance"
              className="transition-colors hover:text-gray-300 text-white flex items-center gap-1"
            >
              <Settings className="h-4 w-4" />
              <span>Governance</span>
            </Link>
            <Link
              href="/profile"
              className="transition-colors hover:text-gray-300 text-white flex items-center gap-1"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            <Link
              href="/chat"
              className="transition-colors hover:text-gray-300 text-white flex items-center gap-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat</span>
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-gray-900 text-white">
            <nav className="grid gap-6 px-2 py-6">
              <Link
                href="/browse"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                <span>Browse</span>
              </Link>
              <Link
                href="/sell"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Sell</span>
              </Link>
              <Link
                href="/governance"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                <span>Governance</span>
              </Link>
              <Link
                href="/profile"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
              <Link
                href="/chat"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Search and Wallet Section */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative max-w-md">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search prompts..."
                className="pl-8 w-full bg-gray-900/60 border-gray-800 text-white placeholder:text-gray-500"
              />
            </div>
          </div>
          {/* display wallet here */}
          <CustomConnectButton />
        </div>
      </div>
    </header>
  );
}
