import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 reveal-on-scroll">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-flow">
              Your App
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building the future of web applications with modern design and powerful functionality.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "Twitter",
                  icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                },
                {
                  name: "GitHub",
                  icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                },
                {
                  name: "LinkedIn",
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="reveal-on-scroll animation-delay-100">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-3">
              {["Features", "Security", "Team", "Enterprise", "Customer Stories"].map((item, index) => (
                <li 
                  key={item}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors hover-lift">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="reveal-on-scroll animation-delay-200">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-3">
              {["Documentation", "Guides", "API Status", "Support", "Contact"].map((item, index) => (
                <li 
                  key={item}
                  className="animate-slide-up"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors hover-lift">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="reveal-on-scroll animation-delay-300">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-600">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md gap-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-md border border-gray-200 bg-white/50 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6 hover-lift"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 hover-lift hover-glow">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row reveal-on-scroll animation-delay-400">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Your App. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors hover-lift"
                  style={{ animationDelay: `${(index + 10) * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;