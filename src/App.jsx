import { useState, useMemo, useEffect, useRef } from "react";
import {
  SUBJECTS_SEM1,
  SUBJECTS_SEM2,
  STUDENTS,
  makeTheme,
  gradeColor,
  getGrade,
  getCharacterClass,
  getAvatarUrl
} from "./data/mockData";
import { Pill, Card, Label, Input, Select, Button, ClassIcon } from "./components/UIComponents";
import RadarChart from "./components/RadarChart";
import { sfx } from "./utils/audio";
import { getUnlockedAchievements } from "./data/achievements";
import { gsap } from "gsap";
import { toPng } from "html-to-image";
import "./index.css";

const renderTabIcon = (id, active, C) => {
  const color = active ? C.gold : C.muted;
  const strokeWidth = 2.2;
  const size = 15;
  
  if (id === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    );
  }
  if (id === 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
        <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"></path>
      </svg>
    );
  }
  if (id === 2) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    );
  }
  if (id === 3) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      </svg>
    );
  }
  return null;
};

const WarningIcon = ({ color, size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle", ...style }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const SwordIcon = ({ color = "currentColor", size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", ...style }}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="15" y1="5" x2="19" y2="9" />
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="5" y1="9" x2="9" y2="5" />
  </svg>
);

const ShieldIcon = ({ color = "currentColor", size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", ...style }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const TrophyIcon = ({ color = "currentColor", size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", ...style }}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 0-6 6v3.5a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z" />
  </svg>
);

