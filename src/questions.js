export const testTitle = 'GHQ Assistant - General Ability Test'

const questions = [
  // ========== ENGLISH ==========
  {
    question: 'Choose the antonym of "OBSTINATE":',
    options: ['Stubborn', 'Flexible', 'Rigid', 'Firm'],
    answer: 'Flexible',
  },
  {
    question: 'Fill in the blank: "He is senior _____ me by two years."',
    options: ['than', 'from', 'to', 'with'],
    answer: 'to',
  },
  {
    question: 'Choose the synonym of "CANDID":',
    options: ['Deceitful', 'Frank', 'Secretive', 'Vague'],
    answer: 'Frank',
  },
  {
    question: 'Identify the correct passive voice: "She handles official files carefully."',
    options: [
      'Official files were handled carefully by her.',
      'Official files are handled carefully by her.',
      'Official files are being handled carefully by her.',
      'Official files have been handled carefully by her.',
    ],
    answer: 'Official files are handled carefully by her.',
  },
  {
    question: 'Choose the correctly spelled word:',
    options: ['Bureaucracy', 'Beurocracy', 'Buercracy', 'Bureaucrasy'],
    answer: 'Bureaucracy',
  },
  {
    question: 'Idiom: "To bury the hatchet" means:',
    options: ['To hide a weapon', 'To make peace', 'To start a fight', 'To dig a hole'],
    answer: 'To make peace',
  },
  {
    question: 'Idiom: "A wild goose chase" means:',
    options: ['A successful hunt', 'A useless search', 'A fast race', 'A dangerous mission'],
    answer: 'A useless search',
  },
  {
    question: 'One word substitution: "A person who loves mankind" is:',
    options: ['Philanthropist', 'Misanthrope', 'Patriot', 'Cynic'],
    answer: 'Philanthropist',
  },
  {
    question: 'Choose the correct preposition: "He is good _____ mathematics."',
    options: ['in', 'at', 'on', 'for'],
    answer: 'at',
  },
  {
    question: 'Plural of "Mouse" (computer device):',
    options: ['Mices', 'Mouses', 'Mice', 'Mousez'],
    answer: 'Mice',
  },
  {
    question: 'Antonym of "DIVERGE" is:',
    options: ['Converge', 'Polish', 'Glaze', 'Modest'],
    answer: 'Converge',
  },
  {
    question: 'Translation: Choose the correct English translation of "وہ ہر روز اسکول جاتا ہے":',
    options: [
      'He goes to school every day.',
      'He go to school every day.',
      'He is going to school every day.',
      'He went to school every day.',
    ],
    answer: 'He goes to school every day.',
  },
  {
    question: 'Fill in the blank: "I have been living here _____ 2015."',
    options: ['for', 'since', 'from', 'by'],
    answer: 'since',
  },
  {
    question: 'Choose the correct sentence:',
    options: [
      'One of my friend is a doctor.',
      'One of my friends are a doctor.',
      'One of my friends is a doctor.',
      'One of my friend are a doctor.',
    ],
    answer: 'One of my friends is a doctor.',
  },
  {
    question: 'Antonym of "HUMBLE":',
    options: ['Modest', 'Arrogant', 'Simple', 'Meek'],
    answer: 'Arrogant',
  },
  {
    question: 'Synonym of "VITAL":',
    options: ['Unimportant', 'Essential', 'Weak', 'Optional'],
    answer: 'Essential',
  },
  {
    question: 'Idiom: "To smell a rat" means:',
    options: ['To detect something suspicious', 'To clean a house', 'To buy a pet', 'To cook food'],
    answer: 'To detect something suspicious',
  },
  {
    question: 'Choose the correct spelling:',
    options: ['Maintainance', 'Maintenance', 'Maintenence', 'Maintanance'],
    answer: 'Maintenance',
  },

  // ========== MATH / IQ ==========
  {
    question: 'What is 25% of 200?',
    options: ['25', '40', '50', '75'],
    answer: '50',
  },
  {
    question: 'If 5 men complete a work in 10 days, how many days will 10 men take?',
    options: ['20', '10', '5', '15'],
    answer: '5',
  },
  {
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ___',
    options: ['36', '40', '42', '48'],
    answer: '42',
  },
  {
    question: 'The average of 10, 20, 30, 40, and 50 is:',
    options: ['25', '30', '35', '40'],
    answer: '30',
  },
  {
    question: 'What is the LCM of 12 and 18?',
    options: ['6', '36', '54', '72'],
    answer: '36',
  },
  {
    question: 'A man buys an item for Rs. 500 and sells it for Rs. 600. What is the profit percentage?',
    options: ['10%', '15%', '20%', '25%'],
    answer: '20%',
  },
  {
    question: 'If x + 5 = 12, what is the value of x?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    question: 'What is the square root of 169?',
    options: ['11', '12', '13', '14'],
    answer: '13',
  },
  {
    question: 'A train travels 300 km in 5 hours. What is its average speed?',
    options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'],
    answer: '60 km/h',
  },
  {
    question: 'Find the odd one out: 3, 5, 7, 9, 11',
    options: ['3', '5', '9', '11'],
    answer: '9',
  },

  // ========== COMPUTER ==========
  {
    question: 'What is the shortcut key to insert a hyperlink in MS Word?',
    options: ['Ctrl + H', 'Ctrl + K', 'Ctrl + L', 'Ctrl + M'],
    answer: 'Ctrl + K',
  },
  {
    question: 'In MS Excel, which function is used to add up values in a range of cells?',
    options: ['=TOTAL()', '=ADD()', '=SUM()', '=COUNT()'],
    answer: '=SUM()',
  },
  {
    question: 'Which key is pressed to start a slideshow presentation in MS PowerPoint?',
    options: ['F1', 'F5', 'F7', 'F12'],
    answer: 'F5',
  },
  {
    question: 'What does RAM stand for in computer systems?',
    options: ['Read Access Memory', 'Random Access Memory', 'Rapid Action Memory', 'Run Automated Memory'],
    answer: 'Random Access Memory',
  },
  {
    question: 'Which protocol is primarily used for secure browsing on the Internet?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    answer: 'HTTPS',
  },
  {
    question: 'What is the shortcut key to undo an action in MS Word?',
    options: ['Ctrl + Y', 'Ctrl + Z', 'Ctrl + U', 'Ctrl + A'],
    answer: 'Ctrl + Z',
  },
  {
    question: 'Which of the following is NOT an operating system?',
    options: ['Windows', 'Linux', 'MS Word', 'macOS'],
    answer: 'MS Word',
  },
  {
    question: 'What does CPU stand for?',
    options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Unit', 'Control Processing Unit'],
    answer: 'Central Processing Unit',
  },
  {
    question: 'In MS Excel, which shortcut is used to edit the active cell?',
    options: ['F1', 'F2', 'F3', 'F4'],
    answer: 'F2',
  },
  {
    question: 'What is the full form of WWW?',
    options: ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
    answer: 'World Wide Web',
  },

  // ========== PAK STUDIES ==========
  {
    question: 'Who presented the famous Lahore Resolution on 23rd March 1940?',
    options: [
      'Quaid-e-Azam Muhammad Ali Jinnah',
      'A. K. Fazlul Huq',
      'Allama Muhammad Iqbal',
      'Liaquat Ali Khan',
    ],
    answer: 'A. K. Fazlul Huq',
  },
  {
    question: 'Under which Constitution of Pakistan was the country first declared an "Islamic Republic"?',
    options: ['1956 Constitution', '1962 Constitution', '1973 Constitution', 'Both A and C'],
    answer: '1956 Constitution',
  },
  {
    question: 'The Objectives Resolution was passed by the Constituent Assembly of Pakistan on:',
    options: ['14th August 1947', '12th March 1949', '23rd March 1956', '16th October 1951'],
    answer: '12th March 1949',
  },
  {
    question: 'What is the highest mountain peak in Pakistan?',
    options: ['Nanga Parbat', 'K2 (Mount Godwin-Austen)', 'Broad Peak', 'Tirich Mir'],
    answer: 'K2 (Mount Godwin-Austen)',
  },
  {
    question: 'Pakistan officially became a member of the United Nations on:',
    options: ['14th August 1947', '30th September 1947', '1st January 1948', '23rd March 1948'],
    answer: '30th September 1947',
  },
  {
    question: 'The book "Jinnah of Pakistan" was written by:',
    options: ['Hector Bolitho', 'Stanley Wolpert', 'Philip Hitti', 'Ayesha Jalal'],
    answer: 'Stanley Wolpert',
  },
  {
    question: 'The partition of Bengal (1905) was annulled in which year?',
    options: ['1909', '1911', '1908', '1910'],
    answer: '1911',
  },
  {
    question: 'Which is the longest river in Pakistan?',
    options: ['Jhelum', 'Chenab', 'Indus', 'Ravi'],
    answer: 'Indus',
  },

  // ========== ISLAMIAT ==========
  {
    question: 'Which Caliph is credited with the standardization and compilation of the Quran?',
    options: ['Abu Bakr (RA)', 'Umar (RA)', 'Usman (RA)', 'Ali (RA)'],
    answer: 'Usman (RA)',
  },
  {
    question: 'Which principle in Islam emphasizes reasoning and analogy when direct texts are absent?',
    options: ['Ijma', 'Qiyas', 'Ijtihad', 'Istislah'],
    answer: 'Qiyas',
  },
  {
    question: 'The Battle of Uhud was fought in which Hijri year?',
    options: ['2 Hijri', '3 Hijri', '4 Hijri', '5 Hijri'],
    answer: '3 Hijri',
  },
  {
    question: 'Which surah is called "The Constitution of the Muslim State"?',
    options: ['Al-Baqarah', 'Al-Nisa', 'Al-Maidah', 'Al-Anfal'],
    answer: 'Al-Baqarah',
  },
  {
    question: 'Which treaty allowed Muslims in Madina to coexist with non-Muslims?',
    options: ['Treaty of Hudaybiyyah', 'Charter of Madina', 'Treaty of Khyber', 'Treaty of Taif'],
    answer: 'Charter of Madina',
  },
  {
    question: 'Which classical Islamic scholar is known for the work "Al-Muwatta"?',
    options: ["Imam Shafi'i", 'Imam Malik', 'Imam Abu Hanifa', 'Imam Hanbal'],
    answer: 'Imam Malik',
  },

  // ========== GENERAL KNOWLEDGE / SCIENCE ==========
  {
    question: 'Which is the largest ocean in the world?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean',
  },
  {
    question: 'The headquarters of the International Court of Justice (ICJ) is situated in:',
    options: ['Geneva, Switzerland', 'New York, USA', 'The Hague, Netherlands', 'Vienna, Austria'],
    answer: 'The Hague, Netherlands',
  },
  {
    question: 'Which canal connects the Mediterranean Sea to the Red Sea?',
    options: ['Panama Canal', 'Suez Canal', 'Kiel Canal', 'Erie Canal'],
    answer: 'Suez Canal',
  },
  {
    question: 'What is the capital of Turkey?',
    options: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
    answer: 'Ankara',
  },
  {
    question: 'The permanent headquarters of the World Health Organization (WHO) is located in:',
    options: ['New York', 'Geneva', 'Paris', 'Vienna'],
    answer: 'Geneva',
  },
  {
    question: 'Which is the national flower of Pakistan?',
    options: ['Rose', 'Jasmine', 'Tulip', 'Sunflower'],
    answer: 'Jasmine',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    answer: 'Au',
  },
  {
    question: 'How many bones are in the adult human body?',
    options: ['186', '206', '216', '256'],
    answer: '206',
  },
  {
    question: 'Which is the fastest land animal?',
    options: ['Lion', 'Horse', 'Cheetah', 'Leopard'],
    answer: 'Cheetah',
  },
  {
    question: 'What is the national animal of Pakistan?',
    options: ['Lion', 'Markhor', 'Indus River dolphin', 'Chinkara'],
    answer: 'Markhor',
  },
]

export default questions