// Mock data for the Health Test Booking Application

export const tests = [
    {
        id: 1,
        name: "Complete Blood Count (CBC)",
        description: "Comprehensive blood test to evaluate overall health and detect disorders",
        price: 399,
        originalPrice: 599,
        discount: 33,
        labId: 1,
        labName: "PathLabs",
        rating: 4.5,
        homeCollection: true,
        preparationInstructions: "No fasting required. Can be done any time of the day.",
        sampleType: "Blood",
        reportDeliveryTime: "6 hours",
        parameters: ["Hemoglobin", "RBC Count", "WBC Count", "Platelet Count", "MCV", "MCH", "MCHC"],
        category: "Basic",
        popular: true,
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        name: "Thyroid Profile Total (T3, T4, TSH)",
        description: "Complete thyroid function test to check thyroid hormone levels",
        price: 450,
        originalPrice: 750,
        discount: 40,
        labId: 2,
        labName: "Dr. Lal PathLabs",
        rating: 4.7,
        homeCollection: true,
        preparationInstructions: "No special preparation needed",
        sampleType: "Blood",
        reportDeliveryTime: "12 hours",
        parameters: ["T3 Total", "T4 Total", "TSH"],
        category: "Hormones",
        popular: true,
        image: "https://images.unsplash.com/photo-1530482054429-cc252adc4847?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        name: "HbA1c (Glycated Hemoglobin)",
        description: "Diabetes monitoring test - 3 month average blood sugar level",
        price: 350,
        originalPrice: 500,
        discount: 30,
        labId: 1,
        labName: "PathLabs",
        rating: 4.6,
        homeCollection: true,
        preparationInstructions: "No fasting required",
        sampleType: "Blood",
        reportDeliveryTime: "24 hours",
        parameters: ["HbA1c"],
        category: "Diabetes",
        popular: true,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        name: "Lipid Profile",
        description: "Cholesterol test to assess risk of cardiovascular disease",
        price: 500,
        originalPrice: 800,
        discount: 38,
        labId: 3,
        labName: "Metropolis Healthcare",
        rating: 4.8,
        homeCollection: true,
        preparationInstructions: "12-14 hours fasting required",
        sampleType: "Blood",
        reportDeliveryTime: "12 hours",
        parameters: ["Total Cholesterol", "HDL", "LDL", "VLDL", "Triglycerides", "TC/HDL Ratio"],
        category: "Cardiac",
        popular: true,
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 5,
        name: "Liver Function Test (LFT)",
        description: "Comprehensive test to check liver health and function",
        price: 550,
        originalPrice: 900,
        discount: 39,
        labId: 2,
        labName: "Dr. Lal PathLabs",
        rating: 4.5,
        homeCollection: true,
        preparationInstructions: "8-12 hours fasting recommended",
        sampleType: "Blood",
        reportDeliveryTime: "24 hours",
        parameters: ["Bilirubin Total", "SGOT", "SGPT", "Alkaline Phosphatase", "Total Protein", "Albumin", "Globulin"],
        category: "Liver",
        popular: false,
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 6,
        name: "Kidney Function Test (KFT)",
        description: "Tests to evaluate kidney function and detect kidney disease",
        price: 450,
        originalPrice: 700,
        discount: 36,
        labId: 4,
        labName: "Thyrocare",
        rating: 4.4,
        homeCollection: true,
        preparationInstructions: "No fasting required",
        sampleType: "Blood",
        reportDeliveryTime: "24 hours",
        parameters: ["Urea", "Creatinine", "Uric Acid", "BUN", "Sodium", "Potassium", "Chloride"],
        category: "Kidney",
        popular: false,
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 7,
        name: "Vitamin D (25-OH)",
        description: "Test to measure vitamin D levels in blood",
        price: 900,
        originalPrice: 1500,
        discount: 40,
        labId: 1,
        labName: "PathLabs",
        rating: 4.6,
        homeCollection: true,
        preparationInstructions: "No special preparation needed",
        sampleType: "Blood",
        reportDeliveryTime: "48 hours",
        parameters: ["Vitamin D Total"],
        category: "Vitamins",
        popular: false,
        image: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 8,
        name: "Vitamin B12",
        description: "Test to check vitamin B12 levels",
        price: 700,
        originalPrice: 1000,
        discount: 30,
        labId: 3,
        labName: "Metropolis Healthcare",
        rating: 4.7,
        homeCollection: true,
        preparationInstructions: "No fasting required",
        sampleType: "Blood",
        reportDeliveryTime: "48 hours",
        parameters: ["Vitamin B12"],
        category: "Vitamins",
        popular: false,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 9,
        name: "Iron Studies",
        description: "Complete iron profile to detect iron deficiency or overload",
        price: 800,
        originalPrice: 1200,
        discount: 33,
        labId: 2,
        labName: "Dr. Lal PathLabs",
        rating: 4.5,
        homeCollection: true,
        preparationInstructions: "Morning sample preferred, no fasting required",
        sampleType: "Blood",
        reportDeliveryTime: "24 hours",
        parameters: ["Serum Iron", "TIBC", "Transferrin Saturation", "Ferritin"],
        category: "Minerals",
        popular: false,
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 10,
        name: "Urine Routine & Microscopy",
        description: "Complete urine analysis to detect urinary tract infections and kidney problems",
        price: 200,
        originalPrice: 300,
        discount: 33,
        labId: 4,
        labName: "Thyrocare",
        rating: 4.3,
        homeCollection: false,
        preparationInstructions: "First morning sample preferred",
        sampleType: "Urine",
        reportDeliveryTime: "6 hours",
        parameters: ["Physical Examination", "Chemical Examination", "Microscopic Examination"],
        category: "Basic",
        popular: false,
        image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 11,
        name: "Dengue NS1 Antigen",
        description: "Early detection test for dengue fever",
        price: 600,
        originalPrice: 900,
        discount: 33,
        labId: 1,
        labName: "PathLabs",
        rating: 4.6,
        homeCollection: true,
        preparationInstructions: "No special preparation needed",
        sampleType: "Blood",
        reportDeliveryTime: "6 hours",
        parameters: ["NS1 Antigen"],
        category: "Infectious Disease",
        popular: false,
        image: "https://images.unsplash.com/photo-1584036561566-b937402dc4b4?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 12,
        name: "COVID-19 RT-PCR",
        description: "Gold standard test for COVID-19 detection",
        price: 500,
        originalPrice: 800,
        discount: 38,
        labId: 3,
        labName: "Metropolis Healthcare",
        rating: 4.8,
        homeCollection: true,
        preparationInstructions: "No eating/drinking 30 minutes before sample collection",
        sampleType: "Nasal/Throat Swab",
        reportDeliveryTime: "24 hours",
        parameters: ["SARS-CoV-2 RNA"],
        category: "Infectious Disease",
        popular: false,
        image: "https://images.unsplash.com/photo-1605684954998-685c79d6fe15?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 13,
        name: "Prostate Specific Antigen (PSA)",
        description: "Screening test for prostate health in men",
        price: 650,
        originalPrice: 1000,
        discount: 35,
        labId: 2,
        labName: "Dr. Lal PathLabs",
        rating: 4.5,
        homeCollection: true,
        preparationInstructions: "No ejaculation 48 hours before test",
        sampleType: "Blood",
        reportDeliveryTime: "24 hours",
        parameters: ["PSA Total"],
        category: "Men's Health",
        popular: false,
        image: "https://images.unsplash.com/photo-1631558506015-1804f7b487bb?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 14,
        name: "Pregnancy Test (Beta HCG)",
        description: "Blood test to confirm pregnancy",
        price: 400,
        originalPrice: 600,
        discount: 33,
        labId: 4,
        labName: "Thyrocare",
        rating: 4.4,
        homeCollection: true,
        preparationInstructions: "No special preparation needed",
        sampleType: "Blood",
        reportDeliveryTime: "6 hours",
        parameters: ["Beta HCG"],
        category: "Women's Health",
        popular: false,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 15,
        name: "Allergy Panel - Food",
        description: "Comprehensive test for common food allergies",
        price: 3500,
        originalPrice: 5000,
        discount: 30,
        labId: 3,
        labName: "Metropolis Healthcare",
        rating: 4.7,
        homeCollection: true,
        preparationInstructions: "No special preparation needed",
        sampleType: "Blood",
        reportDeliveryTime: "72 hours",
        parameters: ["IgE Antibodies for 50+ food items"],
        category: "Allergy",
        popular: false,
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000"
    }
];

