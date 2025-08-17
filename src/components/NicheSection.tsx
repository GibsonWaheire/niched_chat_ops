import NicheCards from "./NicheCards";

export default function NicheSection() {
  return (
    <section id="templates" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Choose your business template</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pre-built workflows designed specifically for your industry. 
            Start automating in minutes, not hours.
          </p>
        </div>
        
        <NicheCards />
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your industry? We're adding new templates every week.
          </p>
          <a href="#" className="text-indigo-600 hover:underline font-medium">
            Request a custom template →
          </a>
        </div>
      </div>
    </section>
  );
}