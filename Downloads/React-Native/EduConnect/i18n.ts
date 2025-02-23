// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // General & Header
      EDUCONNECT: "EDUCONNECT",
      "Fees and Payment": "Fees and Payment",
      "Timetables and Documents": "Timetables and Documents",
      "Get the Scedule": "Get the Scedule",
      Logout: "Logout",
      "App language": "App language",
      "Contact Team Support": "Contact Team Support",

      // Login Screen
      Login: "Login",
      "Enter Phone Number": "Enter Phone Number",
      "Enter OTP": "Enter OTP",
      "Login Parent": "Login Parent",
      "Login Teacher": "Login Teacher",

      // Parent Dashboard
      "Student Name": "Student Name",
      "STD Div": "STD Div",
      "Roll Number": "Roll Number",
      "Assignment Pending": "Assignment Pending",
      Subject1: "Subject1",
      "Due on": "Due on",
      by: "by",
      "Assignment Heading": "Assignment Heading",
      "View more": "View more",
      "Overall Attendance": "Overall Attendance",
      "Conducted till:": "Conducted till:",
      "Latest test score": "Latest test score",
      "Test date:": "Test date:",
      "Non Academic Progress": "Non Academic Progress",
      "Contact Teachers": "Contact Teachers",

      //Announcement
      "Exam TimeTable": "Exam TimeTable",
      "Timetable for upcoming exams": "Timetable for upcoming exams",
      "Fees Payment Receipt": "Fees Payment Receipt",
      "Fees Receipt": "Fees Receipt",
      "Admission Date": "Admission Date",
      "Admission Form": "Admission Form",
      "Tomorrow Holiday": "Tomorrow Holiday",
      "On account of festival": "On account of festival",

      // Contact Teachers Modal & Teacher Card
      Teacher: "Teacher",
      Subject: "Subject",
      "Contact Teacher": "Contact Teacher",
      Call: "Call",
      Message: "Message",
      Close: "Close",

      // Teacher Dashboard
      "Teacher Name": "Teacher Name",
      ID: "ID",
      Class: "Class",
      "View Class Details": "View Class Details",
      "Total Assigned Students": "Total Assigned Students",
      "Unread Parent Messages": "Unread Parent Messages",
      "Today's TimeTable": "Today's TimeTable",
      Time: "Time",
      "Top Students": "Top Students",
      "Students who are Struggling": "Students who are Struggling",
      "Exam Name - Date": "Exam Name - Date",
      "PTM - Date": "PTM - Date",

      // Event Screen (Teacher)
      "Send Notification": "Send Notification",
      "Select Whom to send": "Select Whom to send",
      "Upcoming Event": "Upcoming Event",
      "No Upcoming events": "No Upcoming events",
      Notices: "Notices",
      "Posted on": "Posted on",
      Share: "Share",
      Send: "Send",
      Search: "Search",
      Classes: "Classes",
      Select: "Select",
      People: "People",
      English: "English",
      EN: "EN",

      // Additional General Keys (if needed)
      "Total Assigned": "Total Assigned",
      Students: "Students",
      "Unread Parent": "Unread Parent",
      Messages: "Messages",

      // Chat Screen
      "Ask For Doubts": "Ask For Doubts",

      // Detailed Class Screen
      "Roll No.": "Roll No.",
      Number: "Number",

      // Attendance Screen
      Attendance: "Attendance",
      Conducted: "Conducted",

      // Test Score Screen
      Subjects: "Subjects",
      Test: "Test",
    },
  },
  hi: {
    translation: {
      // General & Header
      EDUCONNECT: "एडुकनेक्ट",
      "Fees and Payment": "फीस और भुगतान",
      "Timetables and Documents": "समय सारणी और दस्तावेज़",
      "Get the Schedule": "समय सारणी प्राप्त करें",
      Logout: "लॉगआउट",
      "App language": "ऐप भाषा",
      "Contact Team Support": "टीम सपोर्ट से संपर्क करें",

      // Login Screen
      Login: "लॉगिन",
      "Enter Phone Number": "फोन नंबर दर्ज करें",
      "Enter OTP": "OTP दर्ज करें",
      "Login Parent": "पेरेंट लॉगिन",
      "Login Teacher": "टीचर लॉगिन",

      // Parent Dashboard
      "Student Name": "विद्यार्थी का नाम",
      "STD Div": "कक्षा डिवीजन",
      "Roll Number": "रोल नंबर",
      "Assignment Pending": "असाइनमेंट लंबित",
      Subject1: "विषय1",
      "Due on": "निर्धारित तिथि",
      by: "द्वारा",
      "Assignment Heading": "असाइनमेंट शीर्षक",
      "View more": "और देखें",
      "Overall Attendance": "कुल उपस्थिति",
      "Conducted till:": "तक आयोजित:",
      "Latest test score": "नवीनतम टेस्ट स्कोर",
      "Test date:": "टेस्ट तिथि:",
      "Non Academic Progress": "गैर शैक्षणिक प्रगति",
      "Contact Teachers": "शिक्षकों से संपर्क करें",

      //Announcement
      "Exam TimeTable": "Exam TimeTable",
      "Timetable for upcoming exams": "Timetable for upcoming exams",
      "Fees Payment Receipt": "Fees Payment Receipt",
      "Fees Receipt": "Fees Receipt",
      "Admission Date": "Admission Date",
      "Admission Form": "Admission Form",
      "Tomorrow Holiday": "Tomorrow Holiday",
      "On account of festival": "On account of festival",

      // Contact Teachers Modal & Teacher Card
      Teacher: "शिक्षक",
      Subject: "विषय",
      "Contact Teacher": "शिक्षक से संपर्क करें",
      Call: "कॉल",
      Message: "संदेश",
      Close: "बंद करें",

      // Teacher Dashboard
      "Teacher Name": "शिक्षक का नाम",
      ID: "आईडी",
      Class: "कक्षा",
      "View Class Details": "कक्षा विवरण देखें",
      "Total Assigned Students": "कुल असाइन किए गए विद्यार्थी",
      "Unread Parent Messages": "अनपढ़ पेरेंट संदेश",
      "Today's TimeTable": "आज की समय सारिणी",
      Time: "समय",
      "Top Students": "श्रेष्ठ विद्यार्थी",
      "Students who are Struggling": "संघर्षरत विद्यार्थी",
      "Exam Name - Date": "परीक्षा नाम - तिथि",
      "PTM - Date": "पीटीएम - तिथि",

      // Event Screen
      "Send Notification": "सूचना भेजें",
      "Select Whom to send": "जिसे भेजना है चुनें",
      "Upcoming Event": "आगामी कार्यक्रम",
      "No Upcoming events": "कोई आगामी कार्यक्रम नहीं",
      Notices: "सूचनाएँ",
      "Posted on": "पोस्ट किया गया",
      Share: "साझा करें",
      Send: "भेजें",
      Search: "खोजें",
      Classes: "कक्षाएं",
      Select: "चुनें",
      People: "लोग",
      English: "अंग्रेज़ी",
      EN: "EN",

      // Additional General Keys (if needed)
      "Total Assigned": "कुल नियुक्त",
      Students: "विद्यार्थी",
      "Unread Parent": "अनपढ़ पालक",
      Messages: "संदेश",

      // Chat Screen
      "Ask For Doubts": "सवाल पूछें",

      // Detailed Class Screen
      "Roll No.": "रोल नंबर",
      Number: "संख्या",

      // Attendance Screen
      Attendance: "उपस्थिति",
      Conducted: "आयोजित",

      // Test Score Screen
      Subjects: "विषय",
      Test: "परीक्षा",
    },
  },
  mr: {
    translation: {
      // General & Header
      EDUCONNECT: "एडुकनेक्ट",
      "Fees and Payment": "फी आणि पेमेंट",
      "Timetables and Documents": "वेळापत्रक आणि कागदपत्रे",
      "Get the Schedule": "वेळापत्रक मिळवा",
      Logout: "लॉगआउट",
      "App language": "अ‍ॅप भाषा",
      "Contact Team Support": "टीम सपोर्टशी संपर्क साधा",

      // Login Screen
      Login: "लॉगिन",
      "Enter Phone Number": "फोन नंबर प्रविष्ट करा",
      "Enter OTP": "OTP प्रविष्ट करा",
      "Login Parent": "पालक लॉगिन",
      "Login Teacher": "शिक्षक लॉगिन",

      // Parent Dashboard
      "Student Name": "विद्यार्थ्याचे नाव",
      "STD Div": "कक्षा विभाग",
      "Roll Number": "रोल नंबर",
      "Assignment Pending": "असाईनमेंट प्रलंबित",
      Subject1: "विषय1",
      "Due on": "नियत तारीख",
      by: "कडून",
      "Assignment Heading": "असाईनमेंट शीर्षक",
      "View more": "अधिक पहा",
      "Overall Attendance": "एकूण उपस्थिती",
      "Conducted till:": "पर्यंत आयोजित:",
      "Latest test score": "ताजे चाचणी निकाल",
      "Test date:": "चाचणी तारीख:",
      "Non Academic Progress": "गैर शैक्षणिक प्रगती",
      "Contact Teachers": "शिक्षकांशी संपर्क साधा",

      //Announcment
      "Exam TimeTable": "પરીક્ષાનું સમયપત્રક",
      "Timetable for upcoming exams": "આગામી પરીક્ષાઓ માટેનું સમયપત્રક",
      "Fees Payment Receipt": "ફી ચુકવણી રસીદ",
      "Fees Receipt": "ફી રસીદ",
      "Admission Date": "પ્રવેશની તારીખ",
      "Admission Form": "પ્રવેશ ફોર્મ",
      "Tomorrow Holiday": "કાલની રજા",
      "On account of festival": "ઉત્સવના કારણે",

      // Contact Teachers Modal & Teacher Card
      Teacher: "शिक्षक",
      Subject: "विषय",
      "Contact Teacher": "शिक्षकाशी संपर्क साधा",
      Call: "कॉल",
      Message: "संदेश",
      Close: "बंद करा",

      // Teacher Dashboard
      "Teacher Name": "शिक्षकाचे नाव",
      ID: "ओळख",
      Class: "वर्ग",
      "View Class Details": "वर्गाचा तपशील पहा",
      "Total Assigned Students": "एकूण नियुक्त विद्यार्थी",
      "Unread Parent Messages": "वाचलेले नसलेले पालक संदेश",
      "Today's TimeTable": "आजचे वेळापत्रक",
      Time: "वेळ",
      "Top Students": "श्रेष्ठ विद्यार्थी",
      "Students who are Struggling": "अडचणीत असलेले विद्यार्थी",
      "Exam Name - Date": "परीक्षेचे नाव - तारीख",
      "PTM - Date": "पीटीएम - तारीख",

      // Event Screen
      "Send Notification": "सूचना पाठवा",
      "Select Whom to send": "ज्याला पाठवायचे आहे ते निवडा",
      "Upcoming Event": "येणारा कार्यक्रम",
      "No Upcoming events": "कोणताही येणारा कार्यक्रम नाही",
      Notices: "सूचना",
      "Posted on": "पोस्ट केले",
      Share: "शेअर करा",
      Send: "पाठवा",
      Search: "शोधा",
      Classes: "वर्ग",
      Select: "निवडा",
      People: "लोक",
      English: "इंग्रजी",
      EN: "EN",

      // Additional General Keys (if needed)
      "Total Assigned": "एकूण नियुक्त",
      Students: "विद्यार्थी",
      "Unread Parent": "वाचलेले नसलेले पालक",
      Messages: "संदेश",

      // Chat Screen
      "Ask For Doubts": "शंका विचारा",

      // Detailed Class Screen
      "Roll No.": "रोल नंबर",
      Number: "संख्या",

      // Attendance Screen
      Attendance: "उपस्थिती",
      Conducted: "आयोजित",

      // Test Score Screen
      Subjects: "विषय",
      Test: "चाचणी",
    },
  },
  gu: {
    translation: {
      // General & Header
      EDUCONNECT: "એડુકનેક્ટ",
      "Fees and Payment": "ફી અને ચુકવણી",
      "Timetables and Documents": "સમયસૂચિ અને દસ્તાવેજો",
      "Get the Schedule": "સમયસૂચિ મેળવો",
      Logout: "લૉગઆઉટ",
      "App language": "એપ્લિકેશન ભાષા",
      "Contact Team Support": "ટીમ સપોર્ટનો સંપર્ક કરો",

      // Login Screen
      Login: "લૉગિન",
      "Enter Phone Number": "ફોન નંબર દાખલ કરો",
      "Enter OTP": "OTP દાખલ કરો",
      "Login Parent": "પેરેન્ટ લૉગિન",
      "Login Teacher": "શિક્ષક લૉગિન",

      // Parent Dashboard
      "Student Name": "વિદ્યાર્થીનું નામ",
      "STD Div": "કક્ષા વિભાગ",
      "Roll Number": "રોલ નંબર",
      "Assignment Pending": "એસાઇનમેન્ટ બાકી",
      Subject1: "વિષય1",
      "Due on": "નક્કી તારીખ",
      by: "દ્વારા",
      "Assignment Heading": "એસાઇનમેન્ટ શીર્ષક",
      "View more": "વધુ જુઓ",
      "Overall Attendance": "કુલ હાજરી",
      "Conducted till:": "સુનિશ્ચિત સુધી:",
      "Latest test score": "નવીનતમ ટેસ્ટ સ્કોર",
      "Test date:": "ટેસ્ટ તારીખ:",
      "Non Academic Progress": "ગેર શૈક્ષણિક પ્રગતિ",
      "Contact Teachers": "શિક્ષકનો સંપર્ક કરો",

      // Contact Teachers Modal & Teacher Card
      Teacher: "શિક્ષક",
      Subject: "વિષય",
      "Contact Teacher": "શિક્ષક સાથે સંપર્ક કરો",
      Call: "કોલ",
      Message: "સંદેશ",
      Close: "બંધ કરો",

      // Teacher Dashboard
      "Teacher Name": "શિક્ષકનું નામ",
      ID: "આઈડી",
      Class: "વર્ગ",
      "View Class Details": "વર્ગ વિગતો જુઓ",
      "Total Assigned Students": "કુલ નિમણૂક કરેલા વિદ્યાર્થીઓ",
      "Unread Parent Messages": "અપઢ પેરેન્ટ સંદેશો",
      "Today's TimeTable": "આજનું સમયપત્રક",
      Time: "સમય",
      "Top Students": "શ્રેષ્ઠ વિદ્યાર્થીઓ",
      "Students who are Struggling": "જ્યાં મુશ્કેલીમાં વિદ્યાર્થીઓ",
      "Exam Name - Date": "પરીક્ષા નામ - તારીખ",
      "PTM - Date": "પીટીએમ - તારીખ",

      // Event Screen
      "Send Notification": "સૂચના મોકલો",
      "Select Whom to send": "જેનુ મોકલવું છે તે પસંદ કરો",
      "Upcoming Event": "આવનારો કાર્યક્રમ",
      "No Upcoming events": "કોઈ આવનારો કાર્યક્રમ નથી",
      Notices: "સૂચનાઓ",
      "Posted on": "પોસ્ટ કરવામાં આવ્યું",
      Share: "શેર કરો",
      Send: "મોકલો",
      Search: "શોધો",
      Classes: "વર્ગો",
      Select: "પસંદ કરો",
      People: "લોકો",
      English: "ઇંગ્લિશ",
      EN: "EN",

      // Additional General Keys (if needed)
      "Total Assigned": "કુલ નિયુક્ત",
      Students: "વિદ્યાર્થીઓ",
      "Unread Parent": "અપઢ પેરેન્ટ",
      Messages: "સંદેશો",

      // Chat Screen
      "Ask For Doubts": "શંકા પૂછો",

      // Detailed Class Screen
      "Roll No.": "રોલ નં.",
      Number: "નંબર",

      // Attendance Screen
      Attendance: "હાજરી",
      Conducted: "આયોજિત",

      // Test Score Screen
      Subjects: "વિષયો",
      Test: "ટેસ્ટ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
