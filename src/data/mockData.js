export const SUBJECTS_SEM1 = [
  { code: "BSC101", name: "Professional English",           maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BSC102", name: "Foundational Mathematics",       maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BCA101", name: "Statistics-I",                   maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BCA102", name: "Digital Computer Fundamentals",  maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BCA103", name: "Intro to Programming Using C",   maxFin: 70, maxInt: 30, credits: 4, isTheory: true },
  { code: "AUC101", name: "Holistic Education",             maxFin: 70, maxInt: 30, credits: 0, isTheory: true },
  { code: "BCA102P", name: "Computer Fundamentals Lab",     maxFin: 20, maxInt: 30, credits: 2, isTheory: false },
  { code: "BCA103P", name: "C Programming Lab",              maxFin: 20, maxInt: 30, credits: 2, isTheory: false },
  { code: "BCA104P", name: "Web Technology Lab",             maxFin: 20, maxInt: 30, credits: 2, isTheory: false },
  { code: "AUC102P", name: "Extracurricular Activities",     maxFin: 20, maxInt: 30, credits: 0, isTheory: false }
];

export const SUBJECTS_SEM2 = [
  { code: "BSC201", name: "Communicative English",          maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BSC202", name: "Basic Discrete Mathematics",      maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BCA201", name: "Statistics-II for BCA",          maxFin: 70, maxInt: 30, credits: 3, isTheory: true },
  { code: "BCA202", name: "Operating Systems",              maxFin: 70, maxInt: 30, credits: 4, isTheory: true },
  { code: "BCA203", name: "Data Structures",                maxFin: 70, maxInt: 30, credits: 4, isTheory: true },
  { code: "AUC201", name: "Holistic Education",             maxFin: 70, maxInt: 30, credits: 0, isTheory: true },
  { code: "BCA201P", name: "Statistics Tools Lab",          maxFin: 20, maxInt: 30, credits: 2, isTheory: false },
  { code: "BCA202P", name: "Operating System Lab",          maxFin: 20, maxInt: 30, credits: 2, isTheory: false },
  { code: "BCA203P", name: "Data Structures Lab",            maxFin: 20, maxInt: 30, credits: 1, isTheory: false },
  { code: "AUC202P", name: "Sports / NSS / Yoga / Painting", maxFin: 20, maxInt: 30, credits: 0, isTheory: false }
];

