export type SubCategory = {
  name: string
  slug: string
  description: string
  dimensions: { width: number; height: number }
  image: string
  about: string
  features: string[]
  youtubeLink: string
}

export type ServiceCategory = {
  name: string
  slug: string
  description: string
  dimensions: { width: number; height: number }
  image: string
  subCategories: SubCategory[]
}

export const servicesData: ServiceCategory[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing Services',
    description: 'Advanced manufacturing solutions for modern industries',
    dimensions: { width: 1200, height: 800 },
    image: 'Manufacturing',
    subCategories: [
      {
        slug: 'cnc-machining',
        name: 'CNC Machining',
        description: 'Precision CNC machining services for complex parts',
        dimensions: { width: 800, height: 600 },
        image: 'CNC Machining',
        about: 'Our CNC machining services deliver high-precision parts with exceptional accuracy and surface finish. We utilize state-of-the-art multi-axis machines to handle complex geometries and tight tolerances.',
        features: [
          'High precision tolerances up to ±0.001mm',
          '3, 4, and 5-axis machining capabilities',
          'Wide range of materials including metals and plastics',
          'Rapid turnaround times',
          'Complex geometry handling'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example1'
      },
      {
        slug: 'injection-molding',
        name: 'Injection Molding',
        description: 'High-volume plastic parts manufacturing',
        dimensions: { width: 800, height: 600 },
        image: 'Injection Molding',
        about: 'Our injection molding services provide cost-effective solutions for high-volume plastic parts production. We offer comprehensive support from mold design to final part production.',
        features: [
          'Custom mold design and fabrication',
          'Wide range of thermoplastics and thermosets',
          'High-volume production capability',
          'Quality control and testing',
          'Design for manufacturability (DFM) support'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example2'
      },
      {
        slug: '3d-printing',
        name: '3D Printing',
        description: 'Rapid prototyping and additive manufacturing',
        dimensions: { width: 800, height: 600 },
        image: '3D Printing',
        about: 'Our advanced 3D printing services offer rapid prototyping and low-volume production capabilities. We utilize various technologies including FDM, SLA, and SLS to meet diverse requirements.',
        features: [
          'Multiple printing technologies available',
          'Quick turnaround for prototypes',
          'Complex geometry printing',
          'Wide material selection',
          'Post-processing services'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example3'
      }
    ]
  },
  {
    slug: 'prototyping',
    name: 'Prototyping Services',
    description: 'Rapid prototyping and development solutions',
    dimensions: { width: 1200, height: 800 },
    image: 'Prototyping',
    subCategories: [
      {
        slug: 'rapid-prototyping',
        name: 'Rapid Prototyping',
        description: 'Quick iteration and prototype development',
        dimensions: { width: 800, height: 600 },
        image: 'Rapid Prototyping',
        about: 'Our rapid prototyping services help bring your ideas to life quickly. We offer various technologies and materials to create functional prototypes for testing and validation.',
        features: [
          'Fast turnaround times',
          'Multiple prototyping technologies',
          'Functional testing capability',
          'Design iteration support',
          'Material selection guidance'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example4'
      },
      {
        slug: 'metal-fabrication',
        name: 'Metal Fabrication',
        description: 'Custom metal parts and assemblies',
        dimensions: { width: 800, height: 600 },
        image: 'Metal Fabrication',
        about: 'Our metal fabrication services provide custom solutions for various industries. We offer comprehensive capabilities from cutting and forming to welding and assembly.',
        features: [
          'Custom metal fabrication',
          'Welding and assembly',
          'Sheet metal work',
          'Surface finishing',
          'Quality inspection'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example5'
      }
    ]
  },
  {
    slug: 'assembly',
    name: 'Assembly Services',
    description: 'Professional product assembly and integration',
    dimensions: { width: 1200, height: 800 },
    image: 'Assembly',
    subCategories: [
      {
        slug: 'product-assembly',
        name: 'Product Assembly',
        description: 'Complete product assembly services',
        dimensions: { width: 800, height: 600 },
        image: 'Product Assembly',
        about: 'Our product assembly services ensure high-quality assembly of complex products. We handle everything from component assembly to final product integration.',
        features: [
          'Complex assembly capabilities',
          'Quality control procedures',
          'Flexible production volumes',
          'Supply chain management',
          'Testing and verification'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example6'
      },
      {
        slug: 'quality-control',
        name: 'Quality Control',
        description: 'Comprehensive quality assurance services',
        dimensions: { width: 800, height: 600 },
        image: 'Quality Control',
        about: 'Our quality control services ensure that all products meet the highest standards. We employ advanced inspection techniques and rigorous testing procedures.',
        features: [
          'Dimensional inspection',
          'Material testing',
          'Functional testing',
          'Documentation and reporting',
          'Compliance verification'
        ],
        youtubeLink: 'https://www.youtube.com/embed/example7'
      }
    ]
  }
];

