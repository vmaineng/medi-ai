import { Heart, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-linear-to-br from-pink-400 to-purple-400 p-1.5 rounded-lg">
                <Heart className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
                Medi-AI
              </span>
            </div>
            <p className="text-sm text-gray-600">
              AI-powered medical assistance for better patient care
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-t border-pink-100 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-500">
              © 2025 MediCare AI. Made with{" "}
              <Heart className="inline h-3 w-3 text-pink-400 fill-pink-400" />{" "}
              for healthcare professionals.
            </p>
            <p className="text-sm text-gray-500">
              Demo tool • Not for medical diagnosis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
