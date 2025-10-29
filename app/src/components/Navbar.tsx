import { Stethoscope, Heart, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-pink-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-pink-400 to-purple-400 p-2 rounded-xl shadow-md">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-transparent bg-clip-text bg-linear-to-r from-pink-50 to-purple-500">
                Medi-AI
              </h1>
              <Heart className="w-6 h-6 text-pink-400 fill-pink400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
