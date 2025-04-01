// This is a mock API service that simulates API calls
// Replace with actual API calls when available

// Mock data for disease predictions with enhanced structure
const mockDiseases = {
  "headache fever": {
    disease: "Common Cold",
    diseaseCategory: "Infectious Disease",
    treatedBy: "Primary Care Physician",
    confidence: 0.85,
    dangerLevel: "low",
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      prevalence: "Global"
    },
    commonSymptoms: [
      "Headache that goes away with over-the-counter pain relievers",
      "Mild fever (between 100-101°F)",
      "Runny nose with clear or white mucus",
      "Red, sore throat",
      "Stuffed-up nose on both sides",
      "Body aches",
      "Dry cough or cough with little mucus",
      "Sneezing fits",
      "Feeling tired for 3-7 days",
      "Less hungry but no significant weight loss",
      "Watery eyes",
      "Thick mucus draining from sinuses to throat",
      "Pressure in the forehead and cheek areas",
      "Hoarse voice without completely losing it"
    ],
    treatments: [
      "Rest for 3-5 days with plenty of fluids (2-3 liters of water daily)",
      "Tylenol or ibuprofen for pain and fever",
      "Decongestants like Sudafed every 4-6 hours for stuffy nose",
      "Warm salt water gargle (1/4 tsp salt in 8oz water) 3-4 times daily",
      "Cool-mist humidifier, cleaned regularly to prevent mold"
    ]
  },
  "chest pain shortness of breath": {
    disease: "Possible Heart Condition",
    diseaseCategory: "Cardiovascular",
    treatedBy: "Cardiologist",
    confidence: 0.75,
    dangerLevel: "high",
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      prevalence: "Higher in urban areas with poor air quality"
    },
    commonSymptoms: [
      "Chest pain in the center that may spread to left arm, jaw, or back",
      "Trouble breathing that gets worse with activity and even at rest",
      "Feeling extremely tired even with little activity",
      "Feeling dizzy or lightheaded when changing position",
      "Feeling sick to your stomach not related to eating",
      "Cold, clammy sweating",
      "Crushing or pressure feeling in chest that may spread to left arm or jaw",
      "Fast heartbeat (over 100 beats per minute) or slow heartbeat (under 60)",
      "Trouble breathing when lying flat",
      "Feeling anxious with a sense of doom",
      "Coughing up frothy or pink-tinged mucus",
      "Swollen ankles or legs",
      "Bluish color of lips and fingernails",
      "Sweating without having a fever"
    ],
    treatments: [
      "Call 911 IMMEDIATELY and get to the nearest heart center",
      "Chew an aspirin (if not allergic) while waiting for ambulance",
      "Rest in semi-sitting position with legs raised",
      "Take nitroglycerin under the tongue if prescribed",
      "Be prepared for possible emergency heart procedures"
    ]
  },
  "abdominal pain nausea": {
    disease: "Gastroenteritis",
    diseaseCategory: "Gastrointestinal",
    treatedBy: "Gastroenterologist",
    confidence: 0.8,
    dangerLevel: "medium",
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
      prevalence: "High in areas with poor sanitation or contaminated water"
    },
    commonSymptoms: [
      "Belly pain around or below the belly button of medium intensity",
      "Feeling sick to your stomach, with or without throwing up",
      "Watery diarrhea more than 3 times a day for 1-3 days",
      "Mild fever (99-101°F)",
      "Peeing less, with darker yellow urine",
      "Muscle aches, worse in legs",
      "Headache that gets worse when moving",
      "No appetite at all for 24-48 hours",
      "Bloated belly with gurgling sounds",
      "Cramps that get worse before needing to use the bathroom",
      "Feeling like you still need to go after using the bathroom",
      "Weakness that stops you from doing normal activities",
      "Shaking chills followed by sweating",
      "Loud rumbling stomach noises"
    ],
    treatments: [
      "Drink electrolyte solutions (like Pedialyte or sports drinks) 1-2L daily",
      "Slowly start eating bland foods (bananas, rice, applesauce, toast)",
      "Take Zofran 4mg every 8 hours as needed for nausea",
      "Complete rest for 24-48 hours with slow return to normal activity",
      "Probiotic supplements with Lactobacillus and Bifidobacterium"
    ]
  },
  "persistent cough shortness of breath": {
    disease: "Bronchitis",
    diseaseCategory: "Respiratory",
    treatedBy: "Pulmonologist",
    confidence: 0.78,
    dangerLevel: "moderate",
    location: {
      latitude: 41.8781,
      longitude: -87.6298,
      prevalence: "Higher in areas with air pollution and during winter months"
    },
    commonSymptoms: [
      "Cough with mucus lasting more than 10 days",
      "Shortness of breath during activity despite normal oxygen levels",
      "Chest discomfort behind the breastbone that gets worse when coughing",
      "Feeling tired all day despite enough rest",
      "Wheezing you can hear without a stethoscope",
      "Coughing up yellow-green thick mucus",
      "Red, sore throat with post-nasal drip",
      "Low-grade fever (99-100.5°F) in the evenings",
      "Muscle aches, worse in chest muscles",
      "Headache that gets worse when coughing",
      "Occasional runny nose with clear discharge",
      "Chest tightness when breathing in",
      "Fingertips or lips turning slightly blue during exercise",
      "Breathing faster than normal (over 20 breaths per minute) with little effort"
    ],
    treatments: [
      "Cough medicine (dextromethorphan) 10-20mg every 4 hours as needed",
      "Albuterol inhaler 2 puffs every 4-6 hours for wheezing",
      "Drink more fluids (3L daily) to thin mucus",
      "Complete rest for 3-5 days with limited activity for 7-10 days",
      "Inhaled steroids if wheezing lasts more than 5 days"
    ]
  },
  "rash itching": {
    disease: "Allergic Reaction or Dermatitis",
    diseaseCategory: "Dermatological",
    treatedBy: "Dermatologist",
    confidence: 0.82,
    dangerLevel: "low to medium",
    location: {
      latitude: 39.7392,
      longitude: -104.9903,
      prevalence: "Higher in dry climates and urban environments"
    },
    commonSymptoms: [
      "Red, bumpy rash with clear edges",
      "Intense itching worse at night or when hot",
      "Red, inflamed skin either in one area or all over",
      "Swelling, especially around eyes or lips",
      "Hives that turn white when pressed",
      "Small blisters that may leak clear fluid",
      "Very dry skin that may crack",
      "Skin peeling during healing phases",
      "Thickened, leathery skin from scratching over time",
      "Burning feeling after scratching",
      "Skin feels warmer in affected areas",
      "Small bumps around hair follicles",
      "Deep swelling under the skin, especially with hives",
      "Skin thickening with long-lasting symptoms"
    ],
    treatments: [
      "Zyrtec 10mg daily or Benadryl 25-50mg every 6 hours for itching",
      "Medium-strength steroid cream (like triamcinolone 0.1%) twice daily",
      "Cool, wet compresses with Domeboro solution",
      "Find and avoid triggers (consider allergy testing)",
      "Apply ceramide moisturizers to damp skin 3-4 times daily"
    ]
  },
  "severe headache vision changes": {
    disease: "Migraine or Possible Stroke",
    diseaseCategory: "Neurological",
    treatedBy: "Neurologist",
    confidence: 0.88,
    dangerLevel: "high",
    location: {
      latitude: 42.3601,
      longitude: -71.0589,
      prevalence: "Higher in regions with dramatic barometric pressure changes"
    },
    commonSymptoms: [
      "Throbbing headache on one side, very severe (8-10/10 pain)",
      "Seeing zigzag lines or flashing lights in your vision",
      "Severe nausea that won't go away, with or without vomiting",
      "Forceful vomiting not related to food",
      "Extreme sensitivity to light requiring darkness",
      "Extreme sensitivity to normal sounds",
      "Loss of vision in half of your visual field",
      "Pins and needles feeling in arms, legs, or face",
      "Weakness on one side of the body",
      "Slurred or difficult speech",
      "Confusion or altered mental state",
      "Dizziness with inability to keep balance",
      "Drooping on one side of the face",
      "Poor coordination"
    ],
    treatments: [
      "IMMEDIATE medical evaluation with brain imaging to rule out stroke",
      "Imitrex 50-100mg by mouth or 6mg injection for migraine",
      "Complete rest in dark, quiet room with minimal stimulation",
      "Anti-nausea medication like Compazine 10mg or Zofran 4mg",
      "Call 911 if you notice Face drooping, Arm weakness, Speech difficulties (FAST)"
    ]
  },
  "frequent urination excessive thirst": {
    disease: "Possible Diabetes",
    diseaseCategory: "Endocrine",
    treatedBy: "Endocrinologist",
    confidence: 0.70,
    dangerLevel: "medium",
    location: {
      latitude: 33.4484,
      longitude: -112.0740,
      prevalence: "Higher in regions with limited healthcare access and poor dietary patterns"
    },
    commonSymptoms: [
      "Urinating more than 8 times a day or more than 3L/day",
      "Drinking more than 3L/day without explanation",
      "Constant fatigue despite enough sleep",
      "Blurry vision that changes throughout the day",
      "Feeling very hungry despite regular meals",
      "Unexplained weight loss (more than 5% in a month)",
      "Small cuts take more than 2 weeks to heal",
      "Numbness or tingling in hands and feet",
      "Dry, itchy skin, especially in skin folds",
      "Frequent infections (bladder, yeast, skin)",
      "Dark, velvety skin patches on neck or armpits",
      "Breath smells fruity or like nail polish remover",
      "Mood swings with irritability",
      "Recurring yeast infections in genital area"
    ],
    treatments: [
      "IMMEDIATE fasting blood sugar and A1C testing",
      "Blood sugar monitoring before meals and at bedtime",
      "Metformin 500mg with meals if Type 2 diabetes confirmed",
      "Insulin therapy based on blood sugar levels and diabetes type",
      "Dietary consultation for carbohydrate counting and meal planning"
    ]
  },
  "joint pain swelling stiffness": {
    disease: "Arthritis",
    diseaseCategory: "Rheumatological",
    treatedBy: "Rheumatologist",
    confidence: 0.75,
    dangerLevel: "medium",
    location: {
      latitude: 47.6062,
      longitude: -122.3321,
      prevalence: "Higher in regions with cold, damp climates"
    },
    commonSymptoms: [
      "Pain in multiple joints on both sides of body, especially in hands",
      "Visible swelling and redness in joints",
      "Morning stiffness lasting more than 30 minutes",
      "Limited range of motion in affected joints",
      "Joints feel warm to the touch",
      "Redness over painful joints",
      "Ongoing fatigue not improved by rest",
      "Stiffness in the morning lasting more than an hour",
      "Grinding or crackling sensation when moving joints",
      "Tenderness when pressing on joints",
      "Feeling bumps around finger joints in osteoarthritis",
      "Joint deformity (fingers bending in unusual directions)",
      "Weakness in muscles near the joints",
      "Low-grade fever in inflammatory arthritis"
    ],
    treatments: [
      "Aleve 500mg twice daily or Advil 600mg three times daily with food",
      "Physical therapy focusing on range of motion and strengthening",
      "Disease-modifying drugs (methotrexate, hydroxychloroquine) for inflammatory arthritis",
      "Prednisone 5-10mg daily for acute flares",
      "Steroid injections into severely affected joints"
    ]
  },
  "back pain radiating leg pain": {
    disease: "Sciatica",
    diseaseCategory: "Orthopedic",
    treatedBy: "Orthopedist",
    confidence: 0.80,
    dangerLevel: "low to medium",
    location: {
      latitude: 36.1699,
      longitude: -115.1398,
      prevalence: "Higher in occupations requiring heavy lifting or prolonged sitting"
    },
    commonSymptoms: [
      "Low back pain on one side that spreads down back of thigh and outer calf",
      "Pain following a specific path down the leg",
      "Pins and needles feeling along the path of pain",
      "Weakness in foot (foot drop) or ankle",
      "Pain gets worse when coughing or sneezing",
      "Sharp, electric-like, shooting pain",
      "Pain when raising leg straight up while lying down",
      "In severe cases: numbness in groin/buttocks area, losing control of bladder/bowels",
      "Trouble bending the hip on the painful side",
      "Pain mostly on one side",
      "Buttock and hamstring discomfort",
      "Pain worsens with sitting or standing for too long",
      "Shooting electrical sensations with movement",
      "Limping or favoring one side when walking"
    ],
    treatments: [
      "Mobic 15mg daily or Aleve 500mg twice daily with food",
      "Physical therapy focusing on specific back exercises and core strengthening",
      "Apply heat for 20 minutes or ice for 10 minutes every 2 hours",
      "Flexeril 10mg at bedtime for muscle spasms",
      "Epidural steroid injections if symptoms last more than 6 weeks"
    ]
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
      location: {
        latitude: 37.7749,
        longitude: -122.4194
      }
    },
    {
      id: 2,
      name: "Community Medical Center",
      address: "456 Oak Ave",
      phone: "555-5678",
      rating: 4.2,
      distance: "2.5 miles",
      specialties: ["Pediatrics", "Orthopedics", "Internal Medicine"],
      location: {
        latitude: 37.7833,
        longitude: -122.4167
      }
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
      location: {
        latitude: 37.7691,
        longitude: -122.4330
      }
    },
    {
      id: 4,
      name: "Health Plus Drugstore",
      address: "321 Pine Rd",
      phone: "555-3456",
      rating: 4.3,
      distance: "1.5 miles",
      hours: "24 hours",
      location: {
        latitude: 37.7840,
        longitude: -122.4074
      }
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
      location: {
        latitude: 37.7909,
        longitude: -122.4010
      }
    },
    {
      id: 6,
      name: "Dr. Johnson - Optometrist",
      address: "890 Cedar Ln",
      phone: "555-2345",
      rating: 4.6,
      distance: "2.2 miles",
      specialty: "Optometry",
      location: {
        latitude: 37.7654,
        longitude: -122.4323
      }
    },
  ],
}

