import { useState, useMemo } from "react";
import { getCharacterClass, getAvatarUrl } from "../data/mockData";
import { ClassIcon } from "./UIComponents";

// Generic subject category lists
const AXIS_LABELS_SEM1 = [
  "English", "Math", "Stats-I", "Systems", "C Prog",
  "Holistic", "Sys Lab", "C Lab", "Web Lab", "Act Lab"
];

const AXIS_LABELS_SEM2 = [
  "English", "Discrete Math", "Stats-II", "OS", "Data Struct",
  "Holistic", "Stats Lab", "OS Lab", "DS Lab", "Sports"
];

const AXIS_LABELS_CUMULATIVE = [
  "English", "Math", "Statistics", "Computer Systems", "Data Structures",
  "Holistic Ed.", "Systems Lab", "Code Lab", "Web/DS Lab", "Activities"
];

const SUBJECT_CODES_SEM1 = [
  "BSC101", "BSC102", "BCA101", "BCA102", "BCA103",
  "AUC101", "BCA102P", "BCA103P", "BCA104P", "AUC102P"
];

const SUBJECT_CODES_SEM2 = [
  "BSC201", "BSC202", "BCA201", "BCA202", "BCA203",
  "AUC201", "BCA201P", "BCA202P", "BCA203P", "AUC202P"
];

