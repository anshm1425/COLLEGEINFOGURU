// ============================================
// 1. DATA DATABASE (All College Info)
// ============================================
const collegesDB = [
    {
        id: "1",
        name: "IIT Kanpur",
        est: "1959",
        mobile: "0512-2590151",
        packages: { high: "₹4 Crores (International)", low: "₹12 LPA" },
        history: {
            en: "One of the first IITs, established with US assistance. A global leader in tech research.",
            hi: "अमेरिका की सहायता से स्थापित पहले आईआईटी में से एक। तकनीकी अनुसंधान में विश्व में अग्रणी।",
            hing: "Ye India ke pehle IITs me se ek hai. Research ke maamle me poori duniya me famous hai."
        },
        courses: [
            { name: "B.Tech (CSE)", fees: "₹2.2 Lakhs/sem", eligibility: "JEE Advanced Rank < 200" },
            { name: "M.Tech", fees: "₹50k/sem", eligibility: "GATE Qualified" },
            { name: "PhD", fees: "₹25k/sem", eligibility: "Masters + Interview" }
        ]
    },
    {
        id: "2",
        name: "HBTU (Harcourt Butler)",
        est: "1921",
        mobile: "0512-2534001",
        packages: { high: "₹44.5 LPA", low: "₹6 LPA" },
        history: {
            en: "Formerly HBTI, it became a university in 2016. Famous for Chemical & Oil Technology.",
            hi: "पहले HBTI नाम था, 2016 में यूनिवर्सिटी बना। केमिकल और ऑयल टेक्नोलॉजी के लिए मशहूर।",
            hing: "Pehle iska naam HBTI tha, 2016 me University bana. Chemical Engineering ke liye best hai."
        },
        courses: [
            { name: "B.Tech (Chemical)", fees: "₹1.35 Lakhs/year", eligibility: "JEE Mains Rank" },
            { name: "B.Tech (CSE/IT)", fees: "₹1.35 Lakhs/year", eligibility: "JEE Mains High Rank" },
            { name: "MBA", fees: "₹1.2 Lakhs/year", eligibility: "CAT/MAT" }
        ]
    },
    {
        id: "3",
        name: "CSJM University (Kanpur Univ)",
        est: "1966",
        mobile: "0512-2571588",
        packages: { high: "₹10 LPA", low: "₹2.5 LPA" },
        history: {
            en: "One of the largest universities in Asia catering to urban and rural students.",
            hi: "एशिया के सबसे बड़े विश्वविद्यालयों में से एक।",
            hing: "Asia ki sabse badi universities me se ek hai, yaha bahut saare courses hote hain."
        },
        courses: [
            { name: "B.A/B.Sc", fees: "₹10k - ₹30k/year", eligibility: "12th Pass" },
            { name: "B.Tech (UIET)", fees: "₹80k/year", eligibility: "JEE Mains / Entrance" },
            { name: "MBA", fees: "₹60k/year", eligibility: "UPSEE / Entrance" }
        ]
    },
    {
        id: "4",
        name: "PSIT Kanpur",
        est: "2004",
        mobile: "0512-2696244",
        packages: { high: "₹40 LPA", low: "₹4 LPA" },
        history: {
            en: "Known for its strict discipline, infrastructure, and consistent placement record.",
            hi: "अपने सख्त अनुशासन और प्लेसमेंट रिकॉर्ड के लिए जाना जाता है।",
            hing: "Apne strict discipline aur acche placements ke liye jaana jaata hai."
        },
        courses: [
            { name: "B.Tech (CSE)", fees: "₹1.8 Lakhs/year", eligibility: "12th > 60% + Test" },
            { name: "B.Pharm", fees: "₹1.3 Lakhs/year", eligibility: "12th Science" },
            { name: "MBA", fees: "₹1.5 Lakhs/year", eligibility: "Graduation + Interview" }
        ]
    },
    {
        id: "5",
        name: "Axis Colleges",
        est: "2010",
        mobile: "1800-3132-464",
        packages: { high: "₹12 LPA", low: "₹3 LPA" },
        history: {
            en: "Offers diverse courses including Fashion, Architecture, and Engineering.",
            hi: "फैशन, आर्किटेक्चर और इंजीनियरिंग सहित विविध पाठ्यक्रम प्रदान करता है।",
            hing: "Yahan Engineering ke alawa Fashion aur Architecture bhi padhaya jata hai."
        },
        courses: [
            { name: "B.Tech", fees: "₹1.1 Lakhs/year", eligibility: "12th PCM" },
            { name: "B.Arch", fees: "₹1.2 Lakhs/year", eligibility: "NATA Qualified" },
            { name: "B.F.Tech (Fashion)", fees: "₹1 Lakh/year", eligibility: "12th Pass" }
        ]
    },
    {
        id: "6",
        name: "Allenhouse Institute",
        est: "2009",
        mobile: "0512-2860123",
        packages: { high: "₹18 LPA", low: "₹3.5 LPA" },
        history: {
            en: "Part of the Superhouse Group, focused on holistic development.",
            hi: "सुपरहाउस ग्रुप का हिस्सा, समग्र विकास पर केंद्रित।",
            hing: "Ye Superhouse Group ka college hai, padhai ke saath personality development par dhyan dete hain."
        },
        courses: [
            { name: "B.Tech", fees: "₹1.2 Lakhs/year", eligibility: "12th PCM" },
            { name: "BBA", fees: "₹60k/year", eligibility: "12th Pass" }
        ]
    },
    {
        id: "7",
        name: "KIT (Kanpur Institute of Tech)",
        est: "2004",
        mobile: "8262905906",
        packages: { high: "₹15 LPA", low: "₹3.2 LPA" },
        history: {
            en: "Run by IT graduates, focuses on skill development and coding culture.",
            hi: "कौशल विकास और कोडिंग संस्कृति पर केंद्रित है।",
            hing: "Yahan coding aur skills par kaafi focus kiya jata hai."
        },
        courses: [
            { name: "B.Tech (CSE)", fees: "₹1.1 Lakhs/year", eligibility: "JEE/12th" },
            { name: "Polytechnic", fees: "₹40k/year", eligibility: "10th Pass" }
        ]
    },
    {
        id: "8",
        name: "Rama University",
        est: "2014 (University Status)",
        mobile: "0512-2780886",
        packages: { high: "₹12 LPA", low: "₹3 LPA" },
        history: {
            en: "A private university with a strong focus on Medical, Dental, and Engineering.",
            hi: "मेडिकल, डेंटल और इंजीनियरिंग पर मजबूत फोकस।",
            hing: "Inka Medical aur Dental college bahut famous hai, ab Engineering bhi hai."
        },
        courses: [
            { name: "MBBS", fees: "₹12 Lakhs/year", eligibility: "NEET Qualified" },
            { name: "B.Tech", fees: "₹1.1 Lakhs/year", eligibility: "12th PCM" },
            { name: "B.Sc Agriculture", fees: "₹60k/year", eligibility: "12th Science" }
        ]
    },
    {
        id: "9",
        name: "Maharana Pratap Group (MPGI)",
        est: "1995",
        mobile: "0512-2770092",
        packages: { high: "₹49 LPA (Off-campus)", low: "₹3.5 LPA" },
        history: {
            en: "One of the oldest private groups in Kanpur with multiple campuses.",
            hi: "कानपुर के सबसे पुराने निजी समूहों में से एक।",
            hing: "Kanpur ke purane private colleges me se ek hai, kaafi bada network hai."
        },
        courses: [
            { name: "B.Tech", fees: "₹1.15 Lakhs/year", eligibility: "UPSEE/12th" },
            { name: "B.Pharma", fees: "₹1.2 Lakhs/year", eligibility: "12th Science" }
        ]
    },
    {
        id: "10",
        name: "DAV College",
        est: "1919",
        mobile: "0512-2306687",
        packages: { high: "N/A (Mostly Govt/Higher Ed)", low: "N/A" },
        history: {
            en: "A historic institution associated with the freedom struggle.",
            hi: "स्वतंत्रता संग्राम से जुड़ा एक ऐतिहासिक संस्थान।",
            hing: "Ye bahut purana aur historic college hai, Atal Bihari Vajpayee ji yahi padhe the."
        },
        courses: [
            { name: "B.Sc", fees: "₹5k/year", eligibility: "Merit Based (12th Marks)" },
            { name: "M.A.", fees: "₹6k/year", eligibility: "Graduation" }
        ]
    }
];

