export const aboutBlocks = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "GIS Map Analysis",
    tagline: { id: "Pendidikan & Minat", en: "Education & Passion" },
    title: { id: "Perjalanan di Informasi Geografi", en: "My Road to Geospatial" },
    description: {
      id: "Sebagai mahasiswa S1 Sains Informasi Geografi di Universitas Pendidikan Indonesia (IPK 3.75), saya mendedikasikan fokus pada pengolahan data geospasial, kartografi tematik, dan analisis penginderaan jauh. Keahlian ini membentuk pondasi kuat dalam memahami fenomena permukaan bumi secara presisi.",
      en: "As an undergraduate student of Geographic Information Science at Universitas Pendidikan Indonesia (GPA 3.75), I dedicate my focus to geospatial data processing, thematic cartography, and remote sensing analysis. These competencies build a solid foundation in understanding earth surface phenomena with precision."
    },
    blobColor: "pink",
    imagePosition: "left"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Spatial Analysis Work",
    tagline: { id: "Pengalaman Praktis", en: "Practical Experience" },
    title: { id: "Penyusunan Peta & Validasi Spasial", en: "Base Map Compilation & Validation" },
    description: {
      id: "Berpengalaman dalam menyusun Peta Dasar RDTR Kota Cimahi skala 1:5.000, memproduksi 15+ peta tematik di BAPPERIDA Kota Bandung, serta menyusun 87 peta skema sungai di BBWS. Berkomitmen menghadirkan visualisasi data spasial yang informatif dan terstandarisasi.",
      en: "Experienced in compiling Base Maps for Cimahi City RDTR at 1:5,000 scale, producing 15+ thematic maps at BAPPERIDA Bandung, and finalizing 87 river schema maps at BBWS. Committed to delivering standardized and highly informative spatial visualizations."
    },
    blobColor: "blue",
    imagePosition: "right"
  }
];

export const expertisePillars = [
  {
    id: 1,
    icon: "Map",
    title: { id: "Analisis Spasial", en: "Spatial Analysis" },
    description: {
      id: "Pemrosesan data vektor & raster, buffer, overlay, dan pemodelan kesesuaian lahan menggunakan ArcGIS Pro & QGIS.",
      en: "Vector & raster data processing, buffering, overlay, and land suitability modeling using ArcGIS Pro & QGIS."
    },
    tags: ["ArcGIS Pro", "QGIS", "Overlay Analysis"]
  },
  {
    id: 2,
    icon: "Compass",
    title: { id: "Kartografi & Layout", en: "Cartography & Layout" },
    description: {
      id: "Desain layout peta tematik, peta dasar skala presisi tinggi (1:5.000), dan skema hidrologi berstandar teknis.",
      en: "High-precision base map layout design (1:5,000 scale), thematic maps, and hydrological schemas adhering to technical standards."
    },
    tags: ["Layouting", "Peta RDTR", "Peta Tematik"]
  },
  {
    id: 3,
    icon: "Layers",
    title: { id: "Penginderaan Jauh", en: "Remote Sensing" },
    description: {
      id: "Interpretasi citra satelit, ekstraksi tutupan lahan, pemetaan kebencanaan, dan analisis perubahan ruang secara berkala.",
      en: "Satellite image interpretation, land cover extraction, disaster risk mapping, and spatio-temporal change analysis."
    },
    tags: ["Remote Sensing", "Tutupan Lahan", "Citra Satelit"]
  }
];