export default function RadarChart({ student, semContext, theme: C, isMobile }) {
  const [tooltip, setTooltip] = useState(null);
  const [activeAxis, setActiveAxis] = useState(null);

  // SVG parameters
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 100;
  const N = 10; // 10 subjects/axes

  const angles = useMemo(() => {
    return Array.from({ length: N }, (_, i) => (i * 2 * Math.PI) / N - Math.PI / 2);
  }, [N]);

  // Determine current labels & codes
  const labels = useMemo(() => {
    if (semContext === "1") return AXIS_LABELS_SEM1;
    if (semContext === "2") return AXIS_LABELS_SEM2;
    return AXIS_LABELS_CUMULATIVE;
  }, [semContext]);

  // Parse Student Scores normalized to percentage
  const chartData = useMemo(() => {
    if (!student) return null;

    const getSubjectDetails = (semData, code, isSem2 = false) => {
      if (!semData) return { val: 0, max: 100, raw: "-", name: "Unavailable", ext: 0, int: 0 };
      const scoreData = semData[code];
      if (!scoreData) return { val: 0, max: 100, raw: "-", name: "Unavailable", ext: 0, int: 0 };
      const [ext, int, tot] = scoreData;
      const isTheory = !code.endsWith("P");
      const maxScore = isTheory ? 100 : 50;
      const actualScore = tot || 0;
      const percent = (actualScore / maxScore) * 100;

      // Find full name from arrays if needed, or fallback
      let name = "Subject";
      if (isSem2) {
        if (code === "BSC201") name = "Communicative English";
        else if (code === "BSC202") name = "Basic Discrete Mathematics";
        else if (code === "BCA201") name = "Statistics-II for BCA";
        else if (code === "BCA202") name = "Operating Systems";
        else if (code === "BCA203") name = "Data Structures";
        else if (code === "AUC201") name = "Holistic Education";
        else if (code === "BCA201P") name = "Statistics Tools Lab";
        else if (code === "BCA202P") name = "Operating System Lab";
        else if (code === "BCA203P") name = "Data Structures Lab";
        else if (code === "AUC202P") name = "Sports / NSS / Yoga / Painting";
      } else {
        if (code === "BSC101") name = "Professional English";
        else if (code === "BSC102") name = "Foundational Mathematics";
        else if (code === "BCA101") name = "Statistics-I";
        else if (code === "BCA102") name = "Digital Computer Fundamentals";
        else if (code === "BCA103") name = "Intro to Programming Using C";
        else if (code === "AUC101") name = "Holistic Education";
        else if (code === "BCA102P") name = "Computer Fundamentals Lab";
        else if (code === "BCA103P") name = "C Programming Lab";
        else if (code === "BCA104P") name = "Web Technology Lab";
        else if (code === "AUC102P") name = "Extracurricular Activities";
      }

      return {
        val: percent,
        max: maxScore,
        raw: actualScore,
        ext: ext !== null ? ext : "Ab",
        int,
        name,
        code
      };
    };

    const sem1Points = SUBJECT_CODES_SEM1.map(code => getSubjectDetails(student.sem1, code, false));
    const sem2Points = student.sem2 ? SUBJECT_CODES_SEM2.map(code => getSubjectDetails(student.sem2, code, true)) : null;

    return { sem1Points, sem2Points };
  }, [student]);

  // Generate SVG Polygon path for values
  const getPathData = (points) => {
    if (!points) return "";
    const coords = points.map((p, idx) => {
      const angle = angles[idx];
      const r = (p.val / 100) * radius;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return `${x},${y}`;
    });
    return `M ${coords.join(" L ")} Z`;
  };

  const sem1Path = getPathData(chartData.sem1Points);
  const sem2Path = chartData.sem2Points ? getPathData(chartData.sem2Points) : null;

  // Concentric background rings coordinates
  const gridRings = [20, 40, 60, 80, 100];

  // Character Class / Title calculations
  const cgpaVal = student.sem2 
    ? ((parseFloat(student.sem1.sgpa) + parseFloat(student.sem2.sgpa)) / 2).toFixed(2)
    : parseFloat(student.sem1.sgpa).toFixed(2);
    
  const charClass = getCharacterClass(cgpaVal);
  const combatPower = Math.round(cgpaVal * 1000);

  // Dynamic Gamified Achievements
  const achievements = useMemo(() => {
    const list = [];
    
    // Check for Semester 1 Clearance
    if (student.sem1 && !student.sem1.result.includes("PROMOTED") && student.sem1.sgpa >= 5.0) {
      list.push({ title: "Sem 1 Conqueror", icon: "⚔️", desc: "Successfully cleared all Semester 1 quests." });
    }
    
    // Check for Semester 2 Clearance
    if (student.sem2 && !student.sem2.result.includes("PROMOTED") && student.sem2.sgpa >= 5.0) {
      list.push({ title: "Sem 2 Conqueror", icon: "🛡️", desc: "Successfully cleared all Semester 2 quests." });
    }
    
    // Check for high subject performance
    let perfectInternals = false;
    let mathExpert = false;
    let programmingExpert = false;
    let sRankSubject = false;

    const checkSemPoints = (points) => {
      if (!points) return;
      points.forEach(p => {
        if (p.int === 30) perfectInternals = true;
        if ((p.code === "BSC102" || p.code === "BSC202") && p.raw >= 80) mathExpert = true;
        if ((p.code === "BCA103" || p.code === "BCA203") && p.raw >= 80) programmingExpert = true;
        if (p.raw >= 90 || (p.max === 50 && p.raw >= 45)) sRankSubject = true;
      });
    };

    checkSemPoints(chartData.sem1Points);
    checkSemPoints(chartData.sem2Points);

    if (perfectInternals) {
      list.push({ title: "Synergy Catalyst", icon: "🎯", desc: "Scored perfect 30/30 in Internal Attributes." });
    }
    if (mathExpert) {
      list.push({ title: "Equation Sorcerer", icon: "📐", desc: "Unlocked advanced logical core in Mathematics (>80%)." });
    }
    if (programmingExpert) {
      list.push({ title: "Code Weaver", icon: "💻", desc: "Demonstrated master syntax capability in Programming (>80%)." });
    }
    if (sRankSubject) {
      list.push({ title: "Grandmaster Spark", icon: "⚡", desc: "Achieved an Outstanding (O) rank in a main quest subject." });
    }
    
    // Default fallback achievements
    if (list.length === 0) {
      list.push({ title: "Rookie Scholar", icon: "🌱", desc: "Embarking on the academic combat trial." });
    }

    return list;
  }, [student, chartData]);

  if (!chartData) return null;

  // Handle dot hover for tooltip
  const handleDotHover = (e, p, idx, isSem2) => {
    const rect = e.target.getBoundingClientRect();
    const svgEl = e.target.closest("svg");
    const svgRect = svgEl.getBoundingClientRect();
    
    const x = rect.left - svgRect.left + rect.width / 2;
    const y = rect.top - svgRect.top - 8; // place above dot

    let grade = "F";
    if (p.raw !== "-") {
      const percentage = (p.raw / p.max) * 100;
      if (percentage >= 90) grade = "O";
      else if (percentage >= 80) grade = "A+";
      else if (percentage >= 70) grade = "A";
      else if (percentage >= 60) grade = "B+";
      else if (percentage >= 50) grade = "B";
      else if (percentage >= 40) grade = "C";
      else if (percentage >= 35) grade = "P";
    }

    setTooltip({
      x,
      y,
      name: p.name,
      code: p.code,
      score: p.raw,
      max: p.max,
      ext: p.ext,
      int: p.int,
      percent: Math.round(p.val),
      grade,
      sem: isSem2 ? "Sem 2" : "Sem 1"
    });
    setActiveAxis(idx);
  };

  const handleDotLeave = () => {
    setTooltip(null);
    setActiveAxis(null);
  };

  // Color mappings
  const sem1Color = C.gold; // Lavender Accent
  const sem2Color = "#38bdf8"; // Bright sky blue for Semester 2

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      
      {/* RPG Profile Badge */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: `0 8px 30px rgba(0,0,0,0.12)`,
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Glow behind badge */}
        <div style={{
          position: "absolute",
          top: -30,
          left: -30,
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: charClass.glow,
          filter: "blur(20px)",
          pointerEvents: "none"
        }} />

        <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
          {/* Chibi Anime Avatar Image inside the box */}
          <div style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            background: charClass.color + "1a",
            border: `2px solid ${charClass.color}`,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 12px ${charClass.color}40`
          }}>
            <img
              src={getAvatarUrl(student)}
              alt={`${student.name}'s Avatar`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Class Grade Letter Overlay Badge */}
          <div style={{
            position: "absolute",
            bottom: -3,
            right: -3,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: charClass.color,
            border: `1.5px solid ${C.surface}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 9,
            fontWeight: 900,
            color: "#ffffff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.5)"
          }}>
            {cgpaVal >= 9.0 ? "S" : cgpaVal >= 8.0 ? "A" : cgpaVal >= 7.0 ? "B" : cgpaVal >= 6.0 ? "C" : cgpaVal >= 5.0 ? "D" : "F"}
          </div>
        </div>

        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="eyebrow" style={{ fontSize: 9, color: charClass.color, fontWeight: 700 }}>
              Class Archetype
            </span>
            <span style={{ fontSize: 9, color: C.muted, background: C.raised, padding: "2px 6px", borderRadius: 4, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
              <ClassIcon classTitle={charClass.title} color={charClass.color} size={10} />
              <span>LVL {Math.floor(cgpaVal * 10)}</span>
            </span>
          </div>
          <h3 style={{ margin: "2px 0", fontSize: 16, fontWeight: 800, color: C.text, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>{charClass.title}</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.gold, fontFamily: "monospace" }}>
              {combatPower} CP
            </span>
          </h3>
          <p style={{ margin: 0, fontSize: 11, color: C.muted, opacity: 0.9 }}>
            {charClass.desc}
          </p>
        </div>
      </div>

      {/* Spider Web Chart Panel */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        boxShadow: `0 8px 30px rgba(0,0,0,0.12)`
      }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <h4 className="heading-card" style={{ margin: 0, fontSize: 13, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
            🛡️ Attribute Web Radar
          </h4>
          <span style={{ fontSize: 10, color: C.dim }}>
            {semContext === "cumulative" ? "Compare Semester 1 & 2 Skills" : `Visualize Sem ${semContext} Scores`}
          </span>
        </div>

        {/* Legend */}
        {semContext === "cumulative" && student.sem2 && (
          <div style={{ display: "flex", gap: 14, fontSize: 10, fontWeight: 600, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: sem1Color }} />
              <span style={{ color: C.text }}>Semester 1</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: sem2Color }} />
              <span style={{ color: C.text }}>Semester 2</span>
            </div>
          </div>
        )}

        <div style={{ position: "relative", width: "100%", maxWidth: size, height: "auto", aspectRatio: "1 / 1" }}>
          
          {/* Radar SVG */}
          <svg viewBox="0 0 320 320" width="100%" height="100%" style={{ overflow: "visible" }}>
            {/* Concentric rings */}
            {gridRings.map((rPct, rIdx) => {
              const r = (rPct / 100) * radius;
              const points = angles.map(angle => {
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                return `${x},${y}`;
              }).join(" ");

              return (
                <polygon
                  key={rIdx}
                  points={points}
                  fill="none"
                  stroke={C.border}
                  strokeWidth="1"
                  strokeDasharray={rIdx === 4 ? "none" : "2,3"}
                />
              );
            })}

            {/* Axis Lines & Labels */}
            {angles.map((angle, idx) => {
              // Web grid axis lines
              const outerX = cx + radius * Math.cos(angle);
              const outerY = cy + radius * Math.sin(angle);
              const isActive = activeAxis === idx;

              // Text placements (offset outwards slightly)
              const labelRadius = radius + (isMobile ? 14 : 18);
              const textX = cx + labelRadius * Math.cos(angle);
              const textY = cy + labelRadius * Math.sin(angle) + 4; // adjustment for center

              // Label alignments
              let textAnchor = "middle";
              if (Math.cos(angle) > 0.1) textAnchor = "start";
              else if (Math.cos(angle) < -0.1) textAnchor = "end";

              return (
                <g key={idx}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={outerX}
                    y2={outerY}
                    stroke={isActive ? C.gold : C.border}
                    strokeWidth={isActive ? "1.5" : "1"}
                    style={{ transition: "stroke 0.2s" }}
                  />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor={textAnchor}
                    fill={isActive ? C.text : C.dim}
                    fontSize={isMobile ? "9px" : "10px"}
                    fontWeight={isActive ? 700 : 500}
                    style={{ fontFamily: "inherit", transition: "fill 0.2s, font-weight 0.2s" }}
                  >
                    {labels[idx]}
                  </text>
                </g>
              );
            })}

            {/* Radar Polygons */}
            {/* Semester 1 Polygon */}
            {(semContext === "1" || semContext === "cumulative") && sem1Path && (
              <polygon
                points={sem1Path.substring(2, sem1Path.length - 2).replace(/ L /g, " ").replace(/ Z/g, "")}
                fill={sem1Color + "1a"}
                stroke={sem1Color}
                strokeWidth="2"
                style={{ transition: "all 0.3s ease" }}
              />
            )}

            {/* Semester 2 Polygon */}
            {(semContext === "2" || semContext === "cumulative") && student.sem2 && sem2Path && (
              <polygon
                points={sem2Path.substring(2, sem2Path.length - 2).replace(/ L /g, " ").replace(/ Z/g, "")}
                fill={sem2Color + "1a"}
                stroke={sem2Color}
                strokeWidth="2"
                style={{ transition: "all 0.3s ease" }}
              />
            )}

            {/* Hover Target Dots (renders interactive circles for users to hover over) */}
            {/* Semester 1 Dots */}
            {(semContext === "1" || semContext === "cumulative") &&
              chartData.sem1Points.map((p, idx) => {
                const angle = angles[idx];
                const r = (p.val / 100) * radius;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);

                return (
                  <circle
                    key={`sem1-dot-${idx}`}
                    cx={x}
                    cy={y}
                    r={activeAxis === idx ? 5 : 3.5}
                    fill={sem1Color}
                    stroke={C.surface}
                    strokeWidth="1.5"
                    style={{ cursor: "pointer", transition: "r 0.15s ease" }}
                    onMouseEnter={(e) => handleDotHover(e, p, idx, false)}
                    onMouseLeave={handleDotLeave}
                  />
                );
              })}

            {/* Semester 2 Dots */}
            {(semContext === "2" || semContext === "cumulative") && student.sem2 &&
              chartData.sem2Points.map((p, idx) => {
                const angle = angles[idx];
                const r = (p.val / 100) * radius;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);

                return (
                  <circle
                    key={`sem2-dot-${idx}`}
                    cx={x}
                    cy={y}
                    r={activeAxis === idx ? 5 : 3.5}
                    fill={sem2Color}
                    stroke={C.surface}
                    strokeWidth="1.5"
                    style={{ cursor: "pointer", transition: "r 0.15s ease" }}
                    onMouseEnter={(e) => handleDotHover(e, p, idx, true)}
                    onMouseLeave={handleDotLeave}
                  />
                );
              })}
          </svg>

          {/* Render Tooltip overlay */}
          {tooltip && (
            <div style={{
              position: "absolute",
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)",
              background: "rgba(15, 16, 17, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: `1px solid ${C.borderHi}`,
              padding: "8px 12px",
              borderRadius: 8,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4)",
              zIndex: 100,
              pointerEvents: "none",
              whiteSpace: "nowrap",
              fontSize: 11,
              color: C.text
            }}>
              {/* Tooltip Arrow */}
              <div style={{
                position: "absolute",
                bottom: -4,
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: 8,
                height: 8,
                background: "rgba(15, 16, 17, 0.85)",
                borderRight: `1px solid ${C.borderHi}`,
                borderBottom: `1px solid ${C.borderHi}`
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 4 }}>
                <span style={{ fontWeight: 800, color: C.gold }}>{tooltip.code}</span>
                <span style={{ fontSize: 9, opacity: 0.7, textTransform: "uppercase", fontWeight: 700 }}>{tooltip.sem}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 4, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis" }}>
                {tooltip.name}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, borderTop: `1px solid ${C.border}`, paddingTop: 4 }}>
                <div>Total: <strong style={{ color: C.text }}>{tooltip.score}/{tooltip.max}</strong></div>
                <div style={{ textAlign: "right" }}>Grade: <strong style={{ color: C.gold }}>{tooltip.grade}</strong></div>
                <div>Ext: {tooltip.ext} | Int: {tooltip.int}</div>
                <div style={{ textAlign: "right" }}>Pct: {tooltip.percent}%</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gamified Achievements / Completed Quests Card */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "20px",
        boxShadow: `0 8px 30px rgba(0,0,0,0.12)`
      }}>
        <h4 className="heading-card" style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.5 }}>
          ⚔️ Achievement Quests Unlocked
        </h4>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {achievements.map((ach, aIdx) => (
            <div key={aIdx} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "10px 12px",
              background: C.raised,
              borderRadius: 8,
              border: `1px solid ${C.border}`
            }}>
              <span style={{ fontSize: 20 }}>{ach.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12, color: C.text }}>
                  {ach.title}
                </div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>
                  {ach.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
