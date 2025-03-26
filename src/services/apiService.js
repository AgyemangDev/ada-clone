// This is a mock API service that simulates API calls
// Replace with actual API calls when available

// Mock data for disease predictions
const mockDiseases = {
  "headache fever": {
    disease: "Common Cold",
    confidence: 0.85,
    dangerLevel: "low",
    commonSymptoms: ["Headache", "Fever", "Runny nose", "Sore throat"],
    treatments: ["Rest and hydration", "Over-the-counter pain relievers", "Decongestants for nasal congestion"],
  },
  "chest pain shortness of breath": {
    disease: "Possible Heart Condition",
    confidence: 0.75,
    dangerLevel: "high",
    commonSymptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Dizziness"],
    treatments: ["Seek immediate medical attention", "Call emergency services", "Rest and try to stay calm"],
  },
  "abdominal pain nausea": {
    disease: "Gastroenteritis",
    confidence: 0.8,
    dangerLevel: "medium",
    commonSymptoms: ["Abdominal pain", "Nausea", "Vomiting", "Diarrhea"],
    treatments: ["Stay hydrated", "Eat bland foods", "Over-the-counter anti-nausea medication", "Rest"],
  },
  "persistent cough shortness of breath": {
    disease: "Bronchitis",
    confidence: 0.78,
    dangerLevel: "moderate",
    commonSymptoms: ["Persistent cough", "Shortness of breath", "Chest discomfort", "Fatigue"],
    "treatments": ["Cough suppressants", "Bronchodilators", "Plenty of fluids", "Rest"]
  },
  "severe headache nausea vision problems": {
    disease: "Migraine",
    confidence: 0.82,
    dangerLevel: "moderate",
    commonSymptoms: ["Severe headache", "Nausea", "Sensitivity to light", "Blurred vision"],
    "treatments": ["Pain relievers", "Avoiding triggers", "Rest in a dark room", "Caffeine intake (limited)"]
  },
  "chest pain sweating dizziness": {
    disease: "Heart Attack",
    confidence: 0.92,
    dangerLevel: "high",
    commonSymptoms: ["Chest pain", "Shortness of breath", "Sweating", "Dizziness"],
    "treatments": ["Emergency medical help", "Aspirin", "Oxygen therapy", "Nitroglycerin"]
  },
  "itchy red skin rash swelling": {
    disease: "Allergic Reaction",
    confidence: 0.75,
    dangerLevel: "moderate",
    commonSymptoms: ["Itchy skin", "Red rash", "Swelling", "Sneezing"],
    "treatments": ["Antihistamines", "Cold compress", "Avoiding allergen", "Corticosteroid creams"]
  },
  "frequent urination excessive thirst weight loss": {
    disease: "Diabetes Mellitus",
    confidence: 0.88,
    dangerLevel: "high",
    commonSymptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Fatigue"],
    "treatments": ["Insulin therapy", "Oral diabetes medications", "Healthy diet", "Regular exercise"]
  },
  "joint pain stiffness swelling": {
    disease: "Rheumatoid Arthritis",
    confidence: 0.79,
    dangerLevel: "moderate",
    commonSymptoms: ["Joint pain", "Stiffness", "Swelling", "Fatigue"],
    "treatments": ["Anti-inflammatory drugs", "Physical therapy", "Lifestyle changes", "Steroid injections"]
  },
  "abdominal pain nausea vomiting": {
    disease: "Gastritis",
    confidence: 0.81,
    dangerLevel: "moderate",
    commonSymptoms: ["Abdominal pain", "Nausea", "Vomiting", "Indigestion"],
    "treatments": ["Antacids", "Avoiding spicy food", "H. pylori eradication therapy", "Proton pump inhibitors"]
  },
  "yellow skin fatigue dark urine": {
    disease: "Hepatitis B",
    confidence: 0.85,
    dangerLevel: "high",
    commonSymptoms: ["Yellow skin (jaundice)", "Fatigue", "Dark urine", "Abdominal discomfort"],
    "treatments": ["Antiviral medications", "Liver function monitoring", "Rest", "Avoiding alcohol"]
  },
  "stiff neck fever confusion": {
    disease: "Meningitis",
    confidence: 0.91,
    dangerLevel: "high",
    commonSymptoms: ["Stiff neck", "Fever", "Severe headache", "Confusion"],
    "treatments": ["Antibiotics (for bacterial meningitis)", "Pain relievers", "Fluids", "Hospitalization"]
  },
  "uncontrollable shaking high fever muscle pain": {
    disease: "Malaria",
    confidence: 0.87,
    dangerLevel: "high",
    commonSymptoms: ["Chills", "High fever", "Sweating", "Muscle pain"],
    "treatments": ["Antimalarial medications", "Intravenous fluids", "Hospitalization (in severe cases)", "Avoiding mosquito exposure"]
  },
  "sore throat white patches swollen tonsils": {
    disease: "Strep Throat",
    confidence: 0.83,
    dangerLevel: "moderate",
    commonSymptoms: ["Sore throat", "White patches on tonsils", "Swollen lymph nodes", "Fever"],
    "treatments": ["Antibiotics", "Pain relievers", "Saltwater gargle", "Hydration"]
  },
  "blurry vision excessive thirst frequent urination": {
    disease: "Type 2 Diabetes",
    confidence: 0.86,
    dangerLevel: "high",
    commonSymptoms: ["Blurry vision", "Excessive thirst", "Frequent urination", "Fatigue"],
    "treatments": ["Blood sugar management", "Lifestyle changes", "Medication", "Insulin therapy (if needed)"]
  },
  "difficulty breathing wheezing chest tightness": {
    disease: "Asthma",
    confidence: 0.89,
    dangerLevel: "moderate",
    commonSymptoms: ["Wheezing", "Shortness of breath", "Coughing", "Chest tightness"],
    "treatments": ["Inhalers", "Bronchodilators", "Avoiding triggers", "Steroid therapy"]
  },
  "sudden facial drooping slurred speech weakness on one side": {
    disease: "Stroke",
    confidence: 0.95,
    dangerLevel: "high",
    commonSymptoms: ["Facial drooping", "Slurred speech", "Weakness on one side", "Loss of balance"],
    "treatments": ["Emergency medical care", "Blood clot removal", "Rehabilitation therapy", "Blood pressure management"]
  },
  "swollen joints morning stiffness fatigue": {
    disease: "Osteoarthritis",
    confidence: 0.82,
    dangerLevel: "moderate",
    commonSymptoms: ["Joint pain", "Stiffness", "Limited movement", "Swelling"],
    "treatments": ["Pain relievers", "Physical therapy", "Joint-friendly exercises", "Weight management"]
  },
  "burning sensation in chest acid reflux regurgitation": {
    disease: "Gastroesophageal Reflux Disease (GERD)",
    confidence: 0.87,
    dangerLevel: "moderate",
    commonSymptoms: ["Heartburn", "Acid reflux", "Chest pain", "Difficulty swallowing"],
    "treatments": ["Antacids", "Avoiding trigger foods", "Elevating head while sleeping", "Medication"]
  },
  "numbness tingling in hands muscle weakness": {
    disease: "Peripheral Neuropathy",
    confidence: 0.84,
    dangerLevel: "moderate",
    commonSymptoms: ["Numbness", "Tingling", "Weakness", "Burning pain"],
    "treatments": ["Nerve pain medication", "Vitamin supplementation", "Physical therapy", "Managing underlying condition"]
  },
  "intense fear heart palpitations sweating": {
    disease: "Panic Disorder",
    confidence: 0.81,
    dangerLevel: "low",
    commonSymptoms: ["Sudden fear", "Rapid heartbeat", "Sweating", "Shortness of breath"],
    "treatments": ["Cognitive behavioral therapy", "Anxiety medications", "Relaxation techniques", "Regular exercise"]
  },
  "chronic diarrhea weight loss abdominal cramps": {
    disease: "Crohn's Disease",
    confidence: 0.85,
    dangerLevel: "moderate",
    commonSymptoms: ["Diarrhea", "Weight loss", "Abdominal pain", "Fatigue"],
    "treatments": ["Anti-inflammatory medications", "Dietary adjustments", "Immune system suppressors", "Surgery (if needed)"]
  },
  "uncontrollable movements difficulty speaking memory loss": {
    disease: "Parkinson’s Disease",
    confidence: 0.90,
    dangerLevel: "high",
    commonSymptoms: ["Tremors", "Muscle rigidity", "Bradykinesia (slow movement)", "Postural instability"],
    "treatments": ["Levodopa medication", "Physical therapy", "Speech therapy", "Deep brain stimulation"]
  },
  "painful urination pelvic pain frequent urination": {
    disease: "Urinary Tract Infection (UTI)",
    confidence: 0.80,
    dangerLevel: "low",
    commonSymptoms: ["Burning sensation during urination", "Cloudy urine", "Strong-smelling urine", "Pelvic pain"],
    "treatments": ["Antibiotics", "Increased water intake", "Avoiding irritants", "Probiotics"]
  },
  "yellowing of the skin dark urine light stools": {
    disease: "Liver Disease",
    confidence: 0.88,
    dangerLevel: "high",
    commonSymptoms: ["Jaundice", "Abdominal swelling", "Fatigue", "Nausea"],
    "treatments": ["Liver function monitoring", "Avoiding alcohol", "Hepatitis treatment (if applicable)", "Liver transplant (severe cases)"]
  },
  "low energy hair loss brittle nails": {
    disease: "Iron Deficiency Anemia",
    confidence: 0.79,
    dangerLevel: "moderate",
    commonSymptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Cold hands and feet"],
    "treatments": ["Iron supplements", "Iron-rich diet", "Vitamin C intake", "Addressing underlying causes"]
  },
  "sudden high fever severe joint pain skin rash": {
    disease: "Dengue Fever",
    confidence: 0.91,
    dangerLevel: "high",
    commonSymptoms: ["High fever", "Severe muscle and joint pain", "Skin rash", "Headache"],
    "treatments": ["Hydration", "Pain relievers (avoiding NSAIDs)", "Monitoring platelet count", "Rest"]
  },
  "bone pain frequent fractures weakness": {
    disease: "Osteoporosis",
    confidence: 0.82,
    dangerLevel: "moderate",
    commonSymptoms: ["Bone pain", "Loss of height", "Fractures from minor falls", "Postural changes"],
    "treatments": ["Calcium and vitamin D supplementation", "Weight-bearing exercises", "Bone density medications", "Fall prevention"]
  },
  "abnormal bleeding easy bruising prolonged clotting time": {
    disease: "Hemophilia",
    confidence: 0.89,
    dangerLevel: "high",
    commonSymptoms: ["Excessive bleeding", "Joint pain", "Bruising easily", "Nosebleeds"],
    "treatments": ["Clotting factor replacement therapy", "Avoiding injury", "Regular monitoring", "Physical therapy"]
  },
  "persistent fatigue weight gain cold intolerance": {
    disease: "Hypothyroidism",
    confidence: 0.80,
    dangerLevel: "moderate",
    commonSymptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Dry skin"],
    "treatments": ["Thyroid hormone replacement", "Regular monitoring", "Dietary adjustments", "Exercise"]
  },
  "sudden weight loss rapid heartbeat tremors": {
    disease: "Hyperthyroidism",
    confidence: 0.87,
    dangerLevel: "moderate",
    commonSymptoms: ["Weight loss", "Rapid heartbeat", "Tremors", "Anxiety"],
    "treatments": ["Antithyroid medications", "Beta-blockers", "Radioactive iodine", "Surgical intervention"]
  },
  "ankle swelling shortness of breath fatigue": {
    disease: "Congestive Heart Failure",
    confidence: 0.90,
    dangerLevel: "high",
    commonSymptoms: ["Ankle swelling", "Shortness of breath", "Fatigue", "Rapid heartbeat"],
    "treatments": ["ACE inhibitors", "Diuretics", "Lifestyle modifications", "Beta-blockers"]
  },
  "chronic lower back pain leg numbness difficulty walking": {
    disease: "Herniated Disc",
    confidence: 0.84,
    dangerLevel: "moderate",
    commonSymptoms: ["Lower back pain", "Leg numbness", "Difficulty walking", "Muscle spasms"],
    "treatments": ["Physical therapy", "Pain relievers", "Anti-inflammatory drugs", "Surgery if needed"]
  },
  "irregular heartbeat chest discomfort dizziness": {
    disease: "Atrial Fibrillation",
    confidence: 0.88,
    dangerLevel: "high",
    commonSymptoms: ["Irregular heartbeat", "Chest discomfort", "Dizziness", "Fatigue"],
    "treatments": ["Blood thinners", "Rate control medications", "Electrical cardioversion", "Lifestyle changes"]
  },
  "abdominal pain localized to right lower quadrant nausea vomiting": {
    disease: "Acute Appendicitis",
    confidence: 0.92,
    dangerLevel: "high",
    commonSymptoms: ["Abdominal pain", "Nausea", "Vomiting", "Loss of appetite"],
    "treatments": ["Surgical removal", "Antibiotics", "Pain management", "Observation"]
  },
  "persistent lower back pain radiating to leg sharp shooting pain": {
    disease: "Sciatica",
    confidence: 0.83,
    dangerLevel: "moderate",
    commonSymptoms: ["Lower back pain", "Radiating leg pain", "Numbness", "Muscle weakness"],
    "treatments": ["Physical therapy", "Pain relievers", "Stretching exercises", "Epidural injections"]
  },
  "severe chest pain pressure radiating to left arm": {
    disease: "Angina Pectoris",
    confidence: 0.89,
    dangerLevel: "high",
    commonSymptoms: ["Chest pain", "Pressure in chest", "Pain radiating to left arm", "Shortness of breath"],
    "treatments": ["Nitroglycerin", "Beta-blockers", "Lifestyle modifications", "Surgical evaluation"]
  },
  "sudden onset intense joint pain redness swelling gout crystals": {
    disease: "Gout",
    confidence: 0.86,
    dangerLevel: "moderate",
    commonSymptoms: ["Intense joint pain", "Redness", "Swelling", "Stiffness"],
    "treatments": ["NSAIDs", "Colchicine", "Dietary adjustments", "Urate-lowering therapy"]
  },
  "chronic cough blood in sputum night sweats weight loss": {
    disease: "Tuberculosis",
    confidence: 0.93,
    dangerLevel: "high",
    commonSymptoms: ["Chronic cough", "Hemoptysis", "Night sweats", "Weight loss"],
    "treatments": ["Antitubercular medications", "Long-term antibiotic regimen", "Supportive care", "Isolation when needed"]
  },
  "persistent heartburn regurgitation chronic cough hoarseness": {
    disease: "Laryngopharyngeal Reflux (LPR)",
    confidence: 0.82,
    dangerLevel: "moderate",
    commonSymptoms: ["Heartburn", "Regurgitation", "Chronic cough", "Hoarseness"],
    "treatments": ["Dietary modifications", "Proton pump inhibitors", "Lifestyle changes", "Elevating head during sleep"]
  },
  "flashing vision eye pain halos around lights blurred vision": {
    disease: "Acute Angle-Closure Glaucoma",
    confidence: 0.91,
    dangerLevel: "high",
    commonSymptoms: ["Flashing vision", "Eye pain", "Halos around lights", "Blurred vision"],
    "treatments": ["Immediate eye drops", "Oral medications", "Laser therapy", "Surgical intervention"]
  },
  "severe ear pain hearing loss fluid drainage fever": {
    disease: "Acute Otitis Media",
    confidence: 0.85,
    dangerLevel: "moderate",
    commonSymptoms: ["Ear pain", "Hearing loss", "Fluid drainage", "Fever"],
    "treatments": ["Antibiotics", "Pain relievers", "Warm compress", "Observation"]
  }
}

