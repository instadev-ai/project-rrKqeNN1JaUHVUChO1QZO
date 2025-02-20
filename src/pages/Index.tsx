import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-white/90 to-pink-50/90"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-purple-600 tracking-widest uppercase">Welcome to</h2>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x">
                  Stunning
                </span>{" "}
                App
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Experience the perfect blend of elegance and functionality in every pixel.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:opacity-90 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="group border-2 text-lg px-8 py-6 rounded-2xl hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <Card className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="pt-8 p-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience blazing-fast performance with our optimized architecture and efficient code delivery.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="pt-8 p-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Modern Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stunning visuals and intuitive interfaces that make your application stand out from the crowd.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="pt-8 p-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Rock Solid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built with security and reliability at its core, ensuring your data is always safe and accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Index;