export const STUDENTS = [
  {
    rollNo: "24013590001",
    name: "ABHIJEET MANDAL",
    sem1: {
      BSC101: [32, 20, 52], BSC102: [32, 23, 55], BCA101: [17, 24, 41],
      BCA102: [34, 26, 60], BCA103: [29, 25, 54], AUC101: [35, 21, 56],
      BCA102P: [16, 27, 43], BCA103P: [16, 25, 41], BCA104P: [16, 27, 43], AUC102P: [17, 29, 46],
      theory: 318, practical: 173, grand: 491, sgpa: 6.55, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [39, 24, 63], BSC202: [19, 28, 47], BCA201: [22, 21, 43],
      BCA202: [20, 26, 46], BCA203: [32, 28, 60], AUC201: [27, 27, 54],
      BCA201P: [16, 27, 43], BCA202P: [16, 27, 43], BCA203P: [18, 26, 44], AUC202P: [18, 28, 46],
      theory: 313, practical: 176, grand: 489, sgpa: 6.36, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590002",
    name: "BHUMI SHRIVASTAVA",
    sem1: {
      BSC101: [41, 23, 64], BSC102: [21, 24, 45], BCA101: [29, 24, 53],
      BCA102: [26, 24, 50], BCA103: [42, 25, 67], AUC101: [46, 19, 65],
      BCA102P: [16, 26, 42], BCA103P: [16, 27, 43], BCA104P: [16, 27, 43], AUC102P: [16, 27, 43],
      theory: 344, practical: 171, grand: 515, sgpa: 6.68, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [24, 21, 45], BSC202: [31, 29, 60], BCA201: [32, 26, 58],
      BCA202: [28, 23, 51], BCA203: [35, 26, 61], AUC201: [37, 27, 64],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [17, 24, 41], AUC202P: [17, 26, 43],
      theory: 339, practical: 166, grand: 505, sgpa: 6.73, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590003",
    name: "GURSHARAN SINGH",
    sem1: {
      BSC101: [null, 24, 24], BSC102: [null, 26, 26], BCA101: [25, 25, 50],
      BCA102: [28, 28, 56], BCA103: [29, 29, 58], AUC101: [20, 20, 40],
      BCA102P: [19, 27, 46], BCA103P: [19, 29, 48], BCA104P: [19, 29, 48], AUC102P: [15, 28, 43],
      theory: 152, practical: 185, grand: 337, sgpa: 2.27, result: "PROMOTED"
    },
    sem2: null
  },
  {
    rollNo: "24013590005",
    name: "HEMANT KUMAR TRIYA",
    sem1: {
      BSC101: [49, 21, 70], BSC102: [47, 29, 76], BCA101: [36, 29, 65],
      BCA102: [45, 25, 70], BCA103: [48, 29, 77], AUC101: [46, 21, 67],
      BCA102P: [18, 26, 44], BCA103P: [18, 27, 45], BCA104P: [18, 29, 47], AUC102P: [17, 27, 44],
      theory: 425, practical: 180, grand: 605, sgpa: 7.86, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [44, 24, 68], BSC202: [29, 29, 58], BCA201: [35, 26, 61],
      BCA202: [22, 24, 46], BCA203: [36, 28, 64], AUC201: [27, 28, 55],
      BCA201P: [19, 28, 47], BCA202P: [19, 28, 47], BCA203P: [19, 29, 48], AUC202P: [19, 29, 48],
      theory: 352, practical: 189, grand: 541, sgpa: 7.18, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590006",
    name: "HRIDAY PRASAD DAS",
    sem1: {
      BSC101: [33, 20, 53], BSC102: [45, 24, 69], BCA101: [27, 24, 51],
      BCA102: [39, 24, 63], BCA103: [32, 22, 54], AUC101: [28, 21, 49],
      BCA102P: [18, 26, 44], BCA103P: [18, 27, 45], BCA104P: [18, 26, 44], AUC102P: [17, 27, 44],
      theory: 339, practical: 177, grand: 516, sgpa: 7.00, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [31, 21, 52], BSC202: [24, 25, 49], BCA201: [23, 29, 52],
      BCA202: [17, 29, 46], BCA203: [32, 27, 59], AUC201: [31, 21, 52],
      BCA201P: [19, 27, 46], BCA202P: [19, 27, 46], BCA203P: [18, 27, 45], AUC202P: [18, 28, 46],
      theory: 310, practical: 183, grand: 493, sgpa: 6.55, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590007",
    name: "IRFAN KHAN",
    sem1: {
      BSC101: [55, 22, 77], BSC102: [30, 24, 54], BCA101: [36, 24, 60],
      BCA102: [43, 27, 70], BCA103: [31, 29, 60], AUC101: [62, 22, 84],
      BCA102P: [18, 26, 44], BCA103P: [18, 27, 45], BCA104P: [18, 28, 46], AUC102P: [18, 28, 46],
      theory: 405, practical: 181, grand: 586, sgpa: 7.23, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [33, 26, 59], BSC202: [26, 26, 52], BCA201: [22, 28, 50],
      BCA202: [23, 26, 49], BCA203: [34, 26, 60], AUC201: [34, 20, 54],
      BCA201P: [18, 28, 46], BCA202P: [18, 28, 46], BCA203P: [18, 28, 46], AUC202P: [18, 29, 47],
      theory: 324, practical: 185, grand: 509, sgpa: 6.59, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590008",
    name: "MD SAJJAD",
    sem1: {
      BSC101: [49, 20, 69], BSC102: [41, 27, 68], BCA101: [33, 24, 57],
      BCA102: [47, 27, 74], BCA103: [31, 24, 55], AUC101: [46, 20, 66],
      BCA102P: [17, 27, 44], BCA103P: [17, 25, 42], BCA104P: [17, 27, 44], AUC102P: [18, 28, 46],
      theory: 389, practical: 176, grand: 565, sgpa: 7.32, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [26, 22, 48], BSC202: [31, 27, 58], BCA201: [25, 28, 53],
      BCA202: [25, 28, 53], BCA203: [32, 29, 61], AUC201: [38, 27, 65],
      BCA201P: [18, 28, 46], BCA202P: [18, 28, 46], BCA203P: [18, 28, 46], AUC202P: [18, 29, 47],
      theory: 338, practical: 185, grand: 523, sgpa: 6.95, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590009",
    name: "MOHAMMAD FAIYAZ",
    sem1: {
      BSC101: [40, 20, 60], BSC102: [30, 28, 58], BCA101: [null, 25, 25],
      BCA102: [null, 26, 26], BCA103: [23, 23, 46], AUC101: [39, 20, 59],
      BCA102P: [17, 27, 44], BCA103P: [17, 25, 42], BCA104P: [17, 26, 43], AUC102P: [17, 27, 44],
      theory: 274, practical: 173, grand: 447, sgpa: 4.59, result: "PROMOTED"
    },
    sem2: null
  },
  {
    rollNo: "24013590010",
    name: "NIKKI KUMARI SINGH",
    sem1: {
      BSC101: [46, 20, 66], BSC102: [32, 24, 56], BCA101: [41, 25, 66],
      BCA102: [51, 22, 73], BCA103: [30, 29, 59], AUC101: [52, 20, 72],
      BCA102P: [18, 26, 44], BCA103P: [18, 27, 45], BCA104P: [18, 28, 46], AUC102P: [17, 27, 44],
      theory: 392, practical: 179, grand: 571, sgpa: 7.41, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [47, 21, 68], BSC202: [34, 24, 58], BCA201: [29, 22, 51],
      BCA202: [37, 22, 59], BCA203: [48, 22, 70], AUC201: [32, 26, 58],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [18, 25, 43], AUC202P: [18, 26, 44],
      theory: 364, practical: 169, grand: 533, sgpa: 7.00, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590011",
    name: "PAYAL BANERJEE",
    sem1: {
      BSC101: [55, 24, 79], BSC102: [56, 24, 80], BCA101: [45, 25, 70],
      BCA102: [63, 25, 88], BCA103: [50, 29, 79], AUC101: [65, 22, 87],
      BCA102P: [17, 26, 43], BCA103P: [17, 27, 44], BCA104P: [17, 27, 44], AUC102P: [17, 29, 46],
      theory: 483, practical: 177, grand: 660, sgpa: 8.27, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [55, 29, 84], BSC202: [39, 29, 68], BCA201: [35, 21, 56],
      BCA202: [39, 29, 68], BCA203: [58, 28, 86], AUC201: [48, 29, 77],
      BCA201P: [18, 28, 46], BCA202P: [18, 28, 46], BCA203P: [19, 28, 47], AUC202P: [19, 28, 47],
      theory: 439, practical: 186, grand: 625, sgpa: 8.18, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590012",
    name: "PRAKASH MANDAL",
    sem1: {
      BSC101: [46, 20, 66], BSC102: [25, 29, 54], BCA101: [28, 28, 56],
      BCA102: [32, 28, 60], BCA103: [30, 22, 52], AUC101: [52, 21, 73],
      BCA102P: [17, 26, 43], BCA103P: [17, 27, 44], BCA104P: [17, 27, 44], AUC102P: [16, 28, 44],
      theory: 365, practical: 175, grand: 540, sgpa: 6.82, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [30, 23, 53], BSC202: [24, 29, 53], BCA201: [28, 28, 56],
      BCA202: [16, 29, 45], BCA203: [26, 27, 53], AUC201: [26, 28, 54],
      BCA201P: [19, 28, 47], BCA202P: [19, 28, 47], BCA203P: [19, 28, 47], AUC202P: [19, 28, 47],
      theory: 314, practical: 188, grand: 502, sgpa: 6.73, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590013",
    name: "PRINCE KUMAR SAH",
    sem1: {
      BSC101: [45, 20, 65], BSC102: [23, 22, 45], BCA101: [37, 24, 61],
      BCA102: [36, 26, 62], BCA103: [34, 23, 57], AUC101: [50, 19, 69],
      BCA102P: [17, 26, 43], BCA103P: [17, 25, 42], BCA104P: [17, 28, 45], AUC102P: [16, 26, 42],
      theory: 359, practical: 172, grand: 531, sgpa: 7.00, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [27, 21, 48], BSC202: [29, 25, 54], BCA201: [23, 25, 48],
      BCA202: [16, 22, 38], BCA203: [30, 24, 54], AUC201: [27, 24, 51],
      BCA201P: [18, 25, 43], BCA202P: [18, 25, 43], BCA203P: [17, 24, 41], AUC202P: [17, 26, 43],
      theory: 293, practical: 170, grand: 463, sgpa: 6.05, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590014",
    name: "RAINA SIDDIQUE",
    sem1: {
      BSC101: [46, 20, 66], BSC102: [43, 29, 72], BCA101: [37, 24, 61],
      BCA102: [36, 24, 60], BCA103: [44, 29, 73], AUC101: [45, 21, 66],
      BCA102P: [18, 28, 46], BCA103P: [18, 27, 45], BCA104P: [18, 27, 45], AUC102P: [17, 28, 45],
      theory: 398, practical: 181, grand: 579, sgpa: 7.64, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [52, 26, 78], BSC202: [35, 28, 63], BCA201: [31, 26, 57],
      BCA202: [30, 28, 58], BCA203: [39, 28, 67], AUC201: [32, 23, 55],
      BCA201P: [18, 27, 45], BCA202P: [18, 27, 45], BCA203P: [17, 27, 44], AUC202P: [17, 27, 44],
      theory: 378, practical: 178, grand: 556, sgpa: 7.27, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590015",
    name: "RAKESH MAHATO",
    sem1: {
      BSC101: [null, 20, 20], BSC102: [null, 24, 24], BCA101: [29, 29, 58],
      BCA102: [25, 25, 50], BCA103: [26, 26, 52], AUC101: [null, 21, 21],
      BCA102P: [16, 27, 43], BCA103P: [16, 25, 41], BCA104P: [16, 28, 44], AUC102P: [16, 26, 42],
      theory: 145, practical: 170, grand: 315, sgpa: 2.05, result: "PROMOTED"
    },
    sem2: null
  },
  {
    rollNo: "24013590016",
    name: "RITURAJ SINGH",
    sem1: {
      BSC101: [37, 20, 57], BSC102: [31, 22, 53], BCA101: [36, 22, 58],
      BCA102: [29, 20, 49], BCA103: [28, 20, 48], AUC101: [46, 18, 64],
      BCA102P: [16, 25, 41], BCA103P: [16, 25, 41], BCA104P: [16, 25, 41], AUC102P: [15, 25, 40],
      theory: 329, practical: 163, grand: 492, sgpa: 6.32, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [35, 21, 56], BSC202: [24, 25, 49], BCA201: [21, 21, 42],
      BCA202: [19, 25, 44], BCA203: [31, 23, 54], AUC201: [40, 20, 60],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [16, 25, 41], AUC202P: [17, 27, 44],
      theory: 305, practical: 167, grand: 472, sgpa: 6.23, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590017",
    name: "RIYA SINGH",
    sem1: {
      BSC101: [44, 22, 66], BSC102: [44, 28, 72], BCA101: [45, 26, 71],
      BCA102: [41, 25, 66], BCA103: [65, 29, 94], AUC101: [65, 19, 84],
      BCA102P: [16, 28, 44], BCA103P: [16, 27, 43], BCA104P: [16, 26, 42], AUC102P: [18, 27, 45],
      theory: 453, practical: 174, grand: 627, sgpa: 8.27, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [49, 23, 72], BSC202: [46, 29, 75], BCA201: [47, 24, 71],
      BCA202: [39, 28, 67], BCA203: [45, 26, 71], AUC201: [47, 29, 76],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [15, 24, 39], AUC202P: [15, 27, 42],
      theory: 432, practical: 163, grand: 595, sgpa: 8.00, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590018",
    name: "SAMIMUDDIN ANSARI",
    sem1: {
      BSC101: [34, 20, 54], BSC102: [25, 29, 54], BCA101: [28, 23, 51],
      BCA102: [22, 22, 44], BCA103: [25, 25, 50], AUC101: [55, 21, 76],
      BCA102P: [16, 28, 44], BCA103P: [16, 29, 45], BCA104P: [16, 26, 42], AUC102P: [17, 28, 45],
      theory: 341, practical: 176, grand: 517, sgpa: 6.68, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [24, 21, 45], BSC202: [27, 25, 52], BCA201: [17, 21, 38],
      BCA202: [34, 22, 56], BCA203: [29, 23, 52], AUC201: [32, 25, 57],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [16, 24, 40], AUC202P: [16, 26, 42],
      theory: 300, practical: 164, grand: 464, sgpa: 6.23, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590019",
    name: "SATYAM GORAI",
    sem1: {
      BSC101: [28, 20, 48], BSC102: [31, 29, 60], BCA101: [26, 29, 55],
      BCA102: [27, 32, 59], BCA103: [29, 24, 53], AUC101: [33, 20, 53],
      BCA102P: [16, 26, 42], BCA103P: [16, 29, 45], BCA104P: [16, 28, 44], AUC102P: [19, 28, 47],
      theory: 328, practical: 178, grand: 506, sgpa: 6.55, result: "PASSED & PROMOTED"
    },
    sem2: null
  },
  {
    rollNo: "24013590020",
    name: "SAURAV SINGH",
    sem1: {
      BSC101: [38, 20, 58], BSC102: [30, 22, 52], BCA101: [29, 22, 51],
      BCA102: [29, 20, 49], BCA103: [28, 20, 48], AUC101: [37, 19, 56],
      BCA102P: [16, 27, 43], BCA103P: [16, 27, 43], BCA104P: [16, 27, 43], AUC102P: [16, 25, 41],
      theory: 314, practical: 168, grand: 482, sgpa: 6.32, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [24, 21, 45], BSC202: [22, 24, 46], BCA201: [17, 28, 45],
      BCA202: [24, 21, 45], BCA203: [18, 26, 44], AUC201: [31, 20, 51],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [16, 24, 40], AUC202P: [16, 26, 42],
      theory: 282, practical: 164, grand: 446, sgpa: 6.05, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590021",
    name: "SHRISTI KUMARI",
    sem1: {
      BSC101: [28, 20, 48], BSC102: [29, 26, 55], BCA101: [30, 26, 56],
      BCA102: [35, 28, 63], BCA103: [28, 23, 51], AUC101: [37, 20, 57],
      BCA102P: [16, 26, 42], BCA103P: [16, 29, 45], BCA104P: [16, 29, 45], AUC102P: [19, 29, 48],
      theory: 330, practical: 180, grand: 510, sgpa: 6.73, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [24, 23, 47], BSC202: [29, 29, 58], BCA201: [21, 25, 46],
      BCA202: [18, 26, 44], BCA203: [35, 29, 64], AUC201: [22, 28, 50],
      BCA201P: [19, 28, 47], BCA202P: [19, 28, 47], BCA203P: [19, 29, 48], AUC202P: [19, 28, 47],
      theory: 309, practical: 189, grand: 498, sgpa: 6.64, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590022",
    name: "SUBHAM DUTTA",
    sem1: {
      BSC101: [null, 20, 20], BSC102: [null, 23, 23], BCA101: [23, 23, 46],
      BCA102: [23, 23, 46], BCA103: [null, 22, 22], AUC101: [null, 20, 20],
      BCA102P: [16, 26, 42], BCA103P: [16, 27, 43], BCA104P: [16, 26, 42], AUC102P: [18, 27, 45],
      theory: 131, practical: 172, grand: 303, sgpa: 2.05, result: "PROMOTED"
    },
    sem2: null
  },
  {
    rollNo: "24013590023",
    name: "SUMIT GHOSH",
    sem1: {
      BSC101: [50, 24, 74], BSC102: [49, 29, 78], BCA101: [62, 29, 91],
      BCA102: [57, 29, 86], BCA103: [66, 29, 95], AUC101: [62, 20, 82],
      BCA102P: [19, 27, 46], BCA103P: [19, 29, 48], BCA104P: [19, 29, 48], AUC102P: [18, 28, 46],
      theory: 506, practical: 188, grand: 694, sgpa: 9.27, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [55, 29, 84], BSC202: [51, 29, 80], BCA201: [41, 29, 70],
      BCA202: [29, 28, 57], BCA203: [47, 29, 76], AUC201: [45, 29, 74],
      BCA201P: [19, 29, 48], BCA202P: [19, 29, 48], BCA203P: [19, 29, 48], AUC202P: [19, 29, 48],
      theory: 441, practical: 192, grand: 633, sgpa: 8.09, result: "PASSED & PROMOTED"
    }
  },
  {
    rollNo: "24013590024",
    name: "SUMIT KUMAR SINGH",
    sem1: {
      BSC101: [40, 20, 60], BSC102: [29, 29, 58], BCA101: [42, 26, 68],
      BCA102: [25, 25, 50], BCA103: [29, 29, 58], AUC101: [52, 20, 72],
      BCA102P: [18, 26, 44], BCA103P: [18, 29, 47], BCA104P: [18, 29, 47], AUC102P: [18, 28, 46],
      theory: 385, practical: 184, grand: 569, sgpa: 7.36, result: "PASSED & PROMOTED"
    },
    sem2: null
  },
  {
    rollNo: "24013590025",
    name: "TANZIL MAHTAB",
    sem1: {
      BSC101: [37, 20, 57], BSC102: [25, 24, 49], BCA101: [35, 24, 59],
      BCA102: [34, 24, 58], BCA103: [41, 20, 61], AUC101: [38, 20, 58],
      BCA102P: [16, 26, 42], BCA103P: [16, 25, 41], BCA104P: [16, 26, 42], AUC102P: [17, 26, 43],
      theory: 342, practical: 168, grand: 510, sgpa: 6.73, result: "PASSED & PROMOTED"
    },
    sem2: {
      BSC201: [36, 21, 57], BSC202: [34, 28, 62], BCA201: [21, 21, 42],
      BCA202: [24, 29, 53], BCA203: [23, 24, 47], AUC201: [22, 25, 47],
      BCA201P: [16, 25, 41], BCA202P: [16, 25, 41], BCA203P: [16, 23, 39], AUC202P: [16, 26, 42],
      theory: 308, practical: 163, grand: 471, sgpa: 6.45, result: "PASSED & PROMOTED"
    }
  }
];

export function makeTheme(dark) {
  return dark ? {
    bg:       "#090514", // deep lavender black
    surface:  "#120d24", // deep purple-gray
    raised:   "#1d1636", // raised deep purple
    border:   "#2e2554", // subtle purple border
    borderHi: "#453974", // highlighted purple border
    gold:     "#c084fc", // vibrant lavender accent
    goldDim:  "#7c3aed", // violet accent
    text:     "#f3effc", // white-lavender
    muted:    "#a69dc9", // muted lavender
    dim:      "#5a5084", // dim purple
    green:    "#34d399", // emerald-400
    greenBg:  "#064e3b",
    red:      "#f43f5e", // rose-red 400
    redBg:    "#7f1d1d",
    amber:    "#c084fc",
  } : {
    bg:       "#faf9fe", // light lavender-white
    surface:  "#ffffff",
    raised:   "#f1eefc", // raised light lavender
    border:   "#e2daf7", // subtle light border
    borderHi: "#cbbdf2", // highlighted light border
    text:     "#12092d", // dark lavender-black
    muted:    "#6d5e97", // higher contrast muted light lavender
    dim:      "#b1a6d6", // dim light lavender
    gold:     "#7c3aed", // violet-600 accent
    goldDim:  "#6d28d9", // violet-700
    green:    "#059669",
    greenBg:  "#ecfdf5",
    red:      "#dc2626",
    redBg:    "#fef2f2",
    amber:    "#7c3aed",
  };
}

export function gradeColor(g) {
  return ({
    O: "#c084fc",    // Vibrant Lavender (Outstanding)
    "A+": "#a78bfa",  // Medium Lavender (Excellent)
    A: "#818cf8",    // Periwinkle (Very Good)
    "B+": "#6366f1",  // Indigo (Good)
    B: "#4f46e5",    // Deep Indigo (Average)
    C: "#f472b6",    // Rose Pink (Pass)
    P: "#94a3b8",    // Slate Gray (Marginal Pass)
    F: "#f43f5e"     // Warning Rose-Red (Fail)
  })[g] || "#94a3b8";
}

export function getGrade(marks, max) {
  if (marks === null || marks === undefined) return "F";
  const p = (marks / max) * 100;
  if (p >= 91) return "O";
  if (p >= 81) return "A+";
  if (p >= 71) return "A";
  if (p >= 61) return "B+";
  if (p >= 51) return "B";
  if (p >= 41) return "C";
  if (p >= 33) return "P";
  return "F";
}