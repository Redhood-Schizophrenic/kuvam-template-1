export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  about: string;
  features: string[];
  dimensions: string;
  specifications: { [key: string]: string };
  applications: string[];
  additionalFeatures: string[];
  youtubeLink: string;
  detailImage: string;
}

export const productsData: Product[] = [
  {
    id: "thermal-solutions",
    name: "Thermal Solutions",
    shortDescription: "Advanced thermal management solutions for various applications.",
    image: "/placeholder.svg?height=300&width=400",
    about: "Our Thermal Solutions product line offers cutting-edge heat management technologies designed to optimize performance and longevity in a wide range of electronic and industrial applications. These solutions are engineered to efficiently dissipate heat, ensuring your systems operate at peak efficiency even in the most demanding environments.",
    features: [
      "High thermal conductivity",
      "Customizable to specific applications",
      "Lightweight and durable materials",
      "Easy installation and maintenance",
      "Compatible with various system designs"
    ],
    dimensions: "Varies based on specific application requirements",
    specifications: {
      "Material": "Advanced composite thermal interface materials",
      "Temperature Range": "-40°C to 150°C",
      "Thermal Conductivity": "Up to 5 W/mK",
      "Thickness Range": "0.5mm to 5mm"
    },
    applications: [
      "Electronics cooling",
      "LED lighting systems",
      "Power electronics",
      "Automotive thermal management",
      "Aerospace components"
    ],
    additionalFeatures: [
      "RoHS compliant",
      "Halogen-free options available",
      "Low outgassing for sensitive applications",
      "Available in various form factors (pads, putty, liquid)"
    ],
    youtubeLink: "https://www.youtube.com/embed/example1",
    detailImage: "/products/details/product-1-detail.jpg"
  },
  // Add other products with similar structure
];