// ============================================
// 2. STATE MANAGEMENT (Variables)
// ============================================
let chatState = {
    step: 0, // 0: Lang, 1: College, 2: Course, 3: End
    language: 'en', // default
    selectedCollege: null
};

// DOM Elements
const chatBox = document.getElementById('chat-box');
const inputField = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const optionsContainer = document.getElementById('options-container');

// ============================================
// 3. UI MESSAGES (Translations)
// ============================================
const uiText = {
    en: { welcome: "Welcome! Please choose your language.", choose_clg: "Select a college to see details:", choose_course: "Select a course to check eligibility:", details_head: "Here are the details:", pkg: "Packages", thank: "Thank you! Hope this helped.", restart: "Type 'Hi' to start again." },
    hi: { welcome: "नमस्ते! कृपया अपनी भाषा चुनें।", choose_clg: "विवरण देखने के लिए कॉलेज चुनें:", choose_course: "योग्यता जांचने के लिए कोर्स चुनें:", details_head: "विवरण यहाँ है:", pkg: "पैकेज", thank: "धन्यवाद! आशा है इससे मदद मिली।", restart: "फिर से शुरू करने के लिए 'Hi' लिखें।" },
    hing: { welcome: "Namaste! Apni language choose kariye.", choose_clg: "Details dekhne ke liye college select karein:", choose_course: "Eligibility check karne ke liye course select karein:", details_head: "Details ye rahin:", pkg: "Packages", thank: "Thank you! Umeed hai madad mili.", restart: "Dobara start karne ke liye 'Hi' likhein." }
};

