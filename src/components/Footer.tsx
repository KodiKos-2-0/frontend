export function Footer() {
  return (
    <div className="border-t border-gray-200 px-8 py-4 mt-auto bg-white">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>© 2025 DocuGlass AI. All rights reserved</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
