import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-500/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A642EE]/10 rounded-full blur-[128px]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A642EE] to-[#BE75FF]">
              ByteCraft
            </h3>
            <p className="text-muted-foreground">
              Crafting exceptional iOS experiences that enhance your daily life.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Latest App</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">All Apps</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Beta Program</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/support" className="hover:text-purple-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-500/10">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} ByteCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 