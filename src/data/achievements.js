// Achievements Calculation and Database for BCA Students

export const ACHIEVEMENT_LIST = [
  {
    id: "code_overlord",
    title: "Code Overlord",
    desc: "Achieved 90%+ in C Programming theory or C programming lab.",
    icon: "💻",
    check: (st) => {
      const theory = st.sem1.BCA103 ? st.sem1.BCA103[2] : 0;
      const lab = st.sem1.BCA103P ? st.sem1.BCA103P[2] : 0;
      return theory >= 90 || lab >= 45;
    }
  },
  {
    id: "system_guardian",
    title: "System Guardian",
    desc: "Secured 90%+ in Operating Systems theory or lab.",
    icon: "🛡️",
    check: (st) => {
      if (!st.sem2) return false;
      const theory = st.sem2.BCA202 ? st.sem2.BCA202[2] : 0;
      const lab = st.sem2.BCA202P ? st.sem2.BCA202P[2] : 0;
      return theory >= 90 || lab >= 45;
    }
  },
  {
    id: "math_wizard",
    title: "Math Wizard",
    desc: "Scored 90%+ in Foundational Mathematics or Discrete Mathematics.",
    icon: "🧠",
    check: (st) => {
      const sem1Math = st.sem1.BSC102 ? st.sem1.BSC102[2] : 0;
      const sem2Math = st.sem2 && st.sem2.BSC202 ? st.sem2.BSC202[2] : 0;
      return sem1Math >= 90 || sem2Math >= 90;
    }
  },
  {
    id: "flawless_victory",
    title: "Flawless Victory",
    desc: "Passed all semesters with no backlog requirements.",
    icon: "⚡",
    check: (st) => {
      const sem1Pass = st.sem1.result === "PASSED & PROMOTED";
      const sem2Pass = !st.sem2 || st.sem2.result === "PASSED & PROMOTED";
      return sem1Pass && sem2Pass;
    }
  },
  {
    id: "data_alchemist",
    title: "Data Alchemist",
    desc: "Scored 90%+ in Statistics-I or Statistics-II.",
    icon: "📊",
    check: (st) => {
      const stats1 = st.sem1.BCA101 ? st.sem1.BCA101[2] : 0;
      const stats2 = st.sem2 && st.sem2.BCA201 ? st.sem2.BCA201[2] : 0;
      return stats1 >= 90 || stats2 >= 90;
    }
  },
  {
    id: "creative_artisan",
    title: "Creative Artisan",
    desc: "Scored 45+ in Painting / Yoga / Sports Lab.",
    icon: "🎨",
    check: (st) => {
      if (!st.sem2) return false;
      const paint = st.sem2.AUC202P ? st.sem2.AUC202P[2] : 0;
      return paint >= 45;
    }
  }
];

export function getUnlockedAchievements(student) {
  if (!student) return [];
  return ACHIEVEMENT_LIST.filter((ach) => ach.check(student));
}