// Mock healthcare services
const mockHealthcareServices = {
  hospital: [
    {
      id: 1,
      name: "General Hospital",
      address: "123 Main St",
      phone: "555-1234",
      rating: 4.5,
      distance: "1.2 miles",
      specialties: ["Emergency", "Cardiology", "Neurology"],
    },
    {
      id: 2,
      name: "Community Medical Center",
      address: "456 Oak Ave",
      phone: "555-5678",
      rating: 4.2,
      distance: "2.5 miles",
      specialties: ["Pediatrics", "Orthopedics", "Internal Medicine"],
    },
  ],
  pharmacy: [
    {
      id: 3,
      name: "City Pharmacy",
      address: "789 Elm St",
      phone: "555-9012",
      rating: 4.0,
      distance: "0.8 miles",
      hours: "8am - 10pm",
    },
    {
      id: 4,
      name: "Health Plus Drugstore",
      address: "321 Pine Rd",
      phone: "555-3456",
      rating: 4.3,
      distance: "1.5 miles",
      hours: "24 hours",
    },
  ],
  specialist: [
    {
      id: 5,
      name: "Dr. Smith - Cardiologist",
      address: "567 Maple Dr",
      phone: "555-7890",
      rating: 4.8,
      distance: "3.1 miles",
      specialty: "Cardiology",
    },
    {
      id: 6,
      name: "Dr. Johnson - Optometrist",
      address: "890 Cedar Ln",
      phone: "555-2345",
      rating: 4.6,
      distance: "2.2 miles",
      specialty: "Optometry",
    },
  ],
}

