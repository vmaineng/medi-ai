import { Stethoscope, Heart, Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-pink-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-pink-400 to-purple-400 p-2 rounded-xl shadow-md">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                MediCare AI
              </h1>
              <Heart className="h-4 w-4 text-pink-400 fill-pink-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              History
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              About
            </Link>
            <Button className="bg-linear-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden rounded">
            <Button
              variant="ghost"
              size="icon"
              className="border border-gray-300"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
