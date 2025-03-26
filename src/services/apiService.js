// This is a mock API service that simulates API calls
// Replace with actual API calls when available

// Mock data for disease predictions
const mockDiseases = {
  "headache fever": {
    disease: "Common Cold",
    confidence: 0.85,
    dangerLevel: "low",
    commonSymptoms: ["Headache", "Fever", "Runny nose", "Sore throat", "Congestion", "Body aches", "Mild cough", "Sneezing", "Fatigue", "Loss of appetite", "Watery eyes", "Postnasal drip", "Facial pressure", "Hoarseness"],
    treatments: ["Rest and hydration", "Over-the-counter pain relievers", "Decongestants for nasal congestion", "Gargle with salt water", "Use a humidifier"]
  },
  "chest pain shortness of breath": {
    disease: "Possible Heart Condition",
    confidence: 0.75,
    dangerLevel: "high",
    commonSymptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Dizziness", "Nausea", "Sweating", "Pain radiating to arm or jaw", "Rapid or irregular heartbeat", "Lightheadedness", "Anxiety", "Cough", "Swelling in legs or ankles", "Feeling of impending doom", "Cold sweat"],
    treatments: ["Seek immediate medical attention", "Call emergency services", "Rest and try to stay calm", "Administer aspirin if advised by medical personnel", "Prepare for possible CPR"]
  },
  "abdominal pain nausea": {
    disease: "Gastroenteritis",
    confidence: 0.8,
    dangerLevel: "medium",
    commonSymptoms: ["Abdominal pain", "Nausea", "Vomiting", "Diarrhea", "Fever", "Dehydration", "Muscle aches", "Headache", "Loss of appetite", "Bloating", "Cramping", "Urgency to defecate", "Weakness", "Chills"],
    treatments: ["Stay hydrated", "Eat bland foods", "Over-the-counter anti-nausea medication", "Rest", "Oral rehydration solutions"]
  },
  "persistent cough shortness of breath": {
    disease: "Bronchitis",
    confidence: 0.78,
    dangerLevel: "moderate",
    commonSymptoms: ["Persistent cough", "Shortness of breath", "Chest discomfort", "Fatigue", "Wheezing", "Sputum production (mucus)", "Sore throat", "Low-grade fever", "Body aches", "Headache", "Runny nose", "Chest tightness", "Cyanosis (blueish tint to lips or nails)", "Rapid breathing"],
    treatments: ["Cough suppressants", "Bronchodilators", "Plenty of fluids", "Rest", "Inhaled corticosteroids"]
  },
  "rash itching": {
    disease: "Allergic Reaction or Dermatitis",
    confidence: 0.82,
    dangerLevel: "low to medium",
    commonSymptoms: ["Rash", "Itching", "Redness", "Swelling", "Hives", "Blisters", "Dry skin", "Scaling", "Cracking", "Burning sensation", "Warmth", "Small bumps", "Raised welts", "Tightness of skin"],
    treatments: ["Antihistamines", "Topical corticosteroids", "Cool compresses", "Avoid allergens", "Moisturizers"]
  },
    "severe headache vision changes": {
    disease: "Migraine or Possible Stroke",
    confidence: 0.88,
    dangerLevel: "high",
    commonSymptoms: ["Severe headache", "Vision changes", "Nausea", "Vomiting", "Sensitivity to light and sound", "Aura (visual disturbances)", "Numbness or tingling", "Weakness", "Speech difficulties", "Confusion", "Dizziness", "One-sided weakness", "Loss of balance", "Facial drooping"],
    treatments: ["Seek immediate medical attention", "Pain relievers (triptans)", "Rest in a dark, quiet room", "Anti-nausea medication", "Call emergency services if stroke is suspected"]
  },
  "frequent urination excessive thirst": {
    disease: "Possible Diabetes",
    confidence: 0.70,
    dangerLevel: "medium",
    commonSymptoms: ["Frequent urination", "Excessive thirst", "Fatigue", "Blurred vision", "Increased hunger", "Weight loss", "Slow-healing sores", "Numbness or tingling in hands or feet", "Dry, itchy skin", "Frequent infections", "Darkened skin areas", "Fruity-smelling breath", "Irritability", "Yeast infections"],
    treatments: ["Medical evaluation and diagnosis", "Blood sugar monitoring", "Insulin therapy (if needed)", "Dietary changes", "Regular exercise"]
  },
  "joint pain swelling stiffness": {
    disease: "Arthritis",
    confidence: 0.75,
    dangerLevel: "medium",
    commonSymptoms: ["Joint pain", "Swelling", "Stiffness", "Reduced range of motion", "Warmth in affected joints", "Redness", "Fatigue", "Morning stiffness", "Grinding sensation", "Tenderness", "Bone spurs", "Deformity of joints", "Muscle weakness", "Low grade fever"],
    treatments: ["Pain relievers (NSAIDs)", "Physical therapy", "Disease-modifying antirheumatic drugs (DMARDs)", "Corticosteroids", "Joint injections"]
  },
  "back pain radiating leg pain": {
    disease: "Sciatica",
    confidence: 0.80,
    dangerLevel: "low to medium",
    commonSymptoms: ["Back pain", "Radiating leg pain", "Numbness or tingling in leg or foot", "Muscle weakness", "Pain worsened by sitting or coughing", "Sharp or burning pain", "Pain that travels down the sciatic nerve", "Loss of bowel or bladder control(rare)", "Difficulty moving leg or foot", "Pain on one side of the body", "Pain in the buttock", "Pain that increases with movement", "Electric shock like pain", "Aching"],
    treatments: ["Pain relievers (NSAIDs)", "Physical therapy", "Heat or cold packs", "Muscle relaxants", "Injections (corticosteroids)"]
  },
  "ear pain hearing loss": {
    disease: "Ear Infection",
    confidence: 0.83,
    dangerLevel: "low",
    commonSymptoms: ["Ear pain", "Hearing loss", "Fluid drainage from ear", "Fever", "Headache", "Dizziness", "Fullness in ear", "Itching inside ear", "Tinnitus", "Balance problems", "Irritability", "Loss of appetite", "Swelling around the ear", "Redness in the inner ear"],
    treatments: ["Pain relievers", "Antibiotic ear drops", "Oral antibiotics", "Warm compresses", "Decongestants"]
  },
  "sore throat difficulty swallowing":{
    disease:"Tonsillitis or Strep Throat",
    confidence: 0.81,
    dangerLevel:"low to medium",
    commonSymptoms:["Sore throat", "Difficulty swallowing", "Fever", "Red and swollen tonsils", "White patches on tonsils", "Headache", "Body aches", "Swollen lymph nodes in neck", "Hoarse voice", "Bad breath", "Nausea", "Vomiting", "Chills", "Loss of appetite"],
    treatments:["Antibiotics", "Pain relievers", "Gargle with salt water", "Rest", "Plenty of fluids"]
  },
  "bloody stool abdominal cramps":{
    disease:"Possible Colitis or Hemorrhoids",
    confidence: 0.79,
    dangerLevel:"medium",
    commonSymptoms:["Bloody stool", "Abdominal cramps", "Rectal pain", "Diarrhea", "Urgency to defecate", "Fatigue", "Weight loss", "Mucus in stool", "Tenesmus(feeling of incomplete defecation)", "Anemia", "Pain during bowel movements", "Itching in rectal area", "Swelling around anus", "Constipation"],
    treatments:["Medical evaluation", "Dietary changes", "Topical creams or suppositories", "Pain relievers", "Stool softeners"]
  },
  "yellowing of skin eyes":{
    disease:"Jaundice or Hepatitis",
    confidence: 0.86,
    dangerLevel:"medium to high",
    commonSymptoms:["Yellowing of skin and eyes", "Dark urine", "Abdominal pain", "Nausea", "Vomiting", "Fatigue", "Itching", "Loss of appetite", "Pale stools", "Fever", "Weight loss", "Swelling in abdomen", "Easy bruising or bleeding", "Confusion"],
    treatments:["Medical evaluation", "Antiviral medications", "Corticosteroids", "Lifestyle changes", "Liver transplant (in severe cases)"]
  },
    "painful urination burning sensation": {
      disease: "Urinary Tract Infection (UTI)",
      confidence: 0.90,
      dangerLevel: "low to medium",
      commonSymptoms: ["Painful urination", "Burning sensation during urination", "Frequent urge to urinate", "Cloudy or strong-smelling urine", "Pelvic pain (in women)", "Blood in urine", "Lower abdominal discomfort", "Back pain", "Fever", "Chills", "Nausea", "Vomiting", "Feeling of incomplete bladder emptying", "Pressure in lower abdomen"],
      treatments: ["Antibiotics", "Increased fluid intake", "Pain relievers", "Cranberry juice (unsweetened)", "Heating pad for abdominal discomfort"]
    },
    "genital discharge burning itching": {
      disease: "Chlamydia",
      confidence: 0.85,
      dangerLevel: "medium",
      commonSymptoms: ["Genital discharge (clear, white, yellow, or green)", "Burning sensation during urination", "Itching or irritation in genital area", "Pain during intercourse", "Lower abdominal pain (in women)", "Testicular pain (in men)", "Rectal pain or discharge", "Bleeding between periods (in women)", "Eye infection (conjunctivitis)", "Sore throat", "Swollen lymph nodes", "Lower back pain", "Asymptomatic (in many cases)", "Pelvic inflammatory disease (in women if untreated)"],
      treatments: ["Antibiotics", "Abstinence from sexual activity until treatment is complete", "Partner notification and treatment", "Follow-up testing to ensure cure", "Avoid douching"]
    },
    "genital sores ulcers pain": {
      disease: "Genital Herpes",
      confidence: 0.88,
      dangerLevel: "medium",
      commonSymptoms: ["Genital sores or ulcers", "Pain or itching in genital area", "Burning sensation during urination", "Swollen lymph nodes in groin", "Fever", "Headache", "Body aches", "Blisters that rupture and become painful sores", "Pain during intercourse", "Flu-like symptoms", "Tingling or burning before outbreak", "Recurring outbreaks", "Neuralgia", "Difficulty urinating"],
      treatments: ["Antiviral medications", "Pain relievers", "Sitz baths", "Topical creams", "Avoid tight-fitting clothing"]
    },
    "painless genital sore rash": {
      disease: "Syphilis",
      confidence: 0.80,
      dangerLevel: "high",
      commonSymptoms: ["Painless genital sore (chancre)", "Rash on palms of hands and soles of feet", "Fatigue", "Fever", "Headache", "Sore throat", "Swollen lymph nodes", "Hair loss", "Muscle aches", "Weight loss", "Mouth sores", "Condylomata lata (wart-like lesions)", "Neurological symptoms (in late-stage syphilis)", "Cardiovascular symptoms (in late-stage syphilis)"],
      treatments: ["Penicillin (antibiotic)", "Doxycycline or tetracycline (if allergic to penicillin)", "Follow-up blood tests", "Partner notification and treatment", "Abstinence from sexual activity until treatment is complete"]
    },
    "frothy yellow-green discharge foul odor": {
      disease: "Trichomoniasis",
      confidence: 0.83,
      dangerLevel: "low to medium",
      commonSymptoms: ["Frothy yellow-green vaginal discharge", "Foul odor", "Itching or irritation in genital area", "Pain during urination", "Pain during intercourse", "Lower abdominal pain", "Redness or swelling of vulva", "Frequent urge to urinate", "Discomfort in lower abdomen", "Asymptomatic (in many cases)", "Spotting or bleeding", "Burning sensation", "Strawberry cervix (red spots on cervix)", "Pain in the penis after intercourse (in men)"],
      treatments: ["Metronidazole or tinidazole (antibiotics)", "Partner notification and treatment", "Abstinence from sexual activity until treatment is complete", "Avoid alcohol during and after treatment", "Follow-up testing (if symptoms persist)"]
  },
  "yellowing of skin eyes abdominal pain": {
    disease: "Liver Disease (e.g., Hepatitis, Cirrhosis)",
    confidence: 0.88,
    dangerLevel: "high",
    commonSymptoms: ["Yellowing of skin and eyes (jaundice)", "Abdominal pain", "Swelling in abdomen (ascites)", "Dark urine", "Pale stools", "Fatigue", "Weakness", "Nausea", "Vomiting", "Loss of appetite", "Itching", "Easy bruising or bleeding", "Confusion or disorientation (hepatic encephalopathy)", "Weight loss"],
    treatments: ["Antiviral medications (for hepatitis)", "Lifestyle changes (diet, alcohol avoidance)", "Diuretics (for ascites)", "Liver transplant (in severe cases)", "Medications to manage symptoms"]
  },
  "shortness of breath swelling in legs ankles": {
    disease: "Heart Failure",
    confidence: 0.90,
    dangerLevel: "high",
    commonSymptoms: ["Shortness of breath (dyspnea)", "Swelling in legs and ankles (edema)", "Fatigue", "Weakness", "Rapid or irregular heartbeat", "Persistent cough or wheezing with white or pink blood-tinged mucus", "Increased need to urinate at night", "Swelling of the abdomen (ascites)", "Rapid weight gain from fluid retention", "Lack of appetite and nausea", "Difficulty concentrating", "Chest pain (if caused by a heart attack)", "Lightheadedness or dizziness", "Sudden severe shortness of breath and coughing up pink, foamy mucus (pulmonary edema)"],
    treatments: ["Medications (ACE inhibitors, beta-blockers, diuretics)", "Lifestyle changes (diet, exercise, weight management)", "Oxygen therapy", "Implantable devices (pacemakers, defibrillators)", "Heart transplant (in severe cases)"]
  },
  "blood in urine back pain": {
    disease: "Kidney Disease (e.g., Kidney Stones, Kidney Infection, Kidney Failure)",
    confidence: 0.85,
    dangerLevel: "medium to high",
    commonSymptoms: ["Blood in urine (hematuria)", "Back pain (flank pain)", "Painful urination", "Frequent urge to urinate", "Fever", "Chills", "Nausea", "Vomiting", "Swelling in legs, ankles, or feet", "Fatigue", "Loss of appetite", "High blood pressure", "Itching", "Metallic taste in mouth", "Shortness of breath (in kidney failure)"],
    treatments: ["Pain relievers (for kidney stones)", "Antibiotics (for kidney infection)", "Dialysis (for kidney failure)", "Kidney transplant (in severe cases)", "Medications to control blood pressure"]
  },
  "persistent cough chest pain weight loss": {
    disease: "Lung Cancer",
    confidence: 0.80,
    dangerLevel: "high",
    commonSymptoms: ["Persistent cough", "Chest pain", "Weight loss", "Shortness of breath", "Coughing up blood (hemoptysis)", "Hoarseness", "Wheezing", "Fatigue", "Loss of appetite", "Recurring bronchitis or pneumonia", "Bone pain", "Headache", "Unexplained fever", "Swelling in the neck and face"],
    treatments: ["Surgery", "Chemotherapy", "Radiation therapy", "Targeted therapy", "Immunotherapy"]
  },
  "abdominal pain bloating changes in bowel habits": {
    disease: "Pancreatic Cancer",
    confidence: 0.78,
    dangerLevel: "high",
    commonSymptoms: ["Abdominal pain (upper abdomen or back)", "Bloating", "Changes in bowel habits (diarrhea, constipation)", "Weight loss", "Loss of appetite", "Jaundice (yellowing of skin and eyes)", "Dark urine", "Light-colored stools", "Nausea", "Vomiting", "Fatigue", "Weakness", "Diabetes (new onset or worsening)", "Itching", "Back pain"],
    treatments: ["Surgery", "Chemotherapy", "Radiation therapy", "Targeted therapy", "Palliative care"]
  },
  "fever chills body aches": {
    disease: "Influenza (Flu)",
    confidence: 0.87,
    dangerLevel: "low to medium",
    commonSymptoms: ["Fever", "Chills", "Body aches", "Fatigue", "Headache", "Cough", "Sore throat", "Runny or stuffy nose", "Muscle aches", "Weakness", "Sweating", "Loss of appetite", "Nausea", "Vomiting (more common in children)"],
    treatments: ["Rest", "Hydration", "Antiviral medications (if started early)", "Over-the-counter pain relievers", "Fever reducers"]
  },
  "runny nose congestion sneezing": {
    disease: "Allergies (Allergic Rhinitis)",
    confidence: 0.84,
    dangerLevel: "low",
    commonSymptoms: ["Runny nose", "Congestion", "Sneezing", "Itchy nose, eyes, or throat", "Watery eyes", "Postnasal drip", "Cough", "Fatigue", "Headache", "Sinus pressure", "Wheezing", "Shortness of breath", "Skin rash or hives (in some cases)", "Loss of smell"],
    treatments: ["Antihistamines", "Decongestants", "Nasal corticosteroids", "Allergy shots (immunotherapy)", "Avoidance of allergens"]
  },
  "burning sensation heartburn": {
    disease: "Gastroesophageal Reflux Disease (GERD)",
    confidence: 0.82,
    dangerLevel: "low to medium",
    commonSymptoms: ["Burning sensation in the chest (heartburn)", "Regurgitation of food or sour liquid", "Chest pain", "Difficulty swallowing (dysphagia)", "Sensation of a lump in the throat", "Chronic cough", "Hoarseness", "Sore throat", "Asthma-like symptoms", "Bad breath", "Nausea", "Vomiting", "Dental problems", "Sleep disturbances"],
    treatments: ["Lifestyle changes (diet, weight loss, avoid late-night eating)", "Antacids", "H2 blockers", "Proton pump inhibitors (PPIs)", "Surgery (in severe cases)"]
  },
  "headache sinus pressure facial pain": {
    disease: "Sinusitis",
    confidence: 0.81,
    dangerLevel: "low to medium",
    commonSymptoms: ["Headache", "Sinus pressure", "Facial pain", "Nasal congestion", "Runny nose", "Postnasal drip", "Thick, discolored nasal discharge", "Cough", "Sore throat", "Fever", "Fatigue", "Bad breath", "Reduced sense of smell", "Tooth pain"],
    treatments: ["Decongestants", "Nasal corticosteroids", "Saline nasal irrigation", "Pain relievers", "Antibiotics (if bacterial)"]
  },
  "fatigue muscle weakness joint pain": {
    disease: "Fibromyalgia",
    confidence: 0.76,
    dangerLevel: "medium",
    commonSymptoms: ["Fatigue", "Muscle weakness", "Joint pain", "Widespread pain", "Tenderness to touch", "Sleep problems", "Cognitive difficulties (fibro fog)", "Headaches", "Depression", "Anxiety", "Digestive problems", "Numbness or tingling", "Restless legs syndrome", "Sensitivity to light, noise, or temperature"],
    treatments: ["Pain relievers", "Antidepressants", "Anti-seizure medications", "Physical therapy", "Cognitive behavioral therapy", "Lifestyle changes (exercise, stress management)"]
},
"skin turning bluish-silver": {
  disease: "Argyria",
  confidence: 0.70,
  dangerLevel: "low",
  commonSymptoms: ["Bluish-silver discoloration of the skin", "Discoloration more pronounced in sun-exposed areas", "Grayish tint to gums and other mucous membranes", "No other significant physical symptoms"],
  treatments: ["No effective treatment to reverse discoloration", "Avoidance of silver-containing products", "Laser therapy (limited effectiveness)", "Sun protection to prevent further darkening"]
},
"inability to feel pain": {
  disease: "Congenital Insensitivity to Pain (CIP)",
  confidence: 0.75,
  dangerLevel: "high",
  commonSymptoms: ["Inability to feel physical pain", "Frequent injuries (fractures, burns, cuts) without awareness", "Self-inflicted injuries", "Delayed wound healing", "Hyperthermia or hypothermia due to inability to sense temperature extremes", "Absence of sweating (in some cases)", "Dental problems", "Corneal abrasions", "Joint damage", "Infections"],
  treatments: ["No cure", "Management of injuries and complications", "Regular medical check-ups", "Education on injury prevention", "Prompt treatment of infections"]
},
"excessive hair growth": {
  disease: "Hypertrichosis (Werewolf Syndrome)",
  confidence: 0.72,
  dangerLevel: "low",
  commonSymptoms: ["Excessive hair growth all over the body (generalized) or in specific areas (localized)", "Thick, coarse hair", "Increased hair follicle density", "May be congenital or acquired", "Possible associated dental abnormalities (in congenital forms)"],
  treatments: ["No cure for congenital forms", "Hair removal methods (shaving, waxing, laser therapy)", "Medications (e.g., minoxidil) may stimulate hair growth further", "Treatment of underlying causes (in acquired forms)"]
},
"body odor like fish": {
  disease: "Trimethylaminuria (TMAU)",
  confidence: 0.78,
  dangerLevel: "low",
  commonSymptoms: ["Body odor resembling rotting fish, feces, or garbage", "Odor emanates from sweat, urine, and breath", "No other significant physical symptoms", "Psychological distress due to social stigma"],
  treatments: ["Dietary restrictions (avoidance of choline, carnitine, and sulfur-containing foods)", "Activated charcoal", "Riboflavin supplements", "Antibiotics (to reduce gut bacteria)", "Psychological support"]
},
"skin producing tree-like growths": {
  disease: "Epidermodysplasia Verruciformis (EV)",
  confidence: 0.76,
  dangerLevel: "medium",
  commonSymptoms: ["Wart-like lesions", "Tree-like growths on the skin", "Increased susceptibility to human papillomavirus (HPV) infections", "High risk of skin cancer (especially squamous cell carcinoma)", "Lesions may appear on hands, feet, face, and other areas"],
  treatments: ["No cure", "Surgical removal of lesions", "Topical medications (e.g., retinoids, imiquimod)", "Cryotherapy", "Laser therapy", "Regular monitoring for skin cancer"]
},
"unexplained weight loss fatigue lump": {
    disease: "Possible Tumor/Cancer",
    confidence: 0.85,
    dangerLevel: "high",
    commonSymptoms: ["Unexplained weight loss", "Fatigue", "Lump or thickening in any part of the body", "Changes in bowel or bladder habits", "Persistent cough or hoarseness", "Indigestion or difficulty swallowing", "Changes in a wart or mole", "Unusual bleeding or discharge", "Persistent, unexplained pain", "Night sweats", "Fever", "Skin changes", "Loss of appetite", "Neurological symptoms (depending on tumor location)"],
    treatments: ["Biopsy for diagnosis", "Surgery", "Chemotherapy", "Radiation therapy", "Targeted therapy", "Immunotherapy", "Palliative care"]
  },
  "severe headache seizures vision changes": {
    disease: "Brain Tumor",
    confidence: 0.90,
    dangerLevel: "high",
    commonSymptoms: ["Severe headache (often worse in the morning)", "Seizures", "Vision changes (blurred vision, double vision, loss of peripheral vision)", "Nausea and vomiting", "Balance problems", "Weakness or numbness on one side of the body", "Speech difficulties", "Personality changes", "Confusion", "Memory problems", "Hearing loss or tinnitus", "Hormonal imbalances", "Increased intracranial pressure"],
    treatments: ["Surgery", "Radiation therapy", "Chemotherapy", "Targeted therapy", "Corticosteroids (to reduce swelling)", "Anti-seizure medications"]
  },
  "jaundice abdominal pain weight loss": {
    disease: "Pancreatic Tumor/Cancer",
    confidence: 0.88,
    dangerLevel: "high",
    commonSymptoms: ["Jaundice (yellowing of skin and eyes)", "Abdominal pain (upper abdomen or back)", "Weight loss", "Loss of appetite", "Dark urine", "Light-colored stools", "Nausea and vomiting", "Fatigue", "Weakness", "Diabetes (new onset or worsening)", "Itching", "Back pain", "Bloating", "Changes in bowel habits"],
    treatments: ["Surgery", "Chemotherapy", "Radiation therapy", "Targeted therapy", "Palliative care"]
  },
  "coughing up blood chest pain shortness of breath": {
    disease: "Lung Tumor/Cancer",
    confidence: 0.87,
    dangerLevel: "high",
    commonSymptoms: ["Coughing up blood (hemoptysis)", "Chest pain", "Shortness of breath", "Persistent cough", "Wheezing", "Hoarseness", "Fatigue", "Weight loss", "Loss of appetite", "Recurring bronchitis or pneumonia", "Bone pain", "Headache", "Swelling in the neck and face", "Unexplained fever"],
    treatments: ["Surgery", "Chemotherapy", "Radiation therapy", "Targeted therapy", "Immunotherapy"]
  },
    "fatigue pale skin shortness of breath":{
    disease:"Leukemia",
    confidence: 0.89,
    dangerLevel: "high",
    commonSymptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Frequent infections", "Easy bruising or bleeding", "Fever", "Night sweats", "Bone pain", "Swollen lymph nodes", "Weight loss", "Enlarged spleen or liver", "Tiny red spots on the skin (petechiae)", "Gum bleeding", "Headaches"],
    treatments: ["Chemotherapy", "Radiation therapy", "Stem cell transplant", "Targeted therapy", "Immunotherapy"]
  },
    "chest pain radiating arm pain nausea":{
    disease: "Myocardial Infarction (Heart Attack)",
    confidence: 0.92,
    dangerLevel: "high",
    commonSymptoms: ["Chest pain (tightness, pressure, squeezing)", "Radiating arm pain (left arm most common)", "Nausea", "Sweating", "Shortness of breath", "Dizziness", "Lightheadedness", "Jaw pain", "Back pain", "Feeling of impending doom", "Cold sweat", "Fatigue", "Vomiting", "Rapid or irregular heartbeat"],
    treatments: ["Immediate medical attention", "Aspirin", "Nitroglycerin", "Thrombolytics (clot-dissolving drugs)", "Angioplasty or stent placement", "Oxygen therapy", "Beta-blockers", "ACE inhibitors"]
  },
  "sudden weakness numbness speech difficulty":{
    disease: "Stroke",
    confidence: 0.91,
    dangerLevel: "high",
    commonSymptoms: ["Sudden weakness or numbness on one side of the body", "Sudden difficulty speaking or understanding speech", "Sudden vision problems in one or both eyes", "Sudden severe headache with no known cause", "Sudden dizziness, loss of balance, or coordination", "Facial drooping", "Confusion", "Trouble swallowing", "Loss of consciousness", "Cognitive deficits", "Paralysis", "Seizures"],
    treatments: ["Immediate medical attention", "Thrombolytics (clot-dissolving drugs)", "Antiplatelet drugs", "Anticoagulants", "Surgery (in some cases)", "Rehabilitation (physical therapy, occupational therapy, speech therapy)"]
  },
  "high fever stiff neck confusion":{
    disease: "Meningitis",
    confidence: 0.90,
    dangerLevel: "high",
    commonSymptoms: ["High fever", "Stiff neck", "Severe headache", "Confusion", "Nausea and vomiting", "Sensitivity to light (photophobia)", "Seizures", "Skin rash (petechial or purpuric)", "Drowsiness", "Lethargy", "Irritability", "Muscle aches", "Altered mental status"],
    treatments: ["Immediate medical attention", "Antibiotics (for bacterial meningitis)", "Antiviral medications (for viral meningitis)", "Corticosteroids (to reduce inflammation)", "Supportive care (fluids, oxygen)"]
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
  let highestScore = 0;

  for (const key in mockDiseases) {
    const knownSymptoms = mockDiseases[key].commonSymptoms.map(s => s.toLowerCase());
    const matchCount = inputSymptoms.filter(symptom => knownSymptoms.includes(symptom)).length;

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
      confidence: confidence,
      dangerLevel: bestMatch.dangerLevel,
      commonSymptoms: bestMatch.commonSymptoms,
      treatments: bestMatch.treatments,
    };
  }

  // Default response for unknown conditions
  return {
    disease: "Unknown Condition",
    confidence: 0.4,
    dangerLevel: "medium",
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