// Simulate API call for disease prediction
export const predictDisease = async (symptoms) => {
  await new Promise((resolve) => setTimeout(resolve, 5500));

  const inputSymptoms = symptoms.map(s => s.toLowerCase());

  let bestMatch = null;
  let highestMatchCount = 0;
  let highestMatchPercentage = 0; // Track the highest percentage of matching symptoms

  for (const key in mockDiseases) {
    const knownSymptoms = mockDiseases[key].commonSymptoms.map(s => s.toLowerCase()); // Use commonSymptoms from mockDiseases
    const matchCount = inputSymptoms.filter(symptom => knownSymptoms.includes(symptom)).length;
    const matchPercentage = knownSymptoms.length > 0 ? matchCount / knownSymptoms.length : 0; // Calculate percentage

    if (matchPercentage > highestMatchPercentage) {
      bestMatch = mockDiseases[key];
      highestMatchCount = matchCount;
      highestMatchPercentage = matchPercentage;
    }
  }

  if (bestMatch) {
    // Calculate a confidence score based on the match percentage (adjust as needed)
    const confidence = Math.min(1, highestMatchPercentage + 0.2 * (highestMatchCount / inputSymptoms.length)); // Add a small boost based on raw count

    return {
      disease: bestMatch.disease,
      confidence: confidence,
      dangerLevel: bestMatch.dangerLevel,
      commonSymptoms: bestMatch.commonSymptoms,
      treatments: bestMatch.treatments,
    };
  }

  return {
    disease: "Unknown Condition",
    confidence: 0.4,
    dangerLevel: "medium",
    commonSymptoms: symptoms,
    treatments: ["Consult with a healthcare professional", "Monitor your symptoms", "Rest and stay hydrated"],
  };
};

// Simulate API call for healthcare services
export const getHealthcareServices = async (location, type = "hospital", radius = 5000) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return mock data based on type
  return mockHealthcareServices[type] || []
}