const CrownIcon = ({ color = "currentColor", size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", ...style }}>
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M3 20h18" />
  </svg>
);

const GithubIcon = ({ color, size = 18, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ color, size = 18, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function useIsMobile() {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth < 1024 : false);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 1024);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

export default function BCAPortal() {
  const isMobile = useIsMobile();
  const [dark, setDark] = useState(true);
  const C = makeTheme(dark);

  useEffect(() => {
    document.body.className = dark ? "dark-theme-grid" : "light-theme-grid";
  }, [dark]);

  const bandColors = dark ? [
    "#5e6ad2", // Outstanding (Linear Primary Lavender)
    "#707bc4", // Excellent (Slightly Muted)
    "#818cf8", // Very Good (Periwinkle)
    "#6366f1", // Good (Indigo)
    "#8a8f98", // Average (Ink Subtle)
    "#f43f5e"  // Below Average (Warning Rose)
  ] : [
    "#5e6ad2", // Outstanding (Stays Lavender)
    "#4f46e5", // Excellent
    "#2563eb", // Very Good
    "#1d4ed8", // Good
    "#71717a", // Average
    "#ef4444"  // Below Average
  ];

  // Tabs: 0 = Search, 1 = Toppers, 2 = Analytics, 3 = Ledger
  const [tab, setTab] = useState(0);
  
  // Semester Context: "1", "2", "cumulative"
  const [semContext, setSemContext] = useState("cumulative");
  // Search States
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [foundStudent, setFoundStudent] = useState(null);
  const [searchError, setSearchError] = useState("");
  const [rollFocused, setRollFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const scorecardRef = useRef(null);

  // SFX Volume State
  const [sfxMuted, setSfxMuted] = useState(sfx.isMuted());

  // Battle Mode (Opponent) States
  const [compareMode, setCompareMode] = useState(false);
  const [opponentRoll, setOpponentRoll] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [opponentStudent, setOpponentStudent] = useState(null);
  const [opponentRollFocused, setOpponentRollFocused] = useState(false);
  const [opponentNameFocused, setOpponentNameFocused] = useState(false);
  const [battleFocus, setBattleFocus] = useState("player1");
  const [battleActive, setBattleActive] = useState(false);

  const rollSuggestions = useMemo(() => {
    if (!roll.trim()) return [];
    const query = roll.trim();
    return STUDENTS.filter(st => st.rollNo.includes(query)).slice(0, 5);
  }, [roll]);

  const nameSuggestions = useMemo(() => {
    if (!name.trim()) return [];
    const query = name.toUpperCase();
    return STUDENTS.filter(st => st.name.toUpperCase().includes(query)).slice(0, 5);
  }, [name]);

  const opponentRollSuggestions = useMemo(() => {
    if (!opponentRoll.trim()) return [];
    const query = opponentRoll.trim();
    return STUDENTS.filter(st => st.rollNo.includes(query)).slice(0, 5);
  }, [opponentRoll]);

  const opponentNameSuggestions = useMemo(() => {
    if (!opponentName.trim()) return [];
    const query = opponentName.toUpperCase();
    return STUDENTS.filter(st => st.name.toUpperCase().includes(query)).slice(0, 5);
  }, [opponentName]);

  const selectSuggestedStudent = (student, searchType) => {
    if (searchType === "name") {
      setName(student.name);
      setRoll("");
    } else {
      setRoll(student.rollNo);
      setName("");
    }
    setNameFocused(false);
    setRollFocused(false);
    setBattleActive(false);
    sfx.playSelect();
    setTimeout(() => {
      setFoundStudent(student);
      setSearchError("");
      setTab(0);
    }, 250);
  };

  const selectOpponentStudent = (student, searchType) => {
    if (searchType === "name") {
      setOpponentName(student.name);
      setOpponentRoll("");
    } else {
      setOpponentRoll(student.rollNo);
      setOpponentName("");
    }
    setOpponentNameFocused(false);
    setOpponentRollFocused(false);
    setBattleActive(false);
    sfx.playSelect();
    setTimeout(() => {
      setOpponentStudent(student);
      setSearchError("");
    }, 250);
  };

  // Active student based on battle mode focus perspective
  const activeStudent = (compareMode && opponentStudent && battleFocus === "player2") ? opponentStudent : foundStudent;

  const downloadCgpa = activeStudent ? (activeStudent.sem2
    ? ((parseFloat(activeStudent.sem1.sgpa) + parseFloat(activeStudent.sem2.sgpa)) / 2).toFixed(2)
    : parseFloat(activeStudent.sem1.sgpa).toFixed(2)) : "0.00";
  const downloadClass = activeStudent ? getCharacterClass(downloadCgpa) : null;
  const downloadCp = activeStudent ? Math.round(downloadCgpa * 1000) : 0;

  const student1Cgpa = foundStudent ? (foundStudent.sem2
    ? ((parseFloat(foundStudent.sem1.sgpa) + parseFloat(foundStudent.sem2.sgpa)) / 2).toFixed(2)
    : parseFloat(foundStudent.sem1.sgpa).toFixed(2)) : "0.00";
  const student1Class = foundStudent ? getCharacterClass(student1Cgpa) : null;
  const student1Cp = foundStudent ? Math.round(student1Cgpa * 1000) : 0;

  const student2Cgpa = opponentStudent ? (opponentStudent.sem2
    ? ((parseFloat(opponentStudent.sem1.sgpa) + parseFloat(opponentStudent.sem2.sgpa)) / 2).toFixed(2)
    : parseFloat(opponentStudent.sem1.sgpa).toFixed(2)) : "0.00";
  const student2Class = opponentStudent ? getCharacterClass(student2Cgpa) : null;
  const student2Cp = opponentStudent ? Math.round(student2Cgpa * 1000) : 0;

  // Ledger States
  const [ledgerSearch, setLedgerSearch] = useState("");
  const [ledgerStatus, setLedgerStatus] = useState("ALL");
  const [ledgerSort, setLedgerSort] = useState("rank");

  // Topper States
  const [topperSubject, setTopperSubject] = useState("grand");

  // Dynamic Level-Up Fanfare triggers
  useEffect(() => {
    if (foundStudent) {
      const g = activeStudent.sem2
        ? ((parseFloat(activeStudent.sem1.sgpa) + parseFloat(activeStudent.sem2.sgpa)) / 2)
        : parseFloat(activeStudent.sem1.sgpa);
      if (g >= 8.0) {
        sfx.playLevelUp();
      } else {
        sfx.playCoin();
      }
    }
  }, [foundStudent]);

  useEffect(() => {
    if (opponentStudent) {
      sfx.playCoin();
    }
  }, [opponentStudent]);

  // GSAP animation effect for page elements
  useEffect(() => {
    const fadeTargets = document.querySelectorAll(".gsap-fade-in");
    if (fadeTargets.length > 0) {
      gsap.fromTo(fadeTargets, 
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.04, overwrite: "auto" }
      );
    }
    
    const barTargets = document.querySelectorAll(".gsap-bar");
    if (barTargets.length > 0) {
      gsap.fromTo(barTargets,
        { scaleY: 0, transformOrigin: "bottom" },
        { scaleY: 1, duration: 0.7, ease: "back.out(1.2)", stagger: 0.02, delay: 0.1, overwrite: "auto" }
      );
    }

    const progressBars = document.querySelectorAll(".gsap-progress-bar");
    if (progressBars.length > 0) {
      gsap.fromTo(progressBars,
        { width: "0%" },
        {
          width: (i, el) => `${el.getAttribute("data-pct")}%`,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.03,
          delay: 0.05,
          overwrite: "auto"
        }
      );
    }
  }, [tab, semContext, foundStudent]);

  // Ranks Precomputations
  const ranksSem1 = useMemo(() => {
    return [...STUDENTS]
      .sort((a, b) => b.sem1.grand - a.sem1.grand)
      .map((s, i) => ({ rollNo: s.rollNo, rank: i + 1, grand: s.sem1.grand }));
  }, []);

  const ranksSem2 = useMemo(() => {
    const withSem2 = STUDENTS.filter((s) => s.sem2 !== null);
    const sorted = [...withSem2].sort((a, b) => b.sem2.grand - a.sem2.grand);
    return sorted.map((s, i) => ({ rollNo: s.rollNo, rank: i + 1, grand: s.sem2.grand }));
  }, []);

  const ranksCumulative = useMemo(() => {
    const computed = STUDENTS.map((s) => {
      const sem1Sgpa = s.sem1.sgpa;
      const sem2Sgpa = s.sem2 ? s.sem2.sgpa : s.sem1.sgpa;
      const cgpa = s.sem2 ? parseFloat(((sem1Sgpa + sem2Sgpa) / 2).toFixed(2)) : sem1Sgpa;
      const totalGrand = s.sem1.grand + (s.sem2 ? s.sem2.grand : 0);
      return { rollNo: s.rollNo, cgpa, totalGrand };
    });
    // Sort primarily by CGPA, then by totalGrand
    const sorted = [...computed].sort((a, b) => {
      if (b.cgpa !== a.cgpa) return b.cgpa - a.cgpa;
      return b.totalGrand - a.totalGrand;
    });
    return sorted.map((s, i) => ({ rollNo: s.rollNo, rank: i + 1, cgpa: s.cgpa }));
  }, []);

  // Helper to find ranks easily
  const studentRanks = useMemo(() => {
    const mapping = {};
    STUDENTS.forEach((s) => {
      const r1 = ranksSem1.find((r) => r.rollNo === s.rollNo)?.rank || "-";
      const r2 = ranksSem2.find((r) => r.rollNo === s.rollNo)?.rank || "-";
      const rc = ranksCumulative.find((r) => r.rollNo === s.rollNo)?.rank || "-";
      const cgpa = ranksCumulative.find((r) => r.rollNo === s.rollNo)?.cgpa || s.sem1.sgpa;
      mapping[s.rollNo] = { r1, r2, rc, cgpa };
    });
    return mapping;
  }, [ranksSem1, ranksSem2, ranksCumulative]);

  // Search student logic
  const handleSearch = (rQuery = roll, nQuery = name) => {
    setSearchError("");
    setFoundStudent(null);
    const r = rQuery.trim().toUpperCase();
    const n = nQuery.trim().toUpperCase();

    if (!r && !n) {
      setSearchError("Please fill in at least one field to search.");
      return;
    }

    const s = STUDENTS.find((st) => {
      const matchRoll = r && st.rollNo.toUpperCase() === r;
      const matchName = n && st.name.toUpperCase().includes(n);
      return matchRoll || matchName;
    });

    if (s) {
      setFoundStudent(s);
      // Fill the fields with found student info
      setRoll(s.rollNo);
      setName(s.name);
    } else {
      setSearchError("No student records found matching the criteria.");
    }
  };

  const handleDownloadScorecard = () => {
    if (!scorecardRef.current || !activeStudent) return;
    
    toPng(scorecardRef.current, { cacheBust: true, scale: 2 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `scorecard-${activeStudent.rollNo}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Oops, something went wrong exporting the scorecard!", err);
      });
  };

  // Search from Ledger click
  const viewStudent = (student) => {
    setRoll(student.rollNo);
    setName(student.name);
    setFoundStudent(student);
    setTab(0);
  };

  // Ledger Filtered list
  const ledgerData = useMemo(() => {
    let list = STUDENTS.map((s) => {
      const meta = studentRanks[s.rollNo];
      return {
        ...s,
        r1: meta.r1,
        r2: meta.r2,
        rc: meta.rc,
        cgpa: meta.cgpa
      };
    });

    // Name / Roll Search
    if (ledgerSearch.trim()) {
      const query = ledgerSearch.toLowerCase();
      list = list.filter(
        (s) => s.name.toLowerCase().includes(query) || s.rollNo.includes(query)
      );
    }

    // Status Filter
    if (ledgerStatus !== "ALL") {
      if (semContext === "1") {
        list = list.filter((s) => s.sem1.result.includes(ledgerStatus));
      } else if (semContext === "2") {
        list = list.filter((s) => s.sem2 && s.sem2.result.includes(ledgerStatus));
      } else {
        // Cumulative passed if both are passed
        list = list.filter((s) => {
          const pass1 = s.sem1.result.includes("PASSED");
          const pass2 = s.sem2 ? s.sem2.result.includes("PASSED") : false;
          if (ledgerStatus === "PASSED") return pass1 && pass2;
          return !pass1 || !pass2;
        });
      }
    }

    // Sorting
    list.sort((a, b) => {
      if (ledgerSort === "sgpa") {
        if (semContext === "1") return b.sem1.sgpa - a.sem1.sgpa;
        if (semContext === "2") return (b.sem2?.sgpa || 0) - (a.sem2?.sgpa || 0);
        return b.cgpa - a.cgpa;
      } else if (ledgerSort === "name") {
        return a.name.localeCompare(b.name);
      } else if (ledgerSort === "roll") {
        return a.rollNo.localeCompare(b.rollNo);
      } else {
        // Rank sort
        if (semContext === "1") return a.r1 - b.r1;
        if (semContext === "2") {
          if (!a.sem2) return 1;
          if (!b.sem2) return -1;
          return a.r2 - b.r2;
        }
        return a.rc - b.rc;
      }
    });

    return list;
  }, [ledgerSearch, ledgerStatus, ledgerSort, semContext, studentRanks]);

  // Toppers Calculation
  const toppersList = useMemo(() => {
    let list = STUDENTS.map((s) => ({
      ...s,
      cgpa: studentRanks[s.rollNo].cgpa,
      r1: studentRanks[s.rollNo].r1,
      r2: studentRanks[s.rollNo].r2,
      rc: studentRanks[s.rollNo].rc
    }));

    if (semContext === "1") {
      if (topperSubject === "grand") {
        list.sort((a, b) => b.sem1.grand - a.sem1.grand);
      } else {
        list.sort((a, b) => (b.sem1[topperSubject]?.[2] || 0) - (a.sem1[topperSubject]?.[2] || 0));
      }
    } else if (semContext === "2") {
      // Filter out students without sem2
      list = list.filter((s) => s.sem2 !== null);
      if (topperSubject === "grand") {
        list.sort((a, b) => b.sem2.grand - a.sem2.grand);
      } else {
        list.sort((a, b) => (b.sem2[topperSubject]?.[2] || 0) - (a.sem2[topperSubject]?.[2] || 0));
      }
    } else {
      // Cumulative: sort by CGPA
      list.sort((a, b) => b.cgpa - a.cgpa);
    }

    return list.slice(0, 10);
  }, [semContext, topperSubject, studentRanks]);

  // Analytics Computations
  const stats = useMemo(() => {
    const nTotal = STUDENTS.length;
    const withSem2 = STUDENTS.filter((s) => s.sem2 !== null);
    const nSem2 = withSem2.length;

    // Sem 1 Stats
    const s1Passed = STUDENTS.filter((s) => s.sem1.result.includes("PASSED")).length;
    const s1AvgSgpa = parseFloat((STUDENTS.reduce((a, s) => a + s.sem1.sgpa, 0) / nTotal).toFixed(2));
    const s1AvgGrand = Math.round(STUDENTS.reduce((a, s) => a + s.sem1.grand, 0) / nTotal);
    const s1Highest = Math.max(...STUDENTS.map((s) => s.sem1.grand));

    // Sem 2 Stats
    const s2Passed = withSem2.filter((s) => s.sem2.result.includes("PASSED")).length;
    const s2AvgSgpa = nSem2 > 0 ? parseFloat((withSem2.reduce((a, s) => a + s.sem2.sgpa, 0) / nSem2).toFixed(2)) : 0;
    const s2AvgGrand = nSem2 > 0 ? Math.round(withSem2.reduce((a, s) => a + s.sem2.grand, 0) / nSem2) : 0;
    const s2Highest = nSem2 > 0 ? Math.max(...withSem2.map((s) => s.sem2.grand)) : 0;

    // Cumulative Stats
    const bothPassed = withSem2.filter((s) => s.sem1.result.includes("PASSED") && s.sem2.result.includes("PASSED")).length;
    const allCgpa = STUDENTS.map((s) => studentRanks[s.rollNo].cgpa);
    const avgCgpa = parseFloat((allCgpa.reduce((a, v) => a + v, 0) / nTotal).toFixed(2));
    const highestCgpa = Math.max(...allCgpa);

    return {
      nTotal,
      nSem2,
      s1: { passed: s1Passed, avgSgpa: s1AvgSgpa, avgGrand: s1AvgGrand, highest: s1Highest },
      s2: { passed: s2Passed, avgSgpa: s2AvgSgpa, avgGrand: s2AvgGrand, highest: s2Highest },
      cum: { passed: bothPassed, avgCgpa, highest: highestCgpa }
    };
  }, [studentRanks]);

  // Subject Averages
  const subjectAverages = useMemo(() => {
    if (semContext === "1") {
      return SUBJECTS_SEM1.map((sub) => {
        const scores = STUDENTS.map((s) => s.sem1[sub.code]?.[2] || 0).filter(Boolean);
        const avg = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : "0";
        return { ...sub, avg: parseFloat(avg) };
      });
    } else if (semContext === "2") {
      const withSem2 = STUDENTS.filter((s) => s.sem2 !== null);
      return SUBJECTS_SEM2.map((sub) => {
        const scores = withSem2.map((s) => s.sem2[sub.code]?.[2] || 0).filter(Boolean);
        const avg = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : "0";
        return { ...sub, avg: parseFloat(avg) };
      });
    }
    return [];
  }, [semContext]);

  // Layout Paddings
  const px = isMobile ? 16 : 28;

  // Grade Distribution Counts
  const gradeDistribution = useMemo(() => {
    const dist = { 1: [0,0,0,0,0,0], 2: [0,0,0,0,0,0], cum: [0,0,0,0,0,0] };
    const getBandIndex = (gpa) => {
      if (gpa >= 9) return 0;
      if (gpa >= 8) return 1;
      if (gpa >= 7) return 2;
      if (gpa >= 6) return 3;
      if (gpa >= 5) return 4;
      return 5;
    };

    STUDENTS.forEach((s) => {
      dist[1][getBandIndex(s.sem1.sgpa)]++;
      if (s.sem2) {
        dist[2][getBandIndex(s.sem2.sgpa)]++;
      }
      dist.cum[getBandIndex(studentRanks[s.rollNo].cgpa)]++;
    });

    return dist;
  }, [studentRanks]);

  
  // Synchronous and robust battle initiation search
  const handleInitiateBattle = () => {
    setSearchError("");
    
    const r1 = roll.trim().toUpperCase();
    const n1 = name.trim().toUpperCase();
    const r2 = opponentRoll.trim().toUpperCase();
    const n2 = opponentName.trim().toUpperCase();

    if (!r1 && !n1) {
      setSearchError("Please enter Roll No or Name for Player 1.");
      sfx.playError();
      return;
    }
    if (!r2 && !n2) {
      setSearchError("Please enter Roll No or Name for Player 2.");
      sfx.playError();
      return;
    }

    const s1 = STUDENTS.find((st) => {
      const matchRoll = r1 && st.rollNo.toUpperCase() === r1;
      const matchName = n1 && st.name.toUpperCase().includes(n1);
      return matchRoll || matchName;
    });

    const s2 = STUDENTS.find((st) => {
      const matchRoll = r2 && st.rollNo.toUpperCase() === r2;
      const matchName = n2 && st.name.toUpperCase().includes(n2);
      return matchRoll || matchName;
    });

    if (s1 && s2) {
      setFoundStudent(s1);
      setRoll(s1.rollNo);
      setName(s1.name);

      setOpponentStudent(s2);
      setOpponentRoll(s2.rollNo);
      setOpponentName(s2.name);

      setBattleActive(true);
      setBattleFocus("player1");
      sfx.playBattle();
    } else {
      let errMsg = "Could not resolve student records.";
      if (!s1 && !s2) {
        errMsg = "Both Player 1 and Player 2 records were not found.";
      } else if (!s1) {
        errMsg = "Player 1 record not found in database.";
      } else {
        errMsg = "Player 2 record not found in database.";
      }
      setSearchError(errMsg);
      sfx.playError();
      setBattleActive(false);
    }
  };

  // Helper to render Standing Comparison
  const renderStandingComparison = () => {
    if (!foundStudent || !opponentStudent) return null;
    const r1_1 = studentRanks[foundStudent.rollNo].r1;
    const r1_2 = studentRanks[opponentStudent.rollNo].r1;
    const r2_1 = studentRanks[foundStudent.rollNo].r2;
    const r2_2 = studentRanks[opponentStudent.rollNo].r2;
    const rc_1 = studentRanks[foundStudent.rollNo].rc;
    const rc_2 = studentRanks[opponentStudent.rollNo].rc;

    const getDiffBadge = (val1, val2) => {
      if (val1 === "-" || val2 === "-") return <span style={{ fontSize: 9, color: C.muted }}>Held</span>;
      const diff = val2 - val1;
      if (diff > 0) return <span style={{ fontSize: 9, color: C.green, fontWeight: 700 }}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4 }}><path d="M12 4l-8 12h16z"/></svg> Player 1 (+{diff} ranks ahead)</span>;
      if (diff < 0) return <span style={{ fontSize: 9, color: C.amber, fontWeight: 700 }}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4 }}><path d="M12 20l8-12H4z"/></svg> Player 2 (+{-diff} ranks ahead)</span>;
      return <span style={{ fontSize: 9, color: C.muted }}>Tied</span>;
    };

    return (
      <Card theme={C}>
        <div style={{ padding: 20 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
            <TrophyIcon size={14} style={{ marginRight: 6 }} /> Academic Standing Differential
          </h4>
          <div className="aesthetic-scrollbar" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(140px, 1fr))", gap: 12, overflowX: "auto", maxWidth: "100%", WebkitOverflowScrolling: "touch", paddingBottom: 6 }}>
            <div style={{ padding: 12, borderRadius: 8, background: C.raised, border: `1px solid ${C.border}`, textAlign: "center" }}>
              <div style={{ fontSize: 9, color: C.muted, fontWeight: 700, textTransform: "uppercase" }}>Sem 1 Rank</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: "4px 0" }}>#{r1_1} vs #{r1_2}</div>
              {getDiffBadge(r1_1, r1_2)}
            </div>
            <div style={{ padding: 12, borderRadius: 8, background: C.raised, border: `1px solid ${C.border}`, textAlign: "center" }}>
              <div style={{ fontSize: 9, color: C.muted, fontWeight: 700, textTransform: "uppercase" }}>Sem 2 Rank</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: "4px 0" }}>#{r2_1} vs #{r2_2}</div>
              {getDiffBadge(r2_1, r2_2)}
            </div>
            <div style={{ padding: 12, borderRadius: 8, background: C.raised, border: `1px solid ${C.border}`, textAlign: "center" }}>
              <div style={{ fontSize: 9, color: C.muted, fontWeight: 700, textTransform: "uppercase" }}>Year 1 Rank</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.gold, margin: "4px 0" }}>#{rc_1} vs #{rc_2}</div>
              {getDiffBadge(rc_1, rc_2)}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const renderUnifiedSubjectTable = () => {
    if (!foundStudent || !opponentStudent) return null;
    const isSem1Only = semContext === "1";
    const isSem2Only = semContext === "2";
    const isCumulative = semContext === "cumulative";
    
    let subjects = [];
    if (isSem1Only) {
      subjects = SUBJECTS_SEM1;
    } else if (isSem2Only) {
      subjects = SUBJECTS_SEM2;
    } else {
      subjects = [...SUBJECTS_SEM1, ...SUBJECTS_SEM2];
    }

    const data1 = foundStudent;
    const data2 = opponentStudent;
    const hasSem2_2 = !!data2.sem2;

    let p1Wins = 0;
    let p2Wins = 0;
    let ties = 0;

    return (
      <Card theme={C}>
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
              <SwordIcon size={14} style={{ marginRight: 6 }} /> Subject Combat Analysis (Sem {semContext === "cumulative" ? "1 & 2" : semContext})
            </h4>
          </div>

          {(semContext === "2" && !hasSem2_2) ? (
            <div style={{ padding: "30px 16px", textAlign: "center", color: C.muted, fontSize: 13, background: C.raised, border: `1px dashed ${C.border}`, borderRadius: 8 }}>
              Player 2 Semester 2 results are held/missing. Cannot run subject combat for Semester 2.
            </div>
          ) : (
            <>
              {isMobile && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontSize: 10,
                  fontWeight: 600,
                  color: C.gold,
                  background: C.gold + "10",
                  padding: "4px 12px",
                  borderRadius: 20,
                  width: "fit-content",
                  margin: "0 auto 12px",
                  border: `1px solid ${C.gold}20`,
                  letterSpacing: 0.5,
                  textTransform: "uppercase"
                }}>
                  <span className="swipe-arrow-left">←</span>
                  <span>Swipe table sideways</span>
                  <span className="swipe-arrow-right">→</span>
                </div>
              )}
              <div className="aesthetic-scrollbar" style={{ overflowX: "auto", maxWidth: "100%", WebkitOverflowScrolling: "touch" }}>
                <table style={{ width: "100%", minWidth: 550, borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${C.border}`, textAlign: "left" }}>
                      <th style={{ padding: "10px 12px", color: C.muted, fontWeight: 600 }}>Code</th>
                      <th style={{ padding: "10px 12px", color: C.muted, fontWeight: 600 }}>Subject Name</th>
                      <th style={{ padding: "10px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>{data1.name.split(" ")[0]}</th>
                      <th style={{ padding: "10px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>{data2.name.split(" ")[0]}</th>
                      <th style={{ padding: "10px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Victor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((sub) => {
                      const isSubSem1 = SUBJECTS_SEM1.some(s => s.code === sub.code);
                      const sData1 = isSubSem1 ? data1.sem1[sub.code] : (data1.sem2 ? data1.sem2[sub.code] : null);
                      const sData2 = isSubSem1 ? data2.sem1[sub.code] : (data2.sem2 ? data2.sem2[sub.code] : null);
                      if (!sData1 && !sData2) return null;
                      
                      const tot1 = sData1 ? sData1[2] : 0;
                      const tot2 = sData2 ? sData2[2] : 0;
                      const maxVal = sub.maxFin + sub.maxInt;
                      const grade1 = sData1 ? getGrade(tot1, maxVal) : "N/A";
                      const grade2 = sData2 ? getGrade(tot2, maxVal) : "N/A";

                      let victorText = "Tie";
                      let victorColor = C.muted;
                      if (tot1 > tot2) {
                        victorText = data1.name.split(" ")[0];
                        victorColor = C.gold;
                        p1Wins++;
                      } else if (tot2 > tot1) {
                        victorText = data2.name.split(" ")[0];
                        victorColor = C.amber;
                        p2Wins++;
                      } else {
                        ties++;
                      }

                      return (
                        <tr key={sub.code} style={{ borderBottom: `1px solid ${C.border}` }}>
                          <td style={{ padding: "10px 12px", fontFamily: "monospace", fontWeight: 600, color: C.muted }}>{sub.code}</td>
                          <td style={{ padding: "10px 12px", color: C.text }}>{sub.name}</td>
                          <td style={{ padding: "10px 12px", textAlign: "center", color: tot1 > tot2 ? C.gold : C.text, fontWeight: tot1 > tot2 ? 700 : 500 }}>
                            {sData1 ? `${tot1} (${grade1})` : "N/A"}
                          </td>
                          <td style={{ padding: "10px 12px", textAlign: "center", color: tot2 > tot1 ? C.amber : C.text, fontWeight: tot2 > tot1 ? 700 : 500 }}>
                            {sData2 ? `${tot2} (${grade2})` : "N/A"}
                          </td>
                          <td style={{ padding: "10px 12px", textAlign: "center" }}>
                            <span style={{
                              padding: "2px 6px",
                              borderRadius: 4,
                              fontSize: 10,
                              fontWeight: 800,
                              background: victorColor + "15",
                              border: `1px solid ${victorColor}30`,
                              color: victorColor
                            }}>
                              {tot1 === tot2 ? "Tie" : (
                                <span style={{ display: "inline-flex", alignItems: "center" }}>
                                  <CrownIcon size={10} style={{ marginRight: 4 }} />
                                  <span>{victorText}</span>
                                </span>
                              )}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, padding: "10px 14px", background: C.raised, borderRadius: 8, fontSize: 11, fontWeight: 700, color: C.muted, flexWrap: "wrap", gap: 10 }}>
                <span>{data1.name.split(" ")[0]} Wins: <strong style={{ color: C.gold }}>{p1Wins}</strong></span>
                <span>{data2.name.split(" ")[0]} Wins: <strong style={{ color: C.amber }}>{p2Wins}</strong></span>
                <span>Ties: <strong>{ties}</strong></span>
                <span>Overall Victor: <strong style={{ color: p1Wins > p2Wins ? C.gold : (p2Wins > p1Wins ? C.amber : C.text) }}>
                  {p1Wins > p2Wins ? data1.name : (p2Wins > p1Wins ? data2.name : "Draw")}
                </strong></span>
              </div>
            </>
          )}
        </div>
      </Card>
    );
  };

  const renderAchievementsDuel = () => {
    if (!foundStudent || !opponentStudent) return null;
    const ach1 = getUnlockedAchievements(foundStudent);
    const ach2 = getUnlockedAchievements(opponentStudent);
    
    return (
      <Card theme={C} style={{ padding: 20 }}>
        <h4 className="heading-card" style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
          <SwordIcon size={14} style={{ marginRight: 6 }} /> Achievements Duel
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 12 }}>
          <span>{foundStudent.name.split(" ")[0]}: <strong style={{ color: C.gold }}>{ach1.length}</strong></span>
          <span style={{ opacity: 0.5 }}>VS</span>
          <span>{opponentStudent.name.split(" ")[0]}: <strong style={{ color: "#06b6d4" }}>{ach2.length}</strong></span>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: C.gold, textTransform: "uppercase", marginBottom: 2 }}>{foundStudent.name.split(" ")[0]}'s Quests</span>
            {ach1.length === 0 ? (
              <div style={{ fontSize: 9, color: C.muted, fontStyle: "italic" }}>No quests cleared.</div>
            ) : ach1.map((ach, idx) => (
              <div key={idx} style={{ padding: "6px 10px", background: C.raised, borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 10, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{ach.icon}</span>
                <span style={{ fontWeight: 700, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={ach.desc}>{ach.title}</span>
              </div>
            ))}
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: C.amber, textTransform: "uppercase", marginBottom: 2 }}>{opponentStudent.name.split(" ")[0]}'s Quests</span>
            {ach2.length === 0 ? (
              <div style={{ fontSize: 9, color: C.muted, fontStyle: "italic" }}>No quests cleared.</div>
            ) : ach2.map((ach, idx) => (
              <div key={idx} style={{ padding: "6px 10px", background: C.raised, borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 10, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{ach.icon}</span>
                <span style={{ fontWeight: 700, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={ach.desc}>{ach.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  };
    
return (
    <div style={{
      minHeight: "100vh",
      background: C.bg,
      color: C.text,
      display: "flex",
      flexDirection: "column",
      "--focus-border": C.gold,
      "--focus-ring": dark ? "rgba(94, 106, 210, 0.2)" : "rgba(94, 106, 210, 0.1)"
    }}>
      
      {/* ── HEADER (Translucent Top Navigation) ─────────────────────────── */}
      <header style={{
        background: dark ? "rgba(1, 1, 2, 0.85)" : "rgba(250, 250, 251, 0.85)",
        borderBottom: `1px solid ${C.border}`,
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: `12px ${px}px`, display: "flex", flexDirection: "column", gap: 12 }}>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: C.surface,
                border: `1px solid ${C.borderHi}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "monospace",
                color: C.gold
              }}>
                B
              </div>
              <div>
                <div className="eyebrow" style={{ fontSize: isMobile ? 8 : 9, color: C.dim, fontWeight: 600 }}>
                  Jharkhand University of Technology
                </div>
                <h1 className="heading-section" style={{ fontSize: isMobile ? 14 : 17, fontWeight: 700, color: C.text, margin: "1px 0 0" }}>
                  BCA Academic Result Portal
                </h1>
              </div>
            </div>

            {/* Theme Toggle Switch */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {(foundStudent || tab !== 0) && (
                <button
                  onClick={() => {
                    setFoundStudent(null);
                    setRoll("");
                    setName("");
                    setSearchError("");
                    setTab(0);
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    border: `1px solid ${C.border}`,
                    background: C.surface,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: C.text,
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.borderHi;
                    e.currentTarget.style.background = C.raised;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = C.surface;
                  }}
                  title="Search New Student"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              )}
              <button
                onClick={() => setDark(d => !d)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  background: C.surface,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.text
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.borderHi;
                  e.currentTarget.style.background = C.raised;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = C.surface;
                }}
                title={dark ? "Light Mode" : "Dark Mode"}
              >
                {dark ? (
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                ) : (
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Sub-header Controls: Semester Switch + Tab Selector */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "center", gap: 10, borderTop: `1px solid ${C.border}`, paddingTop: 10 }}>
            
            {/* Semester selector context */}
            <div style={{
              display: "inline-flex",
              background: C.surface,
              padding: 2,
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              gap: 2,
              overflowX: "auto",
              maxWidth: "100%",
              scrollbarWidth: "none"
            }}>
              {[
                { id: "1", label: "Semester 1" },
                { id: "2", label: "Semester 2" },
                { id: "cumulative", label: "Cumulative / Year 1" }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSemContext(s.id);
                    setTopperSubject("grand");
                  }}
                  style={{
                    flex: 1,
                    padding: "5px 10px",
                    borderRadius: 6,
                    border: `1px solid ${semContext === s.id ? C.border : "transparent"}`,
                    background: semContext === s.id ? C.raised : "transparent",
                    color: semContext === s.id ? C.text : C.muted,
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Navigation Tabs */}
            <div style={{ display: "flex", gap: 2, overflowX: "auto", scrollbarWidth: "none" }}>
              {[
                ...(foundStudent ? [{ id: 0, label: "Report Card" }] : []),
                { id: 1, label: "Toppers" },
                { id: 2, label: "Class Analytics" },
                { id: 3, label: "Student Ledger" }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: `1px solid ${tab === t.id ? C.border : "transparent"}`,
                    background: tab === t.id ? C.surface : "transparent",
                    color: tab === t.id ? C.text : C.muted,
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {renderTabIcon(t.id, tab === t.id, C)}
                  {t.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT AREA ────────────────────────────────────────────── */}
      <main style={{ flex: 1, maxWidth: 1200, width: "100%", margin: "0 auto", padding: `24px ${px}px 80px`, boxSizing: "border-box" }}>

        {/* ════════════ TABS 0: SEARCH RESULT ════════════ */}
        {tab === 0 && (
          <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
            
            {/* Input Form Card */}
            <div style={{ maxWidth: 800, width: "100%", margin: "0 auto" }}>
              <Card theme={C} className="gsap-fade-in">
              <div style={{ padding: isMobile ? 20 : 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.text }}>Lookup Academic Records</h3>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>Search results instantly or compare two students in Duel Mode.</p>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Button
                      theme={C}
                      variant={compareMode ? "outline" : "primary"}
                      onClick={() => {
                        setCompareMode(!compareMode);
                        sfx.playSelect();
                        setBattleActive(false);
                        if (compareMode) {
                          setOpponentStudent(null);
                          setOpponentRoll("");
                          setOpponentName("");
                        }
                      }}
                      style={{ fontSize: 11, padding: "5px 12px", gap: 4 }}
                    >
                      {compareMode ? (
                        <>
                          <ShieldIcon size={12} style={{ marginRight: 4 }} />
                          <span>Single Mode</span>
                        </>
                      ) : (
                        <>
                          <SwordIcon size={12} style={{ marginRight: 4 }} />
                          <span>Battle Mode</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {!compareMode ? (
                  /* Standard Search Layout */
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr", alignItems: "end", gap: 14 }}>
                    <div style={{ position: "relative" }}>
                      <Label theme={C}>University Roll No</Label>
                      <Input
                        theme={C}
                        value={roll}
                        onChange={(e) => { setRoll(e.target.value); setBattleActive(false); }}
                        placeholder="e.g. 24013590023"
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        onFocus={() => setRollFocused(true)}
                        onBlur={() => setTimeout(() => setRollFocused(false), 200)}
                      />
                      {rollFocused && rollSuggestions.length > 0 && (
                        <div style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          background: C.surface,
                          border: `1px solid ${C.borderHi}`,
                          borderRadius: 8,
                          marginTop: 4,
                          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                          zIndex: 1000,
                          maxHeight: 250,
                          overflowY: "auto",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                        }}>
                          {rollSuggestions.map((st) => {
                            const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
                            return (
                              <div
                                key={st.rollNo}
                                onMouseDown={() => selectSuggestedStudent(st, "roll")}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  padding: "8px 12px",
                                  borderBottom: `1px solid ${C.border}`,
                                  cursor: "pointer",
                                  transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                              >
                                <div style={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: "50%",
                                  overflow: "hidden",
                                  background: C.raised,
                                  border: `1px solid ${C.border}`,
                                  flexShrink: 0
                                }}>
                                  <img
                                    src={getAvatarUrl(st)}
                                    alt={st.name}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                  />
                                </div>
                                <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                                  <div style={{ fontWeight: 700, fontSize: 12, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {st.name}
                                  </div>
                                  <div style={{ fontSize: 10, color: C.muted, fontFamily: "monospace" }}>
                                    {st.rollNo}
                                  </div>
                                </div>
                                <span style={{
                                  fontSize: 8,
                                  fontWeight: 800,
                                  color: charClass.color,
                                  border: `1px solid ${charClass.color}30`,
                                  background: `${charClass.color}10`,
                                  padding: "2px 6px",
                                  borderRadius: 4,
                                  textTransform: "uppercase",
                                  flexShrink: 0
                                }}>
                                  Lvl {Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div style={{ textAlign: "center", paddingBottom: 10, fontSize: 11, color: C.muted, fontWeight: 600, letterSpacing: 1 }}>
                      OR
                    </div>

                    <div style={{ position: "relative" }}>
                      <Label theme={C}>Student Name</Label>
                      <Input
                        theme={C}
                        value={name}
                        onChange={(e) => { setName(e.target.value); setBattleActive(false); }}
                        placeholder="e.g. Sumit Ghosh"
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        onFocus={() => setNameFocused(true)}
                        onBlur={() => setTimeout(() => setNameFocused(false), 200)}
                      />
                      {nameFocused && nameSuggestions.length > 0 && (
                        <div style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          background: C.surface,
                          border: `1px solid ${C.borderHi}`,
                          borderRadius: 8,
                          marginTop: 4,
                          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                          zIndex: 1000,
                          maxHeight: 250,
                          overflowY: "auto",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                        }}>
                          {nameSuggestions.map((st) => {
                            const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
                            return (
                              <div
                                key={st.rollNo}
                                onMouseDown={() => selectSuggestedStudent(st, "name")}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  padding: "8px 12px",
                                  borderBottom: `1px solid ${C.border}`,
                                  cursor: "pointer",
                                  transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                              >
                                <div style={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: "50%",
                                  overflow: "hidden",
                                  background: C.raised,
                                  border: `1px solid ${C.border}`,
                                  flexShrink: 0
                                }}>
                                  <img
                                    src={getAvatarUrl(st)}
                                    alt={st.name}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                  />
                                </div>
                                <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                                  <div style={{ fontWeight: 700, fontSize: 12, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {st.name}
                                  </div>
                                  <div style={{ fontSize: 10, color: C.muted, fontFamily: "monospace" }}>
                                    {st.rollNo}
                                  </div>
                                </div>
                                <span style={{
                                  fontSize: 8,
                                  fontWeight: 800,
                                  color: charClass.color,
                                  border: `1px solid ${charClass.color}30`,
                                  background: `${charClass.color}10`,
                                  padding: "2px 6px",
                                  borderRadius: 4,
                                  textTransform: "uppercase",
                                  flexShrink: 0
                                }}>
                                  Lvl {Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Battle Mode Dual Search Layout */
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
                    
                    {/* Left Column: Player 1 */}
                    <div style={{ padding: 14, borderRadius: 8, background: C.raised, border: `1px solid ${C.border}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: C.gold, textTransform: "uppercase" }}>Player 1</span>
                        {foundStudent && (
                          <span style={{ fontSize: 9, background: C.green + "15", color: C.green, border: `1px solid ${C.green}35`, padding: "1px 5px", borderRadius: 4, fontWeight: 700 }}>Ready</span>
                        )}
                      </div>
                      
                      <div style={{ position: "relative", marginBottom: 12 }}>
                        <Label theme={C}>University Roll No</Label>
                        <Input
                          theme={C}
                          value={roll}
                          onChange={(e) => { setRoll(e.target.value); setBattleActive(false); }}
                          placeholder="e.g. 24013590023"
                          onKeyDown={(e) => e.key === "Enter" && handleInitiateBattle()}
                          onFocus={() => setRollFocused(true)}
                          onBlur={() => setTimeout(() => setRollFocused(false), 200)}
                        />
                        {rollFocused && rollSuggestions.length > 0 && (
                          <div style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            background: C.surface,
                            border: `1px solid ${C.borderHi}`,
                            borderRadius: 8,
                            marginTop: 4,
                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                            zIndex: 1000,
                            maxHeight: 180,
                            overflowY: "auto",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }}>
                            {rollSuggestions.map((st) => {
                              const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
                              return (
                                <div
                                  key={st.rollNo}
                                  onMouseDown={() => selectSuggestedStudent(st, "roll")}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "6px 10px",
                                    borderBottom: `1px solid ${C.border}`,
                                    cursor: "pointer",
                                    transition: "background 0.2s",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                  <img src={getAvatarUrl(st)} alt={st.name} style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${C.border}`, flexShrink: 0 }} />
                                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                                    <div style={{ fontWeight: 700, fontSize: 11, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{st.name}</div>
                                  </div>
                                  <span style={{ fontSize: 8, fontWeight: 800, color: charClass.color }}>Lvl {Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div style={{ position: "relative" }}>
                        <Label theme={C}>OR Student Name</Label>
                        <Input
                          theme={C}
                          value={name}
                          onChange={(e) => { setName(e.target.value); setBattleActive(false); }}
                          placeholder="e.g. Sumit Ghosh"
                          onKeyDown={(e) => e.key === "Enter" && handleInitiateBattle()}
                          onFocus={() => setNameFocused(true)}
                          onBlur={() => setTimeout(() => setNameFocused(false), 200)}
                        />
                        {nameFocused && nameSuggestions.length > 0 && (
                          <div style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            background: C.surface,
                            border: `1px solid ${C.borderHi}`,
                            borderRadius: 8,
                            marginTop: 4,
                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                            zIndex: 1000,
                            maxHeight: 180,
                            overflowY: "auto",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }}>
                            {nameSuggestions.map((st) => {
                              const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
                              return (
                                <div
                                  key={st.rollNo}
                                  onMouseDown={() => selectSuggestedStudent(st, "name")}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "6px 10px",
                                    borderBottom: `1px solid ${C.border}`,
                                    cursor: "pointer",
                                    transition: "background 0.2s",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                  <img src={getAvatarUrl(st)} alt={st.name} style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${C.border}`, flexShrink: 0 }} />
                                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                                    <div style={{ fontWeight: 700, fontSize: 11, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{st.name}</div>
                                  </div>
                                  <span style={{ fontSize: 8, fontWeight: 800, color: charClass.color }}>Lvl {Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Player 2 (Opponent) */}
                    <div style={{ padding: 14, borderRadius: 8, background: C.raised, border: `1px solid ${C.border}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: "#06b6d4", textTransform: "uppercase" }}>Player 2</span>
                        {opponentStudent && (
                          <span style={{ fontSize: 9, background: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.25)", padding: "1px 5px", borderRadius: 4, fontWeight: 700 }}>Ready</span>
                        )}
                      </div>

                      <div style={{ position: "relative", marginBottom: 12 }}>
                        <Label theme={C}>University Roll No</Label>
                        <Input
                          theme={C}
                          value={opponentRoll}
                          onChange={(e) => { setOpponentRoll(e.target.value); setBattleActive(false); }}
                          placeholder="e.g. 24013590002"
                          onKeyDown={(e) => e.key === "Enter" && handleInitiateBattle()}
                          onFocus={() => setOpponentRollFocused(true)}
                          onBlur={() => setTimeout(() => setOpponentRollFocused(false), 200)}
                        />
                        {opponentRollFocused && opponentRollSuggestions.length > 0 && (
                          <div style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            background: C.surface,
                            border: `1px solid ${C.borderHi}`,
                            borderRadius: 8,
                            marginTop: 4,
                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                            zIndex: 1000,
                            maxHeight: 180,
                            overflowY: "auto",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }}>
                            {opponentRollSuggestions.map((st) => {
                              const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
                              return (
                                <div
                                  key={st.rollNo}
                                  onMouseDown={() => selectOpponentStudent(st, "roll")}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "6px 10px",
                                    borderBottom: `1px solid ${C.border}`,
                                    cursor: "pointer",
                                    transition: "background 0.2s",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                  <img src={getAvatarUrl(st)} alt={st.name} style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${C.border}`, flexShrink: 0 }} />
                                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                                    <div style={{ fontWeight: 700, fontSize: 11, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{st.name}</div>
                                  </div>
                                  <span style={{ fontSize: 8, fontWeight: 800, color: charClass.color }}>Lvl {Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div style={{ position: "relative" }}>
                        <Label theme={C}>OR Student Name</Label>
                        <Input
                          theme={C}
                          value={opponentName}
                          onChange={(e) => { setOpponentName(e.target.value); setBattleActive(false); }}
                          placeholder="e.g. Bhumi Shrivastava"
                          onKeyDown={(e) => e.key === "Enter" && handleInitiateBattle()}
                          onFocus={() => setOpponentNameFocused(true)}
                          onBlur={() => setTimeout(() => setOpponentNameFocused(false), 200)}
                        />
                        {opponentNameFocused && opponentNameSuggestions.length > 0 && (
                          <div style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            background: C.surface,
                            border: `1px solid ${C.borderHi}`,
                            borderRadius: 8,
                            marginTop: 4,
                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
                            zIndex: 1000,
                            maxHeight: 180,
                            overflowY: "auto",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }}>
                            {opponentNameSuggestions.map((st) => {
                              const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
                              return (
                                <div
                                  key={st.rollNo}
                                  onMouseDown={() => selectOpponentStudent(st, "name")}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "6px 10px",
                                    borderBottom: `1px solid ${C.border}`,
                                    cursor: "pointer",
                                    transition: "background 0.2s",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                  <img src={getAvatarUrl(st)} alt={st.name} style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${C.border}`, flexShrink: 0 }} />
                                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                                    <div style={{ fontWeight: 700, fontSize: 11, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{st.name}</div>
                                  </div>
                                  <span style={{ fontSize: 8, fontWeight: 800, color: charClass.color }}>Lvl {Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 10 }}>
                  {(roll || name || opponentRoll || opponentName) && (
                    <Button
                      theme={C}
                      variant="outline"
                      onClick={() => {
                        setRoll("");
                        setName("");
                        setOpponentRoll("");
                        setOpponentName("");
                        setFoundStudent(null);
                        setOpponentStudent(null);
                        setSearchError("");
                        setBattleActive(false);
                        sfx.playSelect();
                      }}
                    >
                      Clear
                    </Button>
                  )}
                  <Button
                    theme={C}
                    onClick={() => {
                      if (compareMode) {
                        handleInitiateBattle();
                      } else {
                        sfx.playSelect();
                        handleSearch();
                      }
                    }}
                  >
                    {compareMode ? (
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <SwordIcon size={12} />
                        <span>Initiate Academic Duel</span>
                      </span>
                    ) : "Search Student"}
                  </Button>
                </div>

                {searchError && (
                  <div style={{
                    marginTop: 16,
                    padding: "12px 16px",
                    borderRadius: 8,
                    background: C.red + "12",
                    border: `1px solid ${C.red}35`,
                    color: C.red,
                    fontSize: 13,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: `0 2px 8px ${C.red}05`
                  }}>
                    <WarningIcon color={C.red} size={15} style={{ marginRight: 8 }} />
                    {searchError}
                  </div>
                )}
              </div>
            </Card>
          </div>            {/* Results Report Card */}
            {foundStudent && (
              <>
                {compareMode && foundStudent && opponentStudent && battleActive && (
                  <div style={{ maxWidth: 800, width: "100%", margin: "0 auto 16px" }} className="gsap-fade-in">
                    <Card theme={C} style={{ padding: "20px 24px", background: `linear-gradient(135deg, ${C.surface} 0%, rgba(94, 106, 210, 0.04) 50%, ${C.surface} 100%)`, border: `1px solid ${C.borderHi}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: isMobile ? "column" : "row", gap: 16 }}>
                        
                        {/* Player 1 summary */}
                        <div 
                          onClick={() => {
                            setBattleFocus("player1");
                            sfx.playSelect();
                          }}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            minWidth: 0,
                            width: "100%",
                            cursor: "pointer",
                            padding: "8px 12px",
                            borderRadius: 10,
                            background: battleFocus === "player1" ? "rgba(94, 106, 210, 0.08)" : "transparent",
                            border: `2px solid ${battleFocus === "player1" ? C.gold : "transparent"}`,
                            boxShadow: battleFocus === "player1" ? `0 0 12px ${C.gold}20` : "none",
                            transition: "all 0.2s ease"
                          }}
                        >
                          <div style={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            border: `2px solid ${C.gold}`,
                            overflow: "hidden",
                            flexShrink: 0
                          }}>
                            <img src={getAvatarUrl(foundStudent)} alt={foundStudent.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div style={{ fontWeight: 800, fontSize: 14, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {foundStudent.name}
                            </div>
                            <div style={{ fontSize: 10, color: C.gold, fontWeight: 800, textTransform: "uppercase" }}>
                              {student1Class ? student1Class.title : "Class"} • {student1Cp} CP
                            </div>
                          </div>
                        </div>

                        {/* VS Badge */}
                        <div style={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          background: C.red + "20",
                          border: `2px solid ${C.red}`,
                          color: C.red,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 13,
                          fontWeight: 900,
                          boxShadow: `0 0 12px ${C.red}35`,
                          flexShrink: 0
                        }}>
                          VS
                        </div>

                        {/* Player 2 summary */}
                        <div 
                          onClick={() => {
                            setBattleFocus("player2");
                            sfx.playSelect();
                          }}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: isMobile ? "flex-start" : "flex-end",
                            gap: 14,
                            minWidth: 0,
                            width: "100%",
                            cursor: "pointer",
                            padding: "8px 12px",
                            borderRadius: 10,
                            background: battleFocus === "player2" ? C.amber + "10" : "transparent",
                            border: `2px solid ${battleFocus === "player2" ? C.amber : "transparent"}`,
                            boxShadow: battleFocus === "player2" ? `0 0 12px ${C.amber}28` : "none",
                            transition: "all 0.2s ease"
                          }}
                        >
                          <div style={{ minWidth: 0, flex: 1, textAlign: isMobile ? "left" : "right" }}>
                            <div style={{ fontWeight: 800, fontSize: 14, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {opponentStudent.name}
                            </div>
                            <div style={{ fontSize: 10, color: "#06b6d4", fontWeight: 800, textTransform: "uppercase" }}>
                              {student2Class ? student2Class.title : "Class"} • {student2Cp} CP
                            </div>
                          </div>
                          <div style={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            border: `2px solid ${C.amber}`,
                            overflow: "hidden",
                            flexShrink: 0
                          }}>
                            <img src={getAvatarUrl(opponentStudent)} alt={opponentStudent.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                        </div>

                      </div>

                      {/* Proportional attributes visual comparison bar */}
                      <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 16, paddingTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                        
                        {/* GPA Bar */}
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700, color: C.muted, marginBottom: 4 }}>
                            <span>CUMULATIVE GPA DUEL</span>
                            <span style={{ fontFamily: "monospace" }}>{student1Cgpa} vs {student2Cgpa}</span>
                          </div>
                          <div style={{ height: 6, background: C.border, borderRadius: 3, display: "flex", overflow: "hidden" }}>
                            <div style={{ width: `${(parseFloat(student1Cgpa) / (parseFloat(student1Cgpa) + parseFloat(student2Cgpa) || 1)) * 100}%`, background: C.gold, transition: "width 0.5s ease-out" }} />
                            <div style={{ width: `${(parseFloat(student2Cgpa) / (parseFloat(student1Cgpa) + parseFloat(student2Cgpa) || 1)) * 100}%`, background: C.amber, transition: "width 0.5s ease-out" }} />
                          </div>
                        </div>

                        {/* CP Bar */}
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700, color: C.muted, marginBottom: 4 }}>
                            <span>TOTAL COMBAT POWER DUEL</span>
                            <span style={{ fontFamily: "monospace" }}>{student1Cp} CP vs {student2Cp} CP</span>
                          </div>
                          <div style={{ height: 6, background: C.border, borderRadius: 3, display: "flex", overflow: "hidden" }}>
                            <div style={{ width: `${(student1Cp / (student1Cp + student2Cp || 1)) * 100}%`, background: C.gold, transition: "width 0.5s ease-out" }} />
                            <div style={{ width: `${(student2Cp / (student1Cp + student2Cp || 1)) * 100}%`, background: "#06b6d4", transition: "width 0.5s ease-out" }} />
                          </div>
                        </div>

                      </div>
                    </Card>
                  </div>
                )}
      
                {compareMode ? (
                  battleActive && opponentStudent ? (
                    /* Unified Comparative Dashboard for Battle Mode */
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="gsap-fade-in">
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
                        gap: 16,
                        alignItems: "start"
                      }}>
                        {/* Left Column: standing details & unified subject combat tables */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
                          {renderStandingComparison()}
                          {renderUnifiedSubjectTable()}
                        </div>

                        {/* Right Column: Comparative Charts & Achievements */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }} className="sidebar-gamified">
                          <RadarChart 
                            student={activeStudent} 
                            opponent={compareMode ? (activeStudent === foundStudent ? opponentStudent : foundStudent) : null} 
                            semContext={semContext} 
                            theme={C} 
                            isMobile={isMobile} 
                          />
                          {renderAchievementsDuel()}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Duel Configuration state (waiting for duel start) */
                    <div style={{ maxWidth: 800, width: "100%", margin: "24px auto", textAlign: "center" }} className="gsap-fade-in">
                      <Card theme={C} style={{ padding: "30px 24px", borderStyle: "dashed" }}>
                        <div style={{ marginBottom: 12, opacity: 0.8 }}><SwordIcon size={28} color={C.gold} /></div>
                        <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: C.text }}>Duel Field Configured</h4>
                        <p style={{ margin: "6px 0 0", fontSize: 12, color: C.muted }}>
                          Configure student search profiles above, then click <strong>Initiate Academic Duel</strong> to start the analysis!
                        </p>
                      </Card>
                    </div>
                  )
                ) : (
                  /* Standard Report Card View for Single Student */
<div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="gsap-fade-in">
                
                {/* Download Actions Toolbar */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button theme={C} onClick={() => handleDownloadScorecard()}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Score Card
                  </Button>
                </div>

                {/* Student Summary Panel */}
                <div style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  overflow: "hidden"
                }}>
                  <div style={{ padding: "24px 28px", borderBottom: `1px solid ${C.border}`, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 10,
                        background: C.raised,
                        border: `1px solid ${C.border}`,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
                      }}>
                        <img
                          src={getAvatarUrl(foundStudent)}
                          alt={`${foundStudent.name}'s Avatar`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: C.gold, textTransform: "uppercase" }}>
                            Student Grade Sheet
                          </span>
                          <Pill color={C.muted}>Session 2024–25</Pill>
                        </div>
                        <h2 style={{ margin: "6px 0 2px", fontSize: 24, fontWeight: 800, color: C.text, letterSpacing: "-0.01em" }}>
                          {foundStudent.name}
                        </h2>
                        <span style={{ fontFamily: "monospace", fontSize: 13, color: C.muted }}>
                          Roll No: {foundStudent.rollNo}
                        </span>
                      </div>
                    </div>

                    {/* Comparative Rank Display */}
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: isMobile ? 12 : 14,
                      marginTop: isMobile ? 8 : 0,
                      justifyContent: isMobile ? "space-between" : "flex-end",
                      width: isMobile ? "100%" : "auto"
                    }}>
                      <div style={{ textAlign: isMobile ? "left" : "right", flex: isMobile ? "1" : "none" }}>
                        <div style={{ fontSize: 9, color: C.muted, fontWeight: 700, textTransform: "uppercase" }}>Sem 1 Rank</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: C.text }}>#{studentRanks[foundStudent.rollNo].r1}</div>
                      </div>
                      {!isMobile && <div style={{ width: 1, background: C.border }} />}
                      <div style={{ textAlign: isMobile ? "left" : "right", flex: isMobile ? "1" : "none" }}>
                        <div style={{ fontSize: 9, color: C.muted, fontWeight: 700, textTransform: "uppercase" }}>Sem 2 Rank</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: activeStudent.sem2 ? C.text : C.dim }}>
                          #{studentRanks[foundStudent.rollNo].r2}
                        </div>
                      </div>
                      {!isMobile && <div style={{ width: 1, background: C.border }} />}
                      <div style={{ textAlign: isMobile ? "left" : "right", flex: isMobile ? "1" : "none" }}>
                        <div style={{ fontSize: 9, color: C.muted, fontWeight: 700, textTransform: "uppercase" }}>Year 1 Rank</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: C.gold }}>#{studentRanks[foundStudent.rollNo].rc}</div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Metric Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", background: C.border, gap: 1 }}>
                    {[
                      { label: "Semester 1 SGPA", val: activeStudent.sem1.sgpa, sub: "Pass", color: C.text },
                      {
                        label: "Semester 2 SGPA",
                        val: activeStudent.sem2 ? activeStudent.sem2.sgpa : "N/A",
                        sub: activeStudent.sem2 ? "Pass" : "Held / Missing",
                        color: activeStudent.sem2 ? C.text : C.muted
                      },
                      { label: "Cumulative CGPA", val: studentRanks[foundStudent.rollNo].cgpa, sub: "Overall", color: C.gold },
                      {
                        label: "Combined Total",
                        val: `${activeStudent.sem1.grand + (activeStudent.sem2 ? activeStudent.sem2.grand : 0)}`,
                        sub: `/ ${activeStudent.sem2 ? 1600 : 800}`,
                        color: C.text
                      }
                    ].map((m, idx) => (
                      <div key={idx} style={{ background: C.surface, padding: 18, textAlign: "center" }}>
                        <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>
                          {m.label}
                        </div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: m.color }}>
                          {m.val}
                        </div>
                        <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comparative View / Specific Semester Tables & Radar Chart */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
                  gap: 16,
                  alignItems: "start"
                }}>
                  {/* Left Column: Tables */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {(semContext === "1" || semContext === "cumulative") && (
                  <Card theme={C}>
                    <div style={{ padding: 24 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
                          Semester 1 Results Summary
                        </h4>
                        <Pill color={activeStudent.sem1.result.includes("PASSED") ? C.green : C.gold}>
                          {activeStudent.sem1.result}
                        </Pill>
                      </div>

                      {/* Sem 1 Table */}
                      {isMobile ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {SUBJECTS_SEM1.map((sub) => {
                            const scoreData = activeStudent.sem1[sub.code];
                            if (!scoreData) return null;
                            const [ext, sec, tot] = scoreData;
                            const maxVal = sub.maxFin + sub.maxInt;
                            const grade = getGrade(tot, maxVal);
                            const gColor = gradeColor(grade);

                            return (
                              <div key={sub.code} style={{ background: C.raised, borderRadius: 8, padding: 12, border: `1px solid ${C.border}` }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                                  <div>
                                    <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: C.gold }}>{sub.code}</span>
                                    <div style={{ fontWeight: 700, color: C.text, fontSize: 13, marginTop: 2 }}>{sub.name}</div>
                                  </div>
                                  <span style={{
                                    padding: "2px 6px",
                                    borderRadius: 4,
                                    fontSize: 10,
                                    fontWeight: 800,
                                    background: gColor + "15",
                                    border: `1px solid ${gColor}35`,
                                    color: gColor
                                  }}>
                                    {grade}
                                  </span>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, textAlign: "center", fontSize: 11, borderTop: `1px solid ${C.border}`, paddingTop: 8, marginTop: 4 }}>
                                  <div>
                                    <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>CREDITS</div>
                                    <div style={{ color: C.text, fontWeight: 600, marginTop: 2 }}>{sub.credits}</div>
                                  </div>
                                  <div>
                                    <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>EXTERNAL</div>
                                    <div style={{ color: ext === null ? C.red : C.text, fontWeight: 600, marginTop: 2 }}>
                                      {ext !== null ? ext : "Ab"}
                                    </div>
                                  </div>
                                  <div>
                                    <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>INTERNAL</div>
                                    <div style={{ color: C.text, fontWeight: 600, marginTop: 2 }}>{sec}</div>
                                  </div>
                                  <div>
                                    <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>TOTAL</div>
                                    <div style={{ color: C.text, fontWeight: 700, marginTop: 2 }}>{tot}</div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="aesthetic-scrollbar" style={{ overflowX: "auto", maxWidth: "100%", WebkitOverflowScrolling: "touch" }}>
                          <table style={{ width: "100%", minWidth: 550, borderCollapse: "collapse", fontSize: 13 }}>
                            <thead>
                              <tr style={{ borderBottom: `1px solid ${C.border}`, textAlign: "left" }}>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600 }}>Code</th>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600 }}>Subject Name</th>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Credits</th>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>External (70/20)</th>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Internal (30)</th>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Total</th>
                                <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Grade</th>
                              </tr>
                            </thead>
                            <tbody>
                              {SUBJECTS_SEM1.map((sub) => {
                                const scoreData = activeStudent.sem1[sub.code];
                                if (!scoreData) return null;
                                const [ext, sec, tot] = scoreData;
                                const maxVal = sub.maxFin + sub.maxInt;
                                const grade = getGrade(tot, maxVal);
                                const gColor = gradeColor(grade);

                                return (
                                  <tr key={sub.code} style={{ borderBottom: `1px solid ${C.border}` }}>
                                    <td style={{ padding: "10px 12px", fontFamily: "monospace", fontWeight: 600, color: C.muted }}>{sub.code}</td>
                                    <td style={{ padding: "10px 12px", color: C.text }}>{sub.name}</td>
                                    <td style={{ padding: "10px 12px", textAlign: "center", color: C.muted }}>{sub.credits}</td>
                                    <td style={{ padding: "10px 12px", textAlign: "center", color: ext === null ? C.red : C.text }}>
                                      {ext !== null ? ext : "Absent"}
                                    </td>
                                    <td style={{ padding: "10px 12px", textAlign: "center", color: C.text }}>{sec}</td>
                                    <td style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700, color: C.text }}>{tot}</td>
                                    <td style={{ padding: "10px 12px", textAlign: "center" }}>
                                      <span style={{
                                        padding: "2px 6px",
                                        borderRadius: 4,
                                        fontSize: 11,
                                        fontWeight: 800,
                                        background: gColor + "15",
                                        border: `1px solid ${gColor}35`,
                                        color: gColor
                                      }}>
                                        {grade}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Theory / Practical summary Sem 1 */}
                      <div style={{ display: "flex", justifyContent: "flex-end", gap: 20, marginTop: 14, fontSize: 12, color: C.muted, fontWeight: 500 }}>
                        <div>Theory: <strong style={{ color: C.text }}>{activeStudent.sem1.theory}/600</strong></div>
                        <div>Practical: <strong style={{ color: C.text }}>{activeStudent.sem1.practical}/200</strong></div>
                        <div>SGPA: <strong style={{ color: C.gold }}>{activeStudent.sem1.sgpa}</strong></div>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Semester 2 Table Display */}
                {(semContext === "2" || semContext === "cumulative") && (
                  <Card theme={C}>
                    <div style={{ padding: 24 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
                          Semester 2 Results Summary
                        </h4>
                        {activeStudent.sem2 ? (
                          <Pill color={activeStudent.sem2.result.includes("PASSED") ? C.green : C.gold}>
                            {activeStudent.sem2.result}
                          </Pill>
                        ) : (
                          <Pill color={C.red}>Held / No Records</Pill>
                        )}
                      </div>

                      {activeStudent.sem2 ? (
                        <>
                          {isMobile ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                              {SUBJECTS_SEM2.map((sub) => {
                                const scoreData = activeStudent.sem2[sub.code];
                                if (!scoreData) return null;
                                const [ext, sec, tot] = scoreData;
                                const maxVal = sub.maxFin + sub.maxInt;
                                const grade = getGrade(tot, maxVal);
                                const gColor = gradeColor(grade);

                                return (
                                  <div key={sub.code} style={{ background: C.raised, borderRadius: 8, padding: 12, border: `1px solid ${C.border}` }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                                      <div>
                                        <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: C.gold }}>{sub.code}</span>
                                        <div style={{ fontWeight: 700, color: C.text, fontSize: 13, marginTop: 2 }}>{sub.name}</div>
                                      </div>
                                      <span style={{
                                        padding: "2px 6px",
                                        borderRadius: 4,
                                        fontSize: 10,
                                        fontWeight: 800,
                                        background: gColor + "15",
                                        border: `1px solid ${gColor}35`,
                                        color: gColor
                                      }}>
                                        {grade}
                                      </span>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, textAlign: "center", fontSize: 11, borderTop: `1px solid ${C.border}`, paddingTop: 8, marginTop: 4 }}>
                                      <div>
                                        <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>CREDITS</div>
                                        <div style={{ color: C.text, fontWeight: 600, marginTop: 2 }}>{sub.credits}</div>
                                      </div>
                                      <div>
                                        <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>EXTERNAL</div>
                                        <div style={{ color: ext === null ? C.red : C.text, fontWeight: 600, marginTop: 2 }}>
                                          {ext !== null ? ext : "Ab"}
                                        </div>
                                      </div>
                                      <div>
                                        <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>INTERNAL</div>
                                        <div style={{ color: C.text, fontWeight: 600, marginTop: 2 }}>{sec}</div>
                                      </div>
                                      <div>
                                        <div style={{ color: C.muted, fontSize: 9, fontWeight: 600 }}>TOTAL</div>
                                        <div style={{ color: C.text, fontWeight: 700, marginTop: 2 }}>{tot}</div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="aesthetic-scrollbar" style={{ overflowX: "auto", maxWidth: "100%", WebkitOverflowScrolling: "touch" }}>
                              <table style={{ width: "100%", minWidth: 550, borderCollapse: "collapse", fontSize: 13 }}>
                                <thead>
                                  <tr style={{ borderBottom: `1px solid ${C.border}`, textAlign: "left" }}>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600 }}>Code</th>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600 }}>Subject Name</th>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Credits</th>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>External (70/20)</th>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Internal (30)</th>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Total</th>
                                    <th style={{ padding: "8px 12px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Grade</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {SUBJECTS_SEM2.map((sub) => {
                                    const scoreData = activeStudent.sem2[sub.code];
                                    if (!scoreData) return null;
                                    const [ext, sec, tot] = scoreData;
                                    const maxVal = sub.maxFin + sub.maxInt;
                                    const grade = getGrade(tot, maxVal);
                                    const gColor = gradeColor(grade);

                                    return (
                                      <tr key={sub.code} style={{ borderBottom: `1px solid ${C.border}` }}>
                                        <td style={{ padding: "10px 12px", fontFamily: "monospace", fontWeight: 600, color: C.muted }}>{sub.code}</td>
                                        <td style={{ padding: "10px 12px", color: C.text }}>{sub.name}</td>
                                        <td style={{ padding: "10px 12px", textAlign: "center", color: C.muted }}>{sub.credits}</td>
                                        <td style={{ padding: "10px 12px", textAlign: "center", color: ext === null ? C.red : C.text }}>
                                          {ext !== null ? ext : "Absent"}
                                        </td>
                                        <td style={{ padding: "10px 12px", textAlign: "center", color: C.text }}>{sec}</td>
                                        <td style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700, color: C.text }}>{tot}</td>
                                        <td style={{ padding: "10px 12px", textAlign: "center" }}>
                                          <span style={{
                                            padding: "2px 6px",
                                            borderRadius: 4,
                                            fontSize: 11,
                                            fontWeight: 800,
                                            background: gColor + "15",
                                            border: `1px solid ${gColor}35`,
                                            color: gColor
                                          }}>
                                            {grade}
                                          </span>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          )}

                          {/* Theory / Practical summary Sem 2 */}
                          <div style={{ display: "flex", justifyContent: "flex-end", gap: 20, marginTop: 14, fontSize: 12, color: C.muted, fontWeight: 500 }}>
                            <div>Theory: <strong style={{ color: C.text }}>{activeStudent.sem2.theory}/600</strong></div>
                            <div>Practical: <strong style={{ color: C.text }}>{activeStudent.sem2.practical}/200</strong></div>
                            <div>SGPA: <strong style={{ color: C.gold }}>{activeStudent.sem2.sgpa}</strong></div>
                          </div>
                        </>
                      ) : (
                        <div style={{
                          padding: "30px 16px",
                          textAlign: "center",
                          color: C.muted,
                          fontSize: 14,
                          background: C.raised,
                          border: `1px dashed ${C.border}`,
                          borderRadius: 8
                        }}>
                          Semester 2 results have not been declared/provided for this student yet.
                        </div>
                      )}
                    </div>
                  </Card>
                )}
                  </div>

                  {/* Right Column: Gamified Radar & RPG Stats */}
                  <RadarChart student={activeStudent} opponent={compareMode ? (activeStudent === foundStudent ? opponentStudent : foundStudent) : null} semContext={semContext} theme={C} isMobile={isMobile} />
                </div>

              </div>

              
                )}{/* Hidden scorecard template for PNG download */}
              <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                <div
                  ref={scorecardRef}
                  style={{
                    width: 900,
                    height: 580,
                    background: "#010102",
                    position: "relative",
                    overflow: "hidden",
                    fontFamily: "system-ui, -apple-system, sans-serif"
                  }}
                >
                  {/* Ambient Background Blobs */}
                  <div style={{ width: 500, height: 500, borderRadius: "50%", background: "rgba(94, 106, 210, 0.12)", filter: "blur(80px)", top: "-150px", left: "200px", position: "absolute" }} />
                  <div style={{ width: 300, height: 300, borderRadius: "50%", background: "rgba(39, 166, 68, 0.06)", filter: "blur(60px)", bottom: "-80px", right: "-80px", position: "absolute" }} />

                  {/* Glassmorphism Inner Card Container */}
                  <div style={{
                    position: "absolute",
                    top: 24,
                    bottom: 24,
                    left: 24,
                    right: 24,
                    background: "rgba(15, 16, 17, 0.65)",
                    border: "1px solid rgba(35, 37, 42, 0.6)",
                    borderRadius: 16,
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
                    padding: "32px 40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box"
                  }}>
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: 1.5, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase" }}>Jharkhand University of Technology</div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: "#ffffff", marginTop: 2, letterSpacing: 0.5 }}>BCA RESULT PORTAL</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{
                          fontSize: 9,
                          fontWeight: 700,
                          color: "#828fff",
                          border: "1px solid rgba(94, 106, 210, 0.3)",
                          background: "rgba(94, 106, 210, 0.1)",
                          padding: "4px 10px",
                          borderRadius: 20,
                          letterSpacing: 0.5
                        }}>
                          OFFICIAL REPORT
                        </span>
                      </div>
                    </div>

                    {/* Student Profile */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        {/* Downloadable Scorecard Anime Avatar */}
                        <div style={{
                          width: 48,
                          height: 48,
                          borderRadius: 8,
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}>
                          <img
                            src={getAvatarUrl(activeStudent)}
                            alt={`${activeStudent.name}'s Avatar`}
                            crossOrigin="anonymous"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <div style={{ fontSize: 9, fontWeight: 600, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: 1 }}>Student Profile</div>
                          <div style={{ fontSize: 24, fontWeight: 800, color: "#ffffff", marginTop: 2 }}>{activeStudent.name}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                            <span style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255, 255, 255, 0.6)" }}>
                              ROLL NO: <span style={{ color: "#828fff", fontWeight: 600 }}>{activeStudent.rollNo}</span>
                            </span>
                            {downloadClass && (
                              <span style={{
                                fontSize: 9,
                                fontWeight: 800,
                                color: downloadClass.color,
                                border: `1px solid ${downloadClass.color}40`,
                                background: `${downloadClass.color}15`,
                                padding: "2px 6px",
                                borderRadius: 4,
                                textTransform: "uppercase"
                              }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                  <ClassIcon classTitle={downloadClass.title} color={downloadClass.color} size={9} />
                                  <span>{downloadClass.title} ({downloadCp} CP)</span>
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Ranks Row */}
                      <div style={{ display: "flex", gap: 10 }}>
                        <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: 8, padding: "6px 12px", textAlign: "center" }}>
                          <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Sem 1 Rank</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "#ffffff", marginTop: 2 }}>#{studentRanks[activeStudent.rollNo].r1}</div>
                        </div>
                        <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: 8, padding: "6px 12px", textAlign: "center" }}>
                          <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Sem 2 Rank</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: activeStudent.sem2 ? "#ffffff" : "rgba(255,255,255,0.2)", marginTop: 2 }}>
                            {activeStudent.sem2 ? `#${studentRanks[activeStudent.rollNo].r2}` : "N/A"}
                          </div>
                        </div>
                        <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: 8, padding: "6px 12px", textAlign: "center" }}>
                          <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Year 1 Rank</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: C.gold, marginTop: 2 }}>#{studentRanks[activeStudent.rollNo].rc}</div>
                        </div>
                      </div>
                    </div>

                    {/* Body Details Section */}
                    <div style={{ display: "flex", gap: 24, marginTop: 18, flex: 1, alignItems: "stretch" }}>
                      {/* Left Box: Core Academic Metrics */}
                      <div style={{
                        flex: 1,
                        background: "rgba(255, 255, 255, 0.015)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        borderRadius: 10,
                        padding: 16,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                          <div>
                            <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Sem 1 SGPA</div>
                            <div style={{ fontSize: 16, fontWeight: 800, color: "#ffffff", marginTop: 2 }}>{activeStudent.sem1.sgpa}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Sem 2 SGPA</div>
                            <div style={{ fontSize: 16, fontWeight: 800, color: activeStudent.sem2 ? "#ffffff" : "rgba(255,255,255,0.2)", marginTop: 2 }}>
                              {activeStudent.sem2 ? activeStudent.sem2.sgpa : "N/A"}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Cumulative CGPA</div>
                            <div style={{ fontSize: 16, fontWeight: 800, color: C.gold, marginTop: 2 }}>{studentRanks[activeStudent.rollNo].cgpa}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700 }}>Year 1 Result</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: C.green, marginTop: 2 }}>PASSED</div>
                          </div>
                        </div>
                        
                        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 8, marginTop: 8, fontSize: 10, color: "rgba(255, 255, 255, 0.5)" }}>
                          Total Marks: <strong style={{ color: "#ffffff" }}>{activeStudent.sem1.grand + (activeStudent.sem2 ? activeStudent.sem2.grand : 0)}</strong> / {activeStudent.sem2 ? 1600 : 800}
                        </div>
                      </div>
                      
                      {/* Right Box: Compact Subject Grade Sheets */}
                      <div style={{
                        flex: 1.3,
                        background: "rgba(255, 255, 255, 0.015)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        borderRadius: 10,
                        padding: 14,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}>
                        <div>
                          <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>Subject Grades Summary</div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
                            {/* List Sem 1 Grades */}
                            <div>
                              <div style={{ fontSize: 7, color: "#828fff", fontWeight: 700, marginBottom: 2, textTransform: "uppercase" }}>Semester 1</div>
                              {SUBJECTS_SEM1.map((s) => {
                                const mark = activeStudent.sem1[s.code];
                                if (!mark) return null;
                                const maxVal = s.maxFin + s.maxInt;
                                const grade = getGrade(mark[2], maxVal);
                                return (
                                  <div key={s.code} style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "rgba(255,255,255,0.7)", padding: "1px 0" }}>
                                    <span style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: 90 }}>{s.name}</span>
                                    <span style={{ fontWeight: 800, color: gradeColor(grade) }}>{grade}</span>
                                  </div>
                                );
                              })}
                            </div>

                            {/* List Sem 2 Grades */}
                            <div>
                              <div style={{ fontSize: 7, color: "#828fff", fontWeight: 700, marginBottom: 2, textTransform: "uppercase" }}>Semester 2</div>
                              {activeStudent.sem2 ? (
                                SUBJECTS_SEM2.map((s) => {
                                  const mark = activeStudent.sem2[s.code];
                                  if (!mark) return null;
                                  const maxVal = s.maxFin + s.maxInt;
                                  const grade = getGrade(mark[2], maxVal);
                                  return (
                                    <div key={s.code} style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "rgba(255,255,255,0.7)", padding: "1px 0" }}>
                                      <span style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: 90 }}>{s.name}</span>
                                      <span style={{ fontWeight: 800, color: gradeColor(grade) }}>{grade}</span>
                                    </div>
                                  );
                                })
                              ) : (
                                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.2)", fontStyle: "italic", marginTop: 4 }}>Semester 2 results held.</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer & Signatures */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 18, borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 12 }}>
                      <div style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.3)", maxWidth: 320, lineHeight: 1.3 }}>
                        * This score card is digitally generated by the JUT BCA department system. 
                        Verify authenticity using this Roll Number on the portal.
                      </div>
                      
                      {/* Signature Panel */}
                      <div style={{ display: "flex", gap: 32 }}>
                        <div style={{ textAlign: "center", position: "relative" }}>
                          <div style={{ position: "absolute", top: -16, left: 10, width: 80, height: 20, pointerEvents: "none" }}>
                            <svg width="80" height="20" viewBox="0 0 100 40" fill="none" stroke="#828fff" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 0.75 }}>
                              <path d="M10,25 Q30,5 45,22 T70,10 T95,20" />
                            </svg>
                          </div>
                          <div style={{ fontSize: 8, fontWeight: 700, color: "#ffffff", borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: 3, width: 80, textTransform: "uppercase", letterSpacing: 0.5 }}>
                            Controller
                          </div>
                        </div>
                        <div style={{ textAlign: "center", position: "relative" }}>
                          <div style={{ position: "absolute", top: -16, left: 10, width: 80, height: 20, pointerEvents: "none" }}>
                            <svg width="80" height="20" viewBox="0 0 100 40" fill="none" stroke="#27a644" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 0.75 }}>
                              <path d="M5,25 C15,10 25,5 40,25 C50,35 60,10 75,25 C85,35 90,20 95,20" />
                            </svg>
                          </div>
                          <div style={{ fontSize: 8, fontWeight: 700, color: "#ffffff", borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: 3, width: 80, textTransform: "uppercase", letterSpacing: 0.5 }}>
                            Verified
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </>
          )}
          </div>
        )}

        {/* ════════════ TABS 1: CLASS TOPPERS ════════════ */}
        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }} className="gsap-fade-in">
            
            {/* Toppers Filter Bar */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.text }}>Academic Toppers</h3>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>Browse the outstanding students of the class by overall and subject-wise lists.</p>
              </div>

              {/* Dynamic Subject Selector based on Sem Context */}
              {semContext !== "cumulative" && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Label theme={C} style={{ marginBottom: 0 }}>Subject Filters:</Label>
                  <Select
                    theme={C}
                    value={topperSubject}
                    onChange={(e) => setTopperSubject(e.target.value)}
                  >
                    <option value="grand">Overall Grand Total</option>
                    {semContext === "1"
                      ? SUBJECTS_SEM1.map((s) => <option key={s.code} value={s.code}>{s.name} ({s.code})</option>)
                      : SUBJECTS_SEM2.map((s) => <option key={s.code} value={s.code}>{s.name} ({s.code})</option>)
                    }
                  </Select>
                </div>
              )}
            </div>

            {/* Podium (Top 3 Visual Representation) */}
            {!isMobile && toppersList.length >= 3 && topperSubject === "grand" && (
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: 16,
                padding: "20px 0 40px",
                borderBottom: `1px solid ${C.border}`
              }}>
                {/* 2nd Place */}
                <div
                  onClick={() => viewStudent(toppersList[1])}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                  title={`View ${toppersList[1].name}'s Profile`}
                >
                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: C.muted + "15",
                        border: `2px solid ${C.muted}`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: C.text,
                        fontWeight: 800,
                        fontSize: 14,
                        marginBottom: 6
                      }}>
                        2
                      </div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text, maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {toppersList[1].name}
                    </div>
                    <div style={{ fontSize: 10, color: C.muted, fontFamily: "monospace" }}>{toppersList[1].rollNo}</div>
                  </div>
                  <div style={{
                    width: 160,
                    height: 140,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderTop: `3px solid ${C.muted}`,
                    borderRadius: "8px 8px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: C.text }}>
                      {semContext === "1" ? toppersList[1].sem1.grand : semContext === "2" ? toppersList[1].sem2.grand : toppersList[1].cgpa}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted }}>
                      {semContext === "cumulative" ? "CGPA" : "/ 800 Marks"}
                    </div>
                  </div>
                </div>

                {/* 1st Place (Gold Podium - taller and highlighted) */}
                <div
                  onClick={() => viewStudent(toppersList[0])}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                  title={`View ${toppersList[0].name}'s Profile`}
                >
                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: C.gold + "15",
                        border: `2px solid ${C.gold}`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: C.gold,
                        fontWeight: 800,
                        fontSize: 16,
                        marginBottom: 6,
                        boxShadow: `0 0 16px ${C.gold}30`
                      }}>
                        1
                      </div>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: C.text, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {toppersList[0].name}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted, fontFamily: "monospace" }}>{toppersList[0].rollNo}</div>
                  </div>
                  <div style={{
                    width: 180,
                    height: 185,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderTop: `4px solid ${C.gold}`,
                    borderRadius: "8px 8px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: dark ? "0 0 30px rgba(192, 132, 252, 0.12)" : "0 8px 30px rgba(124, 58, 237, 0.08)"
                  }}>
                    <div style={{ fontSize: 36, fontWeight: 900, color: C.gold }}>
                      {semContext === "1" ? toppersList[0].sem1.grand : semContext === "2" ? toppersList[0].sem2.grand : toppersList[0].cgpa}
                    </div>
                    <div style={{ fontSize: 12, color: C.muted, fontWeight: 600 }}>
                      {semContext === "cumulative" ? "CGPA" : "/ 800 Marks"}
                    </div>
                  </div>
                </div>

                {/* 3rd Place */}
                <div
                  onClick={() => viewStudent(toppersList[2])}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                  title={`View ${toppersList[2].name}'s Profile`}
                >
                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#b4530915",
                        border: "2px solid #b45309",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#f59e0b",
                        fontWeight: 800,
                        fontSize: 14,
                        marginBottom: 6
                      }}>
                        3
                      </div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text, maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {toppersList[2].name}
                    </div>
                    <div style={{ fontSize: 10, color: C.muted, fontFamily: "monospace" }}>{toppersList[2].rollNo}</div>
                  </div>
                  <div style={{
                    width: 160,
                    height: 110,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderTop: `3px solid #b45309`,
                    borderRadius: "8px 8px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: C.text }}>
                      {semContext === "1" ? toppersList[2].sem1.grand : semContext === "2" ? toppersList[2].sem2.grand : toppersList[2].cgpa}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted }}>
                      {semContext === "cumulative" ? "CGPA" : "/ 800 Marks"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* List of remaining top students */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Label theme={C}>Toppers Ledger</Label>
              {toppersList.map((st, idx) => {
                let score;
                let max;
                if (topperSubject === "grand") {
                  score = semContext === "1" ? st.sem1.grand : semContext === "2" ? st.sem2.grand : st.cgpa;
                  max = semContext === "cumulative" ? 10 : 800;
                } else {
                  score = semContext === "1" ? st.sem1[topperSubject]?.[2] || 0 : st.sem2[topperSubject]?.[2] || 0;
                  max = 100;
                }

                return (
                  <Card
                    theme={C}
                    key={st.rollNo}
                    onClick={() => viewStudent(st)}
                    style={{ cursor: "pointer", transition: "border-color 0.2s" }}
                    title={`View ${st.name}'s Profile`}
                  >
                    <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div style={{
                          width: 28,
                          height: 28,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          {idx < 3 ? (
                            <div style={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: idx === 0 ? C.gold + "15" : idx === 1 ? C.muted + "15" : "#b4530915",
                              border: `1.5px solid ${idx === 0 ? C.gold : idx === 1 ? C.muted : "#b45309"}`,
                              color: idx === 0 ? C.gold : idx === 1 ? C.text : "#f59e0b",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 800,
                              fontSize: 11
                            }}>
                              {idx + 1}
                            </div>
                          ) : (
                            <span style={{ fontSize: 12, fontWeight: "600", color: C.muted }}>
                              #{idx + 1}
                            </span>
                          )}
                        </div>

                        {/* Toppers Ledger Row Avatar */}
                        <div style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: C.raised,
                          border: `1px solid ${C.border}`,
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}>
                          <img
                            src={getAvatarUrl(st)}
                            alt={`${st.name}'s Avatar`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>

                        <div>
                          <div
                            style={{ fontWeight: 700, color: C.text }}
                          >
                            {st.name}
                          </div>
                          <div style={{ fontSize: 11, color: C.muted, fontFamily: "monospace", marginTop: 1 }}>{st.rollNo}</div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <div style={{ textAlign: "right" }}>
                          <span style={{ fontSize: 18, fontWeight: 800, color: idx === 0 ? C.gold : C.text }}>
                            {score}
                          </span>
                          <span style={{ fontSize: 12, color: C.muted }}>/{max}</span>
                        </div>

                        {!isMobile && (
                          <div style={{ display: "flex", gap: 8 }}>
                            <Pill color={C.gold}>
                              SGPA/CGPA: {semContext === "1" ? st.sem1.sgpa : semContext === "2" ? st.sem2.sgpa : st.cgpa}
                            </Pill>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Subject-wise averages summary charts */}
            {semContext !== "cumulative" && (
              <div style={{ marginTop: 16 }}>
                <Card theme={C}>
                  <div style={{ padding: 24 }}>
                    <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
                      Subject Average Scores (Class-wide)
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      {subjectAverages.map((sub, idx) => {
                        const colors = dark ? [
                          "#c084fc", // Vibrant lavender
                          "#a78bfa", // Medium lavender
                          "#818cf8", // Periwinkle
                          "#6366f1", // Indigo
                          "#4f46e5", // Deep indigo
                          "#f472b6", // Rose pink
                          "#fb7185", // Pink warning
                          "#38bdf8", // Sky blue
                          "#2dd4bf"  // Teal
                        ] : [
                          "#7c3aed", // Violet
                          "#8b5cf6", // Purple
                          "#4f46e5", // Indigo
                          "#2563eb", // Blue
                          "#1d4ed8", // Deep blue
                          "#db2777", // Pink
                          "#e11d48", // Rose
                          "#0284c7", // Sky blue
                          "#0d9488"  // Teal
                        ];
                        const c = colors[idx % colors.length];
                        const maxVal = sub.maxFin + sub.maxInt;
                        const pct = ((sub.avg / maxVal) * 100).toFixed(0);

                        return (
                          <div key={sub.code}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
                              <span style={{ color: C.text, fontWeight: 500 }}>
                                {sub.name} <span style={{ color: C.muted, fontFamily: "monospace", fontSize: 10 }}>({sub.code})</span>
                              </span>
                              <strong style={{ color: c }}>{sub.avg} / {maxVal} ({pct}%)</strong>
                            </div>
                            <div style={{ height: 6, background: C.raised, borderRadius: 99, overflow: "hidden" }}>
                              <div className="gsap-progress-bar" data-pct={pct} style={{ width: "0%", height: "100%", background: c, borderRadius: 99 }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </div>
            )}

          </div>
        )}

        {/* ════════════ TABS 2: CLASS ANALYTICS ════════════ */}
        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }} className="gsap-fade-in">
            
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.text }}>Cohort Analytics</h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>Detailed comparative report showing class-wide performance between Semesters 1 and 2.</p>
            </div>

            {/* Key Comparison Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
              
              {/* Passed rate compare */}
              <Card theme={C}>
                <div style={{ padding: 20 }}>
                  <Label theme={C}>Pass Percentage</Label>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 10 }}>
                    <span style={{ fontSize: 28, fontWeight: 800, color: C.text }}>
                      {((stats.s2.passed / stats.nSem2) * 100).toFixed(0)}%
                    </span>
                    <span style={{ fontSize: 12, color: C.muted }}>Sem 2 Pass Rate</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.border}`, marginTop: 14, paddingTop: 10, fontSize: 12, color: C.muted }}>
                    <span>Sem 1: {((stats.s1.passed / stats.nTotal) * 100).toFixed(0)}%</span>
                    <span style={{ color: C.green }}>
                      Diff: {(((stats.s2.passed / stats.nSem2) - (stats.s1.passed / stats.nTotal)) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </Card>

              {/* SGPA compare */}
              <Card theme={C}>
                <div style={{ padding: 20 }}>
                  <Label theme={C}>Class Average SGPA</Label>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 10 }}>
                    <span style={{ fontSize: 28, fontWeight: 800, color: C.gold }}>
                      {stats.s2.avgSgpa}
                    </span>
                    <span style={{ fontSize: 12, color: C.muted }}>Sem 2 average</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.border}`, marginTop: 14, paddingTop: 10, fontSize: 12, color: C.muted }}>
                    <span>Sem 1 Avg: {stats.s1.avgSgpa}</span>
                    <span style={{ color: stats.s2.avgSgpa - stats.s1.avgSgpa >= 0 ? C.green : C.red }}>
                      Delta: {(stats.s2.avgSgpa - stats.s1.avgSgpa).toFixed(2)}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Highest score compare */}
              <Card theme={C}>
                <div style={{ padding: 20 }}>
                  <Label theme={C}>Highest SGPA/CGPA</Label>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 10 }}>
                    <span style={{ fontSize: 28, fontWeight: 800, color: C.text }}>
                      {stats.cum.highest}
                    </span>
                    <span style={{ fontSize: 12, color: C.muted }}>Top CGPA (Year 1)</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.border}`, marginTop: 14, paddingTop: 10, fontSize: 12, color: C.muted }}>
                    <span>Sem 1 Max: 9.27</span>
                    <span>Sem 2 Max: 8.18</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* GPA Distribution charts side by side */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
              
              <Card theme={C}>
                <div style={{ padding: 24 }}>
                  <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Semester 1 GPA Distribution
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { band: "Outstanding (9.0+)", count: gradeDistribution[1][0], color: bandColors[0] },
                      { band: "Excellent (8.0–8.9)", count: gradeDistribution[1][1], color: bandColors[1] },
                      { band: "Very Good (7.0–7.9)", count: gradeDistribution[1][2], color: bandColors[2] },
                      { band: "Good (6.0–6.9)", count: gradeDistribution[1][3], color: bandColors[3] },
                      { band: "Average (5.0–5.9)", count: gradeDistribution[1][4], color: bandColors[4] },
                      { band: "Below Average (< 5.0)", count: gradeDistribution[1][5], color: bandColors[5] }
                    ].map((g) => {
                      const pct = ((g.count / stats.nTotal) * 100).toFixed(0);
                      return (
                        <div key={g.band}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                            <span style={{ color: C.text }}>{g.band}</span>
                            <strong style={{ color: g.color }}>{g.count} students ({pct}%)</strong>
                          </div>
                          <div style={{ height: 6, background: C.raised, borderRadius: 99, overflow: "hidden" }}>
                            <div className="gsap-progress-bar" data-pct={pct} style={{ width: "0%", height: "100%", background: g.color, borderRadius: 99 }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>

              <Card theme={C}>
                <div style={{ padding: 24 }}>
                  <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Semester 2 GPA Distribution
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { band: "Outstanding (9.0+)", count: gradeDistribution[2][0], color: bandColors[0] },
                      { band: "Excellent (8.0–8.9)", count: gradeDistribution[2][1], color: bandColors[1] },
                      { band: "Very Good (7.0–7.9)", count: gradeDistribution[2][2], color: bandColors[2] },
                      { band: "Good (6.0–6.9)", count: gradeDistribution[2][3], color: bandColors[3] },
                      { band: "Average (5.0–5.9)", count: gradeDistribution[2][4], color: bandColors[4] },
                      { band: "Below Average (< 5.0)", count: gradeDistribution[2][5], color: bandColors[5] }
                    ].map((g) => {
                      const pct = ((g.count / stats.nSem2) * 100).toFixed(0);
                      return (
                        <div key={g.band}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                            <span style={{ color: C.text }}>{g.band}</span>
                            <strong style={{ color: g.color }}>{g.count} students ({pct}%)</strong>
                          </div>
                          <div style={{ height: 6, background: C.raised, borderRadius: 99, overflow: "hidden" }}>
                            <div className="gsap-progress-bar" data-pct={pct} style={{ width: "0%", height: "100%", background: g.color, borderRadius: 99 }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>

            </div>

            {/* Individual student trends comparisons */}
            <Card theme={C}>
              <div style={{ padding: 24 }}>
                <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Individual Student Performance Trend (CGPA Chart)
                </h4>
                <div style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: isMobile ? 6 : 12,
                  height: 160,
                  overflowX: "auto",
                  paddingBottom: 8,
                  marginTop: 14
                }}>
                  {STUDENTS.map((st) => {
                    const cGpa = studentRanks[st.rollNo].cgpa;
                    const h = cGpa * 12; // height in pixels (0 to 120px)
                    const fill = cGpa >= 8
                      ? C.gold
                      : cGpa >= 7
                        ? (dark ? "#818cf8" : "#4f46e5")
                        : cGpa >= 6
                          ? (dark ? "#6366f1" : "#2563eb")
                          : C.red;
                    
                    return (
                      <div
                        key={st.rollNo}
                        title={`${st.name}: CGPA ${cGpa}`}
                        onClick={() => viewStudent(st)}
                        style={{
                          flex: 1,
                          minWidth: isMobile ? 18 : 28,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center", // Align elements in center horizontally
                          justifyContent: "flex-end",
                          height: 140,
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ fontSize: 9, fontWeight: 700, color: C.muted, width: "100%", textAlign: "center", marginBottom: 4 }}>{cGpa}</div>
                        <div className="gsap-bar" style={{ width: "100%", height: `${h}px`, background: fill, borderRadius: "4px 4px 0 0", opacity: 0.8 }} />
                        <div style={{
                          fontSize: 8,
                          color: C.muted,
                          width: "100%",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          textAlign: "center"
                        }}>
                          {st.name.split(" ")[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

          </div>
        )}

        {/* ════════════ TABS 3: STUDENT LEDGER ════════════ */}
        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }} className="gsap-fade-in">
            
            {/* Table title info */}
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.text }}>Student Result Ledger</h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>Explore the full results list with multi-column sorting and direct filters.</p>
            </div>

            {/* Ledger Filters row */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              background: C.surface,
              border: `1px solid ${C.border}`,
              padding: 14,
              borderRadius: 12
            }}>
              {/* Query Search */}
              <div style={{ flex: "1 1 200px" }}>
                <Input
                  theme={C}
                  value={ledgerSearch}
                  onChange={(e) => setLedgerSearch(e.target.value)}
                  placeholder="Search by name or roll number…"
                  style={{ width: "100%" }}
                />
              </div>

              {/* Status Select */}
              <div>
                <Select
                  theme={C}
                  value={ledgerStatus}
                  onChange={(e) => setLedgerStatus(e.target.value)}
                >
                  <option value="ALL">All Outcomes</option>
                  <option value="PASSED">Passed & Promoted</option>
                  <option value="PROMOTED">Promoted Only</option>
                </Select>
              </div>

              {/* Sort selector */}
              <div>
                <Select
                  theme={C}
                  value={ledgerSort}
                  onChange={(e) => setLedgerSort(e.target.value)}
                >
                  <option value="rank">Sort: Rank</option>
                  <option value="sgpa">Sort: GPA</option>
                  <option value="name">Sort: Name</option>
                  <option value="roll">Sort: Roll No</option>
                </Select>
              </div>
            </div>

            {/* List info */}
            <div style={{ fontSize: 12, color: C.muted, display: "flex", justifyContent: "space-between" }}>
              <span>Showing {ledgerData.length} of {STUDENTS.length} students</span>
              {semContext === "2" && <span>* 6 students missing Sem 2 records</span>}
            </div>

            {/* Ledger Grid (Mobile Card layout / Desktop Table layout) */}
            {isMobile ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ledgerData.map((s) => {
                  const pass = semContext === "1"
                    ? s.sem1.result.includes("PASSED")
                    : semContext === "2"
                      ? s.sem2 && s.sem2.result.includes("PASSED")
                      : s.sem1.result.includes("PASSED") && (s.sem2 ? s.sem2.result.includes("PASSED") : false);

                  const gpa = semContext === "1"
                    ? s.sem1.sgpa
                    : semContext === "2"
                      ? s.sem2 ? s.sem2.sgpa : "N/A"
                      : s.cgpa;

                  const totalScore = semContext === "1"
                    ? s.sem1.grand
                    : semContext === "2"
                      ? s.sem2 ? s.sem2.grand : "N/A"
                      : s.sem1.grand + (s.sem2 ? s.sem2.grand : 0);

                  const maxTotal = semContext === "cumulative" ? 1600 : 800;

                  return (
                    <Card key={s.rollNo} theme={C} onClick={() => viewStudent(s)} style={{ cursor: "pointer" }}>
                      <div style={{ padding: 16 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            {/* Mobile Avatar */}
                            <div style={{
                              width: 36,
                              height: 36,
                              borderRadius: "50%",
                              background: C.raised,
                              border: `1px solid ${C.border}`,
                              overflow: "hidden",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            }}>
                              <img
                                src={getAvatarUrl(s)}
                                alt={`${s.name}'s Avatar`}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                            </div>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <span style={{ fontSize: 11, fontWeight: 800, color: C.gold }}>
                                  #{semContext === "1" ? s.r1 : semContext === "2" ? s.r2 : s.rc}
                                </span>
                                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.text }}>
                                  {s.name}
                                </h4>
                              </div>
                              <span style={{ fontFamily: "monospace", fontSize: 11, color: C.muted }}>{s.rollNo}</span>
                            </div>
                          </div>

                          <Pill color={pass ? C.green : C.gold}>
                            {pass ? "Pass" : s.sem2 === null && semContext !== "1" ? "Held" : "Promoted"}
                          </Pill>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, textAlign: "center" }}>
                          <div style={{ background: C.raised, borderRadius: 6, padding: 6 }}>
                            <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase" }}>GPA</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: C.gold, marginTop: 2 }}>{gpa}</div>
                          </div>
                          <div style={{ background: C.raised, borderRadius: 6, padding: 6 }}>
                            <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase" }}>Grand</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginTop: 2 }}>{totalScore}</div>
                          </div>
                          <div style={{ background: C.raised, borderRadius: 6, padding: 6 }}>
                            <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase" }}>Max</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginTop: 2 }}>{maxTotal}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card theme={C}>
                <div className="aesthetic-scrollbar" style={{ overflowX: "auto", maxWidth: "100%", WebkitOverflowScrolling: "touch" }}>
                  <table style={{ width: "100%", minWidth: 550, borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: `1px solid ${C.border}`, textAlign: "left", background: C.raised }}>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600 }}>Rank</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600 }}>Roll Number</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600 }}>Student Name</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Sem 1 SGPA</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Sem 2 SGPA</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Cumulative CGPA</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600, textAlign: "center" }}>Grand Total</th>
                        <th style={{ padding: "12px 16px", color: C.muted, fontWeight: 600 }}>Status Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ledgerData.map((s) => {
                        const activeRank = semContext === "1" ? s.r1 : semContext === "2" ? s.r2 : s.rc;
                        const isFailedSem1 = s.sem1.result.includes("PROMOTED");
                        const isFailedSem2 = s.sem2 ? s.sem2.result.includes("PROMOTED") : false;
                        
                        let outcomeColor;
                        let outcomeText;

                        if (semContext === "1") {
                          outcomeText = s.sem1.result;
                          outcomeColor = isFailedSem1 ? C.gold : C.green;
                        } else if (semContext === "2") {
                          if (s.sem2) {
                            outcomeText = s.sem2.result;
                            outcomeColor = isFailedSem2 ? C.gold : C.green;
                          } else {
                            outcomeText = "Result Held";
                            outcomeColor = C.red;
                          }
                        } else {
                          // Cumulative
                          if (isFailedSem1 || isFailedSem2) {
                            outcomeText = "Promoted (Backlog)";
                            outcomeColor = C.gold;
                          } else if (s.sem2 === null) {
                            outcomeText = "Held (Sem 2 missing)";
                            outcomeColor = C.red;
                          } else {
                            outcomeText = "Cleared Year 1";
                            outcomeColor = C.green;
                          }
                        }

                        return (
                          <tr
                            key={s.rollNo}
                            onClick={() => viewStudent(s)}
                            style={{
                              borderBottom: `1px solid ${C.border}`,
                              cursor: "pointer",
                              transition: "background 0.2s"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = C.raised)}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <td style={{ padding: "14px 16px", fontWeight: 700, color: activeRank <= 3 ? C.gold : C.muted }}>
                              #{activeRank}
                            </td>
                            <td style={{ padding: "14px 16px", fontFamily: "monospace", color: C.muted }}>{s.rollNo}</td>
                            <td style={{ padding: "14px 16px", fontWeight: 700, color: C.text }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <div style={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: "50%",
                                  background: C.raised,
                                  border: `1px solid ${C.border}`,
                                  overflow: "hidden",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0
                                }}>
                                  <img
                                    src={getAvatarUrl(s)}
                                    alt={`${s.name}'s Avatar`}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                  />
                                </div>
                                <span>{s.name}</span>
                              </div>
                            </td>
                            <td style={{ padding: "14px 16px", textAlign: "center", color: C.text }}>{s.sem1.sgpa}</td>
                            <td style={{ padding: "14px 16px", textAlign: "center", color: s.sem2 ? C.text : C.muted }}>
                              {s.sem2 ? s.sem2.sgpa : "-"}
                            </td>
                            <td style={{ padding: "14px 16px", textAlign: "center", fontWeight: 700, color: C.gold }}>
                              {s.cgpa}
                            </td>
                            <td style={{ padding: "14px 16px", textAlign: "center", color: C.text }}>
                              {semContext === "1"
                                ? s.sem1.grand
                                : semContext === "2"
                                  ? s.sem2 ? s.sem2.grand : "-"
                                  : s.sem1.grand + (s.sem2 ? s.sem2.grand : 0)
                              }
                            </td>
                            <td style={{ padding: "14px 16px" }}>
                              <span style={{ fontSize: 12, fontWeight: 700, color: outcomeColor }}>
                                {outcomeText}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

          </div>
        )}

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{
        marginTop: "auto",
        borderTop: `1px solid ${C.border}`,
        background: C.surface,
        padding: "32px 0",
        textAlign: "center",
        color: C.muted,
        fontSize: 13,
        boxSizing: "border-box"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: `0 ${px}px`, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <div style={{ fontWeight: 600, color: C.text }}>
              BCA Results Management Portal
            </div>
            <div style={{ fontSize: 11, marginTop: 4, opacity: 0.8 }}>
              © 2024–2025 · Jharkhand University of Technology, Ranchi
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 500 }}>
              Developed by <strong style={{ color: C.text }}>Sumit Ghosh</strong>
            </span>
            <div style={{ display: "flex", gap: 12 }}>
              <a
                href="https://github.com/SumitGh0sh"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: C.raised,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  transition: "all 0.2s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.borderHi;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.raised;
                  e.currentTarget.style.transform = "none";
                }}
                title="GitHub"
              >
                <GithubIcon color={C.text} size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumitgh0sh/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: C.raised,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  transition: "all 0.2s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.borderHi;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.raised;
                  e.currentTarget.style.transform = "none";
                }}
                title="LinkedIn"
              >
                <LinkedinIcon color={C.text} size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}