// ============================================
// 4. CORE FUNCTIONS
// ============================================

// Start function
function initChat() {
    addBotMessage(uiText.en.welcome, true);
    showOptions(['English', 'Hindi', 'Hinglish']);
    chatState.step = 0;
}

// Add User Message
function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'message user-msg';
    div.innerText = text;
    chatBox.appendChild(div);
    scrollToBottom();
}

// Add Bot Message
function addBotMessage(text, isHtml = false) {
    const div = document.createElement('div');
    div.className = 'message bot-msg';
    if(isHtml) div.innerHTML = text;
    else div.innerText = text;
    chatBox.appendChild(div);
    scrollToBottom();
}

// Show Clickable Options (Chips)
function showOptions(options) {
    optionsContainer.innerHTML = ''; // Clear old
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleInput(opt);
        optionsContainer.appendChild(btn);
    });
}

// Clear Options
function clearOptions() {
    optionsContainer.innerHTML = '';
}

// Scroll to bottom
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ============================================
// 5. MAIN LOGIC HANDLER
// ============================================
function handleInput(input) {
    if (!input) return;
    
    // Clear input field if typed
    inputField.value = '';
    addUserMessage(input);
    clearOptions(); // Hide buttons after selection

    // RESTART LOGIC
    if (input.toLowerCase() === 'hi' || input.toLowerCase() === 'hello') {
        chatBox.innerHTML = ''; // Clear chat
        initChat();
        return;
    }

    // STEP 0: LANGUAGE SELECTION
    if (chatState.step === 0) {
        if (input.toLowerCase().includes('hindi')) chatState.language = 'hi';
        else if (input.toLowerCase().includes('hinglish')) chatState.language = 'hing';
        else chatState.language = 'en';

        const lang = chatState.language;
        addBotMessage(uiText[lang].choose_clg);
        
        // Show College List
        const collegeNames = collegesDB.map(c => c.name);
        showOptions(collegeNames);
        chatState.step = 1;
    }

    // STEP 1: COLLEGE SELECTION
    else if (chatState.step === 1) {
        // Find college by name (fuzzy match)
        const selected = collegesDB.find(c => c.name.toLowerCase() === input.toLowerCase() || input.includes(c.id));
        
        if (selected) {
            chatState.selectedCollege = selected;
            const lang = chatState.language;

            // Prepare Details HTML
            let detailsHTML = `
                <h3>🏛️ ${selected.name}</h3>
                <div class="details-card">
                    <b>Est:</b> ${selected.est}<br>
                    <b>📞:</b> ${selected.mobile}<br>
                    <b>${uiText[lang].pkg}:</b> ⬆️ ${selected.packages.high} | ⬇️ ${selected.packages.low}<br>
                    <hr>
                    <b>History:</b> ${selected.history[lang]}
                </div>
                <br>${uiText[lang].choose_course}
            `;
            
            addBotMessage(detailsHTML, true);
            
            // Show Courses
            const courseNames = selected.courses.map(c => c.name);
            showOptions(courseNames);
            chatState.step = 2;
        } else {
            addBotMessage("Please select a valid college from the list.");
            const collegeNames = collegesDB.map(c => c.name);
            showOptions(collegeNames);
        }
    }

    // STEP 2: COURSE SELECTION
    else if (chatState.step === 2) {
        const college = chatState.selectedCollege;
        const course = college.courses.find(c => c.name === input);

        if (course) {
            const lang = chatState.language;
            let courseHTML = `
                ✅ <b>Course Selected:</b> ${course.name}<br>
                💰 <b>Fees:</b> ${course.fees}<br>
                🎓 <b>Eligibility:</b> ${course.eligibility}
            `;
            addBotMessage(courseHTML, true);
            
            // End Message
            setTimeout(() => {
                addBotMessage(uiText[lang].thank);
                addBotMessage(uiText[lang].restart);
            }, 1000);
            
            chatState.step = 3; // Done
        } else {
            addBotMessage("Please select a valid course.");
            const courseNames = college.courses.map(c => c.name);
            showOptions(courseNames);
        }
    }

    // STEP 3: FINISHED
    else if (chatState.step === 3) {
        const lang = chatState.language;
        addBotMessage(uiText[lang].restart);
    }
}

// Event Listeners
sendBtn.addEventListener('click', () => handleInput(inputField.value));
inputField.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') handleInput(inputField.value);
});

// Start the bot
initChat();