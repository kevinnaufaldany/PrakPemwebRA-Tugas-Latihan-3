// Deklarasi konstanta untuk bobot
const WEIGHT_ASSIGNMENT = 0.3;
const WEIGHT_MIDTERM = 0.3;
const WEIGHT_FINAL = 0.4;
const PASSING_GRADE = 60;

function validateInput(inputElement) {
   const value = parseFloat(inputElement.value);
   if (isNaN(value) || value < 0 || value > 100) {
       inputElement.classList.add("error-border");
       return false;
   } else {
       inputElement.classList.remove("error-border");
       return true;
   }
}

function calculateGrade() {
    // Mendapatkan nilai input
    const assignmentInput = document.getElementById("assignment");
    const midtermInput = document.getElementById("midterm");
    const finalExamInput = document.getElementById("final");

    // Validasi input dan beri border merah jika tidak valid
    const isAssignmentValid = validateInput(assignmentInput);
    const isMidtermValid = validateInput(midtermInput);
    const isFinalExamValid = validateInput(finalExamInput);

    // Validasi input berada antara 0 dan 100
    if (!isAssignmentValid || !isMidtermValid || !isFinalExamValid) {
      alert("Masukkan nilai antara 0 dan 100 untuk semua komponen.");
      return;
   }

    const assignment = parseFloat(assignmentInput.value);
    const midterm = parseFloat(midtermInput.value);
    const finalExam = parseFloat(finalExamInput.value)

    // Menghitung rata-rata tertimbang
    let weightedAverage = 
        (assignment * WEIGHT_ASSIGNMENT) +
        (midterm * WEIGHT_MIDTERM) +
        (finalExam * WEIGHT_FINAL);

    // Menentukan nilai huruf
    let letterGrade;
    if (weightedAverage >= 90) {
        letterGrade = "A";
        emoticon = "🎉😊"; // Emoticon bahagia untuk nilai A
    } else if (weightedAverage >= 80) {
        letterGrade = "B";
        emoticon = "👍🙂"; // Emoticon senang untuk nilai B
    } else if (weightedAverage >= 70) {
        letterGrade = "C";
        emoticon = "😌"; // Emoticon cukup puas untuk nilai C
    } else if (weightedAverage >= 60) {
        letterGrade = "D";
        emoticon = "😕"; // Emoticon kecewa untuk nilai D
    } else {
        letterGrade = "E";
        emoticon = "😢"; // Emoticon sedih untuk nilai E
    }

    // Menentukan status lulus/gagal
    let status = weightedAverage >= PASSING_GRADE ? "Lulus" : "Gagal";
    let statusClass = weightedAverage >= PASSING_GRADE ? "pass" : "fail";

    // Menampilkan hasil
    document.getElementById("average").textContent = weightedAverage.toFixed(2);
    document.getElementById("letterGrade").textContent = letterGrade;
    document.getElementById("status").textContent = `${status} ${emoticon}`;
    
    // Menambahkan kelas warna untuk status
    document.getElementById("status").className = statusClass;
}

// Tambahkan event listener pada input untuk validasi otomatis
document.getElementById("assignment").addEventListener("input", function() {
   validateInput(this);
});

document.getElementById("midterm").addEventListener("input", function() {
   validateInput(this);
});

document.getElementById("final").addEventListener("input", function() {
   validateInput(this);
});
