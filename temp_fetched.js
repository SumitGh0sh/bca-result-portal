import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");const useState = __vite__cjsImport0_react["useState"]; const useMemo = __vite__cjsImport0_react["useMemo"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"];const _jsxDEV = __vite__cjsImport7_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport7_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=043e8d74";
import { SUBJECTS_SEM1, SUBJECTS_SEM2, STUDENTS, makeTheme, gradeColor, getGrade, getCharacterClass, getAvatarUrl } from "/src/data/mockData.js";
import { Pill, Card, Label, Input, Select, Button, ClassIcon } from "/src/components/UIComponents.jsx";
import RadarChart from "/src/components/RadarChart.jsx";
import { gsap } from "/node_modules/.vite/deps/gsap.js?v=043e8d74";
import { toPng } from "/node_modules/.vite/deps/html-to-image.js?v=043e8d74";
import "/src/index.css";
var _jsxFileName = "C:/Users/sumit/bca-result-portal/bca-result-portal/src/App.jsx";
import __vite__cjsImport7_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=043e8d74";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
const renderTabIcon = (id, active, C) => {
	const color = active ? C.gold : C.muted;
	const strokeWidth = 2.2;
	const size = 15;
	if (id === 0) {
		return /* @__PURE__ */ _jsxDEV("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: color,
			strokeWidth,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			style: { transition: "stroke 0.2s" },
			children: [/* @__PURE__ */ _jsxDEV("circle", {
				cx: "11",
				cy: "11",
				r: "8"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("line", {
				x1: "21",
				y1: "21",
				x2: "16.65",
				y2: "16.65"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this);
	}
	if (id === 1) {
		return /* @__PURE__ */ _jsxDEV("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: color,
			strokeWidth,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			style: { transition: "stroke 0.2s" },
			children: [
				/* @__PURE__ */ _jsxDEV("path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("path", { d: "M4 22h16" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("path", { d: "M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("path", { d: "M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 7
		}, this);
	}
	if (id === 2) {
		return /* @__PURE__ */ _jsxDEV("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: color,
			strokeWidth,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			style: { transition: "stroke 0.2s" },
			children: [
				/* @__PURE__ */ _jsxDEV("line", {
					x1: "18",
					y1: "20",
					x2: "18",
					y2: "10"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("line", {
					x1: "12",
					y1: "20",
					x2: "12",
					y2: "4"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("line", {
					x1: "6",
					y1: "20",
					x2: "6",
					y2: "14"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 7
		}, this);
	}
	if (id === 3) {
		return /* @__PURE__ */ _jsxDEV("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: color,
			strokeWidth,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			style: { transition: "stroke 0.2s" },
			children: [/* @__PURE__ */ _jsxDEV("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("rect", {
				x: "8",
				y: "2",
				width: "8",
				height: "4",
				rx: "1",
				ry: "1"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this);
	}
	return null;
};
const WarningIcon = ({ color, size = 16, style = {} }) => /* @__PURE__ */ _jsxDEV("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: color,
	strokeWidth: "2.2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	style: {
		verticalAlign: "middle",
		...style
	},
	children: [
		/* @__PURE__ */ _jsxDEV("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("line", {
			x1: "12",
			y1: "9",
			x2: "12",
			y2: "13"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("line", {
			x1: "12",
			y1: "17",
			x2: "12.01",
			y2: "17"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 63,
	columnNumber: 3
}, this);
_c = WarningIcon;
const GithubIcon = ({ color, size = 18, style = {} }) => /* @__PURE__ */ _jsxDEV("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: color,
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	style,
	children: /* @__PURE__ */ _jsxDEV("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 5
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 71,
	columnNumber: 3
}, this);
_c2 = GithubIcon;
const LinkedinIcon = ({ color, size = 18, style = {} }) => /* @__PURE__ */ _jsxDEV("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: color,
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	style,
	children: [
		/* @__PURE__ */ _jsxDEV("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("rect", {
			x: "2",
			y: "9",
			width: "4",
			height: "12"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("circle", {
			cx: "4",
			cy: "4",
			r: "2"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 77,
	columnNumber: 3
}, this);
_c3 = LinkedinIcon;
function useIsMobile() {
	_s();
	const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
	useEffect(() => {
		const h = () => setM(window.innerWidth < 768);
		window.addEventListener("resize", h);
		return () => window.removeEventListener("resize", h);
	}, []);
	return m;
}
_s(useIsMobile, "+9u1B8vM6PctY1JzvZZx/wxC8cE=");
export default function BCAPortal() {
	_s2();
	const isMobile = useIsMobile();
	const [dark, setDark] = useState(true);
	const C = makeTheme(dark);
	useEffect(() => {
		document.body.className = dark ? "dark-theme-grid" : "light-theme-grid";
	}, [dark]);
	const bandColors = dark ? [
		"#5e6ad2",
		"#707bc4",
		"#818cf8",
		"#6366f1",
		"#8a8f98",
		"#f43f5e"
	] : [
		"#5e6ad2",
		"#4f46e5",
		"#2563eb",
		"#1d4ed8",
		"#71717a",
		"#ef4444"
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
	const rollSuggestions = useMemo(() => {
		if (!roll.trim()) return [];
		const query = roll.trim();
		return STUDENTS.filter((st) => st.rollNo.includes(query)).slice(0, 5);
	}, [roll]);
	const nameSuggestions = useMemo(() => {
		if (!name.trim()) return [];
		const query = name.toUpperCase();
		return STUDENTS.filter((st) => st.name.toUpperCase().includes(query)).slice(0, 5);
	}, [name]);
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
		setTimeout(() => {
			setFoundStudent(student);
			setSearchError("");
			setTab(0);
		}, 250);
	};
	const downloadCgpa = foundStudent ? foundStudent.sem2 ? ((parseFloat(foundStudent.sem1.sgpa) + parseFloat(foundStudent.sem2.sgpa)) / 2).toFixed(2) : parseFloat(foundStudent.sem1.sgpa).toFixed(2) : "0.00";
	const downloadClass = foundStudent ? getCharacterClass(downloadCgpa) : null;
	const downloadCp = foundStudent ? Math.round(downloadCgpa * 1e3) : 0;
	// Ledger States
	const [ledgerSearch, setLedgerSearch] = useState("");
	const [ledgerStatus, setLedgerStatus] = useState("ALL");
	const [ledgerSort, setLedgerSort] = useState("rank");
	// Topper States
	const [topperSubject, setTopperSubject] = useState("grand");
	// GSAP animation effect for page elements
	useEffect(() => {
		const fadeTargets = document.querySelectorAll(".gsap-fade-in");
		if (fadeTargets.length > 0) {
			gsap.fromTo(fadeTargets, {
				opacity: 0,
				y: 12
			}, {
				opacity: 1,
				y: 0,
				duration: .4,
				ease: "power2.out",
				stagger: .04,
				overwrite: "auto"
			});
		}
		const barTargets = document.querySelectorAll(".gsap-bar");
		if (barTargets.length > 0) {
			gsap.fromTo(barTargets, {
				scaleY: 0,
				transformOrigin: "bottom"
			}, {
				scaleY: 1,
				duration: .7,
				ease: "back.out(1.2)",
				stagger: .02,
				delay: .1,
				overwrite: "auto"
			});
		}
		const progressBars = document.querySelectorAll(".gsap-progress-bar");
		if (progressBars.length > 0) {
			gsap.fromTo(progressBars, { width: "0%" }, {
				width: (i, el) => `${el.getAttribute("data-pct")}%`,
				duration: .8,
				ease: "power2.out",
				stagger: .03,
				delay: .05,
				overwrite: "auto"
			});
		}
	}, [
		tab,
		semContext,
		foundStudent
	]);
	// Ranks Precomputations
	const ranksSem1 = useMemo(() => {
		return [...STUDENTS].sort((a, b) => b.sem1.grand - a.sem1.grand).map((s, i) => ({
			rollNo: s.rollNo,
			rank: i + 1,
			grand: s.sem1.grand
		}));
	}, []);
	const ranksSem2 = useMemo(() => {
		const withSem2 = STUDENTS.filter((s) => s.sem2 !== null);
		const sorted = [...withSem2].sort((a, b) => b.sem2.grand - a.sem2.grand);
		return sorted.map((s, i) => ({
			rollNo: s.rollNo,
			rank: i + 1,
			grand: s.sem2.grand
		}));
	}, []);
	const ranksCumulative = useMemo(() => {
		const computed = STUDENTS.map((s) => {
			const sem1Sgpa = s.sem1.sgpa;
			const sem2Sgpa = s.sem2 ? s.sem2.sgpa : s.sem1.sgpa;
			const cgpa = s.sem2 ? parseFloat(((sem1Sgpa + sem2Sgpa) / 2).toFixed(2)) : sem1Sgpa;
			const totalGrand = s.sem1.grand + (s.sem2 ? s.sem2.grand : 0);
			return {
				rollNo: s.rollNo,
				cgpa,
				totalGrand
			};
		});
		// Sort primarily by CGPA, then by totalGrand
		const sorted = [...computed].sort((a, b) => {
			if (b.cgpa !== a.cgpa) return b.cgpa - a.cgpa;
			return b.totalGrand - a.totalGrand;
		});
		return sorted.map((s, i) => ({
			rollNo: s.rollNo,
			rank: i + 1,
			cgpa: s.cgpa
		}));
	}, []);
	// Helper to find ranks easily
	const studentRanks = useMemo(() => {
		const mapping = {};
		STUDENTS.forEach((s) => {
			const r1 = ranksSem1.find((r) => r.rollNo === s.rollNo)?.rank || "-";
			const r2 = ranksSem2.find((r) => r.rollNo === s.rollNo)?.rank || "-";
			const rc = ranksCumulative.find((r) => r.rollNo === s.rollNo)?.rank || "-";
			const cgpa = ranksCumulative.find((r) => r.rollNo === s.rollNo)?.cgpa || s.sem1.sgpa;
			mapping[s.rollNo] = {
				r1,
				r2,
				rc,
				cgpa
			};
		});
		return mapping;
	}, [
		ranksSem1,
		ranksSem2,
		ranksCumulative
	]);
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
		if (!scorecardRef.current || !foundStudent) return;
		toPng(scorecardRef.current, {
			cacheBust: true,
			scale: 2
		}).then((dataUrl) => {
			const link = document.createElement("a");
			link.download = `scorecard-${foundStudent.rollNo}.png`;
			link.href = dataUrl;
			link.click();
		}).catch((err) => {
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
			list = list.filter((s) => s.name.toLowerCase().includes(query) || s.rollNo.includes(query));
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
	}, [
		ledgerSearch,
		ledgerStatus,
		ledgerSort,
		semContext,
		studentRanks
	]);
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
	}, [
		semContext,
		topperSubject,
		studentRanks
	]);
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
			s1: {
				passed: s1Passed,
				avgSgpa: s1AvgSgpa,
				avgGrand: s1AvgGrand,
				highest: s1Highest
			},
			s2: {
				passed: s2Passed,
				avgSgpa: s2AvgSgpa,
				avgGrand: s2AvgGrand,
				highest: s2Highest
			},
			cum: {
				passed: bothPassed,
				avgCgpa,
				highest: highestCgpa
			}
		};
	}, [studentRanks]);
	// Subject Averages
	const subjectAverages = useMemo(() => {
		if (semContext === "1") {
			return SUBJECTS_SEM1.map((sub) => {
				const scores = STUDENTS.map((s) => s.sem1[sub.code]?.[2] || 0).filter(Boolean);
				const avg = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : "0";
				return {
					...sub,
					avg: parseFloat(avg)
				};
			});
		} else if (semContext === "2") {
			const withSem2 = STUDENTS.filter((s) => s.sem2 !== null);
			return SUBJECTS_SEM2.map((sub) => {
				const scores = withSem2.map((s) => s.sem2[sub.code]?.[2] || 0).filter(Boolean);
				const avg = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : "0";
				return {
					...sub,
					avg: parseFloat(avg)
				};
			});
		}
		return [];
	}, [semContext]);
	// Layout Paddings
	const px = isMobile ? 16 : 28;
	// Grade Distribution Counts
	const gradeDistribution = useMemo(() => {
		const dist = {
			1: [
				0,
				0,
				0,
				0,
				0,
				0
			],
			2: [
				0,
				0,
				0,
				0,
				0,
				0
			],
			cum: [
				0,
				0,
				0,
				0,
				0,
				0
			]
		};
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
	return /* @__PURE__ */ _jsxDEV("div", {
		style: {
			minHeight: "100vh",
			background: C.bg,
			color: C.text,
			display: "flex",
			flexDirection: "column",
			"--focus-border": C.gold,
			"--focus-ring": dark ? "rgba(94, 106, 210, 0.2)" : "rgba(94, 106, 210, 0.1)"
		},
		children: [
			/* @__PURE__ */ _jsxDEV("header", {
				style: {
					background: dark ? "rgba(1, 1, 2, 0.85)" : "rgba(250, 250, 251, 0.85)",
					borderBottom: `1px solid ${C.border}`,
					position: "sticky",
					top: 0,
					zIndex: 50,
					backdropFilter: "blur(12px)",
					WebkitBackdropFilter: "blur(12px)"
				},
				children: /* @__PURE__ */ _jsxDEV("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						padding: `12px ${px}px`,
						display: "flex",
						flexDirection: "column",
						gap: 12
					},
					children: [/* @__PURE__ */ _jsxDEV("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: 12
						},
						children: [/* @__PURE__ */ _jsxDEV("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 12
							},
							children: [/* @__PURE__ */ _jsxDEV("div", {
								style: {
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
								},
								children: "B"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 501,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "eyebrow",
								style: {
									fontSize: isMobile ? 8 : 9,
									color: C.dim,
									fontWeight: 600
								},
								children: "Jharkhand University of Technology"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 518,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("h1", {
								className: "heading-section",
								style: {
									fontSize: isMobile ? 14 : 17,
									fontWeight: 700,
									color: C.text,
									margin: "1px 0 0"
								},
								children: "BCA Academic Result Portal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 521,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 517,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 500,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 8
							},
							children: [(foundStudent || tab !== 0) && /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => {
									setFoundStudent(null);
									setRoll("");
									setName("");
									setSearchError("");
									setTab(0);
								},
								style: {
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
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.borderColor = C.borderHi;
									e.currentTarget.style.background = C.raised;
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.borderColor = C.border;
									e.currentTarget.style.background = C.surface;
								},
								title: "Search New Student",
								children: /* @__PURE__ */ _jsxDEV("svg", {
									width: "15",
									height: "15",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ _jsxDEV("circle", {
										cx: "11",
										cy: "11",
										r: "8"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 562,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("line", {
										x1: "21",
										y1: "21",
										x2: "16.65",
										y2: "16.65"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 563,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 561,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 530,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setDark((d) => !d),
								style: {
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
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.borderColor = C.borderHi;
									e.currentTarget.style.background = C.raised;
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.borderColor = C.border;
									e.currentTarget.style.background = C.surface;
								},
								title: dark ? "Light Mode" : "Dark Mode",
								children: dark ? /* @__PURE__ */ _jsxDEV("svg", {
									width: "15",
									height: "15",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.2",
									viewBox: "0 0 24 24",
									children: [/* @__PURE__ */ _jsxDEV("circle", {
										cx: "12",
										cy: "12",
										r: "5"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 593,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 593,
										columnNumber: 52
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 592,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV("svg", {
									width: "15",
									height: "15",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.2",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ _jsxDEV("path", { d: "M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 597,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 596,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 567,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 528,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 499,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						style: {
							display: "flex",
							flexDirection: isMobile ? "column" : "row",
							justifyContent: "space-between",
							alignItems: isMobile ? "stretch" : "center",
							gap: 10,
							borderTop: `1px solid ${C.border}`,
							paddingTop: 10
						},
						children: [/* @__PURE__ */ _jsxDEV("div", {
							style: {
								display: "inline-flex",
								background: C.surface,
								padding: 2,
								borderRadius: 8,
								border: `1px solid ${C.border}`,
								gap: 2
							},
							children: [
								{
									id: "1",
									label: "Semester 1"
								},
								{
									id: "2",
									label: "Semester 2"
								},
								{
									id: "cumulative",
									label: "Cumulative / Year 1"
								}
							].map((s) => /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => {
									setSemContext(s.id);
									setTopperSubject("grand");
								},
								style: {
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
								},
								children: s.label
							}, s.id, false, {
								fileName: _jsxFileName,
								lineNumber: 621,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 608,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							style: {
								display: "flex",
								gap: 2,
								overflowX: "auto",
								scrollbarWidth: "none"
							},
							children: [
								...foundStudent ? [{
									id: 0,
									label: "Report Card"
								}] : [],
								{
									id: 1,
									label: "Toppers"
								},
								{
									id: 2,
									label: "Class Analytics"
								},
								{
									id: 3,
									label: "Student Ledger"
								}
							].map((t) => /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setTab(t.id),
								style: {
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
								},
								children: [renderTabIcon(t.id, tab === t.id, C), t.label]
							}, t.id, true, {
								fileName: _jsxFileName,
								lineNumber: 654,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 647,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 605,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 497,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 488,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				style: {
					flex: 1,
					maxWidth: 1200,
					width: "100%",
					margin: "0 auto",
					padding: `24px ${px}px 80px`,
					boxSizing: "border-box"
				},
				children: [
					tab === 0 && /* @__PURE__ */ _jsxDEV("div", {
						style: {
							maxWidth: 1200,
							width: "100%",
							margin: "0 auto",
							display: "flex",
							flexDirection: "column",
							gap: 20
						},
						children: [/* @__PURE__ */ _jsxDEV("div", {
							style: {
								maxWidth: 800,
								width: "100%",
								margin: "0 auto"
							},
							children: /* @__PURE__ */ _jsxDEV(Card, {
								theme: C,
								className: "gsap-fade-in",
								children: /* @__PURE__ */ _jsxDEV("div", {
									style: { padding: isMobile ? 20 : 28 },
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											style: { marginBottom: 20 },
											children: [/* @__PURE__ */ _jsxDEV("h3", {
												style: {
													margin: 0,
													fontSize: 18,
													fontWeight: 700,
													color: C.text
												},
												children: "Lookup Academic Records"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 695,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("p", {
												style: {
													margin: "4px 0 0",
													fontSize: 13,
													color: C.muted
												},
												children: "Search results instantly using either university Roll Number or Student Name."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 696,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 694,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											style: {
												display: "grid",
												gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
												alignItems: "end",
												gap: 14
											},
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: { position: "relative" },
													children: [
														/* @__PURE__ */ _jsxDEV(Label, {
															theme: C,
															children: "University Roll No"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 701,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ _jsxDEV(Input, {
															theme: C,
															value: roll,
															onChange: (e) => setRoll(e.target.value),
															placeholder: "e.g. 24013590023",
															onKeyDown: (e) => e.key === "Enter" && handleSearch(),
															onFocus: () => setRollFocused(true),
															onBlur: () => setTimeout(() => setRollFocused(false), 200)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 702,
															columnNumber: 21
														}, this),
														rollFocused && rollSuggestions.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
															style: {
																position: "absolute",
																top: "100%",
																left: 0,
																right: 0,
																background: C.surface,
																border: `1px solid ${C.borderHi}`,
																borderRadius: 8,
																marginTop: 4,
																boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
																zIndex: 1e3,
																maxHeight: 250,
																overflowY: "auto",
																backdropFilter: "blur(12px)",
																WebkitBackdropFilter: "blur(12px)"
															},
															children: rollSuggestions.map((st) => {
																const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
																return /* @__PURE__ */ _jsxDEV("div", {
																	onMouseDown: () => selectSuggestedStudent(st, "roll"),
																	style: {
																		display: "flex",
																		alignItems: "center",
																		gap: 10,
																		padding: "8px 12px",
																		borderBottom: `1px solid ${C.border}`,
																		cursor: "pointer",
																		transition: "background 0.2s"
																	},
																	onMouseEnter: (e) => e.currentTarget.style.background = C.raised,
																	onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
																	children: [
																		/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				width: 28,
																				height: 28,
																				borderRadius: "50%",
																				overflow: "hidden",
																				background: C.raised,
																				border: `1px solid ${C.border}`,
																				flexShrink: 0
																			},
																			children: /* @__PURE__ */ _jsxDEV("img", {
																				src: getAvatarUrl(st),
																				alt: st.name,
																				style: {
																					width: "100%",
																					height: "100%",
																					objectFit: "cover"
																				}
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 755,
																				columnNumber: 33
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 746,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				flex: 1,
																				minWidth: 0,
																				textAlign: "left"
																			},
																			children: [/* @__PURE__ */ _jsxDEV("div", {
																				style: {
																					fontWeight: 700,
																					fontSize: 12,
																					color: C.text,
																					overflow: "hidden",
																					textOverflow: "ellipsis",
																					whiteSpace: "nowrap"
																				},
																				children: st.name
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 762,
																				columnNumber: 33
																			}, this), /* @__PURE__ */ _jsxDEV("div", {
																				style: {
																					fontSize: 10,
																					color: C.muted,
																					fontFamily: "monospace"
																				},
																				children: st.rollNo
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 765,
																				columnNumber: 33
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 761,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ _jsxDEV("span", {
																			style: {
																				fontSize: 8,
																				fontWeight: 800,
																				color: charClass.color,
																				border: `1px solid ${charClass.color}30`,
																				background: `${charClass.color}10`,
																				padding: "2px 6px",
																				borderRadius: 4,
																				textTransform: "uppercase",
																				flexShrink: 0
																			},
																			children: ["Lvl ", Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 769,
																			columnNumber: 31
																		}, this)
																	]
																}, st.rollNo, true, {
																	fileName: _jsxFileName,
																	lineNumber: 731,
																	columnNumber: 29
																}, this);
															})
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 712,
															columnNumber: 23
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 700,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														textAlign: "center",
														paddingBottom: 10,
														fontSize: 11,
														color: C.muted,
														fontWeight: 600,
														letterSpacing: 1
													},
													children: "OR"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 789,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: { position: "relative" },
													children: [
														/* @__PURE__ */ _jsxDEV(Label, {
															theme: C,
															children: "Student Name"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 794,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ _jsxDEV(Input, {
															theme: C,
															value: name,
															onChange: (e) => setName(e.target.value),
															placeholder: "e.g. Sumit Ghosh",
															onKeyDown: (e) => e.key === "Enter" && handleSearch(),
															onFocus: () => setNameFocused(true),
															onBlur: () => setTimeout(() => setNameFocused(false), 200)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 795,
															columnNumber: 21
														}, this),
														nameFocused && nameSuggestions.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
															style: {
																position: "absolute",
																top: "100%",
																left: 0,
																right: 0,
																background: C.surface,
																border: `1px solid ${C.borderHi}`,
																borderRadius: 8,
																marginTop: 4,
																boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)",
																zIndex: 1e3,
																maxHeight: 250,
																overflowY: "auto",
																backdropFilter: "blur(12px)",
																WebkitBackdropFilter: "blur(12px)"
															},
															children: nameSuggestions.map((st) => {
																const charClass = getCharacterClass(st.sem2 ? st.sem2.sgpa : st.sem1.sgpa);
																return /* @__PURE__ */ _jsxDEV("div", {
																	onMouseDown: () => selectSuggestedStudent(st, "name"),
																	style: {
																		display: "flex",
																		alignItems: "center",
																		gap: 10,
																		padding: "8px 12px",
																		borderBottom: `1px solid ${C.border}`,
																		cursor: "pointer",
																		transition: "background 0.2s"
																	},
																	onMouseEnter: (e) => e.currentTarget.style.background = C.raised,
																	onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
																	children: [
																		/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				width: 28,
																				height: 28,
																				borderRadius: "50%",
																				overflow: "hidden",
																				background: C.raised,
																				border: `1px solid ${C.border}`,
																				flexShrink: 0
																			},
																			children: /* @__PURE__ */ _jsxDEV("img", {
																				src: getAvatarUrl(st),
																				alt: st.name,
																				style: {
																					width: "100%",
																					height: "100%",
																					objectFit: "cover"
																				}
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 848,
																				columnNumber: 33
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 839,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				flex: 1,
																				minWidth: 0,
																				textAlign: "left"
																			},
																			children: [/* @__PURE__ */ _jsxDEV("div", {
																				style: {
																					fontWeight: 700,
																					fontSize: 12,
																					color: C.text,
																					overflow: "hidden",
																					textOverflow: "ellipsis",
																					whiteSpace: "nowrap"
																				},
																				children: st.name
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 855,
																				columnNumber: 33
																			}, this), /* @__PURE__ */ _jsxDEV("div", {
																				style: {
																					fontSize: 10,
																					color: C.muted,
																					fontFamily: "monospace"
																				},
																				children: st.rollNo
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 858,
																				columnNumber: 33
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 854,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ _jsxDEV("span", {
																			style: {
																				fontSize: 8,
																				fontWeight: 800,
																				color: charClass.color,
																				border: `1px solid ${charClass.color}30`,
																				background: `${charClass.color}10`,
																				padding: "2px 6px",
																				borderRadius: 4,
																				textTransform: "uppercase",
																				flexShrink: 0
																			},
																			children: ["Lvl ", Math.floor((st.sem2 ? st.sem2.sgpa : st.sem1.sgpa) * 10)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 862,
																			columnNumber: 31
																		}, this)
																	]
																}, st.rollNo, true, {
																	fileName: _jsxFileName,
																	lineNumber: 824,
																	columnNumber: 29
																}, this);
															})
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 805,
															columnNumber: 23
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 793,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 699,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											style: {
												marginTop: 20,
												display: "flex",
												justifyContent: "flex-end",
												gap: 10
											},
											children: [(roll || name) && /* @__PURE__ */ _jsxDEV(Button, {
												theme: C,
												variant: "outline",
												onClick: () => {
													setRoll("");
													setName("");
													setFoundStudent(null);
													setSearchError("");
												},
												children: "Clear"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 885,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV(Button, {
												theme: C,
												onClick: () => handleSearch(),
												children: "Search Student"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 898,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 883,
											columnNumber: 17
										}, this),
										searchError && /* @__PURE__ */ _jsxDEV("div", {
											style: {
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
											},
											children: [/* @__PURE__ */ _jsxDEV(WarningIcon, {
												color: C.red,
												size: 15,
												style: { marginRight: 8 }
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 917,
												columnNumber: 21
											}, this), searchError]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 904,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 693,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 692,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 691,
							columnNumber: 13
						}, this), foundStudent && /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: 16
							},
							className: "gsap-fade-in",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									style: {
										display: "flex",
										justifyContent: "flex-end"
									},
									children: /* @__PURE__ */ _jsxDEV(Button, {
										theme: C,
										onClick: () => handleDownloadScorecard(),
										children: [/* @__PURE__ */ _jsxDEV("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											style: { marginRight: 6 },
											children: [
												/* @__PURE__ */ _jsxDEV("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 934,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("polyline", { points: "7 10 12 15 17 10" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 935,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("line", {
													x1: "12",
													y1: "15",
													x2: "12",
													y2: "3"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 936,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 933,
											columnNumber: 21
										}, this), "Download Score Card"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 932,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 931,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									style: {
										background: C.surface,
										border: `1px solid ${C.border}`,
										borderRadius: 12,
										overflow: "hidden"
									},
									children: [/* @__PURE__ */ _jsxDEV("div", {
										style: {
											padding: "24px 28px",
											borderBottom: `1px solid ${C.border}`,
											display: "flex",
											flexDirection: isMobile ? "column" : "row",
											justifyContent: "space-between",
											alignItems: isMobile ? "flex-start" : "center",
											gap: 16
										},
										children: [/* @__PURE__ */ _jsxDEV("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: 16
											},
											children: [/* @__PURE__ */ _jsxDEV("div", {
												style: {
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
												},
												children: /* @__PURE__ */ _jsxDEV("img", {
													src: getAvatarUrl(foundStudent),
													alt: `${foundStudent.name}'s Avatar`,
													style: {
														width: "100%",
														height: "100%",
														objectFit: "cover"
													}
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 964,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 951,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: 8,
														flexWrap: "wrap"
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 11,
															fontWeight: 700,
															letterSpacing: 1.5,
															color: C.gold,
															textTransform: "uppercase"
														},
														children: "Student Grade Sheet"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 972,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV(Pill, {
														color: C.muted,
														children: "Session 2024–25"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 975,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 971,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("h2", {
													style: {
														margin: "6px 0 2px",
														fontSize: 24,
														fontWeight: 800,
														color: C.text,
														letterSpacing: "-0.01em"
													},
													children: foundStudent.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 977,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													style: {
														fontFamily: "monospace",
														fontSize: 13,
														color: C.muted
													},
													children: ["Roll No: ", foundStudent.rollNo]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 980,
													columnNumber: 25
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 970,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 950,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: isMobile ? 12 : 14,
												marginTop: isMobile ? 8 : 0,
												justifyContent: isMobile ? "space-between" : "flex-end",
												width: isMobile ? "100%" : "auto"
											},
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														textAlign: isMobile ? "left" : "right",
														flex: isMobile ? "1" : "none"
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 9,
															color: C.muted,
															fontWeight: 700,
															textTransform: "uppercase"
														},
														children: "Sem 1 Rank"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 996,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 20,
															fontWeight: 800,
															color: C.text
														},
														children: ["#", studentRanks[foundStudent.rollNo].r1]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 997,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 995,
													columnNumber: 23
												}, this),
												!isMobile && /* @__PURE__ */ _jsxDEV("div", { style: {
													width: 1,
													background: C.border
												} }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 999,
													columnNumber: 37
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														textAlign: isMobile ? "left" : "right",
														flex: isMobile ? "1" : "none"
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 9,
															color: C.muted,
															fontWeight: 700,
															textTransform: "uppercase"
														},
														children: "Sem 2 Rank"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1001,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 20,
															fontWeight: 800,
															color: foundStudent.sem2 ? C.text : C.dim
														},
														children: ["#", studentRanks[foundStudent.rollNo].r2]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1002,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1e3,
													columnNumber: 23
												}, this),
												!isMobile && /* @__PURE__ */ _jsxDEV("div", { style: {
													width: 1,
													background: C.border
												} }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1006,
													columnNumber: 37
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														textAlign: isMobile ? "left" : "right",
														flex: isMobile ? "1" : "none"
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 9,
															color: C.muted,
															fontWeight: 700,
															textTransform: "uppercase"
														},
														children: "Year 1 Rank"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1008,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 20,
															fontWeight: 800,
															color: C.gold
														},
														children: ["#", studentRanks[foundStudent.rollNo].rc]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1009,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1007,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 987,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 949,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										style: {
											display: "grid",
											gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
											background: C.border,
											gap: 1
										},
										children: [
											{
												label: "Semester 1 SGPA",
												val: foundStudent.sem1.sgpa,
												sub: "Pass",
												color: C.text
											},
											{
												label: "Semester 2 SGPA",
												val: foundStudent.sem2 ? foundStudent.sem2.sgpa : "N/A",
												sub: foundStudent.sem2 ? "Pass" : "Held / Missing",
												color: foundStudent.sem2 ? C.text : C.muted
											},
											{
												label: "Cumulative CGPA",
												val: studentRanks[foundStudent.rollNo].cgpa,
												sub: "Overall",
												color: C.gold
											},
											{
												label: "Combined Total",
												val: `${foundStudent.sem1.grand + (foundStudent.sem2 ? foundStudent.sem2.grand : 0)}`,
												sub: `/ ${foundStudent.sem2 ? 1600 : 800}`,
												color: C.text
											}
										].map((m, idx) => /* @__PURE__ */ _jsxDEV("div", {
											style: {
												background: C.surface,
												padding: 18,
												textAlign: "center"
											},
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 10,
														color: C.muted,
														fontWeight: 700,
														textTransform: "uppercase",
														letterSpacing: .5,
														marginBottom: 4
													},
													children: m.label
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1033,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 22,
														fontWeight: 800,
														color: m.color
													},
													children: m.val
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1036,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 11,
														color: C.muted,
														marginTop: 2
													},
													children: m.sub
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1039,
													columnNumber: 25
												}, this)
											]
										}, idx, true, {
											fileName: _jsxFileName,
											lineNumber: 1032,
											columnNumber: 23
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1015,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 943,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									style: {
										display: "grid",
										gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
										gap: 16,
										alignItems: "start"
									},
									children: [/* @__PURE__ */ _jsxDEV("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											gap: 16
										},
										children: [(semContext === "1" || semContext === "cumulative") && /* @__PURE__ */ _jsxDEV(Card, {
											theme: C,
											children: /* @__PURE__ */ _jsxDEV("div", {
												style: { padding: 24 },
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															display: "flex",
															justifyContent: "space-between",
															alignItems: "center",
															marginBottom: 14
														},
														children: [/* @__PURE__ */ _jsxDEV("h4", {
															style: {
																margin: 0,
																fontSize: 14,
																fontWeight: 700,
																color: C.text,
																textTransform: "uppercase",
																letterSpacing: .5
															},
															children: "Semester 1 Results Summary"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1060,
															columnNumber: 25
														}, this), /* @__PURE__ */ _jsxDEV(Pill, {
															color: foundStudent.sem1.result.includes("PASSED") ? C.green : C.gold,
															children: foundStudent.sem1.result
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1063,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1059,
														columnNumber: 23
													}, this),
													isMobile ? /* @__PURE__ */ _jsxDEV("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: 12
														},
														children: SUBJECTS_SEM1.map((sub) => {
															const scoreData = foundStudent.sem1[sub.code];
															if (!scoreData) return null;
															const [ext, sec, tot] = scoreData;
															const maxVal = sub.maxFin + sub.maxInt;
															const grade = getGrade(tot, maxVal);
															const gColor = gradeColor(grade);
															return /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	background: C.raised,
																	borderRadius: 8,
																	padding: 12,
																	border: `1px solid ${C.border}`
																},
																children: [/* @__PURE__ */ _jsxDEV("div", {
																	style: {
																		display: "flex",
																		justifyContent: "space-between",
																		alignItems: "flex-start",
																		gap: 10,
																		marginBottom: 8
																	},
																	children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
																		style: {
																			fontFamily: "monospace",
																			fontSize: 11,
																			fontWeight: 700,
																			color: C.gold
																		},
																		children: sub.code
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1083,
																		columnNumber: 37
																	}, this), /* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			fontWeight: 700,
																			color: C.text,
																			fontSize: 13,
																			marginTop: 2
																		},
																		children: sub.name
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1084,
																		columnNumber: 37
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 1082,
																		columnNumber: 35
																	}, this), /* @__PURE__ */ _jsxDEV("span", {
																		style: {
																			padding: "2px 6px",
																			borderRadius: 4,
																			fontSize: 10,
																			fontWeight: 800,
																			background: gColor + "15",
																			border: `1px solid ${gColor}35`,
																			color: gColor
																		},
																		children: grade
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1086,
																		columnNumber: 35
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1081,
																	columnNumber: 33
																}, this), /* @__PURE__ */ _jsxDEV("div", {
																	style: {
																		display: "grid",
																		gridTemplateColumns: "repeat(4, 1fr)",
																		gap: 6,
																		textAlign: "center",
																		fontSize: 11,
																		borderTop: `1px solid ${C.border}`,
																		paddingTop: 8,
																		marginTop: 4
																	},
																	children: [
																		/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.muted,
																				fontSize: 9,
																				fontWeight: 600
																			},
																			children: "CREDITS"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1100,
																			columnNumber: 37
																		}, this), /* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.text,
																				fontWeight: 600,
																				marginTop: 2
																			},
																			children: sub.credits
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1101,
																			columnNumber: 37
																		}, this)] }, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 1099,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.muted,
																				fontSize: 9,
																				fontWeight: 600
																			},
																			children: "EXTERNAL"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1104,
																			columnNumber: 37
																		}, this), /* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: ext === null ? C.red : C.text,
																				fontWeight: 600,
																				marginTop: 2
																			},
																			children: ext !== null ? ext : "Ab"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1105,
																			columnNumber: 37
																		}, this)] }, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 1103,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.muted,
																				fontSize: 9,
																				fontWeight: 600
																			},
																			children: "INTERNAL"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1110,
																			columnNumber: 37
																		}, this), /* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.text,
																				fontWeight: 600,
																				marginTop: 2
																			},
																			children: sec
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1111,
																			columnNumber: 37
																		}, this)] }, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 1109,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.muted,
																				fontSize: 9,
																				fontWeight: 600
																			},
																			children: "TOTAL"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1114,
																			columnNumber: 37
																		}, this), /* @__PURE__ */ _jsxDEV("div", {
																			style: {
																				color: C.text,
																				fontWeight: 700,
																				marginTop: 2
																			},
																			children: tot
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1115,
																			columnNumber: 37
																		}, this)] }, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 1113,
																			columnNumber: 35
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1098,
																	columnNumber: 33
																}, this)]
															}, sub.code, true, {
																fileName: _jsxFileName,
																lineNumber: 1080,
																columnNumber: 31
															}, this);
														})
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1070,
														columnNumber: 25
													}, this) : /* @__PURE__ */ _jsxDEV("div", {
														style: { overflowX: "auto" },
														children: /* @__PURE__ */ _jsxDEV("table", {
															style: {
																width: "100%",
																borderCollapse: "collapse",
																fontSize: 13
															},
															children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", {
																style: {
																	borderBottom: `1px solid ${C.border}`,
																	textAlign: "left"
																},
																children: [
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600
																		},
																		children: "Code"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1127,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600
																		},
																		children: "Subject Name"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1128,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600,
																			textAlign: "center"
																		},
																		children: "Credits"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1129,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600,
																			textAlign: "center"
																		},
																		children: "External (70/20)"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1130,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600,
																			textAlign: "center"
																		},
																		children: "Internal (30)"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1131,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600,
																			textAlign: "center"
																		},
																		children: "Total"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1132,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ _jsxDEV("th", {
																		style: {
																			padding: "8px 12px",
																			color: C.muted,
																			fontWeight: 600,
																			textAlign: "center"
																		},
																		children: "Grade"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1133,
																		columnNumber: 33
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1126,
																columnNumber: 31
															}, this) }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1125,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("tbody", { children: SUBJECTS_SEM1.map((sub) => {
																const scoreData = foundStudent.sem1[sub.code];
																if (!scoreData) return null;
																const [ext, sec, tot] = scoreData;
																const maxVal = sub.maxFin + sub.maxInt;
																const grade = getGrade(tot, maxVal);
																const gColor = gradeColor(grade);
																return /* @__PURE__ */ _jsxDEV("tr", {
																	style: { borderBottom: `1px solid ${C.border}` },
																	children: [
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				fontFamily: "monospace",
																				fontWeight: 600,
																				color: C.muted
																			},
																			children: sub.code
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1147,
																			columnNumber: 37
																		}, this),
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				color: C.text
																			},
																			children: sub.name
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1148,
																			columnNumber: 37
																		}, this),
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				textAlign: "center",
																				color: C.muted
																			},
																			children: sub.credits
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1149,
																			columnNumber: 37
																		}, this),
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				textAlign: "center",
																				color: ext === null ? C.red : C.text
																			},
																			children: ext !== null ? ext : "Absent"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1150,
																			columnNumber: 37
																		}, this),
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				textAlign: "center",
																				color: C.text
																			},
																			children: sec
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1153,
																			columnNumber: 37
																		}, this),
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				textAlign: "center",
																				fontWeight: 700,
																				color: C.text
																			},
																			children: tot
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1154,
																			columnNumber: 37
																		}, this),
																		/* @__PURE__ */ _jsxDEV("td", {
																			style: {
																				padding: "10px 12px",
																				textAlign: "center"
																			},
																			children: /* @__PURE__ */ _jsxDEV("span", {
																				style: {
																					padding: "2px 6px",
																					borderRadius: 4,
																					fontSize: 11,
																					fontWeight: 800,
																					background: gColor + "15",
																					border: `1px solid ${gColor}35`,
																					color: gColor
																				},
																				children: grade
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 1156,
																				columnNumber: 39
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1155,
																			columnNumber: 37
																		}, this)
																	]
																}, sub.code, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1146,
																	columnNumber: 35
																}, this);
															}) }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1136,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1124,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1123,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															display: "flex",
															justifyContent: "flex-end",
															gap: 20,
															marginTop: 14,
															fontSize: 12,
															color: C.muted,
															fontWeight: 500
														},
														children: [
															/* @__PURE__ */ _jsxDEV("div", { children: ["Theory: ", /* @__PURE__ */ _jsxDEV("strong", {
																style: { color: C.text },
																children: [foundStudent.sem1.theory, "/600"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1178,
																columnNumber: 38
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1178,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ _jsxDEV("div", { children: ["Practical: ", /* @__PURE__ */ _jsxDEV("strong", {
																style: { color: C.text },
																children: [foundStudent.sem1.practical, "/200"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1179,
																columnNumber: 41
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1179,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ _jsxDEV("div", { children: ["SGPA: ", /* @__PURE__ */ _jsxDEV("strong", {
																style: { color: C.gold },
																children: foundStudent.sem1.sgpa
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1180,
																columnNumber: 36
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1180,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1177,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1058,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1057,
											columnNumber: 19
										}, this), (semContext === "2" || semContext === "cumulative") && /* @__PURE__ */ _jsxDEV(Card, {
											theme: C,
											children: /* @__PURE__ */ _jsxDEV("div", {
												style: { padding: 24 },
												children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center",
														marginBottom: 14
													},
													children: [/* @__PURE__ */ _jsxDEV("h4", {
														style: {
															margin: 0,
															fontSize: 14,
															fontWeight: 700,
															color: C.text,
															textTransform: "uppercase",
															letterSpacing: .5
														},
														children: "Semester 2 Results Summary"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1191,
														columnNumber: 25
													}, this), foundStudent.sem2 ? /* @__PURE__ */ _jsxDEV(Pill, {
														color: foundStudent.sem2.result.includes("PASSED") ? C.green : C.gold,
														children: foundStudent.sem2.result
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1195,
														columnNumber: 27
													}, this) : /* @__PURE__ */ _jsxDEV(Pill, {
														color: C.red,
														children: "Held / No Records"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1199,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1190,
													columnNumber: 23
												}, this), foundStudent.sem2 ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [isMobile ? /* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														flexDirection: "column",
														gap: 12
													},
													children: SUBJECTS_SEM2.map((sub) => {
														const scoreData = foundStudent.sem2[sub.code];
														if (!scoreData) return null;
														const [ext, sec, tot] = scoreData;
														const maxVal = sub.maxFin + sub.maxInt;
														const grade = getGrade(tot, maxVal);
														const gColor = gradeColor(grade);
														return /* @__PURE__ */ _jsxDEV("div", {
															style: {
																background: C.raised,
																borderRadius: 8,
																padding: 12,
																border: `1px solid ${C.border}`
															},
															children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	display: "flex",
																	justifyContent: "space-between",
																	alignItems: "flex-start",
																	gap: 10,
																	marginBottom: 8
																},
																children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		fontFamily: "monospace",
																		fontSize: 11,
																		fontWeight: 700,
																		color: C.gold
																	},
																	children: sub.code
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1219,
																	columnNumber: 41
																}, this), /* @__PURE__ */ _jsxDEV("div", {
																	style: {
																		fontWeight: 700,
																		color: C.text,
																		fontSize: 13,
																		marginTop: 2
																	},
																	children: sub.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1220,
																	columnNumber: 41
																}, this)] }, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1218,
																	columnNumber: 39
																}, this), /* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		padding: "2px 6px",
																		borderRadius: 4,
																		fontSize: 10,
																		fontWeight: 800,
																		background: gColor + "15",
																		border: `1px solid ${gColor}35`,
																		color: gColor
																	},
																	children: grade
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1222,
																	columnNumber: 39
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1217,
																columnNumber: 37
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	display: "grid",
																	gridTemplateColumns: "repeat(4, 1fr)",
																	gap: 6,
																	textAlign: "center",
																	fontSize: 11,
																	borderTop: `1px solid ${C.border}`,
																	paddingTop: 8,
																	marginTop: 4
																},
																children: [
																	/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.muted,
																			fontSize: 9,
																			fontWeight: 600
																		},
																		children: "CREDITS"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1236,
																		columnNumber: 41
																	}, this), /* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.text,
																			fontWeight: 600,
																			marginTop: 2
																		},
																		children: sub.credits
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1237,
																		columnNumber: 41
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 1235,
																		columnNumber: 39
																	}, this),
																	/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.muted,
																			fontSize: 9,
																			fontWeight: 600
																		},
																		children: "EXTERNAL"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1240,
																		columnNumber: 41
																	}, this), /* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: ext === null ? C.red : C.text,
																			fontWeight: 600,
																			marginTop: 2
																		},
																		children: ext !== null ? ext : "Ab"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1241,
																		columnNumber: 41
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 1239,
																		columnNumber: 39
																	}, this),
																	/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.muted,
																			fontSize: 9,
																			fontWeight: 600
																		},
																		children: "INTERNAL"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1246,
																		columnNumber: 41
																	}, this), /* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.text,
																			fontWeight: 600,
																			marginTop: 2
																		},
																		children: sec
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1247,
																		columnNumber: 41
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 1245,
																		columnNumber: 39
																	}, this),
																	/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.muted,
																			fontSize: 9,
																			fontWeight: 600
																		},
																		children: "TOTAL"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1250,
																		columnNumber: 41
																	}, this), /* @__PURE__ */ _jsxDEV("div", {
																		style: {
																			color: C.text,
																			fontWeight: 700,
																			marginTop: 2
																		},
																		children: tot
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1251,
																		columnNumber: 41
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 1249,
																		columnNumber: 39
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1234,
																columnNumber: 37
															}, this)]
														}, sub.code, true, {
															fileName: _jsxFileName,
															lineNumber: 1216,
															columnNumber: 35
														}, this);
													})
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1206,
													columnNumber: 29
												}, this) : /* @__PURE__ */ _jsxDEV("div", {
													style: { overflowX: "auto" },
													children: /* @__PURE__ */ _jsxDEV("table", {
														style: {
															width: "100%",
															borderCollapse: "collapse",
															fontSize: 13
														},
														children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", {
															style: {
																borderBottom: `1px solid ${C.border}`,
																textAlign: "left"
															},
															children: [
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600
																	},
																	children: "Code"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1263,
																	columnNumber: 37
																}, this),
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600
																	},
																	children: "Subject Name"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1264,
																	columnNumber: 37
																}, this),
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600,
																		textAlign: "center"
																	},
																	children: "Credits"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1265,
																	columnNumber: 37
																}, this),
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600,
																		textAlign: "center"
																	},
																	children: "External (70/20)"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1266,
																	columnNumber: 37
																}, this),
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600,
																		textAlign: "center"
																	},
																	children: "Internal (30)"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1267,
																	columnNumber: 37
																}, this),
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600,
																		textAlign: "center"
																	},
																	children: "Total"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1268,
																	columnNumber: 37
																}, this),
																/* @__PURE__ */ _jsxDEV("th", {
																	style: {
																		padding: "8px 12px",
																		color: C.muted,
																		fontWeight: 600,
																		textAlign: "center"
																	},
																	children: "Grade"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1269,
																	columnNumber: 37
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1262,
															columnNumber: 35
														}, this) }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1261,
															columnNumber: 33
														}, this), /* @__PURE__ */ _jsxDEV("tbody", { children: SUBJECTS_SEM2.map((sub) => {
															const scoreData = foundStudent.sem2[sub.code];
															if (!scoreData) return null;
															const [ext, sec, tot] = scoreData;
															const maxVal = sub.maxFin + sub.maxInt;
															const grade = getGrade(tot, maxVal);
															const gColor = gradeColor(grade);
															return /* @__PURE__ */ _jsxDEV("tr", {
																style: { borderBottom: `1px solid ${C.border}` },
																children: [
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			fontFamily: "monospace",
																			fontWeight: 600,
																			color: C.muted
																		},
																		children: sub.code
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1283,
																		columnNumber: 41
																	}, this),
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			color: C.text
																		},
																		children: sub.name
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1284,
																		columnNumber: 41
																	}, this),
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			textAlign: "center",
																			color: C.muted
																		},
																		children: sub.credits
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1285,
																		columnNumber: 41
																	}, this),
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			textAlign: "center",
																			color: ext === null ? C.red : C.text
																		},
																		children: ext !== null ? ext : "Absent"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1286,
																		columnNumber: 41
																	}, this),
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			textAlign: "center",
																			color: C.text
																		},
																		children: sec
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1289,
																		columnNumber: 41
																	}, this),
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			textAlign: "center",
																			fontWeight: 700,
																			color: C.text
																		},
																		children: tot
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1290,
																		columnNumber: 41
																	}, this),
																	/* @__PURE__ */ _jsxDEV("td", {
																		style: {
																			padding: "10px 12px",
																			textAlign: "center"
																		},
																		children: /* @__PURE__ */ _jsxDEV("span", {
																			style: {
																				padding: "2px 6px",
																				borderRadius: 4,
																				fontSize: 11,
																				fontWeight: 800,
																				background: gColor + "15",
																				border: `1px solid ${gColor}35`,
																				color: gColor
																			},
																			children: grade
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1292,
																			columnNumber: 43
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1291,
																		columnNumber: 41
																	}, this)
																]
															}, sub.code, true, {
																fileName: _jsxFileName,
																lineNumber: 1282,
																columnNumber: 39
															}, this);
														}) }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1272,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1260,
														columnNumber: 31
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1259,
													columnNumber: 29
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "flex-end",
														gap: 20,
														marginTop: 14,
														fontSize: 12,
														color: C.muted,
														fontWeight: 500
													},
													children: [
														/* @__PURE__ */ _jsxDEV("div", { children: ["Theory: ", /* @__PURE__ */ _jsxDEV("strong", {
															style: { color: C.text },
															children: [foundStudent.sem2.theory, "/600"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1314,
															columnNumber: 42
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1314,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ _jsxDEV("div", { children: ["Practical: ", /* @__PURE__ */ _jsxDEV("strong", {
															style: { color: C.text },
															children: [foundStudent.sem2.practical, "/200"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1315,
															columnNumber: 45
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1315,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ _jsxDEV("div", { children: ["SGPA: ", /* @__PURE__ */ _jsxDEV("strong", {
															style: { color: C.gold },
															children: foundStudent.sem2.sgpa
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1316,
															columnNumber: 40
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1316,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1313,
													columnNumber: 27
												}, this)] }, void 0, true) : /* @__PURE__ */ _jsxDEV("div", {
													style: {
														padding: "30px 16px",
														textAlign: "center",
														color: C.muted,
														fontSize: 14,
														background: C.raised,
														border: `1px dashed ${C.border}`,
														borderRadius: 8
													},
													children: "Semester 2 results have not been declared/provided for this student yet."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1320,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1189,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1188,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1055,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV(RadarChart, {
										student: foundStudent,
										semContext,
										theme: C,
										isMobile
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1338,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1048,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 928,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							style: {
								position: "absolute",
								left: "-9999px",
								top: "-9999px"
							},
							children: /* @__PURE__ */ _jsxDEV("div", {
								ref: scorecardRef,
								style: {
									width: 900,
									height: 580,
									background: "#010102",
									position: "relative",
									overflow: "hidden",
									fontFamily: "system-ui, -apple-system, sans-serif"
								},
								children: [
									/* @__PURE__ */ _jsxDEV("div", { style: {
										width: 500,
										height: 500,
										borderRadius: "50%",
										background: "rgba(94, 106, 210, 0.12)",
										filter: "blur(80px)",
										top: "-150px",
										left: "200px",
										position: "absolute"
									} }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1357,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { style: {
										width: 300,
										height: 300,
										borderRadius: "50%",
										background: "rgba(39, 166, 68, 0.06)",
										filter: "blur(60px)",
										bottom: "-80px",
										right: "-80px",
										position: "absolute"
									} }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1358,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										style: {
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
										},
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center"
												},
												children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 8,
														fontWeight: 600,
														letterSpacing: 1.5,
														color: "rgba(255, 255, 255, 0.4)",
														textTransform: "uppercase"
													},
													children: "Jharkhand University of Technology"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1380,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 14,
														fontWeight: 800,
														color: "#ffffff",
														marginTop: 2,
														letterSpacing: .5
													},
													children: "BCA RESULT PORTAL"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1381,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1379,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: { textAlign: "right" },
													children: /* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 9,
															fontWeight: 700,
															color: "#828fff",
															border: "1px solid rgba(94, 106, 210, 0.3)",
															background: "rgba(94, 106, 210, 0.1)",
															padding: "4px 10px",
															borderRadius: 20,
															letterSpacing: .5
														},
														children: "OFFICIAL REPORT"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1384,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1383,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1378,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													justifyContent: "space-between",
													alignItems: "flex-end",
													marginTop: 14
												},
												children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: 14
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
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
														},
														children: /* @__PURE__ */ _jsxDEV("img", {
															src: getAvatarUrl(foundStudent),
															alt: `${foundStudent.name}'s Avatar`,
															crossOrigin: "anonymous",
															style: {
																width: "100%",
																height: "100%",
																objectFit: "cover"
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1415,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1403,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
														/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 9,
																fontWeight: 600,
																color: "rgba(255, 255, 255, 0.4)",
																textTransform: "uppercase",
																letterSpacing: 1
															},
															children: "Student Profile"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1423,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 24,
																fontWeight: 800,
																color: "#ffffff",
																marginTop: 2
															},
															children: foundStudent.name
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1424,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ _jsxDEV("div", {
															style: {
																display: "flex",
																alignItems: "center",
																gap: 8,
																marginTop: 4
															},
															children: [/* @__PURE__ */ _jsxDEV("span", {
																style: {
																	fontSize: 11,
																	fontFamily: "monospace",
																	color: "rgba(255, 255, 255, 0.6)"
																},
																children: ["ROLL NO: ", /* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		color: "#828fff",
																		fontWeight: 600
																	},
																	children: foundStudent.rollNo
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1427,
																	columnNumber: 40
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1426,
																columnNumber: 29
															}, this), downloadClass && /* @__PURE__ */ _jsxDEV("span", {
																style: {
																	fontSize: 9,
																	fontWeight: 800,
																	color: downloadClass.color,
																	border: `1px solid ${downloadClass.color}40`,
																	background: `${downloadClass.color}15`,
																	padding: "2px 6px",
																	borderRadius: 4,
																	textTransform: "uppercase"
																},
																children: /* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		display: "inline-flex",
																		alignItems: "center",
																		gap: 4
																	},
																	children: [/* @__PURE__ */ _jsxDEV(ClassIcon, {
																		classTitle: downloadClass.title,
																		color: downloadClass.color,
																		size: 9
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1441,
																		columnNumber: 35
																	}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
																		downloadClass.title,
																		" (",
																		downloadCp,
																		" CP)"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 1442,
																		columnNumber: 35
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1440,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1430,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1425,
															columnNumber: 27
														}, this)
													] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1422,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1401,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														gap: 10
													},
													children: [
														/* @__PURE__ */ _jsxDEV("div", {
															style: {
																background: "rgba(255, 255, 255, 0.03)",
																border: "1px solid rgba(255, 255, 255, 0.08)",
																borderRadius: 8,
																padding: "6px 12px",
																textAlign: "center"
															},
															children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Sem 1 Rank"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1453,
																columnNumber: 27
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 13,
																	fontWeight: 800,
																	color: "#ffffff",
																	marginTop: 2
																},
																children: ["#", studentRanks[foundStudent.rollNo].r1]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1454,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1452,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ _jsxDEV("div", {
															style: {
																background: "rgba(255, 255, 255, 0.03)",
																border: "1px solid rgba(255, 255, 255, 0.08)",
																borderRadius: 8,
																padding: "6px 12px",
																textAlign: "center"
															},
															children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Sem 2 Rank"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1457,
																columnNumber: 27
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 13,
																	fontWeight: 800,
																	color: foundStudent.sem2 ? "#ffffff" : "rgba(255,255,255,0.2)",
																	marginTop: 2
																},
																children: foundStudent.sem2 ? `#${studentRanks[foundStudent.rollNo].r2}` : "N/A"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1458,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1456,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ _jsxDEV("div", {
															style: {
																background: "rgba(255, 255, 255, 0.03)",
																border: "1px solid rgba(255, 255, 255, 0.08)",
																borderRadius: 8,
																padding: "6px 12px",
																textAlign: "center"
															},
															children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Year 1 Rank"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1463,
																columnNumber: 27
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 13,
																	fontWeight: 800,
																	color: C.gold,
																	marginTop: 2
																},
																children: ["#", studentRanks[foundStudent.rollNo].rc]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1464,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1462,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1451,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1400,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													gap: 24,
													marginTop: 18,
													flex: 1,
													alignItems: "stretch"
												},
												children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														flex: 1,
														background: "rgba(255, 255, 255, 0.015)",
														border: "1px solid rgba(255, 255, 255, 0.05)",
														borderRadius: 10,
														padding: 16,
														display: "flex",
														flexDirection: "column",
														justifyContent: "space-between"
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															display: "grid",
															gridTemplateColumns: "1fr 1fr",
															gap: 12
														},
														children: [
															/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Sem 1 SGPA"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1484,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 16,
																	fontWeight: 800,
																	color: "#ffffff",
																	marginTop: 2
																},
																children: foundStudent.sem1.sgpa
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1485,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1483,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Sem 2 SGPA"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1488,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 16,
																	fontWeight: 800,
																	color: foundStudent.sem2 ? "#ffffff" : "rgba(255,255,255,0.2)",
																	marginTop: 2
																},
																children: foundStudent.sem2 ? foundStudent.sem2.sgpa : "N/A"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1489,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1487,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Cumulative CGPA"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1494,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 16,
																	fontWeight: 800,
																	color: C.gold,
																	marginTop: 2
																},
																children: studentRanks[foundStudent.rollNo].cgpa
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1495,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1493,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 8,
																	color: "rgba(255, 255, 255, 0.4)",
																	textTransform: "uppercase",
																	fontWeight: 700
																},
																children: "Year 1 Result"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1498,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	fontSize: 13,
																	fontWeight: 700,
																	color: C.green,
																	marginTop: 2
																},
																children: "PASSED"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1499,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1497,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1482,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															borderTop: "1px solid rgba(255, 255, 255, 0.08)",
															paddingTop: 8,
															marginTop: 8,
															fontSize: 10,
															color: "rgba(255, 255, 255, 0.5)"
														},
														children: [
															"Total Marks: ",
															/* @__PURE__ */ _jsxDEV("strong", {
																style: { color: "#ffffff" },
																children: foundStudent.sem1.grand + (foundStudent.sem2 ? foundStudent.sem2.grand : 0)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1504,
																columnNumber: 40
															}, this),
															" / ",
															foundStudent.sem2 ? 1600 : 800
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1503,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1472,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														flex: 1.3,
														background: "rgba(255, 255, 255, 0.015)",
														border: "1px solid rgba(255, 255, 255, 0.05)",
														borderRadius: 10,
														padding: 14,
														display: "flex",
														flexDirection: "column",
														justifyContent: "space-between"
													},
													children: /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 8,
															color: "rgba(255, 255, 255, 0.4)",
															textTransform: "uppercase",
															fontWeight: 700,
															marginBottom: 6,
															letterSpacing: .5
														},
														children: "Subject Grades Summary"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1520,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															display: "grid",
															gridTemplateColumns: "1fr 1fr",
															gap: "4px 12px"
														},
														children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 7,
																color: "#828fff",
																fontWeight: 700,
																marginBottom: 2,
																textTransform: "uppercase"
															},
															children: "Semester 1"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1524,
															columnNumber: 31
														}, this), SUBJECTS_SEM1.map((s) => {
															const mark = foundStudent.sem1[s.code];
															if (!mark) return null;
															const maxVal = s.maxFin + s.maxInt;
															const grade = getGrade(mark[2], maxVal);
															return /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	display: "flex",
																	justifyContent: "space-between",
																	fontSize: 9,
																	color: "rgba(255,255,255,0.7)",
																	padding: "1px 0"
																},
																children: [/* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		textOverflow: "ellipsis",
																		overflow: "hidden",
																		whiteSpace: "nowrap",
																		maxWidth: 90
																	},
																	children: s.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1532,
																	columnNumber: 37
																}, this), /* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		fontWeight: 800,
																		color: gradeColor(grade)
																	},
																	children: grade
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1533,
																	columnNumber: 37
																}, this)]
															}, s.code, true, {
																fileName: _jsxFileName,
																lineNumber: 1531,
																columnNumber: 35
															}, this);
														})] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1523,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 7,
																color: "#828fff",
																fontWeight: 700,
																marginBottom: 2,
																textTransform: "uppercase"
															},
															children: "Semester 2"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1541,
															columnNumber: 31
														}, this), foundStudent.sem2 ? SUBJECTS_SEM2.map((s) => {
															const mark = foundStudent.sem2[s.code];
															if (!mark) return null;
															const maxVal = s.maxFin + s.maxInt;
															const grade = getGrade(mark[2], maxVal);
															return /* @__PURE__ */ _jsxDEV("div", {
																style: {
																	display: "flex",
																	justifyContent: "space-between",
																	fontSize: 9,
																	color: "rgba(255,255,255,0.7)",
																	padding: "1px 0"
																},
																children: [/* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		textOverflow: "ellipsis",
																		overflow: "hidden",
																		whiteSpace: "nowrap",
																		maxWidth: 90
																	},
																	children: s.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1550,
																	columnNumber: 39
																}, this), /* @__PURE__ */ _jsxDEV("span", {
																	style: {
																		fontWeight: 800,
																		color: gradeColor(grade)
																	},
																	children: grade
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1551,
																	columnNumber: 39
																}, this)]
															}, s.code, true, {
																fileName: _jsxFileName,
																lineNumber: 1549,
																columnNumber: 37
															}, this);
														}) : /* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 8,
																color: "rgba(255,255,255,0.2)",
																fontStyle: "italic",
																marginTop: 4
															},
															children: "Semester 2 results held."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1556,
															columnNumber: 33
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1540,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1521,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1519,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1509,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1470,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													justifyContent: "space-between",
													alignItems: "flex-end",
													marginTop: 18,
													borderTop: "1px solid rgba(255, 255, 255, 0.08)",
													paddingTop: 12
												},
												children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 8,
														color: "rgba(255, 255, 255, 0.3)",
														maxWidth: 320,
														lineHeight: 1.3
													},
													children: "* This score card is digitally generated by the JUT BCA department system. Verify authenticity using this Roll Number on the portal."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1566,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														gap: 32
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															textAlign: "center",
															position: "relative"
														},
														children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																position: "absolute",
																top: -16,
																left: 10,
																width: 80,
																height: 20,
																pointerEvents: "none"
															},
															children: /* @__PURE__ */ _jsxDEV("svg", {
																width: "80",
																height: "20",
																viewBox: "0 0 100 40",
																fill: "none",
																stroke: "#828fff",
																strokeWidth: "2.5",
																strokeLinecap: "round",
																style: { opacity: .75 },
																children: /* @__PURE__ */ _jsxDEV("path", { d: "M10,25 Q30,5 45,22 T70,10 T95,20" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1576,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1575,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1574,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 8,
																fontWeight: 700,
																color: "#ffffff",
																borderTop: "1px solid rgba(255, 255, 255, 0.15)",
																paddingTop: 3,
																width: 80,
																textTransform: "uppercase",
																letterSpacing: .5
															},
															children: "Controller"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1579,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1573,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															textAlign: "center",
															position: "relative"
														},
														children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																position: "absolute",
																top: -16,
																left: 10,
																width: 80,
																height: 20,
																pointerEvents: "none"
															},
															children: /* @__PURE__ */ _jsxDEV("svg", {
																width: "80",
																height: "20",
																viewBox: "0 0 100 40",
																fill: "none",
																stroke: "#27a644",
																strokeWidth: "2.5",
																strokeLinecap: "round",
																style: { opacity: .75 },
																children: /* @__PURE__ */ _jsxDEV("path", { d: "M5,25 C15,10 25,5 40,25 C50,35 60,10 75,25 C85,35 90,20 95,20" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1586,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1585,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1584,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 8,
																fontWeight: 700,
																color: "#ffffff",
																borderTop: "1px solid rgba(255, 255, 255, 0.15)",
																paddingTop: 3,
																width: 80,
																textTransform: "uppercase",
																letterSpacing: .5
															},
															children: "Verified"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1589,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1583,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1572,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1565,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1361,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1345,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1344,
							columnNumber: 15
						}, this)] }, void 0, true)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 688,
						columnNumber: 11
					}, this),
					tab === 1 && /* @__PURE__ */ _jsxDEV("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 24
						},
						className: "gsap-fade-in",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "space-between",
									alignItems: "center",
									gap: 14
								},
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
									style: {
										margin: 0,
										fontSize: 18,
										fontWeight: 700,
										color: C.text
									},
									children: "Academic Toppers"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1611,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									style: {
										margin: "4px 0 0",
										fontSize: 13,
										color: C.muted
									},
									children: "Browse the outstanding students of the class by overall and subject-wise lists."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1612,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1610,
									columnNumber: 15
								}, this), semContext !== "cumulative" && /* @__PURE__ */ _jsxDEV("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 8
									},
									children: [/* @__PURE__ */ _jsxDEV(Label, {
										theme: C,
										style: { marginBottom: 0 },
										children: "Subject Filters:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1618,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV(Select, {
										theme: C,
										value: topperSubject,
										onChange: (e) => setTopperSubject(e.target.value),
										children: [/* @__PURE__ */ _jsxDEV("option", {
											value: "grand",
											children: "Overall Grand Total"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1624,
											columnNumber: 21
										}, this), semContext === "1" ? SUBJECTS_SEM1.map((s) => /* @__PURE__ */ _jsxDEV("option", {
											value: s.code,
											children: [
												s.name,
												" (",
												s.code,
												")"
											]
										}, s.code, true, {
											fileName: _jsxFileName,
											lineNumber: 1626,
											columnNumber: 50
										}, this)) : SUBJECTS_SEM2.map((s) => /* @__PURE__ */ _jsxDEV("option", {
											value: s.code,
											children: [
												s.name,
												" (",
												s.code,
												")"
											]
										}, s.code, true, {
											fileName: _jsxFileName,
											lineNumber: 1627,
											columnNumber: 50
										}, this))]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1619,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1617,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1609,
								columnNumber: 13
							}, this),
							!isMobile && toppersList.length >= 3 && topperSubject === "grand" && /* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "flex",
									justifyContent: "center",
									alignItems: "flex-end",
									gap: 16,
									padding: "20px 0 40px",
									borderBottom: `1px solid ${C.border}`
								},
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										onClick: () => viewStudent(toppersList[1]),
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											cursor: "pointer"
										},
										title: `View ${toppersList[1].name}'s Profile`,
										children: [/* @__PURE__ */ _jsxDEV("div", {
											style: {
												textAlign: "center",
												marginBottom: 12
											},
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "center"
													},
													children: /* @__PURE__ */ _jsxDEV("div", {
														style: {
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
														},
														children: "2"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1652,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1651,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 13,
														fontWeight: 700,
														color: C.text,
														maxWidth: 150,
														overflow: "hidden",
														textOverflow: "ellipsis",
														whiteSpace: "nowrap"
													},
													children: toppersList[1].name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1669,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 10,
														color: C.muted,
														fontFamily: "monospace"
													},
													children: toppersList[1].rollNo
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1672,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1650,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
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
											},
											children: [/* @__PURE__ */ _jsxDEV("div", {
												style: {
													fontSize: 28,
													fontWeight: 800,
													color: C.text
												},
												children: semContext === "1" ? toppersList[1].sem1.grand : semContext === "2" ? toppersList[1].sem2.grand : toppersList[1].cgpa
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1686,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												style: {
													fontSize: 11,
													color: C.muted
												},
												children: semContext === "cumulative" ? "CGPA" : "/ 800 Marks"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1689,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1674,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1645,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										onClick: () => viewStudent(toppersList[0]),
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											cursor: "pointer"
										},
										title: `View ${toppersList[0].name}'s Profile`,
										children: [/* @__PURE__ */ _jsxDEV("div", {
											style: {
												textAlign: "center",
												marginBottom: 12
											},
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "center"
													},
													children: /* @__PURE__ */ _jsxDEV("div", {
														style: {
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
														},
														children: "1"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1703,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1702,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 15,
														fontWeight: 800,
														color: C.text,
														maxWidth: 180,
														overflow: "hidden",
														textOverflow: "ellipsis",
														whiteSpace: "nowrap"
													},
													children: toppersList[0].name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1721,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 11,
														color: C.muted,
														fontFamily: "monospace"
													},
													children: toppersList[0].rollNo
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1724,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1701,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
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
											},
											children: [/* @__PURE__ */ _jsxDEV("div", {
												style: {
													fontSize: 36,
													fontWeight: 900,
													color: C.gold
												},
												children: semContext === "1" ? toppersList[0].sem1.grand : semContext === "2" ? toppersList[0].sem2.grand : toppersList[0].cgpa
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1739,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												style: {
													fontSize: 12,
													color: C.muted,
													fontWeight: 600
												},
												children: semContext === "cumulative" ? "CGPA" : "/ 800 Marks"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1742,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1726,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1696,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										onClick: () => viewStudent(toppersList[2]),
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											cursor: "pointer"
										},
										title: `View ${toppersList[2].name}'s Profile`,
										children: [/* @__PURE__ */ _jsxDEV("div", {
											style: {
												textAlign: "center",
												marginBottom: 12
											},
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "center"
													},
													children: /* @__PURE__ */ _jsxDEV("div", {
														style: {
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
														},
														children: "3"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1756,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1755,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 13,
														fontWeight: 700,
														color: C.text,
														maxWidth: 150,
														overflow: "hidden",
														textOverflow: "ellipsis",
														whiteSpace: "nowrap"
													},
													children: toppersList[2].name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1773,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														fontSize: 10,
														color: C.muted,
														fontFamily: "monospace"
													},
													children: toppersList[2].rollNo
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1776,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1754,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
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
											},
											children: [/* @__PURE__ */ _jsxDEV("div", {
												style: {
													fontSize: 26,
													fontWeight: 800,
													color: C.text
												},
												children: semContext === "1" ? toppersList[2].sem1.grand : semContext === "2" ? toppersList[2].sem2.grand : toppersList[2].cgpa
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1790,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												style: {
													fontSize: 11,
													color: C.muted
												},
												children: semContext === "cumulative" ? "CGPA" : "/ 800 Marks"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1793,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1778,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1749,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1636,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 10
								},
								children: [/* @__PURE__ */ _jsxDEV(Label, {
									theme: C,
									children: "Toppers Ledger"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1803,
									columnNumber: 15
								}, this), toppersList.map((st, idx) => {
									let score;
									let max;
									if (topperSubject === "grand") {
										score = semContext === "1" ? st.sem1.grand : semContext === "2" ? st.sem2.grand : st.cgpa;
										max = semContext === "cumulative" ? 10 : 800;
									} else {
										score = semContext === "1" ? st.sem1[topperSubject]?.[2] || 0 : st.sem2[topperSubject]?.[2] || 0;
										max = 100;
									}
									return /* @__PURE__ */ _jsxDEV(Card, {
										theme: C,
										onClick: () => viewStudent(st),
										style: {
											cursor: "pointer",
											transition: "border-color 0.2s"
										},
										title: `View ${st.name}'s Profile`,
										children: /* @__PURE__ */ _jsxDEV("div", {
											style: {
												padding: "14px 20px",
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												gap: 14
											},
											children: [/* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: 14
												},
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															width: 28,
															height: 28,
															display: "flex",
															alignItems: "center",
															justifyContent: "center"
														},
														children: idx < 3 ? /* @__PURE__ */ _jsxDEV("div", {
															style: {
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
															},
															children: idx + 1
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1833,
															columnNumber: 29
														}, this) : /* @__PURE__ */ _jsxDEV("span", {
															style: {
																fontSize: 12,
																fontWeight: "600",
																color: C.muted
															},
															children: ["#", idx + 1]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1849,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1825,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
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
														},
														children: /* @__PURE__ */ _jsxDEV("img", {
															src: getAvatarUrl(st),
															alt: `${st.name}'s Avatar`,
															style: {
																width: "100%",
																height: "100%",
																objectFit: "cover"
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1868,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1856,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontWeight: 700,
															color: C.text
														},
														children: st.name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1876,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 11,
															color: C.muted,
															fontFamily: "monospace",
															marginTop: 1
														},
														children: st.rollNo
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1881,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1875,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1824,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: 20
												},
												children: [/* @__PURE__ */ _jsxDEV("div", {
													style: { textAlign: "right" },
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 18,
															fontWeight: 800,
															color: idx === 0 ? C.gold : C.text
														},
														children: score
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1887,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 12,
															color: C.muted
														},
														children: ["/", max]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1890,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1886,
													columnNumber: 25
												}, this), !isMobile && /* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														gap: 8
													},
													children: /* @__PURE__ */ _jsxDEV(Pill, {
														color: C.gold,
														children: ["SGPA/CGPA: ", semContext === "1" ? st.sem1.sgpa : semContext === "2" ? st.sem2.sgpa : st.cgpa]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1895,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1894,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1885,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1823,
											columnNumber: 21
										}, this)
									}, st.rollNo, false, {
										fileName: _jsxFileName,
										lineNumber: 1816,
										columnNumber: 19
									}, this);
								})]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1802,
								columnNumber: 13
							}, this),
							semContext !== "cumulative" && /* @__PURE__ */ _jsxDEV("div", {
								style: { marginTop: 16 },
								children: /* @__PURE__ */ _jsxDEV(Card, {
									theme: C,
									children: /* @__PURE__ */ _jsxDEV("div", {
										style: { padding: 24 },
										children: [/* @__PURE__ */ _jsxDEV("h4", {
											style: {
												margin: "0 0 16px",
												fontSize: 14,
												fontWeight: 700,
												color: C.text,
												textTransform: "uppercase",
												letterSpacing: .5
											},
											children: "Subject Average Scores (Class-wide)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1912,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
												display: "flex",
												flexDirection: "column",
												gap: 14
											},
											children: subjectAverages.map((sub, idx) => {
												const colors = dark ? [
													"#c084fc",
													"#a78bfa",
													"#818cf8",
													"#6366f1",
													"#4f46e5",
													"#f472b6",
													"#fb7185",
													"#38bdf8",
													"#2dd4bf"
												] : [
													"#7c3aed",
													"#8b5cf6",
													"#4f46e5",
													"#2563eb",
													"#1d4ed8",
													"#db2777",
													"#e11d48",
													"#0284c7",
													"#0d9488"
												];
												const c = colors[idx % colors.length];
												const maxVal = sub.maxFin + sub.maxInt;
												const pct = (sub.avg / maxVal * 100).toFixed(0);
												return /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														fontSize: 12,
														marginBottom: 5
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: {
															color: C.text,
															fontWeight: 500
														},
														children: [
															sub.name,
															" ",
															/* @__PURE__ */ _jsxDEV("span", {
																style: {
																	color: C.muted,
																	fontFamily: "monospace",
																	fontSize: 10
																},
																children: [
																	"(",
																	sub.code,
																	")"
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1946,
																columnNumber: 44
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1945,
														columnNumber: 31
													}, this), /* @__PURE__ */ _jsxDEV("strong", {
														style: { color: c },
														children: [
															sub.avg,
															" / ",
															maxVal,
															" (",
															pct,
															"%)"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1948,
														columnNumber: 31
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1944,
													columnNumber: 29
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														height: 6,
														background: C.raised,
														borderRadius: 99,
														overflow: "hidden"
													},
													children: /* @__PURE__ */ _jsxDEV("div", {
														className: "gsap-progress-bar",
														"data-pct": pct,
														style: {
															width: "0%",
															height: "100%",
															background: c,
															borderRadius: 99
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1951,
														columnNumber: 31
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1950,
													columnNumber: 29
												}, this)] }, sub.code, true, {
													fileName: _jsxFileName,
													lineNumber: 1943,
													columnNumber: 27
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1915,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1911,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1910,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1909,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1606,
						columnNumber: 11
					}, this),
					tab === 2 && /* @__PURE__ */ _jsxDEV("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 24
						},
						className: "gsap-fade-in",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								style: {
									margin: 0,
									fontSize: 18,
									fontWeight: 700,
									color: C.text
								},
								children: "Cohort Analytics"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1970,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								style: {
									margin: "4px 0 0",
									fontSize: 13,
									color: C.muted
								},
								children: "Detailed comparative report showing class-wide performance between Semesters 1 and 2."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1971,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1969,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "grid",
									gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
									gap: 16
								},
								children: [
									/* @__PURE__ */ _jsxDEV(Card, {
										theme: C,
										children: /* @__PURE__ */ _jsxDEV("div", {
											style: { padding: 20 },
											children: [
												/* @__PURE__ */ _jsxDEV(Label, {
													theme: C,
													children: "Pass Percentage"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1980,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														alignItems: "baseline",
														gap: 6,
														marginTop: 10
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 28,
															fontWeight: 800,
															color: C.text
														},
														children: [(stats.s2.passed / stats.nSem2 * 100).toFixed(0), "%"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1982,
														columnNumber: 21
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 12,
															color: C.muted
														},
														children: "Sem 2 Pass Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1985,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1981,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														borderTop: `1px solid ${C.border}`,
														marginTop: 14,
														paddingTop: 10,
														fontSize: 12,
														color: C.muted
													},
													children: [/* @__PURE__ */ _jsxDEV("span", { children: [
														"Sem 1: ",
														(stats.s1.passed / stats.nTotal * 100).toFixed(0),
														"%"
													] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1988,
														columnNumber: 21
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: { color: C.green },
														children: [
															"Diff: ",
															((stats.s2.passed / stats.nSem2 - stats.s1.passed / stats.nTotal) * 100).toFixed(1),
															"%"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1989,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1987,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1979,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1978,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(Card, {
										theme: C,
										children: /* @__PURE__ */ _jsxDEV("div", {
											style: { padding: 20 },
											children: [
												/* @__PURE__ */ _jsxDEV(Label, {
													theme: C,
													children: "Class Average SGPA"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1999,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														alignItems: "baseline",
														gap: 6,
														marginTop: 10
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 28,
															fontWeight: 800,
															color: C.gold
														},
														children: stats.s2.avgSgpa
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2001,
														columnNumber: 21
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 12,
															color: C.muted
														},
														children: "Sem 2 average"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2004,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2e3,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														borderTop: `1px solid ${C.border}`,
														marginTop: 14,
														paddingTop: 10,
														fontSize: 12,
														color: C.muted
													},
													children: [/* @__PURE__ */ _jsxDEV("span", { children: ["Sem 1 Avg: ", stats.s1.avgSgpa] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2007,
														columnNumber: 21
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: { color: stats.s2.avgSgpa - stats.s1.avgSgpa >= 0 ? C.green : C.red },
														children: ["Delta: ", (stats.s2.avgSgpa - stats.s1.avgSgpa).toFixed(2)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2008,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2006,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1998,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1997,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(Card, {
										theme: C,
										children: /* @__PURE__ */ _jsxDEV("div", {
											style: { padding: 20 },
											children: [
												/* @__PURE__ */ _jsxDEV(Label, {
													theme: C,
													children: "Highest SGPA/CGPA"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2018,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														alignItems: "baseline",
														gap: 6,
														marginTop: 10
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 28,
															fontWeight: 800,
															color: C.text
														},
														children: stats.cum.highest
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2020,
														columnNumber: 21
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontSize: 12,
															color: C.muted
														},
														children: "Top CGPA (Year 1)"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2023,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2019,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														borderTop: `1px solid ${C.border}`,
														marginTop: 14,
														paddingTop: 10,
														fontSize: 12,
														color: C.muted
													},
													children: [/* @__PURE__ */ _jsxDEV("span", { children: "Sem 1 Max: 9.27" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2026,
														columnNumber: 21
													}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Sem 2 Max: 8.18" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2027,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2025,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2017,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2016,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1975,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "grid",
									gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
									gap: 20
								},
								children: [/* @__PURE__ */ _jsxDEV(Card, {
									theme: C,
									children: /* @__PURE__ */ _jsxDEV("div", {
										style: { padding: 24 },
										children: [/* @__PURE__ */ _jsxDEV("h4", {
											style: {
												margin: "0 0 16px",
												fontSize: 14,
												fontWeight: 700,
												color: C.text,
												textTransform: "uppercase",
												letterSpacing: .5
											},
											children: "Semester 1 GPA Distribution"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2038,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
												display: "flex",
												flexDirection: "column",
												gap: 12
											},
											children: [
												{
													band: "Outstanding (9.0+)",
													count: gradeDistribution[1][0],
													color: bandColors[0]
												},
												{
													band: "Excellent (8.0–8.9)",
													count: gradeDistribution[1][1],
													color: bandColors[1]
												},
												{
													band: "Very Good (7.0–7.9)",
													count: gradeDistribution[1][2],
													color: bandColors[2]
												},
												{
													band: "Good (6.0–6.9)",
													count: gradeDistribution[1][3],
													color: bandColors[3]
												},
												{
													band: "Average (5.0–5.9)",
													count: gradeDistribution[1][4],
													color: bandColors[4]
												},
												{
													band: "Below Average (< 5.0)",
													count: gradeDistribution[1][5],
													color: bandColors[5]
												}
											].map((g) => {
												const pct = (g.count / stats.nTotal * 100).toFixed(0);
												return /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														fontSize: 12,
														marginBottom: 4
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: { color: C.text },
														children: g.band
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2054,
														columnNumber: 29
													}, this), /* @__PURE__ */ _jsxDEV("strong", {
														style: { color: g.color },
														children: [
															g.count,
															" students (",
															pct,
															"%)"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2055,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2053,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														height: 6,
														background: C.raised,
														borderRadius: 99,
														overflow: "hidden"
													},
													children: /* @__PURE__ */ _jsxDEV("div", {
														className: "gsap-progress-bar",
														"data-pct": pct,
														style: {
															width: "0%",
															height: "100%",
															background: g.color,
															borderRadius: 99
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2058,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2057,
													columnNumber: 27
												}, this)] }, g.band, true, {
													fileName: _jsxFileName,
													lineNumber: 2052,
													columnNumber: 25
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2041,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2037,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2036,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV(Card, {
									theme: C,
									children: /* @__PURE__ */ _jsxDEV("div", {
										style: { padding: 24 },
										children: [/* @__PURE__ */ _jsxDEV("h4", {
											style: {
												margin: "0 0 16px",
												fontSize: 14,
												fontWeight: 700,
												color: C.text,
												textTransform: "uppercase",
												letterSpacing: .5
											},
											children: "Semester 2 GPA Distribution"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2069,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											style: {
												display: "flex",
												flexDirection: "column",
												gap: 12
											},
											children: [
												{
													band: "Outstanding (9.0+)",
													count: gradeDistribution[2][0],
													color: bandColors[0]
												},
												{
													band: "Excellent (8.0–8.9)",
													count: gradeDistribution[2][1],
													color: bandColors[1]
												},
												{
													band: "Very Good (7.0–7.9)",
													count: gradeDistribution[2][2],
													color: bandColors[2]
												},
												{
													band: "Good (6.0–6.9)",
													count: gradeDistribution[2][3],
													color: bandColors[3]
												},
												{
													band: "Average (5.0–5.9)",
													count: gradeDistribution[2][4],
													color: bandColors[4]
												},
												{
													band: "Below Average (< 5.0)",
													count: gradeDistribution[2][5],
													color: bandColors[5]
												}
											].map((g) => {
												const pct = (g.count / stats.nSem2 * 100).toFixed(0);
												return /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														justifyContent: "space-between",
														fontSize: 12,
														marginBottom: 4
													},
													children: [/* @__PURE__ */ _jsxDEV("span", {
														style: { color: C.text },
														children: g.band
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2085,
														columnNumber: 29
													}, this), /* @__PURE__ */ _jsxDEV("strong", {
														style: { color: g.color },
														children: [
															g.count,
															" students (",
															pct,
															"%)"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2086,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2084,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													style: {
														height: 6,
														background: C.raised,
														borderRadius: 99,
														overflow: "hidden"
													},
													children: /* @__PURE__ */ _jsxDEV("div", {
														className: "gsap-progress-bar",
														"data-pct": pct,
														style: {
															width: "0%",
															height: "100%",
															background: g.color,
															borderRadius: 99
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2089,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2088,
													columnNumber: 27
												}, this)] }, g.band, true, {
													fileName: _jsxFileName,
													lineNumber: 2083,
													columnNumber: 25
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2072,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2068,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2067,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2034,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(Card, {
								theme: C,
								children: /* @__PURE__ */ _jsxDEV("div", {
									style: { padding: 24 },
									children: [/* @__PURE__ */ _jsxDEV("h4", {
										style: {
											margin: "0 0 16px",
											fontSize: 14,
											fontWeight: 700,
											color: C.text,
											textTransform: "uppercase",
											letterSpacing: .5
										},
										children: "Individual Student Performance Trend (CGPA Chart)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2103,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										style: {
											display: "flex",
											alignItems: "flex-end",
											gap: isMobile ? 6 : 12,
											height: 160,
											overflowX: "auto",
											paddingBottom: 8,
											marginTop: 14
										},
										children: STUDENTS.map((st) => {
											const cGpa = studentRanks[st.rollNo].cgpa;
											const h = cGpa * 12;
											const fill = cGpa >= 8 ? C.gold : cGpa >= 7 ? dark ? "#818cf8" : "#4f46e5" : cGpa >= 6 ? dark ? "#6366f1" : "#2563eb" : C.red;
											return /* @__PURE__ */ _jsxDEV("div", {
												title: `${st.name}: CGPA ${cGpa}`,
												onClick: () => viewStudent(st),
												style: {
													flex: 1,
													minWidth: isMobile ? 18 : 28,
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													justifyContent: "flex-end",
													height: 140,
													cursor: "pointer"
												},
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 9,
															fontWeight: 700,
															color: C.muted,
															width: "100%",
															textAlign: "center",
															marginBottom: 4
														},
														children: cGpa
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2142,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "gsap-bar",
														style: {
															width: "100%",
															height: `${h}px`,
															background: fill,
															borderRadius: "4px 4px 0 0",
															opacity: .8
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2143,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															fontSize: 8,
															color: C.muted,
															width: "100%",
															overflow: "hidden",
															whiteSpace: "nowrap",
															textOverflow: "ellipsis",
															textAlign: "center"
														},
														children: st.name.split(" ")[0]
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2144,
														columnNumber: 25
													}, this)
												]
											}, st.rollNo, true, {
												fileName: _jsxFileName,
												lineNumber: 2127,
												columnNumber: 23
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2106,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2102,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2101,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1967,
						columnNumber: 11
					}, this),
					tab === 3 && /* @__PURE__ */ _jsxDEV("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 20
						},
						className: "gsap-fade-in",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								style: {
									margin: 0,
									fontSize: 18,
									fontWeight: 700,
									color: C.text
								},
								children: "Student Result Ledger"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2171,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								style: {
									margin: "4px 0 0",
									fontSize: 13,
									color: C.muted
								},
								children: "Explore the full results list with multi-column sorting and direct filters."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2172,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2170,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 12,
									alignItems: "center",
									background: C.surface,
									border: `1px solid ${C.border}`,
									padding: 14,
									borderRadius: 12
								},
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										style: { flex: "1 1 200px" },
										children: /* @__PURE__ */ _jsxDEV(Input, {
											theme: C,
											value: ledgerSearch,
											onChange: (e) => setLedgerSearch(e.target.value),
											placeholder: "Search by name or roll number…",
											style: { width: "100%" }
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2188,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2187,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: /* @__PURE__ */ _jsxDEV(Select, {
										theme: C,
										value: ledgerStatus,
										onChange: (e) => setLedgerStatus(e.target.value),
										children: [
											/* @__PURE__ */ _jsxDEV("option", {
												value: "ALL",
												children: "All Outcomes"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2204,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "PASSED",
												children: "Passed & Promoted"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2205,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "PROMOTED",
												children: "Promoted Only"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2206,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2199,
										columnNumber: 17
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2198,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: /* @__PURE__ */ _jsxDEV(Select, {
										theme: C,
										value: ledgerSort,
										onChange: (e) => setLedgerSort(e.target.value),
										children: [
											/* @__PURE__ */ _jsxDEV("option", {
												value: "rank",
												children: "Sort: Rank"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2217,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "sgpa",
												children: "Sort: GPA"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2218,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "name",
												children: "Sort: Name"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2219,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "roll",
												children: "Sort: Roll No"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2220,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2212,
										columnNumber: 17
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2211,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2176,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								style: {
									fontSize: 12,
									color: C.muted,
									display: "flex",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ _jsxDEV("span", { children: [
									"Showing ",
									ledgerData.length,
									" of ",
									STUDENTS.length,
									" students"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2227,
									columnNumber: 15
								}, this), semContext === "2" && /* @__PURE__ */ _jsxDEV("span", { children: "* 6 students missing Sem 2 records" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2228,
									columnNumber: 38
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2226,
								columnNumber: 13
							}, this),
							isMobile ? /* @__PURE__ */ _jsxDEV("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 12
								},
								children: ledgerData.map((s) => {
									const pass = semContext === "1" ? s.sem1.result.includes("PASSED") : semContext === "2" ? s.sem2 && s.sem2.result.includes("PASSED") : s.sem1.result.includes("PASSED") && (s.sem2 ? s.sem2.result.includes("PASSED") : false);
									const gpa = semContext === "1" ? s.sem1.sgpa : semContext === "2" ? s.sem2 ? s.sem2.sgpa : "N/A" : s.cgpa;
									const totalScore = semContext === "1" ? s.sem1.grand : semContext === "2" ? s.sem2 ? s.sem2.grand : "N/A" : s.sem1.grand + (s.sem2 ? s.sem2.grand : 0);
									const maxTotal = semContext === "cumulative" ? 1600 : 800;
									return /* @__PURE__ */ _jsxDEV(Card, {
										theme: C,
										onClick: () => viewStudent(s),
										style: { cursor: "pointer" },
										children: /* @__PURE__ */ _jsxDEV("div", {
											style: { padding: 16 },
											children: [/* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "flex",
													justifyContent: "space-between",
													alignItems: "flex-start",
													marginBottom: 12
												},
												children: [/* @__PURE__ */ _jsxDEV("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: 12
													},
													children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
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
														},
														children: /* @__PURE__ */ _jsxDEV("img", {
															src: getAvatarUrl(s),
															alt: `${s.name}'s Avatar`,
															style: {
																width: "100%",
																height: "100%",
																objectFit: "cover"
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2273,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2261,
														columnNumber: 29
													}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: 6
														},
														children: [/* @__PURE__ */ _jsxDEV("span", {
															style: {
																fontSize: 11,
																fontWeight: 800,
																color: C.gold
															},
															children: ["#", semContext === "1" ? s.r1 : semContext === "2" ? s.r2 : s.rc]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2281,
															columnNumber: 33
														}, this), /* @__PURE__ */ _jsxDEV("h4", {
															style: {
																margin: 0,
																fontSize: 14,
																fontWeight: 700,
																color: C.text
															},
															children: s.name
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2284,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2280,
														columnNumber: 31
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														style: {
															fontFamily: "monospace",
															fontSize: 11,
															color: C.muted
														},
														children: s.rollNo
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2288,
														columnNumber: 31
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2279,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2259,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV(Pill, {
													color: pass ? C.green : C.gold,
													children: pass ? "Pass" : s.sem2 === null && semContext !== "1" ? "Held" : "Promoted"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2292,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2258,
												columnNumber: 25
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												style: {
													display: "grid",
													gridTemplateColumns: "1fr 1fr 1fr",
													gap: 8,
													textAlign: "center"
												},
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															background: C.raised,
															borderRadius: 6,
															padding: 6
														},
														children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 9,
																color: C.muted,
																textTransform: "uppercase"
															},
															children: "GPA"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2299,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 13,
																fontWeight: 700,
																color: C.gold,
																marginTop: 2
															},
															children: gpa
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2300,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2298,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															background: C.raised,
															borderRadius: 6,
															padding: 6
														},
														children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 9,
																color: C.muted,
																textTransform: "uppercase"
															},
															children: "Grand"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2303,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 13,
																fontWeight: 700,
																color: C.text,
																marginTop: 2
															},
															children: totalScore
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2304,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2302,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														style: {
															background: C.raised,
															borderRadius: 6,
															padding: 6
														},
														children: [/* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 9,
																color: C.muted,
																textTransform: "uppercase"
															},
															children: "Max"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2307,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															style: {
																fontSize: 13,
																fontWeight: 700,
																color: C.muted,
																marginTop: 2
															},
															children: maxTotal
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2308,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2306,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2297,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2257,
											columnNumber: 23
										}, this)
									}, s.rollNo, false, {
										fileName: _jsxFileName,
										lineNumber: 2256,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2233,
								columnNumber: 15
							}, this) : /* @__PURE__ */ _jsxDEV(Card, {
								theme: C,
								children: /* @__PURE__ */ _jsxDEV("div", {
									style: { overflowX: "auto" },
									children: /* @__PURE__ */ _jsxDEV("table", {
										style: {
											width: "100%",
											borderCollapse: "collapse",
											fontSize: 13
										},
										children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", {
											style: {
												borderBottom: `1px solid ${C.border}`,
												textAlign: "left",
												background: C.raised
											},
											children: [
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600
													},
													children: "Rank"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2322,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600
													},
													children: "Roll Number"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2323,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600
													},
													children: "Student Name"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2324,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600,
														textAlign: "center"
													},
													children: "Sem 1 SGPA"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2325,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600,
														textAlign: "center"
													},
													children: "Sem 2 SGPA"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2326,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600,
														textAlign: "center"
													},
													children: "Cumulative CGPA"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2327,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600,
														textAlign: "center"
													},
													children: "Grand Total"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2328,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("th", {
													style: {
														padding: "12px 16px",
														color: C.muted,
														fontWeight: 600
													},
													children: "Status Outcome"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2329,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2321,
											columnNumber: 23
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2320,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("tbody", { children: ledgerData.map((s) => {
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
											return /* @__PURE__ */ _jsxDEV("tr", {
												onClick: () => viewStudent(s),
												style: {
													borderBottom: `1px solid ${C.border}`,
													cursor: "pointer",
													transition: "background 0.2s"
												},
												onMouseEnter: (e) => e.currentTarget.style.background = C.raised,
												onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
												children: [
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															fontWeight: 700,
															color: activeRank <= 3 ? C.gold : C.muted
														},
														children: ["#", activeRank]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2378,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															fontFamily: "monospace",
															color: C.muted
														},
														children: s.rollNo
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2381,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															fontWeight: 700,
															color: C.text
														},
														children: /* @__PURE__ */ _jsxDEV("div", {
															style: {
																display: "flex",
																alignItems: "center",
																gap: 10
															},
															children: [/* @__PURE__ */ _jsxDEV("div", {
																style: {
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
																},
																children: /* @__PURE__ */ _jsxDEV("img", {
																	src: getAvatarUrl(s),
																	alt: `${s.name}'s Avatar`,
																	style: {
																		width: "100%",
																		height: "100%",
																		objectFit: "cover"
																	}
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2396,
																	columnNumber: 35
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2384,
																columnNumber: 33
															}, this), /* @__PURE__ */ _jsxDEV("span", { children: s.name }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2402,
																columnNumber: 33
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2383,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2382,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															textAlign: "center",
															color: C.text
														},
														children: s.sem1.sgpa
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2405,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															textAlign: "center",
															color: s.sem2 ? C.text : C.muted
														},
														children: s.sem2 ? s.sem2.sgpa : "-"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2406,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															textAlign: "center",
															fontWeight: 700,
															color: C.gold
														},
														children: s.cgpa
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2409,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: {
															padding: "14px 16px",
															textAlign: "center",
															color: C.text
														},
														children: semContext === "1" ? s.sem1.grand : semContext === "2" ? s.sem2 ? s.sem2.grand : "-" : s.sem1.grand + (s.sem2 ? s.sem2.grand : 0)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2412,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ _jsxDEV("td", {
														style: { padding: "14px 16px" },
														children: /* @__PURE__ */ _jsxDEV("span", {
															style: {
																fontSize: 12,
																fontWeight: 700,
																color: outcomeColor
															},
															children: outcomeText
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2421,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2420,
														columnNumber: 29
													}, this)
												]
											}, s.rollNo, true, {
												fileName: _jsxFileName,
												lineNumber: 2367,
												columnNumber: 27
											}, this);
										}) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2332,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2319,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2318,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2317,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2167,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 684,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("footer", {
				style: {
					marginTop: "auto",
					borderTop: `1px solid ${C.border}`,
					background: C.surface,
					padding: "32px 0",
					textAlign: "center",
					color: C.muted,
					fontSize: 13,
					boxSizing: "border-box"
				},
				children: /* @__PURE__ */ _jsxDEV("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						padding: `0 ${px}px`,
						display: "flex",
						flexDirection: isMobile ? "column" : "row",
						justifyContent: "space-between",
						alignItems: "center",
						gap: 16
					},
					children: [/* @__PURE__ */ _jsxDEV("div", {
						style: { textAlign: isMobile ? "center" : "left" },
						children: [/* @__PURE__ */ _jsxDEV("div", {
							style: {
								fontWeight: 600,
								color: C.text
							},
							children: "BCA Results Management Portal"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 2452,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							style: {
								fontSize: 11,
								marginTop: 4,
								opacity: .8
							},
							children: "© 2024–2025 · Jharkhand University of Technology, Ranchi"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 2455,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2451,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 20
						},
						children: [/* @__PURE__ */ _jsxDEV("span", {
							style: {
								fontSize: 12,
								fontWeight: 500
							},
							children: ["Developed by ", /* @__PURE__ */ _jsxDEV("strong", {
								style: { color: C.text },
								children: "Sumit Ghosh"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2462,
								columnNumber: 28
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2461,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							style: {
								display: "flex",
								gap: 12
							},
							children: [/* @__PURE__ */ _jsxDEV("a", {
								href: "https://github.com/SumitGh0sh",
								target: "_blank",
								rel: "noreferrer",
								style: {
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
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.background = C.borderHi;
									e.currentTarget.style.transform = "translateY(-2px)";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.background = C.raised;
									e.currentTarget.style.transform = "none";
								},
								title: "GitHub",
								children: /* @__PURE__ */ _jsxDEV(GithubIcon, {
									color: C.text,
									size: 16
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2492,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2465,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("a", {
								href: "https://www.linkedin.com/in/sumitgh0sh/",
								target: "_blank",
								rel: "noreferrer",
								style: {
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
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.background = C.borderHi;
									e.currentTarget.style.transform = "translateY(-2px)";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.background = C.raised;
									e.currentTarget.style.transform = "none";
								},
								title: "LinkedIn",
								children: /* @__PURE__ */ _jsxDEV(LinkedinIcon, {
									color: C.text,
									size: 16
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2521,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2494,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2464,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2460,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 2450,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 2440,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 477,
		columnNumber: 5
	}, this);
}
_s2(BCAPortal, "MZSwpjx+YTItgonxs82SFsPXasg=", false, function() {
	return [useIsMobile];
});
_c4 = BCAPortal;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "WarningIcon");
$RefreshReg$(_c2, "GithubIcon");
$RefreshReg$(_c3, "LinkedinIcon");
$RefreshReg$(_c4, "BCAPortal");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.jsx?t=1784172377241";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/sumit/bca-result-portal/bca-result-portal/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/sumit/bca-result-portal/bca-result-portal/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/sumit/bca-result-portal/bca-result-portal/src/App.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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Qzs7OztpQkFDSix3QkFBQyxLQUFEO1FBQ0UsTUFBSztRQUNMLFFBQU87UUFDUCxLQUFJO1FBQ0osT0FBTztTQUNMLFNBQVM7U0FDVCxZQUFZO1NBQ1osZ0JBQWdCO1NBQ2hCLE9BQU87U0FDUCxRQUFRO1NBQ1IsY0FBYztTQUNkLFlBQVksRUFBRTtTQUNkLFFBQVEsYUFBYSxFQUFFO1NBQ3ZCLE9BQU8sRUFBRTtTQUNULFlBQVk7U0FDWixRQUFRO1NBQ1Q7UUFDRCxlQUFlLE1BQU07QUFDbkIsV0FBRSxjQUFjLE1BQU0sYUFBYSxFQUFFO0FBQ3JDLFdBQUUsY0FBYyxNQUFNLFlBQVk7O1FBRXBDLGVBQWUsTUFBTTtBQUNuQixXQUFFLGNBQWMsTUFBTSxhQUFhLEVBQUU7QUFDckMsV0FBRSxjQUFjLE1BQU0sWUFBWTs7UUFFcEMsT0FBTTtrQkFFTix3QkFBQyxjQUFEO1NBQWMsT0FBTyxFQUFFO1NBQU0sTUFBTTtTQUFNOzs7OztRQUN2Qzs7OztnQkFDQTs7Ozs7ZUFDRjs7Ozs7Y0FDRjs7Ozs7O0lBQ0M7Ozs7O0dBQ0wiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBTVUJKRUNUU19TRU0xLFxyXG4gIFNVQkpFQ1RTX1NFTTIsXHJcbiAgU1RVREVOVFMsXHJcbiAgbWFrZVRoZW1lLFxyXG4gIGdyYWRlQ29sb3IsXHJcbiAgZ2V0R3JhZGUsXHJcbiAgZ2V0Q2hhcmFjdGVyQ2xhc3MsXHJcbiAgZ2V0QXZhdGFyVXJsXHJcbn0gZnJvbSBcIi4vZGF0YS9tb2NrRGF0YVwiO1xyXG5pbXBvcnQgeyBQaWxsLCBDYXJkLCBMYWJlbCwgSW5wdXQsIFNlbGVjdCwgQnV0dG9uLCBDbGFzc0ljb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL1VJQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmFkYXJDaGFydCBmcm9tIFwiLi9jb21wb25lbnRzL1JhZGFyQ2hhcnRcIjtcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IHRvUG5nIH0gZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmNvbnN0IHJlbmRlclRhYkljb24gPSAoaWQsIGFjdGl2ZSwgQykgPT4ge1xyXG4gIGNvbnN0IGNvbG9yID0gYWN0aXZlID8gQy5nb2xkIDogQy5tdXRlZDtcclxuICBjb25zdCBzdHJva2VXaWR0aCA9IDIuMjtcclxuICBjb25zdCBzaXplID0gMTU7XHJcbiAgXHJcbiAgaWYgKGlkID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT17Y29sb3J9IHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH0gc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0eWxlPXt7IHRyYW5zaXRpb246IFwic3Ryb2tlIDAuMnNcIiB9fT5cclxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjhcIj48L2NpcmNsZT5cclxuICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIyMVwiIHgyPVwiMTYuNjVcIiB5Mj1cIjE2LjY1XCI+PC9saW5lPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChpZCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e2NvbG9yfSBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9IHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHlsZT17eyB0cmFuc2l0aW9uOiBcInN0cm9rZSAwLjJzXCIgfX0+XHJcbiAgICAgICAgPHBhdGggZD1cIk02IDlINC41YTIuNSAyLjUgMCAwIDEgMC01SDZcIj48L3BhdGg+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xOCA5aDEuNWEyLjUgMi41IDAgMCAwIDAtNUgxOFwiPjwvcGF0aD5cclxuICAgICAgICA8cGF0aCBkPVwiTTQgMjJoMTZcIj48L3BhdGg+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMCAxNC42NlYxN2MwIC41NS0uNDUgMS0xIDFINHYyaDE2di0yaC01Yy0uNTUgMC0xLS40NS0xLTF2LTIuMzRcIj48L3BhdGg+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMiAyYTcgNyAwIDAgMC03IDdoMTRhNyA3IDAgMCAwLTctN3pcIj48L3BhdGg+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGlkID09PSAyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT17Y29sb3J9IHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH0gc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0eWxlPXt7IHRyYW5zaXRpb246IFwic3Ryb2tlIDAuMnNcIiB9fT5cclxuICAgICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCIyMFwiIHgyPVwiMThcIiB5Mj1cIjEwXCI+PC9saW5lPlxyXG4gICAgICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjIwXCIgeDI9XCIxMlwiIHkyPVwiNFwiPjwvbGluZT5cclxuICAgICAgICA8bGluZSB4MT1cIjZcIiB5MT1cIjIwXCIgeDI9XCI2XCIgeTI9XCIxNFwiPjwvbGluZT5cclxuICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoaWQgPT09IDMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXtjb2xvcn0gc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofSBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJzdHJva2UgMC4yc1wiIH19PlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDJcIj48L3BhdGg+XHJcbiAgICAgICAgPHJlY3QgeD1cIjhcIiB5PVwiMlwiIHdpZHRoPVwiOFwiIGhlaWdodD1cIjRcIiByeD1cIjFcIiByeT1cIjFcIj48L3JlY3Q+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBXYXJuaW5nSWNvbiA9ICh7IGNvbG9yLCBzaXplID0gMTYsIHN0eWxlID0ge30gfSkgPT4gKFxyXG4gIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXtjb2xvcn0gc3Ryb2tlV2lkdGg9XCIyLjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgLi4uc3R5bGUgfX0+XHJcbiAgICA8cGF0aCBkPVwiTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAwelwiPjwvcGF0aD5cclxuICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjlcIiB4Mj1cIjEyXCIgeTI9XCIxM1wiPjwvbGluZT5cclxuICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjE3XCIgeDI9XCIxMi4wMVwiIHkyPVwiMTdcIj48L2xpbmU+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBHaXRodWJJY29uID0gKHsgY29sb3IsIHNpemUgPSAxOCwgc3R5bGUgPSB7fSB9KSA9PiAoXHJcbiAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e2NvbG9yfSBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3R5bGU9e3N0eWxlfT5cclxuICAgIDxwYXRoIGQ9XCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcIj48L3BhdGg+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBMaW5rZWRpbkljb24gPSAoeyBjb2xvciwgc2l6ZSA9IDE4LCBzdHlsZSA9IHt9IH0pID0+IChcclxuICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT17Y29sb3J9IHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgPHBhdGggZD1cIk0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02elwiPjwvcGF0aD5cclxuICAgIDxyZWN0IHg9XCIyXCIgeT1cIjlcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxMlwiPjwvcmVjdD5cclxuICAgIDxjaXJjbGUgY3g9XCI0XCIgY3k9XCI0XCIgcj1cIjJcIj48L2NpcmNsZT5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIHVzZUlzTW9iaWxlKCkge1xyXG4gIGNvbnN0IFttLCBzZXRNXSA9IHVzZVN0YXRlKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA6IGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaCA9ICgpID0+IHNldE0od2luZG93LmlubmVyV2lkdGggPCA3NjgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCQ0FQb3J0YWwoKSB7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VJc01vYmlsZSgpO1xyXG4gIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IEMgPSBtYWtlVGhlbWUoZGFyayk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRhcmsgPyBcImRhcmstdGhlbWUtZ3JpZFwiIDogXCJsaWdodC10aGVtZS1ncmlkXCI7XHJcbiAgfSwgW2RhcmtdKTtcclxuXHJcbiAgY29uc3QgYmFuZENvbG9ycyA9IGRhcmsgPyBbXHJcbiAgICBcIiM1ZTZhZDJcIiwgLy8gT3V0c3RhbmRpbmcgKExpbmVhciBQcmltYXJ5IExhdmVuZGVyKVxyXG4gICAgXCIjNzA3YmM0XCIsIC8vIEV4Y2VsbGVudCAoU2xpZ2h0bHkgTXV0ZWQpXHJcbiAgICBcIiM4MThjZjhcIiwgLy8gVmVyeSBHb29kIChQZXJpd2lua2xlKVxyXG4gICAgXCIjNjM2NmYxXCIsIC8vIEdvb2QgKEluZGlnbylcclxuICAgIFwiIzhhOGY5OFwiLCAvLyBBdmVyYWdlIChJbmsgU3VidGxlKVxyXG4gICAgXCIjZjQzZjVlXCIgIC8vIEJlbG93IEF2ZXJhZ2UgKFdhcm5pbmcgUm9zZSlcclxuICBdIDogW1xyXG4gICAgXCIjNWU2YWQyXCIsIC8vIE91dHN0YW5kaW5nIChTdGF5cyBMYXZlbmRlcilcclxuICAgIFwiIzRmNDZlNVwiLCAvLyBFeGNlbGxlbnRcclxuICAgIFwiIzI1NjNlYlwiLCAvLyBWZXJ5IEdvb2RcclxuICAgIFwiIzFkNGVkOFwiLCAvLyBHb29kXHJcbiAgICBcIiM3MTcxN2FcIiwgLy8gQXZlcmFnZVxyXG4gICAgXCIjZWY0NDQ0XCIgIC8vIEJlbG93IEF2ZXJhZ2VcclxuICBdO1xyXG5cclxuICAvLyBUYWJzOiAwID0gU2VhcmNoLCAxID0gVG9wcGVycywgMiA9IEFuYWx5dGljcywgMyA9IExlZGdlclxyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuICBcclxuICAvLyBTZW1lc3RlciBDb250ZXh0OiBcIjFcIiwgXCIyXCIsIFwiY3VtdWxhdGl2ZVwiXHJcbiAgY29uc3QgW3NlbUNvbnRleHQsIHNldFNlbUNvbnRleHRdID0gdXNlU3RhdGUoXCJjdW11bGF0aXZlXCIpO1xyXG4gIC8vIFNlYXJjaCBTdGF0ZXNcclxuICBjb25zdCBbcm9sbCwgc2V0Um9sbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZm91bmRTdHVkZW50LCBzZXRGb3VuZFN0dWRlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NlYXJjaEVycm9yLCBzZXRTZWFyY2hFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcm9sbEZvY3VzZWQsIHNldFJvbGxGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbmFtZUZvY3VzZWQsIHNldE5hbWVGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzY29yZWNhcmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJvbGxTdWdnZXN0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFyb2xsLnRyaW0oKSkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3QgcXVlcnkgPSByb2xsLnRyaW0oKTtcclxuICAgIHJldHVybiBTVFVERU5UUy5maWx0ZXIoc3QgPT4gc3Qucm9sbE5vLmluY2x1ZGVzKHF1ZXJ5KSkuc2xpY2UoMCwgNSk7XHJcbiAgfSwgW3JvbGxdKTtcclxuXHJcbiAgY29uc3QgbmFtZVN1Z2dlc3Rpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoIW5hbWUudHJpbSgpKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBxdWVyeSA9IG5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBTVFVERU5UUy5maWx0ZXIoc3QgPT4gc3QubmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkuc2xpY2UoMCwgNSk7XHJcbiAgfSwgW25hbWVdKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0U3VnZ2VzdGVkU3R1ZGVudCA9IChzdHVkZW50LCBzZWFyY2hUeXBlKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoVHlwZSA9PT0gXCJuYW1lXCIpIHtcclxuICAgICAgc2V0TmFtZShzdHVkZW50Lm5hbWUpO1xyXG4gICAgICBzZXRSb2xsKFwiXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Um9sbChzdHVkZW50LnJvbGxObyk7XHJcbiAgICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICB9XHJcbiAgICBzZXROYW1lRm9jdXNlZChmYWxzZSk7XHJcbiAgICBzZXRSb2xsRm9jdXNlZChmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Rm91bmRTdHVkZW50KHN0dWRlbnQpO1xyXG4gICAgICBzZXRTZWFyY2hFcnJvcihcIlwiKTtcclxuICAgICAgc2V0VGFiKDApO1xyXG4gICAgfSwgMjUwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb3dubG9hZENncGEgPSBmb3VuZFN0dWRlbnQgPyAoZm91bmRTdHVkZW50LnNlbTJcclxuICAgID8gKChwYXJzZUZsb2F0KGZvdW5kU3R1ZGVudC5zZW0xLnNncGEpICsgcGFyc2VGbG9hdChmb3VuZFN0dWRlbnQuc2VtMi5zZ3BhKSkgLyAyKS50b0ZpeGVkKDIpXHJcbiAgICA6IHBhcnNlRmxvYXQoZm91bmRTdHVkZW50LnNlbTEuc2dwYSkudG9GaXhlZCgyKSkgOiBcIjAuMDBcIjtcclxuICBjb25zdCBkb3dubG9hZENsYXNzID0gZm91bmRTdHVkZW50ID8gZ2V0Q2hhcmFjdGVyQ2xhc3MoZG93bmxvYWRDZ3BhKSA6IG51bGw7XHJcbiAgY29uc3QgZG93bmxvYWRDcCA9IGZvdW5kU3R1ZGVudCA/IE1hdGgucm91bmQoZG93bmxvYWRDZ3BhICogMTAwMCkgOiAwO1xyXG5cclxuICAvLyBMZWRnZXIgU3RhdGVzXHJcbiAgY29uc3QgW2xlZGdlclNlYXJjaCwgc2V0TGVkZ2VyU2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZWRnZXJTdGF0dXMsIHNldExlZGdlclN0YXR1c10gPSB1c2VTdGF0ZShcIkFMTFwiKTtcclxuICBjb25zdCBbbGVkZ2VyU29ydCwgc2V0TGVkZ2VyU29ydF0gPSB1c2VTdGF0ZShcInJhbmtcIik7XHJcblxyXG4gIC8vIFRvcHBlciBTdGF0ZXNcclxuICBjb25zdCBbdG9wcGVyU3ViamVjdCwgc2V0VG9wcGVyU3ViamVjdF0gPSB1c2VTdGF0ZShcImdyYW5kXCIpO1xyXG5cclxuICAvLyBHU0FQIGFuaW1hdGlvbiBlZmZlY3QgZm9yIHBhZ2UgZWxlbWVudHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmFkZVRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzYXAtZmFkZS1pblwiKTtcclxuICAgIGlmIChmYWRlVGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGdzYXAuZnJvbVRvKGZhZGVUYXJnZXRzLCBcclxuICAgICAgICB7IG9wYWNpdHk6IDAsIHk6IDEyIH0sXHJcbiAgICAgICAgeyBvcGFjaXR5OiAxLCB5OiAwLCBkdXJhdGlvbjogMC40LCBlYXNlOiBcInBvd2VyMi5vdXRcIiwgc3RhZ2dlcjogMC4wNCwgb3ZlcndyaXRlOiBcImF1dG9cIiB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGJhclRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzYXAtYmFyXCIpO1xyXG4gICAgaWYgKGJhclRhcmdldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBnc2FwLmZyb21UbyhiYXJUYXJnZXRzLFxyXG4gICAgICAgIHsgc2NhbGVZOiAwLCB0cmFuc2Zvcm1PcmlnaW46IFwiYm90dG9tXCIgfSxcclxuICAgICAgICB7IHNjYWxlWTogMSwgZHVyYXRpb246IDAuNywgZWFzZTogXCJiYWNrLm91dCgxLjIpXCIsIHN0YWdnZXI6IDAuMDIsIGRlbGF5OiAwLjEsIG92ZXJ3cml0ZTogXCJhdXRvXCIgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NhcC1wcm9ncmVzcy1iYXJcIik7XHJcbiAgICBpZiAocHJvZ3Jlc3NCYXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZ3NhcC5mcm9tVG8ocHJvZ3Jlc3NCYXJzLFxyXG4gICAgICAgIHsgd2lkdGg6IFwiMCVcIiB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdpZHRoOiAoaSwgZWwpID0+IGAke2VsLmdldEF0dHJpYnV0ZShcImRhdGEtcGN0XCIpfSVgLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiLFxyXG4gICAgICAgICAgc3RhZ2dlcjogMC4wMyxcclxuICAgICAgICAgIGRlbGF5OiAwLjA1LFxyXG4gICAgICAgICAgb3ZlcndyaXRlOiBcImF1dG9cIlxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbdGFiLCBzZW1Db250ZXh0LCBmb3VuZFN0dWRlbnRdKTtcclxuXHJcbiAgLy8gUmFua3MgUHJlY29tcHV0YXRpb25zXHJcbiAgY29uc3QgcmFua3NTZW0xID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLlNUVURFTlRTXVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5zZW0xLmdyYW5kIC0gYS5zZW0xLmdyYW5kKVxyXG4gICAgICAubWFwKChzLCBpKSA9PiAoeyByb2xsTm86IHMucm9sbE5vLCByYW5rOiBpICsgMSwgZ3JhbmQ6IHMuc2VtMS5ncmFuZCB9KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByYW5rc1NlbTIgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHdpdGhTZW0yID0gU1RVREVOVFMuZmlsdGVyKChzKSA9PiBzLnNlbTIgIT09IG51bGwpO1xyXG4gICAgY29uc3Qgc29ydGVkID0gWy4uLndpdGhTZW0yXS5zb3J0KChhLCBiKSA9PiBiLnNlbTIuZ3JhbmQgLSBhLnNlbTIuZ3JhbmQpO1xyXG4gICAgcmV0dXJuIHNvcnRlZC5tYXAoKHMsIGkpID0+ICh7IHJvbGxObzogcy5yb2xsTm8sIHJhbms6IGkgKyAxLCBncmFuZDogcy5zZW0yLmdyYW5kIH0pKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJhbmtzQ3VtdWxhdGl2ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgY29tcHV0ZWQgPSBTVFVERU5UUy5tYXAoKHMpID0+IHtcclxuICAgICAgY29uc3Qgc2VtMVNncGEgPSBzLnNlbTEuc2dwYTtcclxuICAgICAgY29uc3Qgc2VtMlNncGEgPSBzLnNlbTIgPyBzLnNlbTIuc2dwYSA6IHMuc2VtMS5zZ3BhO1xyXG4gICAgICBjb25zdCBjZ3BhID0gcy5zZW0yID8gcGFyc2VGbG9hdCgoKHNlbTFTZ3BhICsgc2VtMlNncGEpIC8gMikudG9GaXhlZCgyKSkgOiBzZW0xU2dwYTtcclxuICAgICAgY29uc3QgdG90YWxHcmFuZCA9IHMuc2VtMS5ncmFuZCArIChzLnNlbTIgPyBzLnNlbTIuZ3JhbmQgOiAwKTtcclxuICAgICAgcmV0dXJuIHsgcm9sbE5vOiBzLnJvbGxObywgY2dwYSwgdG90YWxHcmFuZCB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyBTb3J0IHByaW1hcmlseSBieSBDR1BBLCB0aGVuIGJ5IHRvdGFsR3JhbmRcclxuICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5jb21wdXRlZF0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYi5jZ3BhICE9PSBhLmNncGEpIHJldHVybiBiLmNncGEgLSBhLmNncGE7XHJcbiAgICAgIHJldHVybiBiLnRvdGFsR3JhbmQgLSBhLnRvdGFsR3JhbmQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzb3J0ZWQubWFwKChzLCBpKSA9PiAoeyByb2xsTm86IHMucm9sbE5vLCByYW5rOiBpICsgMSwgY2dwYTogcy5jZ3BhIH0pKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEhlbHBlciB0byBmaW5kIHJhbmtzIGVhc2lseVxyXG4gIGNvbnN0IHN0dWRlbnRSYW5rcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwcGluZyA9IHt9O1xyXG4gICAgU1RVREVOVFMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICBjb25zdCByMSA9IHJhbmtzU2VtMS5maW5kKChyKSA9PiByLnJvbGxObyA9PT0gcy5yb2xsTm8pPy5yYW5rIHx8IFwiLVwiO1xyXG4gICAgICBjb25zdCByMiA9IHJhbmtzU2VtMi5maW5kKChyKSA9PiByLnJvbGxObyA9PT0gcy5yb2xsTm8pPy5yYW5rIHx8IFwiLVwiO1xyXG4gICAgICBjb25zdCByYyA9IHJhbmtzQ3VtdWxhdGl2ZS5maW5kKChyKSA9PiByLnJvbGxObyA9PT0gcy5yb2xsTm8pPy5yYW5rIHx8IFwiLVwiO1xyXG4gICAgICBjb25zdCBjZ3BhID0gcmFua3NDdW11bGF0aXZlLmZpbmQoKHIpID0+IHIucm9sbE5vID09PSBzLnJvbGxObyk/LmNncGEgfHwgcy5zZW0xLnNncGE7XHJcbiAgICAgIG1hcHBpbmdbcy5yb2xsTm9dID0geyByMSwgcjIsIHJjLCBjZ3BhIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXBwaW5nO1xyXG4gIH0sIFtyYW5rc1NlbTEsIHJhbmtzU2VtMiwgcmFua3NDdW11bGF0aXZlXSk7XHJcblxyXG4gIC8vIFNlYXJjaCBzdHVkZW50IGxvZ2ljXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHJRdWVyeSA9IHJvbGwsIG5RdWVyeSA9IG5hbWUpID0+IHtcclxuICAgIHNldFNlYXJjaEVycm9yKFwiXCIpO1xyXG4gICAgc2V0Rm91bmRTdHVkZW50KG51bGwpO1xyXG4gICAgY29uc3QgciA9IHJRdWVyeS50cmltKCkudG9VcHBlckNhc2UoKTtcclxuICAgIGNvbnN0IG4gPSBuUXVlcnkudHJpbSgpLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKCFyICYmICFuKSB7XHJcbiAgICAgIHNldFNlYXJjaEVycm9yKFwiUGxlYXNlIGZpbGwgaW4gYXQgbGVhc3Qgb25lIGZpZWxkIHRvIHNlYXJjaC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzID0gU1RVREVOVFMuZmluZCgoc3QpID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hSb2xsID0gciAmJiBzdC5yb2xsTm8udG9VcHBlckNhc2UoKSA9PT0gcjtcclxuICAgICAgY29uc3QgbWF0Y2hOYW1lID0gbiAmJiBzdC5uYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMobik7XHJcbiAgICAgIHJldHVybiBtYXRjaFJvbGwgfHwgbWF0Y2hOYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHMpIHtcclxuICAgICAgc2V0Rm91bmRTdHVkZW50KHMpO1xyXG4gICAgICAvLyBGaWxsIHRoZSBmaWVsZHMgd2l0aCBmb3VuZCBzdHVkZW50IGluZm9cclxuICAgICAgc2V0Um9sbChzLnJvbGxObyk7XHJcbiAgICAgIHNldE5hbWUocy5uYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlYXJjaEVycm9yKFwiTm8gc3R1ZGVudCByZWNvcmRzIGZvdW5kIG1hdGNoaW5nIHRoZSBjcml0ZXJpYS5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWRTY29yZWNhcmQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXNjb3JlY2FyZFJlZi5jdXJyZW50IHx8ICFmb3VuZFN0dWRlbnQpIHJldHVybjtcclxuICAgIFxyXG4gICAgdG9Qbmcoc2NvcmVjYXJkUmVmLmN1cnJlbnQsIHsgY2FjaGVCdXN0OiB0cnVlLCBzY2FsZTogMiB9KVxyXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gYHNjb3JlY2FyZC0ke2ZvdW5kU3R1ZGVudC5yb2xsTm99LnBuZ2A7XHJcbiAgICAgICAgbGluay5ocmVmID0gZGF0YVVybDtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIGV4cG9ydGluZyB0aGUgc2NvcmVjYXJkIVwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBTZWFyY2ggZnJvbSBMZWRnZXIgY2xpY2tcclxuICBjb25zdCB2aWV3U3R1ZGVudCA9IChzdHVkZW50KSA9PiB7XHJcbiAgICBzZXRSb2xsKHN0dWRlbnQucm9sbE5vKTtcclxuICAgIHNldE5hbWUoc3R1ZGVudC5uYW1lKTtcclxuICAgIHNldEZvdW5kU3R1ZGVudChzdHVkZW50KTtcclxuICAgIHNldFRhYigwKTtcclxuICB9O1xyXG5cclxuICAvLyBMZWRnZXIgRmlsdGVyZWQgbGlzdFxyXG4gIGNvbnN0IGxlZGdlckRhdGEgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBsaXN0ID0gU1RVREVOVFMubWFwKChzKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1ldGEgPSBzdHVkZW50UmFua3Nbcy5yb2xsTm9dO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnMsXHJcbiAgICAgICAgcjE6IG1ldGEucjEsXHJcbiAgICAgICAgcjI6IG1ldGEucjIsXHJcbiAgICAgICAgcmM6IG1ldGEucmMsXHJcbiAgICAgICAgY2dwYTogbWV0YS5jZ3BhXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBOYW1lIC8gUm9sbCBTZWFyY2hcclxuICAgIGlmIChsZWRnZXJTZWFyY2gudHJpbSgpKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gbGVkZ2VyU2VhcmNoLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcihcclxuICAgICAgICAocykgPT4gcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8IHMucm9sbE5vLmluY2x1ZGVzKHF1ZXJ5KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXR1cyBGaWx0ZXJcclxuICAgIGlmIChsZWRnZXJTdGF0dXMgIT09IFwiQUxMXCIpIHtcclxuICAgICAgaWYgKHNlbUNvbnRleHQgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKChzKSA9PiBzLnNlbTEucmVzdWx0LmluY2x1ZGVzKGxlZGdlclN0YXR1cykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbUNvbnRleHQgPT09IFwiMlwiKSB7XHJcbiAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKChzKSA9PiBzLnNlbTIgJiYgcy5zZW0yLnJlc3VsdC5pbmNsdWRlcyhsZWRnZXJTdGF0dXMpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDdW11bGF0aXZlIHBhc3NlZCBpZiBib3RoIGFyZSBwYXNzZWRcclxuICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKHMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHBhc3MxID0gcy5zZW0xLnJlc3VsdC5pbmNsdWRlcyhcIlBBU1NFRFwiKTtcclxuICAgICAgICAgIGNvbnN0IHBhc3MyID0gcy5zZW0yID8gcy5zZW0yLnJlc3VsdC5pbmNsdWRlcyhcIlBBU1NFRFwiKSA6IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKGxlZGdlclN0YXR1cyA9PT0gXCJQQVNTRURcIikgcmV0dXJuIHBhc3MxICYmIHBhc3MyO1xyXG4gICAgICAgICAgcmV0dXJuICFwYXNzMSB8fCAhcGFzczI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTb3J0aW5nXHJcbiAgICBsaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGxlZGdlclNvcnQgPT09IFwic2dwYVwiKSB7XHJcbiAgICAgICAgaWYgKHNlbUNvbnRleHQgPT09IFwiMVwiKSByZXR1cm4gYi5zZW0xLnNncGEgLSBhLnNlbTEuc2dwYTtcclxuICAgICAgICBpZiAoc2VtQ29udGV4dCA9PT0gXCIyXCIpIHJldHVybiAoYi5zZW0yPy5zZ3BhIHx8IDApIC0gKGEuc2VtMj8uc2dwYSB8fCAwKTtcclxuICAgICAgICByZXR1cm4gYi5jZ3BhIC0gYS5jZ3BhO1xyXG4gICAgICB9IGVsc2UgaWYgKGxlZGdlclNvcnQgPT09IFwibmFtZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVkZ2VyU29ydCA9PT0gXCJyb2xsXCIpIHtcclxuICAgICAgICByZXR1cm4gYS5yb2xsTm8ubG9jYWxlQ29tcGFyZShiLnJvbGxObyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmFuayBzb3J0XHJcbiAgICAgICAgaWYgKHNlbUNvbnRleHQgPT09IFwiMVwiKSByZXR1cm4gYS5yMSAtIGIucjE7XHJcbiAgICAgICAgaWYgKHNlbUNvbnRleHQgPT09IFwiMlwiKSB7XHJcbiAgICAgICAgICBpZiAoIWEuc2VtMikgcmV0dXJuIDE7XHJcbiAgICAgICAgICBpZiAoIWIuc2VtMikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgcmV0dXJuIGEucjIgLSBiLnIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYS5yYyAtIGIucmM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH0sIFtsZWRnZXJTZWFyY2gsIGxlZGdlclN0YXR1cywgbGVkZ2VyU29ydCwgc2VtQ29udGV4dCwgc3R1ZGVudFJhbmtzXSk7XHJcblxyXG4gIC8vIFRvcHBlcnMgQ2FsY3VsYXRpb25cclxuICBjb25zdCB0b3BwZXJzTGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IGxpc3QgPSBTVFVERU5UUy5tYXAoKHMpID0+ICh7XHJcbiAgICAgIC4uLnMsXHJcbiAgICAgIGNncGE6IHN0dWRlbnRSYW5rc1tzLnJvbGxOb10uY2dwYSxcclxuICAgICAgcjE6IHN0dWRlbnRSYW5rc1tzLnJvbGxOb10ucjEsXHJcbiAgICAgIHIyOiBzdHVkZW50UmFua3Nbcy5yb2xsTm9dLnIyLFxyXG4gICAgICByYzogc3R1ZGVudFJhbmtzW3Mucm9sbE5vXS5yY1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChzZW1Db250ZXh0ID09PSBcIjFcIikge1xyXG4gICAgICBpZiAodG9wcGVyU3ViamVjdCA9PT0gXCJncmFuZFwiKSB7XHJcbiAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiBiLnNlbTEuZ3JhbmQgLSBhLnNlbTEuZ3JhbmQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3Quc29ydCgoYSwgYikgPT4gKGIuc2VtMVt0b3BwZXJTdWJqZWN0XT8uWzJdIHx8IDApIC0gKGEuc2VtMVt0b3BwZXJTdWJqZWN0XT8uWzJdIHx8IDApKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzZW1Db250ZXh0ID09PSBcIjJcIikge1xyXG4gICAgICAvLyBGaWx0ZXIgb3V0IHN0dWRlbnRzIHdpdGhvdXQgc2VtMlxyXG4gICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKHMpID0+IHMuc2VtMiAhPT0gbnVsbCk7XHJcbiAgICAgIGlmICh0b3BwZXJTdWJqZWN0ID09PSBcImdyYW5kXCIpIHtcclxuICAgICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGIuc2VtMi5ncmFuZCAtIGEuc2VtMi5ncmFuZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiAoYi5zZW0yW3RvcHBlclN1YmplY3RdPy5bMl0gfHwgMCkgLSAoYS5zZW0yW3RvcHBlclN1YmplY3RdPy5bMl0gfHwgMCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDdW11bGF0aXZlOiBzb3J0IGJ5IENHUEFcclxuICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiBiLmNncGEgLSBhLmNncGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaXN0LnNsaWNlKDAsIDEwKTtcclxuICB9LCBbc2VtQ29udGV4dCwgdG9wcGVyU3ViamVjdCwgc3R1ZGVudFJhbmtzXSk7XHJcblxyXG4gIC8vIEFuYWx5dGljcyBDb21wdXRhdGlvbnNcclxuICBjb25zdCBzdGF0cyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgblRvdGFsID0gU1RVREVOVFMubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2l0aFNlbTIgPSBTVFVERU5UUy5maWx0ZXIoKHMpID0+IHMuc2VtMiAhPT0gbnVsbCk7XHJcbiAgICBjb25zdCBuU2VtMiA9IHdpdGhTZW0yLmxlbmd0aDtcclxuXHJcbiAgICAvLyBTZW0gMSBTdGF0c1xyXG4gICAgY29uc3QgczFQYXNzZWQgPSBTVFVERU5UUy5maWx0ZXIoKHMpID0+IHMuc2VtMS5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIikpLmxlbmd0aDtcclxuICAgIGNvbnN0IHMxQXZnU2dwYSA9IHBhcnNlRmxvYXQoKFNUVURFTlRTLnJlZHVjZSgoYSwgcykgPT4gYSArIHMuc2VtMS5zZ3BhLCAwKSAvIG5Ub3RhbCkudG9GaXhlZCgyKSk7XHJcbiAgICBjb25zdCBzMUF2Z0dyYW5kID0gTWF0aC5yb3VuZChTVFVERU5UUy5yZWR1Y2UoKGEsIHMpID0+IGEgKyBzLnNlbTEuZ3JhbmQsIDApIC8gblRvdGFsKTtcclxuICAgIGNvbnN0IHMxSGlnaGVzdCA9IE1hdGgubWF4KC4uLlNUVURFTlRTLm1hcCgocykgPT4gcy5zZW0xLmdyYW5kKSk7XHJcblxyXG4gICAgLy8gU2VtIDIgU3RhdHNcclxuICAgIGNvbnN0IHMyUGFzc2VkID0gd2l0aFNlbTIuZmlsdGVyKChzKSA9PiBzLnNlbTIucmVzdWx0LmluY2x1ZGVzKFwiUEFTU0VEXCIpKS5sZW5ndGg7XHJcbiAgICBjb25zdCBzMkF2Z1NncGEgPSBuU2VtMiA+IDAgPyBwYXJzZUZsb2F0KCh3aXRoU2VtMi5yZWR1Y2UoKGEsIHMpID0+IGEgKyBzLnNlbTIuc2dwYSwgMCkgLyBuU2VtMikudG9GaXhlZCgyKSkgOiAwO1xyXG4gICAgY29uc3QgczJBdmdHcmFuZCA9IG5TZW0yID4gMCA/IE1hdGgucm91bmQod2l0aFNlbTIucmVkdWNlKChhLCBzKSA9PiBhICsgcy5zZW0yLmdyYW5kLCAwKSAvIG5TZW0yKSA6IDA7XHJcbiAgICBjb25zdCBzMkhpZ2hlc3QgPSBuU2VtMiA+IDAgPyBNYXRoLm1heCguLi53aXRoU2VtMi5tYXAoKHMpID0+IHMuc2VtMi5ncmFuZCkpIDogMDtcclxuXHJcbiAgICAvLyBDdW11bGF0aXZlIFN0YXRzXHJcbiAgICBjb25zdCBib3RoUGFzc2VkID0gd2l0aFNlbTIuZmlsdGVyKChzKSA9PiBzLnNlbTEucmVzdWx0LmluY2x1ZGVzKFwiUEFTU0VEXCIpICYmIHMuc2VtMi5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIikpLmxlbmd0aDtcclxuICAgIGNvbnN0IGFsbENncGEgPSBTVFVERU5UUy5tYXAoKHMpID0+IHN0dWRlbnRSYW5rc1tzLnJvbGxOb10uY2dwYSk7XHJcbiAgICBjb25zdCBhdmdDZ3BhID0gcGFyc2VGbG9hdCgoYWxsQ2dwYS5yZWR1Y2UoKGEsIHYpID0+IGEgKyB2LCAwKSAvIG5Ub3RhbCkudG9GaXhlZCgyKSk7XHJcbiAgICBjb25zdCBoaWdoZXN0Q2dwYSA9IE1hdGgubWF4KC4uLmFsbENncGEpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5Ub3RhbCxcclxuICAgICAgblNlbTIsXHJcbiAgICAgIHMxOiB7IHBhc3NlZDogczFQYXNzZWQsIGF2Z1NncGE6IHMxQXZnU2dwYSwgYXZnR3JhbmQ6IHMxQXZnR3JhbmQsIGhpZ2hlc3Q6IHMxSGlnaGVzdCB9LFxyXG4gICAgICBzMjogeyBwYXNzZWQ6IHMyUGFzc2VkLCBhdmdTZ3BhOiBzMkF2Z1NncGEsIGF2Z0dyYW5kOiBzMkF2Z0dyYW5kLCBoaWdoZXN0OiBzMkhpZ2hlc3QgfSxcclxuICAgICAgY3VtOiB7IHBhc3NlZDogYm90aFBhc3NlZCwgYXZnQ2dwYSwgaGlnaGVzdDogaGlnaGVzdENncGEgfVxyXG4gICAgfTtcclxuICB9LCBbc3R1ZGVudFJhbmtzXSk7XHJcblxyXG4gIC8vIFN1YmplY3QgQXZlcmFnZXNcclxuICBjb25zdCBzdWJqZWN0QXZlcmFnZXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChzZW1Db250ZXh0ID09PSBcIjFcIikge1xyXG4gICAgICByZXR1cm4gU1VCSkVDVFNfU0VNMS5tYXAoKHN1YikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlcyA9IFNUVURFTlRTLm1hcCgocykgPT4gcy5zZW0xW3N1Yi5jb2RlXT8uWzJdIHx8IDApLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgICBjb25zdCBhdmcgPSBzY29yZXMubGVuZ3RoID4gMCA/IChzY29yZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBzY29yZXMubGVuZ3RoKS50b0ZpeGVkKDEpIDogXCIwXCI7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3ViLCBhdmc6IHBhcnNlRmxvYXQoYXZnKSB9O1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoc2VtQ29udGV4dCA9PT0gXCIyXCIpIHtcclxuICAgICAgY29uc3Qgd2l0aFNlbTIgPSBTVFVERU5UUy5maWx0ZXIoKHMpID0+IHMuc2VtMiAhPT0gbnVsbCk7XHJcbiAgICAgIHJldHVybiBTVUJKRUNUU19TRU0yLm1hcCgoc3ViKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVzID0gd2l0aFNlbTIubWFwKChzKSA9PiBzLnNlbTJbc3ViLmNvZGVdPy5bMl0gfHwgMCkuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgICAgIGNvbnN0IGF2ZyA9IHNjb3Jlcy5sZW5ndGggPiAwID8gKHNjb3Jlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIHNjb3Jlcy5sZW5ndGgpLnRvRml4ZWQoMSkgOiBcIjBcIjtcclxuICAgICAgICByZXR1cm4geyAuLi5zdWIsIGF2ZzogcGFyc2VGbG9hdChhdmcpIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sIFtzZW1Db250ZXh0XSk7XHJcblxyXG4gIC8vIExheW91dCBQYWRkaW5nc1xyXG4gIGNvbnN0IHB4ID0gaXNNb2JpbGUgPyAxNiA6IDI4O1xyXG5cclxuICAvLyBHcmFkZSBEaXN0cmlidXRpb24gQ291bnRzXHJcbiAgY29uc3QgZ3JhZGVEaXN0cmlidXRpb24gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGRpc3QgPSB7IDE6IFswLDAsMCwwLDAsMF0sIDI6IFswLDAsMCwwLDAsMF0sIGN1bTogWzAsMCwwLDAsMCwwXSB9O1xyXG4gICAgY29uc3QgZ2V0QmFuZEluZGV4ID0gKGdwYSkgPT4ge1xyXG4gICAgICBpZiAoZ3BhID49IDkpIHJldHVybiAwO1xyXG4gICAgICBpZiAoZ3BhID49IDgpIHJldHVybiAxO1xyXG4gICAgICBpZiAoZ3BhID49IDcpIHJldHVybiAyO1xyXG4gICAgICBpZiAoZ3BhID49IDYpIHJldHVybiAzO1xyXG4gICAgICBpZiAoZ3BhID49IDUpIHJldHVybiA0O1xyXG4gICAgICByZXR1cm4gNTtcclxuICAgIH07XHJcblxyXG4gICAgU1RVREVOVFMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICBkaXN0WzFdW2dldEJhbmRJbmRleChzLnNlbTEuc2dwYSldKys7XHJcbiAgICAgIGlmIChzLnNlbTIpIHtcclxuICAgICAgICBkaXN0WzJdW2dldEJhbmRJbmRleChzLnNlbTIuc2dwYSldKys7XHJcbiAgICAgIH1cclxuICAgICAgZGlzdC5jdW1bZ2V0QmFuZEluZGV4KHN0dWRlbnRSYW5rc1tzLnJvbGxOb10uY2dwYSldKys7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlzdDtcclxuICB9LCBbc3R1ZGVudFJhbmtzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBDLmJnLFxyXG4gICAgICBjb2xvcjogQy50ZXh0LFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgXCItLWZvY3VzLWJvcmRlclwiOiBDLmdvbGQsXHJcbiAgICAgIFwiLS1mb2N1cy1yaW5nXCI6IGRhcmsgPyBcInJnYmEoOTQsIDEwNiwgMjEwLCAwLjIpXCIgOiBcInJnYmEoOTQsIDEwNiwgMjEwLCAwLjEpXCJcclxuICAgIH19PlxyXG4gICAgICBcclxuICAgICAgey8qIOKUgOKUgCBIRUFERVIgKFRyYW5zbHVjZW50IFRvcCBOYXZpZ2F0aW9uKSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XHJcbiAgICAgIDxoZWFkZXIgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrID8gXCJyZ2JhKDEsIDEsIDIsIDAuODUpXCIgOiBcInJnYmEoMjUwLCAyNTAsIDI1MSwgMC44NSlcIixcclxuICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInN0aWNreVwiLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICB6SW5kZXg6IDUwLFxyXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcclxuICAgICAgICBXZWJraXRCYWNrZHJvcEZpbHRlcjogXCJibHVyKDEycHgpXCJcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogMTIwMCwgbWFyZ2luOiBcIjAgYXV0b1wiLCBwYWRkaW5nOiBgMTJweCAke3B4fXB4YCwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMTIgfX0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgZ2FwOiAxMiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxMiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5zdXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJIaX1gLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IEMuZ29sZFxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgQlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV5ZWJyb3dcIiBzdHlsZT17eyBmb250U2l6ZTogaXNNb2JpbGUgPyA4IDogOSwgY29sb3I6IEMuZGltLCBmb250V2VpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEpoYXJraGFuZCBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctc2VjdGlvblwiIHN0eWxlPXt7IGZvbnRTaXplOiBpc01vYmlsZSA/IDE0IDogMTcsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMudGV4dCwgbWFyZ2luOiBcIjFweCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQkNBIEFjYWRlbWljIFJlc3VsdCBQb3J0YWxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFRoZW1lIFRvZ2dsZSBTd2l0Y2ggKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fT5cclxuICAgICAgICAgICAgICB7KGZvdW5kU3R1ZGVudCB8fCB0YWIgIT09IDApICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZvdW5kU3R1ZGVudChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSb2xsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoRXJyb3IoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFiKDApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMuc3VyZmFjZSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEMudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjJzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpXCJcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVySGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBDLnJhaXNlZDtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gQy5zdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlNlYXJjaCBOZXcgU3R1ZGVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyLjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjExXCIgY3k9XCIxMVwiIHI9XCI4XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMjFcIiB4Mj1cIjE2LjY1XCIgeTI9XCIxNi42NVwiPjwvbGluZT5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhcmsoZCA9PiAhZCl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzQsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5zdXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBDLnRleHRcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVySGk7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gQy5yYWlzZWQ7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBDLmJvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBDLnN1cmZhY2U7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RhcmsgPyBcIkxpZ2h0IE1vZGVcIiA6IFwiRGFyayBNb2RlXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhcmsgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjIuMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PHBhdGggZD1cIk0xMiAxdjJNMTIgMjF2Mk00LjIyIDQuMjJsMS40MiAxLjQyTTE4LjM2IDE4LjM2bDEuNDIgMS40Mk0xIDEyaDJNMjEgMTJoMk00LjIyIDE5Ljc4bDEuNDItMS40Mk0xOC4zNiA1LjY0bDEuNDItMS40MlwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyLjJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxMi43OUE5IDkgMCAxIDEgMTEuMjEgM2E3IDcgMCAwIDAgOS43OSA5Ljc5elwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBTdWItaGVhZGVyIENvbnRyb2xzOiBTZW1lc3RlciBTd2l0Y2ggKyBUYWIgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBpc01vYmlsZSA/IFwiY29sdW1uXCIgOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IGlzTW9iaWxlID8gXCJzdHJldGNoXCIgOiBcImNlbnRlclwiLCBnYXA6IDEwLCBib3JkZXJUb3A6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBwYWRkaW5nVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBTZW1lc3RlciBzZWxlY3RvciBjb250ZXh0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMuc3VyZmFjZSxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgIGdhcDogMlxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgeyBpZDogXCIxXCIsIGxhYmVsOiBcIlNlbWVzdGVyIDFcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogXCIyXCIsIGxhYmVsOiBcIlNlbWVzdGVyIDJcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogXCJjdW11bGF0aXZlXCIsIGxhYmVsOiBcIkN1bXVsYXRpdmUgLyBZZWFyIDFcIiB9XHJcbiAgICAgICAgICAgICAgXS5tYXAoKHMpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtzLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VtQ29udGV4dChzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb3BwZXJTdWJqZWN0KFwiZ3JhbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCAxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3NlbUNvbnRleHQgPT09IHMuaWQgPyBDLmJvcmRlciA6IFwidHJhbnNwYXJlbnRcIn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNlbUNvbnRleHQgPT09IHMuaWQgPyBDLnJhaXNlZCA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2VtQ29udGV4dCA9PT0gcy5pZCA/IEMudGV4dCA6IEMubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSlcIlxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIFRhYnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMiwgb3ZlcmZsb3dYOiBcImF1dG9cIiwgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAuLi4oZm91bmRTdHVkZW50ID8gW3sgaWQ6IDAsIGxhYmVsOiBcIlJlcG9ydCBDYXJkXCIgfV0gOiBbXSksXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAxLCBsYWJlbDogXCJUb3BwZXJzXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDIsIGxhYmVsOiBcIkNsYXNzIEFuYWx5dGljc1wiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAzLCBsYWJlbDogXCJTdHVkZW50IExlZGdlclwiIH1cclxuICAgICAgICAgICAgICBdLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYih0LmlkKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCAxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RhYiA9PT0gdC5pZCA/IEMuYm9yZGVyIDogXCJ0cmFuc3BhcmVudFwifWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGFiID09PSB0LmlkID8gQy5zdXJmYWNlIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0YWIgPT09IHQuaWQgPyBDLnRleHQgOiBDLm11dGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogNixcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpXCJcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclRhYkljb24odC5pZCwgdGFiID09PSB0LmlkLCBDKX1cclxuICAgICAgICAgICAgICAgICAge3QubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgey8qIOKUgOKUgCBNQUlOIENPTlRFTlQgQVJFQSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XHJcbiAgICAgIDxtYWluIHN0eWxlPXt7IGZsZXg6IDEsIG1heFdpZHRoOiAxMjAwLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiwgcGFkZGluZzogYDI0cHggJHtweH1weCA4MHB4YCwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuXHJcbiAgICAgICAgey8qIOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkCBUQUJTIDA6IFNFQVJDSCBSRVNVTFQg4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQICovfVxyXG4gICAgICAgIHt0YWIgPT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogMTIwMCwgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDIwIH19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIElucHV0IEZvcm0gQ2FyZCAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogODAwLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZCB0aGVtZT17Q30gY2xhc3NOYW1lPVwiZ3NhcC1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBpc01vYmlsZSA/IDIwIDogMjggfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0IH19Pkxvb2t1cCBBY2FkZW1pYyBSZWNvcmRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjRweCAwIDBcIiwgZm9udFNpemU6IDEzLCBjb2xvcjogQy5tdXRlZCB9fT5TZWFyY2ggcmVzdWx0cyBpbnN0YW50bHkgdXNpbmcgZWl0aGVyIHVuaXZlcnNpdHkgUm9sbCBOdW1iZXIgb3IgU3R1ZGVudCBOYW1lLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGlzTW9iaWxlID8gXCIxZnJcIiA6IFwiMWZyIGF1dG8gMWZyXCIsIGFsaWduSXRlbXM6IFwiZW5kXCIsIGdhcDogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGhlbWU9e0N9PlVuaXZlcnNpdHkgUm9sbCBObzwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17Q31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb2xsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb2xsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiAyNDAxMzU5MDAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBlLmtleSA9PT0gXCJFbnRlclwiICYmIGhhbmRsZVNlYXJjaCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Um9sbEZvY3VzZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0Um9sbEZvY3VzZWQoZmFsc2UpLCAyMDApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3JvbGxGb2N1c2VkICYmIHJvbGxTdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMuc3VyZmFjZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJIaX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMTBweCAyNXB4IC01cHggcmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2Via2l0QmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMnB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb2xsU3VnZ2VzdGlvbnMubWFwKChzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJDbGFzcyA9IGdldENoYXJhY3RlckNsYXNzKHN0LnNlbTIgPyBzdC5zZW0yLnNncGEgOiBzdC5zZW0xLnNncGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3Qucm9sbE5vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHNlbGVjdFN1Z2dlc3RlZFN0dWRlbnQoc3QsIFwicm9sbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMC4yc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiAoZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBDLnJhaXNlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IChlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5yYWlzZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0QXZhdGFyVXJsKHN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtaW5XaWR0aDogMCwgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6IDEyLCBjb2xvcjogQy50ZXh0LCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6IEMubXV0ZWQsIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3Qucm9sbE5vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNoYXJDbGFzcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtjaGFyQ2xhc3MuY29sb3J9MzBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGAke2NoYXJDbGFzcy5jb2xvcn0xMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIycHggNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMdmwge01hdGguZmxvb3IoKHN0LnNlbTIgPyBzdC5zZW0yLnNncGEgOiBzdC5zZW0xLnNncGEpICogMTApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmdCb3R0b206IDEwLCBmb250U2l6ZTogMTEsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgT1JcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRoZW1lPXtDfT5TdHVkZW50IE5hbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e0N9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gU3VtaXQgR2hvc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBoYW5kbGVTZWFyY2goKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldE5hbWVGb2N1c2VkKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldE5hbWVGb2N1c2VkKGZhbHNlKSwgMjAwKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lRm9jdXNlZCAmJiBuYW1lU3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLnN1cmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVySGl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDEwcHggMjVweCAtNXB4IHJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEycHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZVN1Z2dlc3Rpb25zLm1hcCgoc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ2xhc3MgPSBnZXRDaGFyYWN0ZXJDbGFzcyhzdC5zZW0yID8gc3Quc2VtMi5zZ3BhIDogc3Quc2VtMS5zZ3BhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0LnJvbGxOb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHNlbGVjdFN1Z2dlc3RlZFN0dWRlbnQoc3QsIFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMC4yc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiAoZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBDLnJhaXNlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IChlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5yYWlzZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0QXZhdGFyVXJsKHN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtaW5XaWR0aDogMCwgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6IDEyLCBjb2xvcjogQy50ZXh0LCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6IEMubXV0ZWQsIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3Qucm9sbE5vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNoYXJDbGFzcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtjaGFyQ2xhc3MuY29sb3J9MzBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGAke2NoYXJDbGFzcy5jb2xvcn0xMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIycHggNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMdmwge01hdGguZmxvb3IoKHN0LnNlbTIgPyBzdC5zZW0yLnNncGEgOiBzdC5zZW0xLnNncGEpICogMTApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZ2FwOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgeyhyb2xsIHx8IG5hbWUpICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17Q31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Um9sbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm91bmRTdHVkZW50KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hFcnJvcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xlYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aGVtZT17Q30gb25DbGljaz17KCkgPT4gaGFuZGxlU2VhcmNoKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaCBTdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3NlYXJjaEVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4IDE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5yZWQgKyBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5yZWR9MzVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDLnJlZCxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBgMCAycHggOHB4ICR7Qy5yZWR9MDVgXHJcbiAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nSWNvbiBjb2xvcj17Qy5yZWR9IHNpemU9ezE1fSBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSZXN1bHRzIFJlcG9ydCBDYXJkICovfVxyXG4gICAgICAgICAgICB7Zm91bmRTdHVkZW50ICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxNiB9fSBjbGFzc05hbWU9XCJnc2FwLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIERvd25sb2FkIEFjdGlvbnMgVG9vbGJhciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGhlbWU9e0N9IG9uQ2xpY2s9eygpID0+IGhhbmRsZURvd25sb2FkU2NvcmVjYXJkKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyLjVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjcgMTAgMTIgMTUgMTcgMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiMTVcIiB4Mj1cIjEyXCIgeTI9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBTY29yZSBDYXJkXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0dWRlbnQgU3VtbWFyeSBQYW5lbCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5zdXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4IDI4cHhcIiwgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IGlzTW9iaWxlID8gXCJjb2x1bW5cIiA6IFwicm93XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogaXNNb2JpbGUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCIsIGdhcDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLnJhaXNlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0QXZhdGFyVXJsKGZvdW5kU3R1ZGVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmb3VuZFN0dWRlbnQubmFtZX0ncyBBdmF0YXJgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4LCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA3MDAsIGxldHRlclNwYWNpbmc6IDEuNSwgY29sb3I6IEMuZ29sZCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0dWRlbnQgR3JhZGUgU2hlZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGwgY29sb3I9e0MubXV0ZWR9PlNlc3Npb24gMjAyNOKAkzI1PC9QaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbjogXCI2cHggMCAycHhcIiwgZm9udFNpemU6IDI0LCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBDLnRleHQsIGxldHRlclNwYWNpbmc6IFwiLTAuMDFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3VuZFN0dWRlbnQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiwgZm9udFNpemU6IDEzLCBjb2xvcjogQy5tdXRlZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xsIE5vOiB7Zm91bmRTdHVkZW50LnJvbGxOb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb21wYXJhdGl2ZSBSYW5rIERpc3BsYXkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBnYXA6IGlzTW9iaWxlID8gMTIgOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogaXNNb2JpbGUgPyA4IDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBpc01vYmlsZSA/IFwic3BhY2UtYmV0d2VlblwiIDogXCJmbGV4LWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGlzTW9iaWxlID8gXCIxMDAlXCIgOiBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IGlzTW9iaWxlID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIsIGZsZXg6IGlzTW9iaWxlID8gXCIxXCIgOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDcwMCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fT5TZW0gMSBSYW5rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBDLnRleHQgfX0+I3tzdHVkZW50UmFua3NbZm91bmRTdHVkZW50LnJvbGxOb10ucjF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgPGRpdiBzdHlsZT17eyB3aWR0aDogMSwgYmFja2dyb3VuZDogQy5ib3JkZXIgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogaXNNb2JpbGUgPyBcImxlZnRcIiA6IFwicmlnaHRcIiwgZmxleDogaXNNb2JpbGUgPyBcIjFcIiA6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA5LCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNzAwLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19PlNlbSAyIFJhbms8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IGZvdW5kU3R1ZGVudC5zZW0yID8gQy50ZXh0IDogQy5kaW0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI3tzdHVkZW50UmFua3NbZm91bmRTdHVkZW50LnJvbGxOb10ucjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IWlzTW9iaWxlICYmIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDEsIGJhY2tncm91bmQ6IEMuYm9yZGVyIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IGlzTW9iaWxlID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIsIGZsZXg6IGlzTW9iaWxlID8gXCIxXCIgOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDcwMCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fT5ZZWFyIDEgUmFuazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogODAwLCBjb2xvcjogQy5nb2xkIH19PiN7c3R1ZGVudFJhbmtzW2ZvdW5kU3R1ZGVudC5yb2xsTm9dLnJjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIFN1bW1hcnkgTWV0cmljIFN0YXRzICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IFwicmVwZWF0KDIsIDFmcilcIiA6IFwicmVwZWF0KDQsIDFmcilcIiwgYmFja2dyb3VuZDogQy5ib3JkZXIsIGdhcDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogXCJTZW1lc3RlciAxIFNHUEFcIiwgdmFsOiBmb3VuZFN0dWRlbnQuc2VtMS5zZ3BhLCBzdWI6IFwiUGFzc1wiLCBjb2xvcjogQy50ZXh0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlbWVzdGVyIDIgU0dQQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWw6IGZvdW5kU3R1ZGVudC5zZW0yID8gZm91bmRTdHVkZW50LnNlbTIuc2dwYSA6IFwiTi9BXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogZm91bmRTdHVkZW50LnNlbTIgPyBcIlBhc3NcIiA6IFwiSGVsZCAvIE1pc3NpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZvdW5kU3R1ZGVudC5zZW0yID8gQy50ZXh0IDogQy5tdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiQ3VtdWxhdGl2ZSBDR1BBXCIsIHZhbDogc3R1ZGVudFJhbmtzW2ZvdW5kU3R1ZGVudC5yb2xsTm9dLmNncGEsIHN1YjogXCJPdmVyYWxsXCIsIGNvbG9yOiBDLmdvbGQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29tYmluZWQgVG90YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBgJHtmb3VuZFN0dWRlbnQuc2VtMS5ncmFuZCArIChmb3VuZFN0dWRlbnQuc2VtMiA/IGZvdW5kU3R1ZGVudC5zZW0yLmdyYW5kIDogMCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBgLyAke2ZvdW5kU3R1ZGVudC5zZW0yID8gMTYwMCA6IDgwMH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQy50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXS5tYXAoKG0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gc3R5bGU9e3sgYmFja2dyb3VuZDogQy5zdXJmYWNlLCBwYWRkaW5nOiAxOCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDcwMCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbGV0dGVyU3BhY2luZzogMC41LCBtYXJnaW5Cb3R0b206IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge20ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogODAwLCBjb2xvcjogbS5jb2xvciB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bS52YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IEMubXV0ZWQsIG1hcmdpblRvcDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5zdWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENvbXBhcmF0aXZlIFZpZXcgLyBTcGVjaWZpYyBTZW1lc3RlciBUYWJsZXMgJiBSYWRhciBDaGFydCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGlzTW9iaWxlID8gXCIxZnJcIiA6IFwiM2ZyIDJmclwiLFxyXG4gICAgICAgICAgICAgICAgICBnYXA6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICB7LyogTGVmdCBDb2x1bW46IFRhYmxlcyAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7KHNlbUNvbnRleHQgPT09IFwiMVwiIHx8IHNlbUNvbnRleHQgPT09IFwiY3VtdWxhdGl2ZVwiKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkIHRoZW1lPXtDfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDI0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMudGV4dCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbGV0dGVyU3BhY2luZzogMC41IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNlbWVzdGVyIDEgUmVzdWx0cyBTdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGNvbG9yPXtmb3VuZFN0dWRlbnQuc2VtMS5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIikgPyBDLmdyZWVuIDogQy5nb2xkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm91bmRTdHVkZW50LnNlbTEucmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogU2VtIDEgVGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1NVQkpFQ1RTX1NFTTEubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlRGF0YSA9IGZvdW5kU3R1ZGVudC5zZW0xW3N1Yi5jb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2NvcmVEYXRhKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtleHQsIHNlYywgdG90XSA9IHNjb3JlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZhbCA9IHN1Yi5tYXhGaW4gKyBzdWIubWF4SW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZSh0b3QsIG1heFZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnQ29sb3IgPSBncmFkZUNvbG9yKGdyYWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3ViLmNvZGV9IHN0eWxlPXt7IGJhY2tncm91bmQ6IEMucmFpc2VkLCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IDEyLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIsIGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy5nb2xkIH19PntzdWIuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0LCBmb250U2l6ZTogMTMsIG1hcmdpblRvcDogMiB9fT57c3ViLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMnB4IDZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBnQ29sb3IgKyBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2dDb2xvcn0zNWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwgMWZyKVwiLCBnYXA6IDYsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDExLCBib3JkZXJUb3A6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBwYWRkaW5nVG9wOiA4LCBtYXJnaW5Ub3A6IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBDLm11dGVkLCBmb250U2l6ZTogOSwgZm9udFdlaWdodDogNjAwIH19PkNSRURJVFM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogQy50ZXh0LCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblRvcDogMiB9fT57c3ViLmNyZWRpdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IEMubXV0ZWQsIGZvbnRTaXplOiA5LCBmb250V2VpZ2h0OiA2MDAgfX0+RVhURVJOQUw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogZXh0ID09PSBudWxsID8gQy5yZWQgOiBDLnRleHQsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luVG9wOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHQgIT09IG51bGwgPyBleHQgOiBcIkFiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBDLm11dGVkLCBmb250U2l6ZTogOSwgZm9udFdlaWdodDogNjAwIH19PklOVEVSTkFMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IEMudGV4dCwgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Ub3A6IDIgfX0+e3NlY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogQy5tdXRlZCwgZm9udFNpemU6IDksIGZvbnRXZWlnaHQ6IDYwMCB9fT5UT1RBTDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBDLnRleHQsIGZvbnRXZWlnaHQ6IDcwMCwgbWFyZ2luVG9wOiAyIH19Pnt0b3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBmb250U2l6ZTogMTMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAgfX0+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDYwMCB9fT5TdWJqZWN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5DcmVkaXRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogXCI4cHggMTJweFwiLCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNjAwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+RXh0ZXJuYWwgKDcwLzIwKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDYwMCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkludGVybmFsICgzMCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDYwMCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkdyYWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTVUJKRUNUU19TRU0xLm1hcCgoc3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcmVEYXRhID0gZm91bmRTdHVkZW50LnNlbTFbc3ViLmNvZGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2NvcmVEYXRhKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbZXh0LCBzZWMsIHRvdF0gPSBzY29yZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4VmFsID0gc3ViLm1heEZpbiArIHN1Yi5tYXhJbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZSh0b3QsIG1heFZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ0NvbG9yID0gZ3JhZGVDb2xvcihncmFkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtzdWIuY29kZX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQgfX0+e3N1Yi5jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTJweFwiLCBjb2xvcjogQy50ZXh0IH19PntzdWIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDEycHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogQy5tdXRlZCB9fT57c3ViLmNyZWRpdHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IGV4dCA9PT0gbnVsbCA/IEMucmVkIDogQy50ZXh0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHQgIT09IG51bGwgPyBleHQgOiBcIkFic2VudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDEycHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogQy50ZXh0IH19PntzZWN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0IH19Pnt0b3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIycHggNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBnQ29sb3IgKyBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtnQ29sb3J9MzVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dyYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogVGhlb3J5IC8gUHJhY3RpY2FsIHN1bW1hcnkgU2VtIDEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBnYXA6IDIwLCBtYXJnaW5Ub3A6IDE0LCBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA1MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VGhlb3J5OiA8c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBDLnRleHQgfX0+e2ZvdW5kU3R1ZGVudC5zZW0xLnRoZW9yeX0vNjAwPC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJhY3RpY2FsOiA8c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBDLnRleHQgfX0+e2ZvdW5kU3R1ZGVudC5zZW0xLnByYWN0aWNhbH0vMjAwPC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U0dQQTogPHN0cm9uZyBzdHlsZT17eyBjb2xvcjogQy5nb2xkIH19Pntmb3VuZFN0dWRlbnQuc2VtMS5zZ3BhfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFNlbWVzdGVyIDIgVGFibGUgRGlzcGxheSAqL31cclxuICAgICAgICAgICAgICAgIHsoc2VtQ29udGV4dCA9PT0gXCIyXCIgfHwgc2VtQ29udGV4dCA9PT0gXCJjdW11bGF0aXZlXCIpICYmIChcclxuICAgICAgICAgICAgICAgICAgPENhcmQgdGhlbWU9e0N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAxNCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0LCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBsZXR0ZXJTcGFjaW5nOiAwLjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtZXN0ZXIgMiBSZXN1bHRzIFN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZvdW5kU3R1ZGVudC5zZW0yID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGNvbG9yPXtmb3VuZFN0dWRlbnQuc2VtMi5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIikgPyBDLmdyZWVuIDogQy5nb2xkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3VuZFN0dWRlbnQuc2VtMi5yZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGNvbG9yPXtDLnJlZH0+SGVsZCAvIE5vIFJlY29yZHM8L1BpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm91bmRTdHVkZW50LnNlbTIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1NVQkpFQ1RTX1NFTTIubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY29yZURhdGEgPSBmb3VuZFN0dWRlbnQuc2VtMltzdWIuY29kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY29yZURhdGEpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtleHQsIHNlYywgdG90XSA9IHNjb3JlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhWYWwgPSBzdWIubWF4RmluICsgc3ViLm1heEludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkZSA9IGdldEdyYWRlKHRvdCwgbWF4VmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnQ29sb3IgPSBncmFkZUNvbG9yKGdyYWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWIuY29kZX0gc3R5bGU9e3sgYmFja2dyb3VuZDogQy5yYWlzZWQsIGJvcmRlclJhZGl1czogOCwgcGFkZGluZzogMTIsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiwgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLmdvbGQgfX0+e3N1Yi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0LCBmb250U2l6ZTogMTMsIG1hcmdpblRvcDogMiB9fT57c3ViLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMnB4IDZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ0NvbG9yICsgXCIxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Z0NvbG9yfTM1YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtncmFkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCg0LCAxZnIpXCIsIGdhcDogNiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMTEsIGJvcmRlclRvcDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIHBhZGRpbmdUb3A6IDgsIG1hcmdpblRvcDogNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogQy5tdXRlZCwgZm9udFNpemU6IDksIGZvbnRXZWlnaHQ6IDYwMCB9fT5DUkVESVRTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBDLnRleHQsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luVG9wOiAyIH19PntzdWIuY3JlZGl0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogQy5tdXRlZCwgZm9udFNpemU6IDksIGZvbnRXZWlnaHQ6IDYwMCB9fT5FWFRFUk5BTDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogZXh0ID09PSBudWxsID8gQy5yZWQgOiBDLnRleHQsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luVG9wOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0ICE9PSBudWxsID8gZXh0IDogXCJBYlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IEMubXV0ZWQsIGZvbnRTaXplOiA5LCBmb250V2VpZ2h0OiA2MDAgfX0+SU5URVJOQUw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IEMudGV4dCwgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Ub3A6IDIgfX0+e3NlY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogQy5tdXRlZCwgZm9udFNpemU6IDksIGZvbnRXZWlnaHQ6IDYwMCB9fT5UT1RBTDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogQy50ZXh0LCBmb250V2VpZ2h0OiA3MDAsIG1hcmdpblRvcDogMiB9fT57dG90fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgZm9udFNpemU6IDEzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogXCI4cHggMTJweFwiLCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNjAwIH19PkNvZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogXCI4cHggMTJweFwiLCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNjAwIH19PlN1YmplY3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5DcmVkaXRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDYwMCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkV4dGVybmFsICg3MC8yMCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogXCI4cHggMTJweFwiLCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNjAwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+SW50ZXJuYWwgKDMwKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5HcmFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1NVQkpFQ1RTX1NFTTIubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcmVEYXRhID0gZm91bmRTdHVkZW50LnNlbTJbc3ViLmNvZGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjb3JlRGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtleHQsIHNlYywgdG90XSA9IHNjb3JlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4VmFsID0gc3ViLm1heEZpbiArIHN1Yi5tYXhJbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyYWRlID0gZ2V0R3JhZGUodG90LCBtYXhWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnQ29sb3IgPSBncmFkZUNvbG9yKGdyYWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17c3ViLmNvZGV9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDEycHhcIiwgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogQy5tdXRlZCB9fT57c3ViLmNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTJweFwiLCBjb2xvcjogQy50ZXh0IH19PntzdWIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IEMubXV0ZWQgfX0+e3N1Yi5jcmVkaXRzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDEycHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogZXh0ID09PSBudWxsID8gQy5yZWQgOiBDLnRleHQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHQgIT09IG51bGwgPyBleHQgOiBcIkFic2VudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTJweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBDLnRleHQgfX0+e3NlY308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0IH19Pnt0b3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMTJweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIycHggNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ0NvbG9yICsgXCIxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2dDb2xvcn0zNWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVGhlb3J5IC8gUHJhY3RpY2FsIHN1bW1hcnkgU2VtIDIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZ2FwOiAyMCwgbWFyZ2luVG9wOiAxNCwgZm9udFNpemU6IDEyLCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGVvcnk6IDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IEMudGV4dCB9fT57Zm91bmRTdHVkZW50LnNlbTIudGhlb3J5fS82MDA8L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJhY3RpY2FsOiA8c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBDLnRleHQgfX0+e2ZvdW5kU3R1ZGVudC5zZW0yLnByYWN0aWNhbH0vMjAwPC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNHUEE6IDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IEMuZ29sZCB9fT57Zm91bmRTdHVkZW50LnNlbTIuc2dwYX08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzMHB4IDE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEMubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMucmFpc2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBkYXNoZWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1lc3RlciAyIHJlc3VsdHMgaGF2ZSBub3QgYmVlbiBkZWNsYXJlZC9wcm92aWRlZCBmb3IgdGhpcyBzdHVkZW50IHlldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiBSaWdodCBDb2x1bW46IEdhbWlmaWVkIFJhZGFyICYgUlBHIFN0YXRzICovfVxyXG4gICAgICAgICAgICAgICAgICA8UmFkYXJDaGFydCBzdHVkZW50PXtmb3VuZFN0dWRlbnR9IHNlbUNvbnRleHQ9e3NlbUNvbnRleHR9IHRoZW1lPXtDfSBpc01vYmlsZT17aXNNb2JpbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBIaWRkZW4gc2NvcmVjYXJkIHRlbXBsYXRlIGZvciBQTkcgZG93bmxvYWQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIi05OTk5cHhcIiwgdG9wOiBcIi05OTk5cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgcmVmPXtzY29yZWNhcmRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4MCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMTAxMDJcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgey8qIEFtYmllbnQgQmFja2dyb3VuZCBCbG9icyAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNTAwLCBoZWlnaHQ6IDUwMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBiYWNrZ3JvdW5kOiBcInJnYmEoOTQsIDEwNiwgMjEwLCAwLjEyKVwiLCBmaWx0ZXI6IFwiYmx1cig4MHB4KVwiLCB0b3A6IFwiLTE1MHB4XCIsIGxlZnQ6IFwiMjAwcHhcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzMDAsIGhlaWdodDogMzAwLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIGJhY2tncm91bmQ6IFwicmdiYSgzOSwgMTY2LCA2OCwgMC4wNilcIiwgZmlsdGVyOiBcImJsdXIoNjBweClcIiwgYm90dG9tOiBcIi04MHB4XCIsIHJpZ2h0OiBcIi04MHB4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiBHbGFzc21vcnBoaXNtIElubmVyIENhcmQgQ29udGFpbmVyICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxNSwgMTYsIDE3LCAwLjY1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgzNSwgMzcsIDQyLCAwLjYpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAyNHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzMnB4IDQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAxLjUsIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19PkpoYXJraGFuZCBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3k8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IFwiI2ZmZmZmZlwiLCBtYXJnaW5Ub3A6IDIsIGxldHRlclNwYWNpbmc6IDAuNSB9fT5CQ0EgUkVTVUxUIFBPUlRBTDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjODI4ZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDk0LCAxMDYsIDIxMCwgMC4zKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSg5NCwgMTA2LCAyMTAsIDAuMSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCAxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgT0ZGSUNJQUwgUkVQT1JUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogU3R1ZGVudCBQcm9maWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLCBtYXJnaW5Ub3A6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIERvd25sb2FkYWJsZSBTY29yZWNhcmQgQW5pbWUgQXZhdGFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEF2YXRhclVybChmb3VuZFN0dWRlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmb3VuZFN0dWRlbnQubmFtZX0ncyBBdmF0YXJgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDksIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IDEgfX0+U3R1ZGVudCBQcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IFwiI2ZmZmZmZlwiLCBtYXJnaW5Ub3A6IDIgfX0+e2ZvdW5kU3R1ZGVudC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCwgbWFyZ2luVG9wOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExLCBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUk9MTCBOTzogPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzgyOGZmZlwiLCBmb250V2VpZ2h0OiA2MDAgfX0+e2ZvdW5kU3R1ZGVudC5yb2xsTm99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rvd25sb2FkQ2xhc3MgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDgwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZG93bmxvYWRDbGFzcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtkb3dubG9hZENsYXNzLmNvbG9yfTQwYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgJHtkb3dubG9hZENsYXNzLmNvbG9yfTE1YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjJweCA2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGFzc0ljb24gY2xhc3NUaXRsZT17ZG93bmxvYWRDbGFzcy50aXRsZX0gY29sb3I9e2Rvd25sb2FkQ2xhc3MuY29sb3J9IHNpemU9ezl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZG93bmxvYWRDbGFzcy50aXRsZX0gKHtkb3dubG9hZENwfSBDUCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogUmFua3MgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMylcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpXCIsIGJvcmRlclJhZGl1czogOCwgcGFkZGluZzogXCI2cHggMTJweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IDcwMCB9fT5TZW0gMSBSYW5rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IFwiI2ZmZmZmZlwiLCBtYXJnaW5Ub3A6IDIgfX0+I3tzdHVkZW50UmFua3NbZm91bmRTdHVkZW50LnJvbGxOb10ucjF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOClcIiwgYm9yZGVyUmFkaXVzOiA4LCBwYWRkaW5nOiBcIjZweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA4LCBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgZm9udFdlaWdodDogNzAwIH19PlNlbSAyIFJhbms8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogODAwLCBjb2xvcjogZm91bmRTdHVkZW50LnNlbTIgPyBcIiNmZmZmZmZcIiA6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIsIG1hcmdpblRvcDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3VuZFN0dWRlbnQuc2VtMiA/IGAjJHtzdHVkZW50UmFua3NbZm91bmRTdHVkZW50LnJvbGxOb10ucjJ9YCA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOClcIiwgYm9yZGVyUmFkaXVzOiA4LCBwYWRkaW5nOiBcIjZweCAxMnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA4LCBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgZm9udFdlaWdodDogNzAwIH19PlllYXIgMSBSYW5rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IEMuZ29sZCwgbWFyZ2luVG9wOiAyIH19PiN7c3R1ZGVudFJhbmtzW2ZvdW5kU3R1ZGVudC5yb2xsTm9dLnJjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQm9keSBEZXRhaWxzIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAyNCwgbWFyZ2luVG9wOiAxOCwgZmxleDogMSwgYWxpZ25JdGVtczogXCJzdHJldGNoXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogTGVmdCBCb3g6IENvcmUgQWNhZGVtaWMgTWV0cmljcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDE1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIiwgZ2FwOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IDcwMCB9fT5TZW0gMSBTR1BBPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogODAwLCBjb2xvcjogXCIjZmZmZmZmXCIsIG1hcmdpblRvcDogMiB9fT57Zm91bmRTdHVkZW50LnNlbTEuc2dwYX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IDcwMCB9fT5TZW0gMiBTR1BBPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogODAwLCBjb2xvcjogZm91bmRTdHVkZW50LnNlbTIgPyBcIiNmZmZmZmZcIiA6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIsIG1hcmdpblRvcDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvdW5kU3R1ZGVudC5zZW0yID8gZm91bmRTdHVkZW50LnNlbTIuc2dwYSA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IDcwMCB9fT5DdW11bGF0aXZlIENHUEE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBDLmdvbGQsIG1hcmdpblRvcDogMiB9fT57c3R1ZGVudFJhbmtzW2ZvdW5kU3R1ZGVudC5yb2xsTm9dLmNncGF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDgsIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBmb250V2VpZ2h0OiA3MDAgfX0+WWVhciAxIFJlc3VsdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMuZ3JlZW4sIG1hcmdpblRvcDogMiB9fT5QQVNTRUQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KVwiLCBwYWRkaW5nVG9wOiA4LCBtYXJnaW5Ub3A6IDgsIGZvbnRTaXplOiAxMCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgTWFya3M6IDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZmZmZlwiIH19Pntmb3VuZFN0dWRlbnQuc2VtMS5ncmFuZCArIChmb3VuZFN0dWRlbnQuc2VtMiA/IGZvdW5kU3R1ZGVudC5zZW0yLmdyYW5kIDogMCl9PC9zdHJvbmc+IC8ge2ZvdW5kU3R1ZGVudC5zZW0yID8gMTYwMCA6IDgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIFJpZ2h0IEJveDogQ29tcGFjdCBTdWJqZWN0IEdyYWRlIFNoZWV0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMS4zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IDcwMCwgbWFyZ2luQm90dG9tOiA2LCBsZXR0ZXJTcGFjaW5nOiAwLjUgfX0+U3ViamVjdCBHcmFkZXMgU3VtbWFyeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLCBnYXA6IFwiNHB4IDEycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMaXN0IFNlbSAxIEdyYWRlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDcsIGNvbG9yOiBcIiM4MjhmZmZcIiwgZm9udFdlaWdodDogNzAwLCBtYXJnaW5Cb3R0b206IDIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0+U2VtZXN0ZXIgMTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7U1VCSkVDVFNfU0VNMS5tYXAoKHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrID0gZm91bmRTdHVkZW50LnNlbTFbcy5jb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hcmspIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZhbCA9IHMubWF4RmluICsgcy5tYXhJbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZShtYXJrWzJdLCBtYXhWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cy5jb2RlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBmb250U2l6ZTogOSwgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCIsIHBhZGRpbmc6IFwiMXB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLCBtYXhXaWR0aDogOTAgfX0+e3MubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IGdyYWRlQ29sb3IoZ3JhZGUpIH19PntncmFkZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMaXN0IFNlbSAyIEdyYWRlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDcsIGNvbG9yOiBcIiM4MjhmZmZcIiwgZm9udFdlaWdodDogNzAwLCBtYXJnaW5Cb3R0b206IDIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0+U2VtZXN0ZXIgMjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm91bmRTdHVkZW50LnNlbTIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCSkVDVFNfU0VNMi5tYXAoKHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBmb3VuZFN0dWRlbnQuc2VtMltzLmNvZGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXJrKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZhbCA9IHMubWF4RmluICsgcy5tYXhJbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkZSA9IGdldEdyYWRlKG1hcmtbMl0sIG1heFZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cy5jb2RlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBmb250U2l6ZTogOSwgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCIsIHBhZGRpbmc6IFwiMXB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsIG1heFdpZHRoOiA5MCB9fT57cy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBncmFkZUNvbG9yKGdyYWRlKSB9fT57Z3JhZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA4LCBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMilcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiLCBtYXJnaW5Ub3A6IDQgfX0+U2VtZXN0ZXIgMiByZXN1bHRzIGhlbGQuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZvb3RlciAmIFNpZ25hdHVyZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsIG1hcmdpblRvcDogMTgsIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KVwiLCBwYWRkaW5nVG9wOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDgsIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiLCBtYXhXaWR0aDogMzIwLCBsaW5lSGVpZ2h0OiAxLjMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogVGhpcyBzY29yZSBjYXJkIGlzIGRpZ2l0YWxseSBnZW5lcmF0ZWQgYnkgdGhlIEpVVCBCQ0EgZGVwYXJ0bWVudCBzeXN0ZW0uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWZXJpZnkgYXV0aGVudGljaXR5IHVzaW5nIHRoaXMgUm9sbCBOdW1iZXIgb24gdGhlIHBvcnRhbC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogU2lnbmF0dXJlIFBhbmVsICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAzMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IC0xNiwgbGVmdDogMTAsIHdpZHRoOiA4MCwgaGVpZ2h0OiAyMCwgcG9pbnRlckV2ZW50czogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDQwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjODI4ZmZmXCIgc3Ryb2tlV2lkdGg9XCIyLjVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHlsZT17eyBvcGFjaXR5OiAwLjc1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLDI1IFEzMCw1IDQ1LDIyIFQ3MCwxMCBUOTUsMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjZmZmZmZmXCIsIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiLCBwYWRkaW5nVG9wOiAzLCB3aWR0aDogODAsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IDAuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAtMTYsIGxlZnQ6IDEwLCB3aWR0aDogODAsIGhlaWdodDogMjAsIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEwMCA0MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzI3YTY0NFwiIHN0cm9rZVdpZHRoPVwiMi41XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3R5bGU9e3sgb3BhY2l0eTogMC43NSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LDI1IEMxNSwxMCAyNSw1IDQwLDI1IEM1MCwzNSA2MCwxMCA3NSwyNSBDODUsMzUgOTAsMjAgOTUsMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjZmZmZmZmXCIsIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiLCBwYWRkaW5nVG9wOiAzLCB3aWR0aDogODAsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IDAuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcmlmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Lyog4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQIFRBQlMgMTogQ0xBU1MgVE9QUEVSUyDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZAgKi99XHJcbiAgICAgICAge3RhYiA9PT0gMSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDI0IH19IGNsYXNzTmFtZT1cImdzYXAtZmFkZS1pblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIFRvcHBlcnMgRmlsdGVyIEJhciAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTQgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0IH19PkFjYWRlbWljIFRvcHBlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjRweCAwIDBcIiwgZm9udFNpemU6IDEzLCBjb2xvcjogQy5tdXRlZCB9fT5Ccm93c2UgdGhlIG91dHN0YW5kaW5nIHN0dWRlbnRzIG9mIHRoZSBjbGFzcyBieSBvdmVyYWxsIGFuZCBzdWJqZWN0LXdpc2UgbGlzdHMuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7LyogRHluYW1pYyBTdWJqZWN0IFNlbGVjdG9yIGJhc2VkIG9uIFNlbSBDb250ZXh0ICovfVxyXG4gICAgICAgICAgICAgIHtzZW1Db250ZXh0ICE9PSBcImN1bXVsYXRpdmVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0aGVtZT17Q30gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlN1YmplY3QgRmlsdGVyczo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e0N9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvcHBlclN1YmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BwZXJTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJncmFuZFwiPk92ZXJhbGwgR3JhbmQgVG90YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VtQ29udGV4dCA9PT0gXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gU1VCSkVDVFNfU0VNMS5tYXAoKHMpID0+IDxvcHRpb24ga2V5PXtzLmNvZGV9IHZhbHVlPXtzLmNvZGV9PntzLm5hbWV9ICh7cy5jb2RlfSk8L29wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFNVQkpFQ1RTX1NFTTIubWFwKChzKSA9PiA8b3B0aW9uIGtleT17cy5jb2RlfSB2YWx1ZT17cy5jb2RlfT57cy5uYW1lfSAoe3MuY29kZX0pPC9vcHRpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQb2RpdW0gKFRvcCAzIFZpc3VhbCBSZXByZXNlbnRhdGlvbikgKi99XHJcbiAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgdG9wcGVyc0xpc3QubGVuZ3RoID49IDMgJiYgdG9wcGVyU3ViamVjdCA9PT0gXCJncmFuZFwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgZ2FwOiAxNixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweCAwIDQwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0MuYm9yZGVyfWBcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsvKiAybmQgUGxhY2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpZXdTdHVkZW50KHRvcHBlcnNMaXN0WzFdKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3ICR7dG9wcGVyc0xpc3RbMV0ubmFtZX0ncyBQcm9maWxlYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogMTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLm11dGVkICsgXCIxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAycHggc29saWQgJHtDLm11dGVkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDgwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDZcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0LCBtYXhXaWR0aDogMTUwLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dG9wcGVyc0xpc3RbMV0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6IEMubXV0ZWQsIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIgfX0+e3RvcHBlcnNMaXN0WzFdLnJvbGxOb308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMuc3VyZmFjZSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcDogYDNweCBzb2xpZCAke0MubXV0ZWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4IDhweCAwIDBcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjgsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IEMudGV4dCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZW1Db250ZXh0ID09PSBcIjFcIiA/IHRvcHBlcnNMaXN0WzFdLnNlbTEuZ3JhbmQgOiBzZW1Db250ZXh0ID09PSBcIjJcIiA/IHRvcHBlcnNMaXN0WzFdLnNlbTIuZ3JhbmQgOiB0b3BwZXJzTGlzdFsxXS5jZ3BhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogQy5tdXRlZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZW1Db250ZXh0ID09PSBcImN1bXVsYXRpdmVcIiA/IFwiQ0dQQVwiIDogXCIvIDgwMCBNYXJrc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiAxc3QgUGxhY2UgKEdvbGQgUG9kaXVtIC0gdGFsbGVyIGFuZCBoaWdobGlnaHRlZCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpZXdTdHVkZW50KHRvcHBlcnNMaXN0WzBdKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3ICR7dG9wcGVyc0xpc3RbMF0ubmFtZX0ncyBQcm9maWxlYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogMTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLmdvbGQgKyBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke0MuZ29sZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQy5nb2xkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMTZweCAke0MuZ29sZH0zMGBcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogODAwLCBjb2xvcjogQy50ZXh0LCBtYXhXaWR0aDogMTgwLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dG9wcGVyc0xpc3RbMF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IEMubXV0ZWQsIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIgfX0+e3RvcHBlcnNMaXN0WzBdLnJvbGxOb308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMuc3VyZmFjZSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcDogYDRweCBzb2xpZCAke0MuZ29sZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHggOHB4IDAgMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGRhcmsgPyBcIjAgMCAzMHB4IHJnYmEoMTkyLCAxMzIsIDI1MiwgMC4xMilcIiA6IFwiMCA4cHggMzBweCByZ2JhKDEyNCwgNTgsIDIzNywgMC4wOClcIlxyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAzNiwgZm9udFdlaWdodDogOTAwLCBjb2xvcjogQy5nb2xkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbUNvbnRleHQgPT09IFwiMVwiID8gdG9wcGVyc0xpc3RbMF0uc2VtMS5ncmFuZCA6IHNlbUNvbnRleHQgPT09IFwiMlwiID8gdG9wcGVyc0xpc3RbMF0uc2VtMi5ncmFuZCA6IHRvcHBlcnNMaXN0WzBdLmNncGF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VtQ29udGV4dCA9PT0gXCJjdW11bGF0aXZlXCIgPyBcIkNHUEFcIiA6IFwiLyA4MDAgTWFya3NcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogM3JkIFBsYWNlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3U3R1ZGVudCh0b3BwZXJzTGlzdFsyXSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtgVmlldyAke3RvcHBlcnNMaXN0WzJdLm5hbWV9J3MgUHJvZmlsZWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IDEyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjYjQ1MzA5MTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjYjQ1MzA5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmNTllMGJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNlxyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLnRleHQsIG1heFdpZHRoOiAxNTAsIG92ZXJmbG93OiBcImhpZGRlblwiLCB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0b3BwZXJzTGlzdFsyXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogQy5tdXRlZCwgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiB9fT57dG9wcGVyc0xpc3RbMl0ucm9sbE5vfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5zdXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiBgM3B4IHNvbGlkICNiNDUzMDlgLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHggOHB4IDAgMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyNiwgZm9udFdlaWdodDogODAwLCBjb2xvcjogQy50ZXh0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbUNvbnRleHQgPT09IFwiMVwiID8gdG9wcGVyc0xpc3RbMl0uc2VtMS5ncmFuZCA6IHNlbUNvbnRleHQgPT09IFwiMlwiID8gdG9wcGVyc0xpc3RbMl0uc2VtMi5ncmFuZCA6IHRvcHBlcnNMaXN0WzJdLmNncGF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBDLm11dGVkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbUNvbnRleHQgPT09IFwiY3VtdWxhdGl2ZVwiID8gXCJDR1BBXCIgOiBcIi8gODAwIE1hcmtzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogTGlzdCBvZiByZW1haW5pbmcgdG9wIHN0dWRlbnRzICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEwIH19PlxyXG4gICAgICAgICAgICAgIDxMYWJlbCB0aGVtZT17Q30+VG9wcGVycyBMZWRnZXI8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIHt0b3BwZXJzTGlzdC5tYXAoKHN0LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzY29yZTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXg7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9wcGVyU3ViamVjdCA9PT0gXCJncmFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNjb3JlID0gc2VtQ29udGV4dCA9PT0gXCIxXCIgPyBzdC5zZW0xLmdyYW5kIDogc2VtQ29udGV4dCA9PT0gXCIyXCIgPyBzdC5zZW0yLmdyYW5kIDogc3QuY2dwYTtcclxuICAgICAgICAgICAgICAgICAgbWF4ID0gc2VtQ29udGV4dCA9PT0gXCJjdW11bGF0aXZlXCIgPyAxMCA6IDgwMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHNjb3JlID0gc2VtQ29udGV4dCA9PT0gXCIxXCIgPyBzdC5zZW0xW3RvcHBlclN1YmplY3RdPy5bMl0gfHwgMCA6IHN0LnNlbTJbdG9wcGVyU3ViamVjdF0/LlsyXSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICBtYXggPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17Q31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N0LnJvbGxOb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3U3R1ZGVudChzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiwgdHJhbnNpdGlvbjogXCJib3JkZXItY29sb3IgMC4yc1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3ICR7c3QubmFtZX0ncyBQcm9maWxlYH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDIwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgZ2FwOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4IDwgMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlkeCA9PT0gMCA/IEMuZ29sZCArIFwiMTVcIiA6IGlkeCA9PT0gMSA/IEMubXV0ZWQgKyBcIjE1XCIgOiBcIiNiNDUzMDkxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxLjVweCBzb2xpZCAke2lkeCA9PT0gMCA/IEMuZ29sZCA6IGlkeCA9PT0gMSA/IEMubXV0ZWQgOiBcIiNiNDUzMDlcIn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaWR4ID09PSAwID8gQy5nb2xkIDogaWR4ID09PSAxID8gQy50ZXh0IDogXCIjZjU5ZTBiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIsIGNvbG9yOiBDLm11dGVkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje2lkeCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVG9wcGVycyBMZWRnZXIgUm93IEF2YXRhciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLnJhaXNlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEF2YXRhclVybChzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3N0Lm5hbWV9J3MgQXZhdGFyYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTEsIGNvbG9yOiBDLm11dGVkLCBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLCBtYXJnaW5Ub3A6IDEgfX0+e3N0LnJvbGxOb308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogODAwLCBjb2xvcjogaWR4ID09PSAwID8gQy5nb2xkIDogQy50ZXh0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Njb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkIH19Pi97bWF4fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzTW9iaWxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBjb2xvcj17Qy5nb2xkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dQQS9DR1BBOiB7c2VtQ29udGV4dCA9PT0gXCIxXCIgPyBzdC5zZW0xLnNncGEgOiBzZW1Db250ZXh0ID09PSBcIjJcIiA/IHN0LnNlbTIuc2dwYSA6IHN0LmNncGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3ViamVjdC13aXNlIGF2ZXJhZ2VzIHN1bW1hcnkgY2hhcnRzICovfVxyXG4gICAgICAgICAgICB7c2VtQ29udGV4dCAhPT0gXCJjdW11bGF0aXZlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHRoZW1lPXtDfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAxNnB4XCIsIGZvbnRTaXplOiAxNCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0LCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBsZXR0ZXJTcGFjaW5nOiAwLjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0IEF2ZXJhZ2UgU2NvcmVzIChDbGFzcy13aWRlKVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJqZWN0QXZlcmFnZXMubWFwKChzdWIsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBkYXJrID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2MwODRmY1wiLCAvLyBWaWJyYW50IGxhdmVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjYTc4YmZhXCIsIC8vIE1lZGl1bSBsYXZlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzgxOGNmOFwiLCAvLyBQZXJpd2lua2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjNjM2NmYxXCIsIC8vIEluZGlnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzRmNDZlNVwiLCAvLyBEZWVwIGluZGlnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2Y0NzJiNlwiLCAvLyBSb3NlIHBpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNmYjcxODVcIiwgLy8gUGluayB3YXJuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMzhiZGY4XCIsIC8vIFNreSBibHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMmRkNGJmXCIgIC8vIFRlYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSA6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM3YzNhZWRcIiwgLy8gVmlvbGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjOGI1Y2Y2XCIsIC8vIFB1cnBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzRmNDZlNVwiLCAvLyBJbmRpZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiMyNTYzZWJcIiwgLy8gQmx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzFkNGVkOFwiLCAvLyBEZWVwIGJsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNkYjI3NzdcIiwgLy8gUGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2UxMWQ0OFwiLCAvLyBSb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMDI4NGM3XCIsIC8vIFNreSBibHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMGQ5NDg4XCIgIC8vIFRlYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGNvbG9yc1tpZHggJSBjb2xvcnMubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4VmFsID0gc3ViLm1heEZpbiArIHN1Yi5tYXhJbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBjdCA9ICgoc3ViLmF2ZyAvIG1heFZhbCkgKiAxMDApLnRvRml4ZWQoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWIuY29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGZvbnRTaXplOiAxMiwgbWFyZ2luQm90dG9tOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogQy50ZXh0LCBmb250V2VpZ2h0OiA1MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfSA8c3BhbiBzdHlsZT17eyBjb2xvcjogQy5tdXRlZCwgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiwgZm9udFNpemU6IDEwIH19Pih7c3ViLmNvZGV9KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBjIH19PntzdWIuYXZnfSAvIHttYXhWYWx9ICh7cGN0fSUpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA2LCBiYWNrZ3JvdW5kOiBDLnJhaXNlZCwgYm9yZGVyUmFkaXVzOiA5OSwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3NhcC1wcm9ncmVzcy1iYXJcIiBkYXRhLXBjdD17cGN0fSBzdHlsZT17eyB3aWR0aDogXCIwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kOiBjLCBib3JkZXJSYWRpdXM6IDk5IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Lyog4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQIFRBQlMgMjogQ0xBU1MgQU5BTFlUSUNTIOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkCAqL31cclxuICAgICAgICB7dGFiID09PSAyICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMjQgfX0gY2xhc3NOYW1lPVwiZ3NhcC1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy50ZXh0IH19PkNvaG9ydCBBbmFseXRpY3M8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCI0cHggMCAwXCIsIGZvbnRTaXplOiAxMywgY29sb3I6IEMubXV0ZWQgfX0+RGV0YWlsZWQgY29tcGFyYXRpdmUgcmVwb3J0IHNob3dpbmcgY2xhc3Mtd2lkZSBwZXJmb3JtYW5jZSBiZXR3ZWVuIFNlbWVzdGVycyAxIGFuZCAyLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogS2V5IENvbXBhcmlzb24gQ2FyZHMgR3JpZCAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogaXNNb2JpbGUgPyBcIjFmclwiIDogXCJyZXBlYXQoMywgMWZyKVwiLCBnYXA6IDE2IH19PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsvKiBQYXNzZWQgcmF0ZSBjb21wYXJlICovfVxyXG4gICAgICAgICAgICAgIDxDYXJkIHRoZW1lPXtDfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0aGVtZT17Q30+UGFzcyBQZXJjZW50YWdlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLCBnYXA6IDYsIG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDI4LCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBDLnRleHQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KChzdGF0cy5zMi5wYXNzZWQgLyBzdGF0cy5uU2VtMikgKiAxMDApLnRvRml4ZWQoMCl9JVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkIH19PlNlbSAyIFBhc3MgUmF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgbWFyZ2luVG9wOiAxNCwgcGFkZGluZ1RvcDogMTAsIGZvbnRTaXplOiAxMiwgY29sb3I6IEMubXV0ZWQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VtIDE6IHsoKHN0YXRzLnMxLnBhc3NlZCAvIHN0YXRzLm5Ub3RhbCkgKiAxMDApLnRvRml4ZWQoMCl9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogQy5ncmVlbiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIERpZmY6IHsoKChzdGF0cy5zMi5wYXNzZWQgLyBzdGF0cy5uU2VtMikgLSAoc3RhdHMuczEucGFzc2VkIC8gc3RhdHMublRvdGFsKSkgKiAxMDApLnRvRml4ZWQoMSl9JVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBTR1BBIGNvbXBhcmUgKi99XHJcbiAgICAgICAgICAgICAgPENhcmQgdGhlbWU9e0N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPExhYmVsIHRoZW1lPXtDfT5DbGFzcyBBdmVyYWdlIFNHUEE8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsIGdhcDogNiwgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjgsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6IEMuZ29sZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0cy5zMi5hdmdTZ3BhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkIH19PlNlbSAyIGF2ZXJhZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGJvcmRlclRvcDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIG1hcmdpblRvcDogMTQsIHBhZGRpbmdUb3A6IDEwLCBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlbSAxIEF2Zzoge3N0YXRzLnMxLmF2Z1NncGF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzdGF0cy5zMi5hdmdTZ3BhIC0gc3RhdHMuczEuYXZnU2dwYSA+PSAwID8gQy5ncmVlbiA6IEMucmVkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsdGE6IHsoc3RhdHMuczIuYXZnU2dwYSAtIHN0YXRzLnMxLmF2Z1NncGEpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgey8qIEhpZ2hlc3Qgc2NvcmUgY29tcGFyZSAqL31cclxuICAgICAgICAgICAgICA8Q2FyZCB0aGVtZT17Q30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGhlbWU9e0N9PkhpZ2hlc3QgU0dQQS9DR1BBPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLCBnYXA6IDYsIG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDI4LCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiBDLnRleHQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdHMuY3VtLmhpZ2hlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IEMubXV0ZWQgfX0+VG9wIENHUEEgKFllYXIgMSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGJvcmRlclRvcDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIG1hcmdpblRvcDogMTQsIHBhZGRpbmdUb3A6IDEwLCBmb250U2l6ZTogMTIsIGNvbG9yOiBDLm11dGVkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlbSAxIE1heDogOS4yNzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZW0gMiBNYXg6IDguMTg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBHUEEgRGlzdHJpYnV0aW9uIGNoYXJ0cyBzaWRlIGJ5IHNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGlzTW9iaWxlID8gXCIxZnJcIiA6IFwiMWZyIDFmclwiLCBnYXA6IDIwIH19PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxDYXJkIHRoZW1lPXtDfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjQgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDE2cHhcIiwgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLnRleHQsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IDAuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTZW1lc3RlciAxIEdQQSBEaXN0cmlidXRpb25cclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyBiYW5kOiBcIk91dHN0YW5kaW5nICg5LjArKVwiLCBjb3VudDogZ3JhZGVEaXN0cmlidXRpb25bMV1bMF0sIGNvbG9yOiBiYW5kQ29sb3JzWzBdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGJhbmQ6IFwiRXhjZWxsZW50ICg4LjDigJM4LjkpXCIsIGNvdW50OiBncmFkZURpc3RyaWJ1dGlvblsxXVsxXSwgY29sb3I6IGJhbmRDb2xvcnNbMV0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgYmFuZDogXCJWZXJ5IEdvb2QgKDcuMOKAkzcuOSlcIiwgY291bnQ6IGdyYWRlRGlzdHJpYnV0aW9uWzFdWzJdLCBjb2xvcjogYmFuZENvbG9yc1syXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBiYW5kOiBcIkdvb2QgKDYuMOKAkzYuOSlcIiwgY291bnQ6IGdyYWRlRGlzdHJpYnV0aW9uWzFdWzNdLCBjb2xvcjogYmFuZENvbG9yc1szXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBiYW5kOiBcIkF2ZXJhZ2UgKDUuMOKAkzUuOSlcIiwgY291bnQ6IGdyYWRlRGlzdHJpYnV0aW9uWzFdWzRdLCBjb2xvcjogYmFuZENvbG9yc1s0XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBiYW5kOiBcIkJlbG93IEF2ZXJhZ2UgKDwgNS4wKVwiLCBjb3VudDogZ3JhZGVEaXN0cmlidXRpb25bMV1bNV0sIGNvbG9yOiBiYW5kQ29sb3JzWzVdIH1cclxuICAgICAgICAgICAgICAgICAgICBdLm1hcCgoZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGN0ID0gKChnLmNvdW50IC8gc3RhdHMublRvdGFsKSAqIDEwMCkudG9GaXhlZCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtnLmJhbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgZm9udFNpemU6IDEyLCBtYXJnaW5Cb3R0b206IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogQy50ZXh0IH19PntnLmJhbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBjb2xvcjogZy5jb2xvciB9fT57Zy5jb3VudH0gc3R1ZGVudHMgKHtwY3R9JSk8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNiwgYmFja2dyb3VuZDogQy5yYWlzZWQsIGJvcmRlclJhZGl1czogOTksIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnc2FwLXByb2dyZXNzLWJhclwiIGRhdGEtcGN0PXtwY3R9IHN0eWxlPXt7IHdpZHRoOiBcIjAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmQ6IGcuY29sb3IsIGJvcmRlclJhZGl1czogOTkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgPENhcmQgdGhlbWU9e0N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyNCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgMTZweFwiLCBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMudGV4dCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbGV0dGVyU3BhY2luZzogMC41IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNlbWVzdGVyIDIgR1BBIERpc3RyaWJ1dGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGJhbmQ6IFwiT3V0c3RhbmRpbmcgKDkuMCspXCIsIGNvdW50OiBncmFkZURpc3RyaWJ1dGlvblsyXVswXSwgY29sb3I6IGJhbmRDb2xvcnNbMF0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgYmFuZDogXCJFeGNlbGxlbnQgKDguMOKAkzguOSlcIiwgY291bnQ6IGdyYWRlRGlzdHJpYnV0aW9uWzJdWzFdLCBjb2xvcjogYmFuZENvbG9yc1sxXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBiYW5kOiBcIlZlcnkgR29vZCAoNy4w4oCTNy45KVwiLCBjb3VudDogZ3JhZGVEaXN0cmlidXRpb25bMl1bMl0sIGNvbG9yOiBiYW5kQ29sb3JzWzJdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGJhbmQ6IFwiR29vZCAoNi4w4oCTNi45KVwiLCBjb3VudDogZ3JhZGVEaXN0cmlidXRpb25bMl1bM10sIGNvbG9yOiBiYW5kQ29sb3JzWzNdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGJhbmQ6IFwiQXZlcmFnZSAoNS4w4oCTNS45KVwiLCBjb3VudDogZ3JhZGVEaXN0cmlidXRpb25bMl1bNF0sIGNvbG9yOiBiYW5kQ29sb3JzWzRdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGJhbmQ6IFwiQmVsb3cgQXZlcmFnZSAoPCA1LjApXCIsIGNvdW50OiBncmFkZURpc3RyaWJ1dGlvblsyXVs1XSwgY29sb3I6IGJhbmRDb2xvcnNbNV0gfVxyXG4gICAgICAgICAgICAgICAgICAgIF0ubWFwKChnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwY3QgPSAoKGcuY291bnQgLyBzdGF0cy5uU2VtMikgKiAxMDApLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Zy5iYW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGZvbnRTaXplOiAxMiwgbWFyZ2luQm90dG9tOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IEMudGV4dCB9fT57Zy5iYW5kfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IGcuY29sb3IgfX0+e2cuY291bnR9IHN0dWRlbnRzICh7cGN0fSUpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDYsIGJhY2tncm91bmQ6IEMucmFpc2VkLCBib3JkZXJSYWRpdXM6IDk5LCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3NhcC1wcm9ncmVzcy1iYXJcIiBkYXRhLXBjdD17cGN0fSBzdHlsZT17eyB3aWR0aDogXCIwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kOiBnLmNvbG9yLCBib3JkZXJSYWRpdXM6IDk5IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBJbmRpdmlkdWFsIHN0dWRlbnQgdHJlbmRzIGNvbXBhcmlzb25zICovfVxyXG4gICAgICAgICAgICA8Q2FyZCB0aGVtZT17Q30+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyNCB9fT5cclxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDE2cHhcIiwgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLnRleHQsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IDAuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgSW5kaXZpZHVhbCBTdHVkZW50IFBlcmZvcm1hbmNlIFRyZW5kIChDR1BBIENoYXJ0KVxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcclxuICAgICAgICAgICAgICAgICAgZ2FwOiBpc01vYmlsZSA/IDYgOiAxMixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjAsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDgsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTRcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICB7U1RVREVOVFMubWFwKChzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNHcGEgPSBzdHVkZW50UmFua3Nbc3Qucm9sbE5vXS5jZ3BhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSBjR3BhICogMTI7IC8vIGhlaWdodCBpbiBwaXhlbHMgKDAgdG8gMTIwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbCA9IGNHcGEgPj0gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBDLmdvbGRcclxuICAgICAgICAgICAgICAgICAgICAgIDogY0dwYSA+PSA3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGRhcmsgPyBcIiM4MThjZjhcIiA6IFwiIzRmNDZlNVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNHcGEgPj0gNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKGRhcmsgPyBcIiM2MzY2ZjFcIiA6IFwiIzI1NjNlYlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogQy5yZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdC5yb2xsTm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtzdC5uYW1lfTogQ0dQQSAke2NHcGF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmlld1N0dWRlbnQoc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IGlzTW9iaWxlID8gMTggOiAyOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIC8vIEFsaWduIGVsZW1lbnRzIGluIGNlbnRlciBob3Jpem9udGFsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy5tdXRlZCwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogNCB9fT57Y0dwYX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnc2FwLWJhclwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBgJHtofXB4YCwgYmFja2dyb3VuZDogZmlsbCwgYm9yZGVyUmFkaXVzOiBcIjRweCA0cHggMCAwXCIsIG9wYWNpdHk6IDAuOCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEMubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdC5uYW1lLnNwbGl0KFwiIFwiKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkCBUQUJTIDM6IFNUVURFTlQgTEVER0VSIOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkCAqL31cclxuICAgICAgICB7dGFiID09PSAzICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMjAgfX0gY2xhc3NOYW1lPVwiZ3NhcC1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogVGFibGUgdGl0bGUgaW5mbyAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogMTgsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMudGV4dCB9fT5TdHVkZW50IFJlc3VsdCBMZWRnZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCI0cHggMCAwXCIsIGZvbnRTaXplOiAxMywgY29sb3I6IEMubXV0ZWQgfX0+RXhwbG9yZSB0aGUgZnVsbCByZXN1bHRzIGxpc3Qgd2l0aCBtdWx0aS1jb2x1bW4gc29ydGluZyBhbmQgZGlyZWN0IGZpbHRlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMZWRnZXIgRmlsdGVycyByb3cgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgICAgZ2FwOiAxMixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMuc3VyZmFjZSxcclxuICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE0LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTJcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgey8qIFF1ZXJ5IFNlYXJjaCAqL31cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMSAxIDIwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdGhlbWU9e0N9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtsZWRnZXJTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGVkZ2VyU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZSBvciByb2xsIG51bWJlcuKAplwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIFN0YXR1cyBTZWxlY3QgKi99XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgdGhlbWU9e0N9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtsZWRnZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGVkZ2VyU3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMTFwiPkFsbCBPdXRjb21lczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEFTU0VEXCI+UGFzc2VkICYgUHJvbW90ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST01PVEVEXCI+UHJvbW90ZWQgT25seTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBTb3J0IHNlbGVjdG9yICovfVxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHRoZW1lPXtDfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bGVkZ2VyU29ydH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMZWRnZXJTb3J0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhbmtcIj5Tb3J0OiBSYW5rPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZ3BhXCI+U29ydDogR1BBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lXCI+U29ydDogTmFtZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9sbFwiPlNvcnQ6IFJvbGwgTm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMaXN0IGluZm8gKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogQy5tdXRlZCwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cclxuICAgICAgICAgICAgICA8c3Bhbj5TaG93aW5nIHtsZWRnZXJEYXRhLmxlbmd0aH0gb2Yge1NUVURFTlRTLmxlbmd0aH0gc3R1ZGVudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAge3NlbUNvbnRleHQgPT09IFwiMlwiICYmIDxzcGFuPiogNiBzdHVkZW50cyBtaXNzaW5nIFNlbSAyIHJlY29yZHM8L3NwYW4+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMZWRnZXIgR3JpZCAoTW9iaWxlIENhcmQgbGF5b3V0IC8gRGVza3RvcCBUYWJsZSBsYXlvdXQpICovfVxyXG4gICAgICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgIHtsZWRnZXJEYXRhLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXNzID0gc2VtQ29udGV4dCA9PT0gXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHMuc2VtMS5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIilcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbUNvbnRleHQgPT09IFwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHMuc2VtMiAmJiBzLnNlbTIucmVzdWx0LmluY2x1ZGVzKFwiUEFTU0VEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHMuc2VtMS5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIikgJiYgKHMuc2VtMiA/IHMuc2VtMi5yZXN1bHQuaW5jbHVkZXMoXCJQQVNTRURcIikgOiBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBncGEgPSBzZW1Db250ZXh0ID09PSBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcy5zZW0xLnNncGFcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbUNvbnRleHQgPT09IFwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHMuc2VtMiA/IHMuc2VtMi5zZ3BhIDogXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBzLmNncGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFNjb3JlID0gc2VtQ29udGV4dCA9PT0gXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHMuc2VtMS5ncmFuZFxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VtQ29udGV4dCA9PT0gXCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gcy5zZW0yID8gcy5zZW0yLmdyYW5kIDogXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBzLnNlbTEuZ3JhbmQgKyAocy5zZW0yID8gcy5zZW0yLmdyYW5kIDogMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtYXhUb3RhbCA9IHNlbUNvbnRleHQgPT09IFwiY3VtdWxhdGl2ZVwiID8gMTYwMCA6IDgwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtzLnJvbGxOb30gdGhlbWU9e0N9IG9uQ2xpY2s9eygpID0+IHZpZXdTdHVkZW50KHMpfSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIiwgbWFyZ2luQm90dG9tOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDEyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1vYmlsZSBBdmF0YXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLnJhaXNlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEF2YXRhclVybChzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3MubmFtZX0ncyBBdmF0YXJgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogODAwLCBjb2xvcjogQy5nb2xkIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3tzZW1Db250ZXh0ID09PSBcIjFcIiA/IHMucjEgOiBzZW1Db250ZXh0ID09PSBcIjJcIiA/IHMucjIgOiBzLnJjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMudGV4dCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIsIGZvbnRTaXplOiAxMSwgY29sb3I6IEMubXV0ZWQgfX0+e3Mucm9sbE5vfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBjb2xvcj17cGFzcyA/IEMuZ3JlZW4gOiBDLmdvbGR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bhc3MgPyBcIlBhc3NcIiA6IHMuc2VtMiA9PT0gbnVsbCAmJiBzZW1Db250ZXh0ICE9PSBcIjFcIiA/IFwiSGVsZFwiIDogXCJQcm9tb3RlZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyXCIsIGdhcDogOCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogQy5yYWlzZWQsIGJvcmRlclJhZGl1czogNiwgcGFkZGluZzogNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDksIGNvbG9yOiBDLm11dGVkLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19PkdQQTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMuZ29sZCwgbWFyZ2luVG9wOiAyIH19PntncGF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBDLnJhaXNlZCwgYm9yZGVyUmFkaXVzOiA2LCBwYWRkaW5nOiA2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6IEMubXV0ZWQsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfX0+R3JhbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLnRleHQsIG1hcmdpblRvcDogMiB9fT57dG90YWxTY29yZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IEMucmFpc2VkLCBib3JkZXJSYWRpdXM6IDYsIHBhZGRpbmc6IDYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA5LCBjb2xvcjogQy5tdXRlZCwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fT5NYXg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW5Ub3A6IDIgfX0+e21heFRvdGFsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxDYXJkIHRoZW1lPXtDfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgZm9udFNpemU6IDEzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCB0ZXh0QWxpZ246IFwibGVmdFwiLCBiYWNrZ3JvdW5kOiBDLnJhaXNlZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAgfX0+UmFuazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMTZweFwiLCBjb2xvcjogQy5tdXRlZCwgZm9udFdlaWdodDogNjAwIH19PlJvbGwgTnVtYmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAgfX0+U3R1ZGVudCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5TZW0gMSBTR1BBPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5TZW0gMiBTR1BBPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5DdW11bGF0aXZlIENHUEE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDE2cHhcIiwgY29sb3I6IEMubXV0ZWQsIGZvbnRXZWlnaHQ6IDYwMCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkdyYW5kIFRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsIGNvbG9yOiBDLm11dGVkLCBmb250V2VpZ2h0OiA2MDAgfX0+U3RhdHVzIE91dGNvbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsZWRnZXJEYXRhLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVSYW5rID0gc2VtQ29udGV4dCA9PT0gXCIxXCIgPyBzLnIxIDogc2VtQ29udGV4dCA9PT0gXCIyXCIgPyBzLnIyIDogcy5yYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGYWlsZWRTZW0xID0gcy5zZW0xLnJlc3VsdC5pbmNsdWRlcyhcIlBST01PVEVEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ZhaWxlZFNlbTIgPSBzLnNlbTIgPyBzLnNlbTIucmVzdWx0LmluY2x1ZGVzKFwiUFJPTU9URURcIikgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvdXRjb21lQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvdXRjb21lVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZW1Db250ZXh0ID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGNvbWVUZXh0ID0gcy5zZW0xLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lQ29sb3IgPSBpc0ZhaWxlZFNlbTEgPyBDLmdvbGQgOiBDLmdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbUNvbnRleHQgPT09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2VtMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Y29tZVRleHQgPSBzLnNlbTIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Y29tZUNvbG9yID0gaXNGYWlsZWRTZW0yID8gQy5nb2xkIDogQy5ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Y29tZVRleHQgPSBcIlJlc3VsdCBIZWxkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lQ29sb3IgPSBDLnJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VtdWxhdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ZhaWxlZFNlbTEgfHwgaXNGYWlsZWRTZW0yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lVGV4dCA9IFwiUHJvbW90ZWQgKEJhY2tsb2cpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lQ29sb3IgPSBDLmdvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzLnNlbTIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGNvbWVUZXh0ID0gXCJIZWxkIChTZW0gMiBtaXNzaW5nKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Y29tZUNvbG9yID0gQy5yZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGNvbWVUZXh0ID0gXCJDbGVhcmVkIFllYXIgMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Y29tZUNvbG9yID0gQy5ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Mucm9sbE5vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmlld1N0dWRlbnQocyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gQy5yYWlzZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDE2cHhcIiwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogYWN0aXZlUmFuayA8PSAzID8gQy5nb2xkIDogQy5tdXRlZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3thY3RpdmVSYW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTZweFwiLCBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLCBjb2xvcjogQy5tdXRlZCB9fT57cy5yb2xsTm99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTZweFwiLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDLnRleHQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEMucmFpc2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0QXZhdGFyVXJsKHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3MubmFtZX0ncyBBdmF0YXJgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDE2cHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogQy50ZXh0IH19PntzLnNlbTEuc2dwYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTRweCAxNnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IHMuc2VtMiA/IEMudGV4dCA6IEMubXV0ZWQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzLnNlbTIgPyBzLnNlbTIuc2dwYSA6IFwiLVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjE0cHggMTZweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IEMuZ29sZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3MuY2dwYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDE2cHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogQy50ZXh0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VtQ29udGV4dCA9PT0gXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHMuc2VtMS5ncmFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VtQ29udGV4dCA9PT0gXCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcy5zZW0yID8gcy5zZW0yLmdyYW5kIDogXCItXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcy5zZW0xLmdyYW5kICsgKHMuc2VtMiA/IHMuc2VtMi5ncmFuZCA6IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCIxNHB4IDE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBvdXRjb21lQ29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dGNvbWVUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7Lyog4pSA4pSAIEZPT1RFUiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XHJcbiAgICAgIDxmb290ZXIgc3R5bGU9e3tcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxyXG4gICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogQy5zdXJmYWNlLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMzJweCAwXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGNvbG9yOiBDLm11dGVkLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMyxcclxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IDEyMDAsIG1hcmdpbjogXCIwIGF1dG9cIiwgcGFkZGluZzogYDAgJHtweH1weGAsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBpc01vYmlsZSA/IFwiY29sdW1uXCIgOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTYgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogaXNNb2JpbGUgPyBcImNlbnRlclwiIDogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBjb2xvcjogQy50ZXh0IH19PlxyXG4gICAgICAgICAgICAgIEJDQSBSZXN1bHRzIE1hbmFnZW1lbnQgUG9ydGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgbWFyZ2luVG9wOiA0LCBvcGFjaXR5OiAwLjggfX0+XHJcbiAgICAgICAgICAgICAgwqkgMjAyNOKAkzIwMjUgwrcgSmhhcmtoYW5kIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSwgUmFuY2hpXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiAyMCB9fT5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA1MDAgfX0+XHJcbiAgICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IEMudGV4dCB9fT5TdW1pdCBHaG9zaDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTIgfX0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3VtaXRHaDBzaFwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5yYWlzZWQsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBDLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMnMgZWFzZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IEMuYm9yZGVySGk7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTJweClcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gQy5yYWlzZWQ7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkdpdEh1YlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdpdGh1Ykljb24gY29sb3I9e0MudGV4dH0gc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3N1bWl0Z2gwc2gvXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDLnJhaXNlZCxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IEMudGV4dCxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4ycyBlYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gQy5ib3JkZXJIaTtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMnB4KVwiO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBDLnJhaXNlZDtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rZWRpbkljb24gY29sb3I9e0MudGV4dH0gc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXX0=