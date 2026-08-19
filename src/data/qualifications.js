export const educationList = [
  {
    id: 1,
    degree: {
      id: "S1 Sains Informasi Geografi",
      en: "B.Sc. Geographic Information Science"
    },
    institution: "Universitas Pendidikan Indonesia",
    period: "2022 - 2026 (Expected)",
    gpa: "IPK 3.75 / 4.00",
    courses: {
      id: ["Sistem Informasi Geografi", "Penginderaan Jauh", "Kartografi", "Survei Pemetaan"],
      en: ["Geographic Information Systems", "Remote Sensing", "Cartography", "Survey Mapping"]
    }
  },
  {
    id: 2,
    degree: {
      id: "SMA MIPA (Matematika & IPA)",
      en: "High School Diploma - Natural Sciences"
    },
    institution: "SMA SUMATRA 40 KOTA BANDUNG",
    period: "2018 - 2021",
    gpa: null,
    courses: {
      id: ["Matematika", "Fisika", "Geografi Dasar"],
      en: ["Mathematics", "Physics", "Basic Geography"]
    }
  }
];

export const certificationList = [
  {
    id: 1,
    title: "GIS Mastery: Spatial Data, Remote Sensing, Decision Support",
    issuer: "Coursera",
    date: "Desember 2025"
  },
  {
    id: 2,
    title: "GIS: Geographic Information Systems for Sustainability",
    issuer: "University of Michigan via Coursera",
    date: "Desember 2025"
  },
  {
    id: 3,
    title: "Operator Utama Sistem Informasi Geografis",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "September 2025"
  }
];

export const organizationsList = [
  {
    id: 1,
    role: {
      id: "Anggota Muda",
      en: "Junior Member"
    },
    name: "PERHIMPUNAN MAHASISWA BANDUNG (PMB 1948)",
    period: "Agustus 2024 - Sekarang"
  },
  {
    id: 2,
    role: {
      id: "Ketua Biro Politik, Hukum & SDM",
      en: "Head of Politics, Law & HR Bureau"
    },
    name: "INTELLIGENCE MAGNIFICENT OF GIS (IMAGIS)",
    period: "Mei 2024 - Februari 2025"
  }
];

export const coreSkillsData = [
  {
    category: { id: "Software GIS", en: "GIS Software" },
    items: ["ArcMap", "ArcGIS Pro", "QGIS"]
  },
  {
    category: { id: "Kompetensi Spasial", en: "Spatial Competencies" },
    items: ["Spatial Data Processing", "Map Visualization", "Digitizing & Topology", "Remote Sensing"]
  },
  {
    category: { id: "Bahasa & Soft Skills", en: "Languages & Soft Skills" },
    items: ["English (Speaking & Writing)", "Public Speaking", "Leadership", "Time Management"]
  }
];