export const healthPackages = [
    {
        id: 1,
        name: "Full Body Checkup - Basic",
        description: "Comprehensive health checkup covering all major organs",
        price: 1499,
        originalPrice: 3000,
        discount: 50,
        testsIncluded: 60,
        category: "Full Body",
        popular: true,
        tests: [1, 2, 3, 4, 5, 6],
        features: ["CBC", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid", "Diabetes"]
    },
    {
        id: 2,
        name: "Women's Health Package",
        description: "Specialized health package for women",
        price: 2499,
        originalPrice: 4500,
        discount: 44,
        testsIncluded: 75,
        category: "Women",
        popular: true,
        tests: [1, 2, 3, 4, 7, 8, 9],
        features: ["Hormone Profile", "Iron Studies", "Vitamin D", "Thyroid", "CBC", "Bone Health"]
    },
    {
        id: 3,
        name: "Senior Citizen Checkup",
        description: "Complete health package for seniors (60+ years)",
        price: 2999,
        originalPrice: 5000,
        discount: 40,
        testsIncluded: 85,
        category: "Senior Citizen",
        popular: true,
        tests: [1, 2, 3, 4, 5, 6, 7, 8],
        features: ["Cardiac Risk", "Diabetes", "Arthritis", "Kidney", "Liver", "Vitamins"]
    },
    {
        id: 4,
        name: "Cardiac Risk Assessment",
        description: "Heart health screening package",
        price: 1799,
        originalPrice: 3000,
        discount: 40,
        testsIncluded: 45,
        category: "Cardiac",
        popular: false,
        tests: [1, 4],
        features: ["Lipid Profile", "ECG", "hs-CRP", "Homocysteine", "Lipoprotein(a)"]
    },
    {
        id: 5,
        name: "Diabetes Screening Package",
        description: "Complete diabetes monitoring and risk assessment",
        price: 999,
        originalPrice: 1800,
        discount: 44,
        testsIncluded: 25,
        category: "Diabetes",
        popular: false,
        tests: [3],
        features: ["HbA1c", "Fasting Sugar", "PP Sugar", "Insulin Levels", "Kidney Function"]
    },
    {
        id: 6,
        name: "Fever Panel",
        description: "Comprehensive test for fever diagnosis",
        price: 1299,
        originalPrice: 2000,
        discount: 35,
        testsIncluded: 30,
        category: "Infectious Disease",
        popular: false,
        tests: [1, 11, 12],
        features: ["CBC", "Dengue", "Malaria", "Typhoid", "COVID-19"]
    },
    {
        id: 7,
        name: "Pregnancy Care Package",
        description: "Essential tests for expecting mothers",
        price: 2199,
        originalPrice: 3500,
        discount: 37,
        testsIncluded: 50,
        category: "Women",
        popular: false,
        tests: [1, 2, 14],
        features: ["CBC", "Thyroid", "Glucose", "Iron", "Infections Screening"]
    },
    {
        id: 8,
        name: "Men's Health Package",
        description: "Comprehensive health checkup for men",
        price: 2299,
        originalPrice: 4000,
        discount: 43,
        testsIncluded: 70,
        category: "Men's Health",
        popular: false,
        tests: [1, 2, 3, 4, 13],
        features: ["Testosterone", "PSA", "Lipid Profile", "Liver", "Kidney", "Vitamins"]
    },
    {
        id: 9,
        name: "Vitamin Deficiency Package",
        description: "Check for common vitamin deficiencies",
        price: 1899,
        originalPrice: 3000,
        discount: 37,
        testsIncluded: 15,
        category: "Vitamins",
        popular: false,
        tests: [7, 8],
        features: ["Vitamin D", "Vitamin B12", "Folate", "Vitamin B6"]
    },
    {
        id: 10,
        name: "Allergy Comprehensive Panel",
        description: "Complete allergy testing for food and environment",
        price: 4999,
        originalPrice: 8000,
        discount: 38,
        testsIncluded: 100,
        category: "Allergy",
        popular: false,
        tests: [15],
        features: ["Food Allergies", "Environmental Allergies", "Drug Allergies"]
    }
];

export const labs = [
    {
        id: 1,
        name: "PathLabs",
        image: "https://images.unsplash.com/photo-1581093458891-9f30e54d3088?auto=format&fit=crop&q=80&w=1000",
        rating: 4.5,
        reviewsCount: 2340,
        distance: "1.2 km",
        testsAvailable: 450,
        homeCollection: true,
        address: "123 MG Road, Sector 15, New Delhi - 110001",
        about: "PathLabs is one of India's leading diagnostic chains with state-of-the-art facilities and NABL accreditation.",
        timings: "Mon-Sat: 7:00 AM - 9:00 PM, Sun: 8:00 AM - 6:00 PM",
        photos: 12,
        accreditation: ["NABL", "CAP", "ISO 9001:2015"]
    },
    {
        id: 2,
        name: "Dr. Lal PathLabs",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        rating: 4.7,
        reviewsCount: 3120,
        distance: "2.5 km",
        testsAvailable: 520,
        homeCollection: true,
        address: "456 Nehru Place, South Delhi - 110019",
        about: "Dr. Lal PathLabs is a trusted name in diagnostics with over 200 labs across India and advanced testing facilities.",
        timings: "Mon-Sun: 6:30 AM - 10:00 PM",
        photos: 18,
        accreditation: ["NABL", "CAP", "ISO 15189"]
    },
    {
        id: 3,
        name: "Metropolis Healthcare",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000",
        rating: 4.8,
        reviewsCount: 4250,
        distance: "0.8 km",
        testsAvailable: 600,
        homeCollection: true,
        address: "789 Connaught Place, Central Delhi - 110001",
        about: "Metropolis Healthcare is a leading diagnostics company with cutting-edge technology and expert pathologists.",
        timings: "Mon-Sun: 7:00 AM - 9:00 PM",
        photos: 25,
        accreditation: ["NABL", "CAP", "ISO 9001:2015", "ISO 15189"]
    },
    {
        id: 4,
        name: "Thyrocare",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
        rating: 4.4,
        reviewsCount: 1890,
        distance: "3.2 km",
        testsAvailable: 380,
        homeCollection: true,
        address: "321 Lajpat Nagar, South Delhi - 110024",
        about: "Thyrocare offers affordable and accurate diagnostic services with quick turnaround time.",
        timings: "Mon-Sat: 7:00 AM - 8:00 PM, Sun: 8:00 AM - 5:00 PM",
        photos: 10,
        accreditation: ["NABL", "ISO 9001:2015"]
    },
    {
        id: 5,
        name: "SRL Diagnostics",
        image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1000",
        rating: 4.6,
        reviewsCount: 2780,
        distance: "1.8 km",
        testsAvailable: 480,
        homeCollection: true,
        address: "567 Saket, South Delhi - 110017",
        about: "SRL Diagnostics is known for its comprehensive test menu and reliable results with international standards.",
        timings: "Mon-Sun: 6:00 AM - 10:00 PM",
        photos: 15,
        accreditation: ["NABL", "CAP", "ISO 15189"]
    },
    {
        id: 6,
        name: "Vijaya Diagnostic Centre",
        image: "https://images.unsplash.com/photo-1583912267550-d44d991b9847?auto=format&fit=crop&q=80&w=1000",
        rating: 4.5,
        reviewsCount: 1560,
        distance: "4.5 km",
        testsAvailable: 420,
        homeCollection: true,
        address: "890 Dwarka, West Delhi - 110075",
        about: "Vijaya Diagnostic Centre provides quality diagnostic services with experienced staff and modern equipment.",
        timings: "Mon-Sat: 7:30 AM - 8:30 PM, Sun: 8:00 AM - 4:00 PM",
        photos: 8,
        accreditation: ["NABL", "ISO 9001:2015"]
    },
    {
        id: 7,
        name: "Apollo Diagnostics",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
        rating: 4.7,
        reviewsCount: 3450,
        distance: "2.1 km",
        testsAvailable: 550,
        homeCollection: true,
        address: "234 Vasant Vihar, South Delhi - 110057",
        about: "Apollo Diagnostics, part of Apollo Hospitals, offers world-class diagnostic services with expert consultation.",
        timings: "Mon-Sun: 6:00 AM - 10:00 PM",
        photos: 20,
        accreditation: ["NABL", "CAP", "JCI", "ISO 15189"]
    },
    {
        id: 8,
        name: "Suburban Diagnostics",
        image: "https://images.unsplash.com/photo-1666214278486-4447432095ce?auto=format&fit=crop&q=80&w=1000",
        rating: 4.6,
        reviewsCount: 2100,
        distance: "3.8 km",
        testsAvailable: 460,
        homeCollection: true,
        address: "678 Rohini, North Delhi - 110085",
        about: "Suburban Diagnostics is committed to providing accurate and timely diagnostic services with patient care focus.",
        timings: "Mon-Sat: 7:00 AM - 9:00 PM, Sun: 8:00 AM - 6:00 PM",
        photos: 12,
        accreditation: ["NABL", "ISO 9001:2015"]
    }
];

export const familyMembers = [
    {
        id: 1,
        name: "Rajesh Kumar",
        relation: "Self",
        age: 35,
        gender: "Male",
        phone: "+91 9876543210",
        bloodGroup: "O+",
        dob: "1989-05-15"
    },
    {
        id: 2,
        name: "Priya Kumar",
        relation: "Wife",
        age: 32,
        gender: "Female",
        phone: "+91 9876543211",
        bloodGroup: "A+",
        dob: "1992-08-22"
    },
    {
        id: 3,
        name: "Aarav Kumar",
        relation: "Son",
        age: 8,
        gender: "Male",
        phone: "",
        bloodGroup: "O+",
        dob: "2016-03-10"
    },
    {
        id: 4,
        name: "Ananya Kumar",
        relation: "Daughter",
        age: 5,
        gender: "Female",
        phone: "",
        bloodGroup: "A+",
        dob: "2019-11-28"
    },
    {
        id: 5,
        name: "Ramesh Kumar",
        relation: "Father",
        age: 65,
        gender: "Male",
        phone: "+91 9876543212",
        bloodGroup: "B+",
        dob: "1959-01-20"
    }
];

export const bookings = [
    {
        id: "BK001234",
        date: "2026-01-15",
        time: "09:00 AM",
        tests: ["Complete Blood Count (CBC)", "Thyroid Profile"],
        packageName: null,
        labName: "PathLabs",
        labId: 1,
        status: "upcoming",
        appointmentType: "Home Collection",
        address: "123 Green Park, New Delhi - 110016",
        patientName: "Rajesh Kumar",
        patientId: 1,
        price: 849,
        paymentStatus: "Paid",
        sampleCollectorName: "Amit Sharma",
        sampleCollectorPhone: "+91 9876501234",
        sampleCollectorPhoto: "https://via.placeholder.com/100x100?text=AS"
    },
    {
        id: "BK001235",
        date: "2026-01-12",
        time: "10:30 AM",
        tests: [],
        packageName: "Full Body Checkup - Basic",
        labName: "Dr. Lal PathLabs",
        labId: 2,
        status: "completed",
        appointmentType: "Lab Visit",
        address: "456 Nehru Place, South Delhi - 110019",
        patientName: "Priya Kumar",
        patientId: 2,
        price: 1499,
        paymentStatus: "Paid",
        reportAvailable: true
    },
    {
        id: "BK001236",
        date: "2026-01-10",
        time: "08:00 AM",
        tests: ["HbA1c (Glycated Hemoglobin)", "Lipid Profile"],
        packageName: null,
        labName: "Metropolis Healthcare",
        labId: 3,
        status: "completed",
        appointmentType: "Home Collection",
        address: "123 Green Park, New Delhi - 110016",
        patientName: "Ramesh Kumar",
        patientId: 5,
        price: 850,
        paymentStatus: "Paid",
        reportAvailable: true
    },
    {
        id: "BK001237",
        date: "2026-01-08",
        time: "11:00 AM",
        tests: ["Vitamin D (25-OH)"],
        packageName: null,
        labName: "Thyrocare",
        labId: 4,
        status: "cancelled",
        appointmentType: "Lab Visit",
        address: "321 Lajpat Nagar, South Delhi - 110024",
        patientName: "Rajesh Kumar",
        patientId: 1,
        price: 900,
        paymentStatus: "Refunded",
        cancellationReason: "Cancelled by user"
    },
    {
        id: "BK001238",
        date: "2026-01-05",
        time: "09:30 AM",
        tests: [],
        packageName: "Women's Health Package",
        labName: "PathLabs",
        labId: 1,
        status: "completed",
        appointmentType: "Home Collection",
        address: "123 Green Park, New Delhi - 110016",
        patientName: "Priya Kumar",
        patientId: 2,
        price: 2499,
        paymentStatus: "Paid",
        reportAvailable: true
    },
    {
        id: "BK001239",
        date: "2025-12-28",
        time: "10:00 AM",
        tests: ["Complete Blood Count (CBC)"],
        packageName: null,
        labName: "Metropolis Healthcare",
        labId: 3,
        status: "completed",
        appointmentType: "Lab Visit",
        address: "789 Connaught Place, Central Delhi - 110001",
        patientName: "Aarav Kumar",
        patientId: 3,
        price: 399,
        paymentStatus: "Paid",
        reportAvailable: true
    },
    {
        id: "BK001240",
        date: "2025-12-20",
        time: "08:30 AM",
        tests: [],
        packageName: "Senior Citizen Checkup",
        labName: "Dr. Lal PathLabs",
        labId: 2,
        status: "completed",
        appointmentType: "Home Collection",
        address: "789 Sector 12, Noida - 201301",
        patientName: "Ramesh Kumar",
        patientId: 5,
        price: 2999,
        paymentStatus: "Paid",
        reportAvailable: true
    },
    {
        id: "BK001241",
        date: "2026-01-18",
        time: "02:00 PM",
        tests: ["Liver Function Test (LFT)"],
        packageName: null,
        labName: "SRL Diagnostics",
        labId: 5,
        status: "upcoming",
        appointmentType: "Lab Visit",
        address: "567 Saket, South Delhi - 110017",
        patientName: "Rajesh Kumar",
        patientId: 1,
        price: 550,
        paymentStatus: "Paid"
    },
    {
        id: "BK001242",
        date: "2025-12-15",
        time: "09:00 AM",
        tests: ["Iron Studies"],
        packageName: null,
        labName: "PathLabs",
        labId: 1,
        status: "completed",
        appointmentType: "Home Collection",
        address: "123 Green Park, New Delhi - 110016",
        patientName: "Priya Kumar",
        patientId: 2,
        price: 800,
        paymentStatus: "Paid",
        reportAvailable: true
    },
    {
        id: "BK001243",
        date: "2025-12-10",
        time: "10:30 AM",
        tests: ["Kidney Function Test (KFT)"],
        packageName: null,
        labName: "Thyrocare",
        labId: 4,
        status: "completed",
        appointmentType: "Lab Visit",
        address: "321 Lajpat Nagar, South Delhi - 110024",
        patientName: "Ramesh Kumar",
        patientId: 5,
        price: 450,
        paymentStatus: "Paid",
        reportAvailable: true
    }
];

export const reports = [
    {
        id: "RPT001234",
        bookingId: "BK001235",
        testName: "Full Body Checkup - Basic",
        date: "2026-01-12",
        labName: "Dr. Lal PathLabs",
        labId: 2,
        patientName: "Priya Kumar",
        patientId: 2,
        status: "normal",
        parameters: [
            { name: "Hemoglobin", value: "13.5", unit: "g/dL", referenceRange: "12.0-15.0", status: "normal" },
            { name: "RBC Count", value: "4.8", unit: "million/μL", referenceRange: "4.0-5.5", status: "normal" },
            { name: "WBC Count", value: "7.2", unit: "thousand/μL", referenceRange: "4.0-11.0", status: "normal" },
            { name: "Platelet Count", value: "250", unit: "thousand/μL", referenceRange: "150-400", status: "normal" },
            { name: "Total Cholesterol", value: "180", unit: "mg/dL", referenceRange: "<200", status: "normal" },
            { name: "HDL Cholesterol", value: "55", unit: "mg/dL", referenceRange: ">40", status: "normal" },
            { name: "LDL Cholesterol", value: "110", unit: "mg/dL", referenceRange: "<130", status: "normal" },
            { name: "Triglycerides", value: "120", unit: "mg/dL", referenceRange: "<150", status: "normal" }
        ]
    },
    {
        id: "RPT001235",
        bookingId: "BK001236",
        testName: "HbA1c & Lipid Profile",
        date: "2026-01-10",
        labName: "Metropolis Healthcare",
        labId: 3,
        patientName: "Ramesh Kumar",
        patientId: 5,
        status: "attention",
        parameters: [
            { name: "HbA1c", value: "6.8", unit: "%", referenceRange: "<5.7", status: "high" },
            { name: "Total Cholesterol", value: "245", unit: "mg/dL", referenceRange: "<200", status: "high" },
            { name: "HDL Cholesterol", value: "38", unit: "mg/dL", referenceRange: ">40", status: "low" },
            { name: "LDL Cholesterol", value: "165", unit: "mg/dL", referenceRange: "<130", status: "high" },
            { name: "Triglycerides", value: "210", unit: "mg/dL", referenceRange: "<150", status: "high" }
        ]
    },
    {
        id: "RPT001236",
        bookingId: "BK001238",
        testName: "Women's Health Package",
        date: "2026-01-05",
        labName: "PathLabs",
        labId: 1,
        patientName: "Priya Kumar",
        patientId: 2,
        status: "normal",
        parameters: [
            { name: "Hemoglobin", value: "12.8", unit: "g/dL", referenceRange: "12.0-15.0", status: "normal" },
            { name: "TSH", value: "2.5", unit: "μIU/mL", referenceRange: "0.5-5.0", status: "normal" },
            { name: "T3", value: "1.2", unit: "ng/mL", referenceRange: "0.8-2.0", status: "normal" },
            { name: "T4", value: "8.5", unit: "μg/dL", referenceRange: "5.0-12.0", status: "normal" },
            { name: "Vitamin D", value: "32", unit: "ng/mL", referenceRange: "30-100", status: "normal" },
            { name: "Serum Iron", value: "85", unit: "μg/dL", referenceRange: "60-170", status: "normal" }
        ]
    },
    {
        id: "RPT001237",
        bookingId: "BK001239",
        testName: "Complete Blood Count (CBC)",
        date: "2025-12-28",
        labName: "Metropolis Healthcare",
        labId: 3,
        patientName: "Aarav Kumar",
        patientId: 3,
        status: "normal",
        parameters: [
            { name: "Hemoglobin", value: "12.5", unit: "g/dL", referenceRange: "11.5-15.5", status: "normal" },
            { name: "RBC Count", value: "4.5", unit: "million/μL", referenceRange: "4.0-5.5", status: "normal" },
            { name: "WBC Count", value: "8.0", unit: "thousand/μL", referenceRange: "4.5-13.5", status: "normal" },
            { name: "Platelet Count", value: "280", unit: "thousand/μL", referenceRange: "150-450", status: "normal" }
        ]
    },
    {
        id: "RPT001238",
        bookingId: "BK001240",
        testName: "Senior Citizen Checkup",
        date: "2025-12-20",
        labName: "Dr. Lal PathLabs",
        labId: 2,
        patientName: "Ramesh Kumar",
        patientId: 5,
        status: "attention",
        parameters: [
            { name: "Hemoglobin", value: "11.2", unit: "g/dL", referenceRange: "13.0-17.0", status: "low" },
            { name: "Fasting Blood Sugar", value: "128", unit: "mg/dL", referenceRange: "70-100", status: "high" },
            { name: "Creatinine", value: "1.4", unit: "mg/dL", referenceRange: "0.7-1.3", status: "high" },
            { name: "Uric Acid", value: "7.8", unit: "mg/dL", referenceRange: "3.5-7.2", status: "high" },
            { name: "Vitamin D", value: "18", unit: "ng/mL", referenceRange: "30-100", status: "low" }
        ]
    }
];

export const offers = [
    {
        id: 1,
        code: "HEALTH50",
        title: "Flat 50% Off on Full Body Checkup",
        description: "Get 50% discount on all full body checkup packages",
        discount: 50,
        discountType: "percentage",
        minOrderValue: 1000,
        maxDiscount: 1500,
        validTill: "2026-01-31",
        applicableOn: "Full Body Packages",
        termsAndConditions: "Valid on packages worth ₹1000 and above. Cannot be combined with other offers."
    },
    {
        id: 2,
        code: "FIRST100",
        title: "₹100 Off on First Booking",
        description: "New users get ₹100 off on their first test booking",
        discount: 100,
        discountType: "flat",
        minOrderValue: 500,
        maxDiscount: 100,
        validTill: "2026-02-28",
        applicableOn: "All Tests",
        termsAndConditions: "Valid only for new users. Minimum order value ₹500."
    },
    {
        id: 3,
        code: "CARDIAC30",
        title: "30% Off on Cardiac Tests",
        description: "Save 30% on all heart health tests and packages",
        discount: 30,
        discountType: "percentage",
        minOrderValue: 800,
        maxDiscount: 1000,
        validTill: "2026-01-25",
        applicableOn: "Cardiac Tests",
        termsAndConditions: "Applicable on cardiac risk assessment and related tests only."
    },
    {
        id: 4,
        code: "WOMEN40",
        title: "40% Off Women's Health",
        description: "Special discount on women's health packages",
        discount: 40,
        discountType: "percentage",
        minOrderValue: 1500,
        maxDiscount: 2000,
        validTill: "2026-01-30",
        applicableOn: "Women's Health Packages",
        termsAndConditions: "Valid on women's health packages only. Not applicable on individual tests."
    },
    {
        id: 5,
        code: "VITAMIN200",
        title: "₹200 Off on Vitamin Tests",
        description: "Get ₹200 discount on vitamin deficiency packages",
        discount: 200,
        discountType: "flat",
        minOrderValue: 1000,
        maxDiscount: 200,
        validTill: "2026-02-15",
        applicableOn: "Vitamin Tests",
        termsAndConditions: "Applicable on vitamin D, B12, and deficiency packages."
    },
    {
        id: 6,
        code: "SENIOR25",
        title: "25% Off Senior Citizen Checkup",
        description: "Special discount for senior citizens (60+ years)",
        discount: 25,
        discountType: "percentage",
        minOrderValue: 2000,
        maxDiscount: 1500,
        validTill: "2026-03-31",
        applicableOn: "Senior Citizen Packages",
        termsAndConditions: "Valid for patients aged 60 years and above."
    },
    {
        id: 7,
        code: "DIABETES35",
        title: "35% Off Diabetes Screening",
        description: "Save on diabetes monitoring tests",
        discount: 35,
        discountType: "percentage",
        minOrderValue: 500,
        maxDiscount: 800,
        validTill: "2026-01-28",
        applicableOn: "Diabetes Tests",
        termsAndConditions: "Applicable on HbA1c, fasting sugar, and diabetes packages."
    },
    {
        id: 8,
        code: "FAMILY500",
        title: "₹500 Off on Family Packages",
        description: "Book for 3+ family members and save ₹500",
        discount: 500,
        discountType: "flat",
        minOrderValue: 3000,
        maxDiscount: 500,
        validTill: "2026-02-20",
        applicableOn: "All Packages",
        termsAndConditions: "Valid when booking for 3 or more family members in single order."
    },
    {
        id: 9,
        code: "THYROID45",
        title: "45% Off Thyroid Tests",
        description: "Maximum savings on thyroid profile tests",
        discount: 45,
        discountType: "percentage",
        minOrderValue: 400,
        maxDiscount: 600,
        validTill: "2026-01-22",
        applicableOn: "Thyroid Tests",
        termsAndConditions: "Applicable on T3, T4, TSH tests and thyroid packages."
    },
    {
        id: 10,
        code: "HOMECOLLECT",
        title: "Free Home Collection",
        description: "No charges for home sample collection",
        discount: 0,
        discountType: "free_service",
        minOrderValue: 300,
        maxDiscount: 0,
        validTill: "2026-12-31",
        applicableOn: "All Tests",
        termsAndConditions: "Free home collection on orders above ₹300. Service charges waived."
    }
];

export const transactions = [
    {
        id: "TXN001234",
        date: "2026-01-12",
        type: "debit",
        amount: 1499,
        description: "Payment for Full Body Checkup - Basic",
        bookingId: "BK001235",
        status: "success"
    },
    {
        id: "TXN001235",
        date: "2026-01-10",
        type: "debit",
        amount: 850,
        description: "Payment for HbA1c & Lipid Profile",
        bookingId: "BK001236",
        status: "success"
    },
    {
        id: "TXN001236",
        date: "2026-01-09",
        type: "credit",
        amount: 500,
        description: "Wallet recharge",
        bookingId: null,
        status: "success"
    },
    {
        id: "TXN001237",
        date: "2026-01-08",
        type: "credit",
        amount: 900,
        description: "Refund for cancelled booking",
        bookingId: "BK001237",
        status: "success"
    },
    {
        id: "TXN001238",
        date: "2026-01-05",
        type: "debit",
        amount: 2499,
        description: "Payment for Women's Health Package",
        bookingId: "BK001238",
        status: "success"
    },
    {
        id: "TXN001239",
        date: "2026-01-03",
        type: "credit",
        amount: 1000,
        description: "Wallet recharge",
        bookingId: null,
        status: "success"
    },
    {
        id: "TXN001240",
        date: "2025-12-28",
        type: "debit",
        amount: 399,
        description: "Payment for Complete Blood Count (CBC)",
        bookingId: "BK001239",
        status: "success"
    },
    {
        id: "TXN001241",
        date: "2025-12-20",
        type: "debit",
        amount: 2999,
        description: "Payment for Senior Citizen Checkup",
        bookingId: "BK001240",
        status: "success"
    },
    {
        id: "TXN001242",
        date: "2025-12-15",
        type: "debit",
        amount: 800,
        description: "Payment for Iron Studies",
        bookingId: "BK001242",
        status: "success"
    },
    {
        id: "TXN001243",
        date: "2025-12-10",
        type: "debit",
        amount: 450,
        description: "Payment for Kidney Function Test",
        bookingId: "BK001243",
        status: "success"
    }
];

export const notifications = [
    {
        id: 1,
        category: "Reports",
        icon: "FileText",
        title: "Report Ready",
        description: "Your Full Body Checkup report is now available",
        time: "2 hours ago",
        read: false
    },
    {
        id: 2,
        category: "Bookings",
        icon: "Calendar",
        title: "Upcoming Appointment",
        description: "Your test is scheduled for tomorrow at 9:00 AM",
        time: "5 hours ago",
        read: false
    },
    {
        id: 3,
        category: "Offers",
        icon: "Tag",
        title: "New Offer Available",
        description: "Get 50% off on Full Body Checkup packages",
        time: "1 day ago",
        read: true
    },
    {
        id: 4,
        category: "Reminders",
        icon: "Bell",
        title: "Fasting Reminder",
        description: "Remember to fast 12 hours before your test tomorrow",
        time: "1 day ago",
        read: false
    },
    {
        id: 5,
        category: "Bookings",
        icon: "CheckCircle",
        title: "Booking Confirmed",
        description: "Your booking BK001234 has been confirmed",
        time: "2 days ago",
        read: true
    },
    {
        id: 6,
        category: "Reports",
        icon: "AlertCircle",
        title: "Attention Required",
        description: "Some parameters in your report need attention",
        time: "3 days ago",
        read: true
    },
    {
        id: 7,
        category: "Offers",
        icon: "Gift",
        title: "Referral Reward",
        description: "You earned ₹100 from your referral",
        time: "4 days ago",
        read: true
    },
    {
        id: 8,
        category: "Bookings",
        icon: "Truck",
        title: "Sample Collector On The Way",
        description: "Amit will reach your location in 15 minutes",
        time: "5 days ago",
        read: true
    },
    {
        id: 9,
        category: "Reminders",
        icon: "Calendar",
        title: "Annual Checkup Due",
        description: "It's time for your annual health checkup",
        time: "1 week ago",
        read: true
    },
    {
        id: 10,
        category: "Offers",
        icon: "Percent",
        title: "Limited Time Offer",
        description: "40% off on Women's Health Package - Ends today",
        time: "1 week ago",
        read: true
    }
];

export const doctors = [
    {
        id: 1,
        name: "Dr. Amit Sharma",
        photo: "https://via.placeholder.com/150x150?text=Dr+Amit",
        specialization: "General Physician",
        experience: "15 years",
        rating: 4.8,
        reviewsCount: 1250,
        consultationFee: 500,
        languages: ["Hindi", "English"],
        available: true
    },
    {
        id: 2,
        name: "Dr. Priya Verma",
        photo: "https://via.placeholder.com/150x150?text=Dr+Priya",
        specialization: "Endocrinologist",
        experience: "12 years",
        rating: 4.9,
        reviewsCount: 980,
        consultationFee: 800,
        languages: ["Hindi", "English"],
        available: true
    },
    {
        id: 3,
        name: "Dr. Rajesh Gupta",
        photo: "https://via.placeholder.com/150x150?text=Dr+Rajesh",
        specialization: "Cardiologist",
        experience: "20 years",
        rating: 4.7,
        reviewsCount: 1560,
        consultationFee: 1000,
        languages: ["Hindi", "English", "Punjabi"],
        available: false
    },
    {
        id: 4,
        name: "Dr. Sneha Patel",
        photo: "https://via.placeholder.com/150x150?text=Dr+Sneha",
        specialization: "Gynecologist",
        experience: "10 years",
        rating: 4.8,
        reviewsCount: 890,
        consultationFee: 700,
        languages: ["Hindi", "English", "Gujarati"],
        available: true
    },
    {
        id: 5,
        name: "Dr. Vikram Singh",
        photo: "https://via.placeholder.com/150x150?text=Dr+Vikram",
        specialization: "Diabetologist",
        experience: "18 years",
        rating: 4.6,
        reviewsCount: 1120,
        consultationFee: 600,
        languages: ["Hindi", "English"],
        available: true
    }
];

export const healthMetrics = [
    {
        metric: "Blood Sugar",
        latestValue: 128,
        unit: "mg/dL",
        referenceRange: "70-100",
        status: "high",
        trend: "up",
        history: [
            { date: "2025-08-01", value: 95 },
            { date: "2025-09-01", value: 102 },
            { date: "2025-10-01", value: 110 },
            { date: "2025-11-01", value: 118 },
            { date: "2025-12-01", value: 125 },
            { date: "2026-01-01", value: 128 }
        ]
    },
    {
        metric: "Blood Pressure",
        latestValue: "130/85",
        unit: "mmHg",
        referenceRange: "120/80",
        status: "borderline",
        trend: "stable",
        history: [
            { date: "2025-08-01", value: "125/82" },
            { date: "2025-09-01", value: "128/84" },
            { date: "2025-10-01", value: "130/85" },
            { date: "2025-11-01", value: "128/83" },
            { date: "2025-12-01", value: "132/86" },
            { date: "2026-01-01", value: "130/85" }
        ]
    },
    {
        metric: "Cholesterol",
        latestValue: 245,
        unit: "mg/dL",
        referenceRange: "<200",
        status: "high",
        trend: "up",
        history: [
            { date: "2025-08-01", value: 210 },
            { date: "2025-09-01", value: 218 },
            { date: "2025-10-01", value: 225 },
            { date: "2025-11-01", value: 232 },
            { date: "2025-12-01", value: 238 },
            { date: "2026-01-01", value: 245 }
        ]
    },
    {
        metric: "Hemoglobin",
        latestValue: 11.2,
        unit: "g/dL",
        referenceRange: "13.0-17.0",
        status: "low",
        trend: "down",
        history: [
            { date: "2025-08-01", value: 12.8 },
            { date: "2025-09-01", value: 12.5 },
            { date: "2025-10-01", value: 12.0 },
            { date: "2025-11-01", value: 11.8 },
            { date: "2025-12-01", value: 11.5 },
            { date: "2026-01-01", value: 11.2 }
        ]
    }
];

export const faqs = [
    {
        id: 1,
        question: "How do I book a test?",
        answer: "You can book a test by searching for the test name, selecting your preferred lab, choosing a time slot, and completing the payment. You can also book health packages."
    },
    {
        id: 2,
        question: "Is home sample collection available?",
        answer: "Yes, we offer free home sample collection for most tests. Our trained phlebotomists will visit your home at your chosen time slot."
    },
    {
        id: 3,
        question: "How long does it take to get reports?",
        answer: "Report delivery time varies by test. Most routine tests are delivered within 6-24 hours, while specialized tests may take 48-72 hours."
    },
    {
        id: 4,
        question: "Can I cancel or reschedule my booking?",
        answer: "Yes, you can cancel or reschedule your booking up to 2 hours before the scheduled time. Full refund will be processed for cancellations."
    },
    {
        id: 5,
        question: "Are the labs certified?",
        answer: "Yes, all our partner labs are NABL certified and follow strict quality standards to ensure accurate results."
    },
    {
        id: 6,
        question: "How do I download my reports?",
        answer: "You can download your reports from the 'My Reports' section. Reports are available in PDF format and can be shared via email or WhatsApp."
    },
    {
        id: 7,
        question: "What payment methods are accepted?",
        answer: "We accept all major payment methods including UPI, Credit/Debit Cards, Net Banking, and Wallet. You can also choose Pay Later option."
    },
    {
        id: 8,
        question: "Can I book tests for my family members?",
        answer: "Yes, you can add family members to your account and book tests for them. Simply select the family member while booking."
    }
];

export const referralStats = {
    referralCode: "RAJESH2024",
    totalInvited: 15,
    totalJoined: 8,
    totalEarnings: 800,
    pendingEarnings: 200,
    referralHistory: [
        { name: "Amit Kumar", status: "Joined", earning: 100, date: "2026-01-10" },
        { name: "Priya Sharma", status: "Joined", earning: 100, date: "2026-01-08" },
        { name: "Rahul Verma", status: "Pending", earning: 0, date: "2026-01-05" },
        { name: "Sneha Gupta", status: "Joined", earning: 100, date: "2026-01-03" },
        { name: "Vikram Singh", status: "Joined", earning: 100, date: "2025-12-28" }
    ]
};

export const user = {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    gender: "Male",
    dob: "1989-05-15",
    bloodGroup: "O+",
    photo: "https://via.placeholder.com/150x150?text=RK",
    healthScore: 72,
    walletBalance: 1250,
    addresses: [
        {
            id: 1,
            type: "Home",
            address: "123 Green Park, New Delhi - 110016",
            landmark: "Near Green Park Metro Station",
            isDefault: true
        },
        {
            id: 2,
            type: "Office",
            address: "456 Cyber City, Gurugram - 122002",
            landmark: "Tower B, 5th Floor",
            isDefault: false
        }
    ]
};