// Simulate API call for disease prediction
export const predictDisease = async (symptoms) => {
  await new Promise((resolve) => setTimeout(resolve, 5500));

  const inputSymptoms = symptoms.map(s => s.toLowerCase());

  let bestMatch = null;
  let highestScore = 0;

  for (const key in mockDiseases) {
    const knownSymptoms = mockDiseases[key].commonSymptoms.map(s => s.toLowerCase());
    const matchCount = inputSymptoms.filter(symptom => knownSymptoms.some(ks => ks.toLowerCase().includes(symptom))).length;

    if (matchCount === 0) continue; // Skip diseases with no matches

    const matchPercentage = matchCount / knownSymptoms.length; // Percentage of symptoms matched
    const inputCoverage = matchCount / inputSymptoms.length; // Percentage of input symptoms found
    const weightedScore = (matchPercentage * 0.7) + (inputCoverage * 0.3); // Weighted score (adjustable)

    if (weightedScore > highestScore) {
      bestMatch = mockDiseases[key];
      highestScore = weightedScore;
    }
  }

  if (bestMatch) {
    // Confidence is based on the weighted score, slightly boosted
    const confidence = Math.min(1, highestScore + 0.15); 

    return {
      disease: bestMatch.disease,
      diseaseCategory: bestMatch.diseaseCategory,
      treatedBy: bestMatch.treatedBy,
      confidence: confidence,
      dangerLevel: bestMatch.dangerLevel,
      location: bestMatch.location,
      commonSymptoms: bestMatch.commonSymptoms,
      treatments: bestMatch.treatments,
    };
  }

  // Default response for unknown conditions
  return {
    disease: "Unknown Condition",
    diseaseCategory: "General Medicine",
    treatedBy: "Primary Care Physician",
    confidence: 0.4,
    dangerLevel: "medium",
    location: {
      latitude: 39.8283,
      longitude: -98.5795,
      prevalence: "Unknown"
    },
    commonSymptoms: symptoms,
    treatments: ["Consult a healthcare professional", "Monitor your symptoms", "Rest and stay hydrated"],
  };
};

// Simulate API call for healthcare services
export const getHealthcareServices = async (location, type = "hospital", radius = 5000) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return mock data based on type
  return mockHealthcareServices[type] || []
}