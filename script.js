// Doctor details with symptoms, education, and colleges
const doctors = [
    {
        name: "Dr. Anil Kumar Singhal",
        specialization: "Dermatologist (Psoriasis)",
        education: "B.E.M.S",
        college: "Meerut",
        symptoms: ["skin rash", "itching", "red patches", "psoriasis"]
    },
    {
        name: "Dr. Aruma Singhal",
        specialization: "Gynecologist (Irregular Menstrual Cycle)",
        education: "M.B.B.S, D.N.B",
        college: "AIIMS Gorakhpur",
        symptoms: ["irregular periods", "abdominal pain", "hormonal imbalance"]
    },
    {
        name: "Dr. Naina Agarwal",
        specialization: "Dentist (Mouth Ulcer)",
        education: "B.D.S, MDS",
        college: "KGMU Lucknow",
        symptoms: ["mouth ulcer", "pain in mouth", "white patches", "gum swelling"]
    },
    {
        name: "Dr. Garima Agarwal",
        specialization: "Pathologist (H1BA Diabetes Checkup)",
        education: "M.B.B.S, D.N.B",
        college: "AIIMS Gorakhpur",
        symptoms: ["high blood sugar", "fatigue", "frequent urination", "diabetes"]
    }
];

// Function to find a doctor based on symptoms
function findDoctor() {
    const symptom1 = document.getElementById("symptom1").value.trim().toLowerCase();
    const symptom2 = document.getElementById("symptom2").value.trim().toLowerCase();
    let foundDoctor = null;

    // Check if both symptoms match any doctor
    for (let doctor of doctors) {
        if (doctor.symptoms.includes(symptom1) && doctor.symptoms.includes(symptom2)) {
            foundDoctor = doctor;
            break;
        }
    }

    // Display the results with more details
    if (foundDoctor) {
        document.getElementById("doctorName").textContent = `👨‍⚕️ Doctor: ${foundDoctor.name}`;
        document.getElementById("specialization").textContent = `🩺 Specialization: ${foundDoctor.specialization}`;
        document.getElementById("education").textContent = `🎓 Education: ${foundDoctor.education}`;
        document.getElementById("college").textContent = `🏛️ College: ${foundDoctor.college}`;
        document.getElementById("consultationFee").textContent = `💰 Consultation Fee: ₹1500`;
    } else {
        document.getElementById("doctorName").textContent = "❌ No matching doctor found.";
        document.getElementById("specialization").textContent = "";
        document.getElementById("education").textContent = "";
        document.getElementById("college").textContent = "";
        document.getElementById("consultationFee").textContent = "";
    }
}
