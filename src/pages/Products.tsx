import React from 'react';
import { Shield, Wrench, Zap, Pipette as Pipe, Building, Hammer, Package, X } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<{
    name: string;
    image: string;
    description: string;
    category: string;
  } | null>(null);

  const openModal = (product: { name: string; image: string }, category: string) => {
    const descriptions: { [key: string]: string } = {
      "Safety Helmets & Hard Hats": "High-quality industrial safety helmets designed to protect workers from falling objects and impact injuries. Meets international safety standards with comfortable fit and ventilation systems.",
      "Work Gloves & Safety Gloves": "Durable work gloves providing excellent grip and protection for various industrial applications. Available in different materials including leather, nitrile, and cut-resistant fabrics.",
      "Safety Shoes & Boots": "Steel-toe safety footwear designed for industrial environments. Features slip-resistant soles, puncture protection, and comfortable cushioning for all-day wear.",
      "High-Visibility Vests": "Bright, reflective safety vests ensuring worker visibility in low-light conditions. Compliant with safety regulations and available in various sizes and colors.",
      "Safety Coveralls": "Full-body protective clothing for industrial workers. Made from durable materials with reinforced seams and multiple pockets for tools and equipment.",
      "Eye Protection & Safety Glasses": "Protective eyewear designed to shield eyes from debris, chemicals, and UV radiation. Available in various styles including wraparound and prescription-compatible frames.",
      "Ear Protection Equipment": "Hearing protection devices including earplugs and earmuffs. Designed to reduce noise exposure in industrial environments while maintaining comfort.",
      "Respiratory Protection": "Advanced respiratory protection equipment including masks and filters. Protects against dust, fumes, and hazardous particles in industrial settings.",
      "Nuts, Bolts & Washers": "High-grade fasteners in various sizes and materials. Manufactured to precise specifications for reliable connections in industrial applications.",
      "Anchors & Fixing Systems": "Specialized anchoring solutions for concrete, masonry, and steel applications. Provides secure mounting for heavy equipment and structures.",
      "Stainless Steel Fasteners": "Corrosion-resistant fasteners ideal for marine and chemical environments. Maintains strength and appearance in harsh conditions.",
      "Galvanized Fasteners": "Zinc-coated fasteners providing excellent corrosion protection. Cost-effective solution for outdoor and industrial applications.",
      "Specialized Industrial Fasteners": "Custom and specialty fasteners designed for specific industrial applications. Engineered for extreme conditions and specialized requirements.",
      "Threaded Rods & Studs": "Precision-threaded rods and studs for structural connections. Available in various lengths and thread specifications.",
      "Rivets & Clips": "Permanent fastening solutions for sheet metal and structural applications. Provides strong, vibration-resistant connections.",
      "Industrial Cables & Wiring": "High-quality electrical cables designed for industrial environments. Features flame-retardant insulation and excellent conductivity.",
      "Switches & Control Devices": "Reliable electrical switches and control components for industrial automation. Built to withstand harsh operating conditions.",
      "Industrial Lighting Solutions": "Energy-efficient LED lighting systems for industrial facilities. Provides bright, uniform illumination with long service life.",
      "Conduits & Cable Management": "Protective conduit systems for electrical installations. Organizes and protects cables in industrial environments.",
      "Electrical Panels & Enclosures": "Robust electrical enclosures protecting control systems from environmental hazards. Available in various sizes and protection ratings.",
      "Motors & Drives": "Industrial motors and variable frequency drives for automation systems. Provides precise control and energy efficiency.",
      "Industrial Electrical Accessories": "Complete range of electrical accessories including connectors, terminals, and junction boxes for industrial installations."
    };

    setSelectedProduct({
      ...product,
      description: descriptions[product.name] || "High-quality industrial product designed for professional applications. Meets international standards and provides reliable performance in demanding environments.",
      category
    });
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const productCategories = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Safety & PPE Materials",
      description: "Complete personal protective equipment for industrial safety",
      items: [
        { name: "Safety Helmets ", image: "https://images.pexels.com/photos/8488037/pexels-photo-8488037.jpeg" },
        { name: "Safety Gloves", image: "https://images.pexels.com/photos/8487733/pexels-photo-8487733.jpeg" },
        { name: "Safety Shoes & Boots", image: "https://images.pexels.com/photos/10433248/pexels-photo-10433248.jpeg" },
        { name: "Vests & Safety Coveralls", image: "https://images.pexels.com/photos/8961007/pexels-photo-8961007.jpeg" },
        //{ name: "Safety Coveralls", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
        { name: "Eye & Ear Protection", image: "https://images.pexels.com/photos/9242291/pexels-photo-9242291.jpeg" },
       // { name: "Ear Protection Equipment", image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg" },
        { name: "Respiratory Protection", image: "https://images.pexels.com/photos/7959342/pexels-photo-7959342.jpeg" },
        { name: "And many more", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg"
    },
    {
      icon: <Wrench className="h-12 w-12 text-[rgb(255,193,7)]" />,
      title: "Fasteners & Fittings",
      description: "High-grade fastening solutions for industrial applications",
      items: [
        { name: "Nuts, Bolts & Washers", image: "https://images.pexels.com/photos/5853930/pexels-photo-5853930.jpeg" },
        { name: "Anchors ", image: "https://images.pexels.com/photos/17485780/pexels-photo-17485780.jpeg" },
        { name: "Stainless steel & galvanized options", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg" },
       // { name: "Galvanized Fasteners", image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg" },
       // { name: "Specialized Industrial Fasteners", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg" },
       // { name: "Threaded Rods & Studs", image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg" },
        //{ name: "Rivets & Clips", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg" },
        { name: "And Many More", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
    },
    {
      icon: <Zap className="h-12 w-12 text-[rgb(255,193,7)]" />,
      title: "Electrical Supplies",
      description: "Comprehensive electrical components and systems",
      items: [
        { name: "Industrial Cables & Wiring", image: "https://images.unsplash.com/photo-1625276254563-f0fbbf66a5e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Switches & Control Devices", image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg" },
        { name: "Industrial Lighting Solutions", image: "https://images.pexels.com/photos/9201898/pexels-photo-9201898.jpeg" },
        { name: "Conduits & Cable Management", image: "https://eepower.com/uploads/articles/CIS_Figure_1.png" },
       // { name: "Electrical Panels & Enclosures", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
       // { name: "Motors & Drives", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
        { name: "Industrial Electrical Accessories", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
        { name: "And Many More", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
    },
    {
      icon: <Pipe className="h-12 w-12 text-blue-500" />,
      title: "Plumbing & Pipe Fittings",
      description: "Complete piping solutions for industrial systems",
      items: [
        { name: "PVC, CPVC, GI, SS fittings", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA14IHfFVCipxL-tKFJOvbzUdwRZ7pzl_8g&s" },
        { name: "PPR and UPVC Pipes", image: "https://www.riifo.com/wp-content/uploads/2025/05/0K6A99561.jpg" },
        //{ name: "Stainless Steel Pipe Fittings", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
        { name: "Industrial Valves, Couplings & Adapters", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
        //{ name: "Pipe Couplings & Adapters", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
        //{ name: "Industrial Hoses & Tubes", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
       // { name: "Gaskets & Sealing Materials", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
        { name: "And Many More", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg"
    },
    {
      icon: <Building className="h-12 w-12 text-gray-600" />,
      title: "Architectural Materials",
      description: "Quality finishing materials for construction projects",
      items: [
        { name: "Architectural Hardware", image: "https://images.pexels.com/photos/8487343/pexels-photo-8487343.jpeg" },
        { name: "Building Panels & Sheets", image: "https://images.pexels.com/photos/5089122/pexels-photo-5089122.jpeg" },
        { name: "Sealing & Weatherproofing", image: "https://images.pexels.com/photos/1915182/pexels-photo-1915182.jpeg" },
        { name: "Glasses & Mirrors", image: "https://www.sagesoftware.co.in/wp-content/uploads/2016/02/Glass-Industry-Software.jpg" },
       { name: "PIR Insulation", image: "https://cdn.greenmatch.co.uk/cdn-cgi/image/format=auto/2/2023/07/insulation-boards-installing.jpg" },
        { name: "Commercial-grade fittings and fixtures", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
       // { name: "Building Maintenance Supplies", image: "https://images.pexels.com/photos/8090054/pexels-photo-8090054.jpeg" },
        { name: "And Many More", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/8090054/pexels-photo-8090054.jpeg"
    },
    {
      icon: <Hammer className="h-12 w-12 text-red-600" />,
      title: "Power & Hand Tools",
      description: "Professional tools from leading international brands",
      items: [
        { name: "Professional Tools(Bosch, Makita, Dewalt, etc)", image: "https://www.bosch-pt.com.my/my/media/professional/specials/highlights/18v_mpp/overview/m56_10/m56_overview_rtb_100_compatibility_991x557.jpg" },
       // { name: "Makita Power Tools", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg" },
       // { name: "Dewalt Industrial Tools", image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg" },
        { name: "Hand Tools - Wrenches, Screwdrivers, Hammers & Drills", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg" },
       // { name: "Hammers & Striking Tools", image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg" },
        { name: "Electric Drills & Drivers", image: "https://images.pexels.com/photos/46793/taps-thread-drill-milling-46793.jpeg" },
       // { name: "Measuring & Testing Equipment", image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg" },
        { name: "And Many More", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg"
    },
    {
      icon: <Package className="h-12 w-12 text-green-600" />,
      title: "General Consumables",
      description: "Essential consumable materials for daily operations",
      items: [
        { name: "Industrial Adhesives & Sealants", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
        { name: "Tapes & Bonding Materials", image: "https://images.pexels.com/photos/5691615/pexels-photo-5691615.jpeg" },
        { name: "Cleaning & Maintenance Products", image: "https://images.pexels.com/photos/4440525/pexels-photo-4440525.jpeg" },
       // { name: "Lubricants & Oils", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
       // { name: "Safety & Marking Tapes", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
       // { name: "Packaging & Storage Materials", image: "https://images.pexels.com/photos/8090008/pexels-photo-8090008.jpeg" },
       // { name: "Workshop Consumables", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
        { name: "And Many More", image: "https://images.pexels.com/photos/30445637/pexels-photo-30445637.png" }
      ],
      mainImage: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of oilfield and industrial materials sourced from trusted global suppliers. 
            Quality guaranteed, competitively priced, and delivered on time.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-20">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-blue-950">{category.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="group cursor-pointer"
                      onClick={() => openModal(item, category.title)}
                    >
                      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={`${item.name} - Quality industrial materials for UAE oilfield operations`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-gray-900 text-center leading-tight">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
                
                <div className="aspect-video overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} - Professional industrial equipment`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>
                  
                 
                
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Custom Quote or Bulk Order?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our procurement specialists can source specific materials to meet your exact requirements. 
            Contact us for competitive pricing on bulk orders and custom procurement solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[rgb(255,193,7)] text-white font-semibold rounded-lg hover:bg-[rgb(255,193,7)]/80 transition-colors duration-300"
            >
              Request Quote
            </a>
            <a
              href="tel:+971-XX-XXX-XXXX"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our products meet international industry standards and undergo rigorous quality control. 
              We work with certified suppliers and provide documentation for traceability and compliance 
              with UAE industrial regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;