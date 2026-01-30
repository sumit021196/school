import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">Bright Future School</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing quality education and nurturing young minds to become responsible, 
              compassionate, and innovative global citizens.
            </p>
            <div className="flex space-x-4">
              <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Education Street</li>
              <li>Learning City, LC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@brightfuture.edu</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bright Future School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
