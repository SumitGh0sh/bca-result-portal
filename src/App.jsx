import { useState, useMemo, useEffect } from "react";
import { SUBJECTS, STUDENTS, makeTheme, gradeColor, getGrade } from "./data/mockData";
import { Pill, Card, Label, Input } from "./components/UIComponents";
import "./index.css";

function useIsMobile() {
  const [m,setM]=useState(typeof window!=="undefined"?window.innerWidth<640:false);
  useEffect(()=>{const h=()=>setM(window.innerWidth<640);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h);},[]);
  return m;
}

export default function BCAPortal() {
  const isMobile = useIsMobile();
  const [dark, setDark]         = useState(true);
  const C                       = makeTheme(dark);
  const [tab, setTab]           = useState(0);

  const [roll, setRoll]         = useState("");
  const [name, setName]         = useState("");
  const [found, setFound]       = useState(null);
  const [err, setErr]           = useState("");
  const [filterR, setFilterR]   = useState("ALL");
  const [sortBy, setSortBy]     = useState("rank");
  const [topSub, setTopSub]     = useState("grand");
  const [nameQ, setNameQ]       = useState("");

  const ranked = useMemo(()=>
    [...STUDENTS].sort((a,b)=>b.grand-a.grand).map((s,i)=>({...s,rank:i+1}))
  ,[]);

  const search = () => {
    setErr(""); setFound(null);
    const r=roll.trim().toUpperCase(), n=name.trim().toUpperCase();
    if(!r&&!n){setErr("Enter a roll number or name to search.");return;}
    const s=STUDENTS.find(s=>(r&&s.rollNo.toUpperCase()===r)||(n&&s.name.toUpperCase().includes(n)));
    if(s){const rank=ranked.find(x=>x.rollNo===s.rollNo)?.rank; setFound({...s,rank});}
    else setErr("No matching student found. Please verify the details.");
  };

  const filteredAll = useMemo(()=>{
    let l=[...ranked];
    if(filterR!=="ALL") l=l.filter(s=>s.result.includes(filterR));
    if(nameQ) l=l.filter(s=>s.name.toLowerCase().includes(nameQ.toLowerCase()));
    if(sortBy==="sgpa") l.sort((a,b)=>b.sgpa-a.sgpa);
    else if(sortBy==="name") l.sort((a,b)=>a.name.localeCompare(b.name));
    else l.sort((a,b)=>a.rank-b.rank);
    return l;
  },[ranked,filterR,sortBy,nameQ]);

  const toppers = useMemo(()=>{
    if(topSub==="grand") return [...ranked].slice(0,5);
    return [...STUDENTS].map(s=>({...s,subjectScore:s[topSub]?.[2]||0}))
      .sort((a,b)=>b.subjectScore-a.subjectScore).slice(0,5);
  },[topSub,ranked]);

  const stats = useMemo(()=>{
    const n=STUDENTS.length;
    return {
      total:n,
      passed:STUDENTS.filter(s=>s.result.includes("PASSED")).length,
      promoted:STUDENTS.filter(s=>s.result==="PROMOTED").length,
      avgSGPA:(STUDENTS.reduce((a,s)=>a+s.sgpa,0)/n).toFixed(2),
      avgGrand:Math.round(STUDENTS.reduce((a,s)=>a+s.grand,0)/n),
      highest:Math.max(...STUDENTS.map(s=>s.grand)),
    };
  },[]);

  const subjectAvg = useMemo(()=>
    SUBJECTS.map(sub=>{
      const scores=STUDENTS.map(s=>s[sub.code]?.[2]||0).filter(Boolean);
      return {...sub, avg:(scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1)};
    })
  ,[]);

  const px = isMobile ? 16 : 28;

  const TABS=[
    {icon:"◎", label:"Result"},
    {icon:"◈", label:"Toppers"},
    {icon:"◉", label:"Analytics"},
    {icon:"≡",  label:"All"},
  ];

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.text}}>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <div style={{borderBottom:`1px solid ${C.border}`,background:C.surface}}>
        <div style={{maxWidth:1080,margin:"0 auto",padding:`0 ${px}px`}}>

          <div style={{padding:"20px 0 0",display:"flex",alignItems:"center",gap:14}}>
            <div style={{flexShrink:0,width:40,height:40,borderRadius:10,
              background:C.raised,border:`1px solid ${C.border}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:18,color:C.gold}}>◈</div>
            <div style={{minWidth:0}}>
              <div style={{fontSize:isMobile?9:10,letterSpacing:2,color:C.muted,
                fontWeight:600,textTransform:"uppercase",marginBottom:2}}>
                Jharkhand University of Technology · R.V.S College, Jamshedpur
              </div>
              <div style={{fontSize:isMobile?16:22,fontWeight:700,color:C.text,letterSpacing:-.3}}>
                BCA 1<sup style={{fontSize:"60%"}}>st</sup> Semester — Result Portal
              </div>
            </div>
            
            {/* Right side: session badge + THE ORIGINAL theme toggle */}
            <div style={{marginLeft:"auto",flexShrink:0,display:"flex",
              alignItems:"center",gap:12}}>
              {!isMobile && <Pill color={C.gold}>Session 2024–25 · June 2025</Pill>}

              {/* The Original Custom Theme Toggle */}
              <button
                onClick={()=>setDark(d=>!d)}
                title={dark?"Switch to light mode":"Switch to dark mode"}
                style={{
                  position:"relative",
                  width:54,height:30,borderRadius:99,border:"none",cursor:"pointer",
                  background: dark ? "#2a2a2a" : "#e2d9c6",
                  transition:"background .3s ease",padding:0,flexShrink:0,
                  boxShadow: dark
                    ? "inset 0 1px 4px rgba(0,0,0,.7)"
                    : "inset 0 1px 3px rgba(0,0,0,.18)",
                }}>
                <span style={{position:"absolute",left:7,top:"50%",
                  transform:"translateY(-50%)",lineHeight:0,
                  opacity: dark ? 0 : 1, transition:"opacity .25s"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a87a0a" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </span>
                <span style={{position:"absolute",right:7,top:"50%",
                  transform:"translateY(-50%)",lineHeight:0,
                  opacity: dark ? 1 : 0, transition:"opacity .25s"}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7a7570" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                  </svg>
                </span>
                <span style={{
                  position:"absolute", top:3, left: dark ? 27 : 3,
                  width:24,height:24,borderRadius:"50%",
                  background: dark ? "#d4a847" : "#d4a847",
                  transition:"left .28s cubic-bezier(.4,0,.2,1)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  boxShadow:"0 1px 5px rgba(0,0,0,.4)",
                }}>
                  {dark ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0e0e0e" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0e0e0e" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  )}
                </span>
              </button>
            </div>
          </div>

          <div style={{display:"flex",gap:0,marginTop:16,overflowX:"auto",
            scrollbarWidth:"none"}}>
            {TABS.map((t,i)=>(
              <button key={i} onClick={()=>setTab(i)} style={{
                flexShrink:0,padding:isMobile?"10px 14px":"11px 22px",
                border:"none",cursor:"pointer",background:"transparent",
                fontSize:isMobile?11:13,fontWeight:600,
                color: tab===i ? C.gold : C.muted,
                borderBottom: tab===i ? `2px solid ${C.gold}` : "2px solid transparent",
                transition:"all .18s",whiteSpace:"nowrap",
                display:"flex",alignItems:"center",gap:6,
              }}>
                <span style={{fontSize:12,opacity:.8}}>{t.icon}</span>{t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <div style={{maxWidth:1080,margin:"0 auto",padding:`32px ${px}px 60px`}}>

        {/* ════ TAB 0 · FIND RESULT ════ */}
        {tab===0 && (
          <div style={{maxWidth:520,margin:"0 auto"}}>

            <Card theme={C}>
              <div style={{padding:isMobile?20:28}}>
                <div style={{marginBottom:22}}>
                  <div style={{fontSize:isMobile?18:22,fontWeight:700,color:C.text,marginBottom:4}}>
                    Find Your Result
                  </div>
                  <div style={{color:C.muted,fontSize:13}}>
                    Enter your university roll number or name below.
                  </div>
                </div>

                <div style={{marginBottom:14}}>
                  <Label theme={C}>Roll Number</Label>
                  <Input theme={C} value={roll} onChange={e=>setRoll(e.target.value)}
                    placeholder="e.g. 24013590023"
                    onKeyDown={e=>e.key==="Enter"&&search()} />
                </div>

                <div style={{display:"flex",alignItems:"center",gap:10,margin:"14px 0",
                  color:C.muted,fontSize:11,letterSpacing:1}}>
                  <div style={{flex:1,height:1,background:C.border}}/>
                  OR
                  <div style={{flex:1,height:1,background:C.border}}/>
                </div>

                <div style={{marginBottom:20}}>
                  <Label theme={C}>Student Name</Label>
                  <Input theme={C} value={name} onChange={e=>setName(e.target.value)}
                    placeholder="e.g. Sumit Ghosh"
                    onKeyDown={e=>e.key==="Enter"&&search()} />
                </div>

                <button onClick={search} style={{
                  width:"100%",padding:"13px",borderRadius:10,border:"none",
                  background:C.gold,color:"#0e0e0e",fontSize:14,fontWeight:700,
                  cursor:"pointer",letterSpacing:.3,transition:"opacity .15s",
                }}>
                  Search Result →
                </button>

                {err && (
                  <div style={{marginTop:12,padding:"10px 14px",borderRadius:8,
                    background:C.redBg,border:`1px solid ${C.red}40`,
                    color:C.red,fontSize:13}}>
                    {err}
                  </div>
                )}
              </div>
            </Card>

            {found && (
              <div style={{marginTop:20}}>
                <div style={{background:C.raised,border:`1px solid ${C.border}`,
                  borderRadius:16,overflow:"hidden"}}>

                  <div style={{padding:isMobile?"18px 20px":"22px 26px",
                    borderBottom:`1px solid ${C.border}`,
                    display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
                    <div style={{minWidth:0}}>
                      <div style={{fontSize:10,letterSpacing:1.5,color:C.muted,
                        fontWeight:600,textTransform:"uppercase",marginBottom:6}}>
                        Student Result · 2024–25
                      </div>
                      <div style={{fontSize:isMobile?18:24,fontWeight:700,
                        color:C.text,wordBreak:"break-word",lineHeight:1.2}}>
                        {found.name}
                      </div>
                      <div style={{fontSize:12,color:C.muted,marginTop:4,
                        fontFamily:"monospace"}}>{found.rollNo}</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{fontSize:9,color:C.muted,letterSpacing:1,
                        textTransform:"uppercase",marginBottom:4}}>Class Rank</div>
                      <div style={{fontSize:isMobile?32:40,fontWeight:800,
                        color:C.gold,lineHeight:1}}>#{found.rank}</div>
                    </div>
                  </div>

                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:1,background:C.border}}>
                    {[
                      {l:"Grand Total", v:`${found.grand}`, sub:"/800"},
                      {l:"SGPA",        v:`${found.sgpa}`,  sub:""},
                      {l:"Theory",      v:`${found.theory}`,sub:"/600"},
                      {l:"Practical",   v:`${found.practical}`,sub:"/200"},
                    ].map((s,i)=>(
                      <div key={i} style={{background:C.raised,padding:"16px 14px",textAlign:"center"}}>
                        <div style={{fontSize:10,color:C.muted,fontWeight:600,
                          textTransform:"uppercase",letterSpacing:.8,marginBottom:4}}>{s.l}</div>
                        <div style={{fontSize:isMobile?20:24,fontWeight:700,color:C.gold}}>
                          {s.v}<span style={{fontSize:13,color:C.muted,fontWeight:400}}>{s.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{padding:isMobile?"18px 20px":"20px 26px"}}>
                    <Label theme={C}>Subject-wise Performance</Label>
                    {SUBJECTS.map(sub=>{
                      const d=found[sub.code];
                      if(!d) return null;
                      const [,,total]=d;
                      const max=sub.maxFin+sub.maxInt;
                      const grade=getGrade(total,max);
                      const gc=gradeColor(grade);
                      const pct=Math.round((total/max)*100);
                      return (
                        <div key={sub.code} style={{marginBottom:14}}>
                          <div style={{display:"flex",justifyContent:"space-between",
                            alignItems:"center",marginBottom:6,gap:8}}>
                            <div style={{minWidth:0}}>
                              <span style={{fontSize:10,color:C.muted,
                                fontFamily:"monospace",marginRight:6}}>{sub.code}</span>
                              <span style={{fontSize:isMobile?11:12,color:C.text}}>{sub.name}</span>
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                              <span style={{fontSize:12,color:C.muted}}>{total}/{max}</span>
                              <span style={{
                                padding:"2px 8px",borderRadius:6,fontSize:11,fontWeight:700,
                                background:gc+"18",border:`1px solid ${gc}40`,color:gc}}>
                                {grade}
                              </span>
                            </div>
                          </div>
                          <div style={{background:C.bg,borderRadius:4,height:4,overflow:"hidden"}}>
                            <div style={{width:`${pct}%`,height:"100%",
                              background:gc,borderRadius:4,transition:"width .6s ease"}}/>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{padding:isMobile?"0 20px 20px":"0 26px 24px"}}>
                    <div style={{
                      padding:"12px 16px",borderRadius:10,textAlign:"center",
                      fontWeight:700,fontSize:13,letterSpacing:.3,
                      background: found.result.includes("PASSED") ? C.greenBg : C.raised,
                      border:`1px solid ${found.result.includes("PASSED")?C.green+"50":C.border}`,
                      color: found.result.includes("PASSED") ? C.green : C.muted,
                    }}>
                      {found.result.includes("PASSED") ? "✓  " : "— "}{found.result}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════ TAB 1 · TOPPERS ════ */}
        {tab===1 && (
          <div>
            <div style={{marginBottom:28}}>
              <Label theme={C}>View toppers by subject</Label>
              <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
                {[
                  {key:"grand", label:"Overall"},
                  {key:"BSC101",label:"English"},
                  {key:"BSC102",label:"Mathematics"},
                  {key:"BCA101",label:"Statistics"},
                  {key:"BCA102",label:"DCF"},
                  {key:"BCA103",label:"C Programming"},
                  {key:"AUC101",label:"Holistic Ed."},
                ].map(opt=>(
                  <button key={opt.key} onClick={()=>setTopSub(opt.key)} style={{
                    padding:"7px 16px",borderRadius:99,border:"none",cursor:"pointer",
                    fontSize:12,fontWeight:600,transition:"all .15s",
                    background: topSub===opt.key ? C.gold : C.raised,
                    color:      topSub===opt.key ? "#0e0e0e" : C.muted,
                    border: topSub===opt.key ? `1px solid ${C.gold}` : `1px solid ${C.border}`,
                  }}>{opt.label}</button>
                ))}
              </div>
            </div>

            {isMobile ? (
              <div style={{marginBottom:16}}>
                {[toppers[0],toppers[1],toppers[2]].map((s,i)=>{
                  if(!s) return null;
                  const medals=["🥇","🥈","🥉"];
                  const score=topSub==="grand"?s.grand:s.subjectScore;
                  const max=topSub==="grand"?800:100;
                  return (
                    <Card theme={C} key={s.rollNo} style={{marginBottom:10}}>
                      <div style={{padding:"14px 18px",display:"flex",
                        alignItems:"center",gap:14}}>
                        <div style={{fontSize:26}}>{medals[i]}</div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontWeight:700,color:C.text,fontSize:14,
                            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                            {s.name}
                          </div>
                          <div style={{fontSize:11,color:C.muted,marginTop:1,
                            fontFamily:"monospace"}}>{s.rollNo}</div>
                        </div>
                        <div style={{textAlign:"right",flexShrink:0}}>
                          <div style={{fontSize:22,fontWeight:700,color:C.gold}}>{score}</div>
                          <div style={{fontSize:10,color:C.muted}}>/{max} · SGPA {s.sgpa}</div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div style={{display:"flex",gap:12,justifyContent:"center",
                alignItems:"flex-end",marginBottom:24}}>
                {[toppers[1],toppers[0],toppers[2]].map((s,pi)=>{
                  if(!s) return null;
                  const medals=["🥈","🥇","🥉"];
                  const heights=[200,250,170];
                  const borderColors=["#8a8a8a","#d4a847","#a07050"];
                  const score=topSub==="grand"?s.grand:s.subjectScore;
                  const max=topSub==="grand"?800:100;
                  return (
                    <div key={s.rollNo} style={{
                      width:210,minHeight:heights[pi],background:C.surface,
                      border:`1px solid ${borderColors[pi]}50`,borderRadius:14,
                      padding:"24px 18px",textAlign:"center",
                      display:"flex",flexDirection:"column",justifyContent:"flex-end",
                      boxShadow: pi===1 ? `0 0 40px ${C.gold}18` : "none",
                    }}>
                      <div style={{fontSize:34,marginBottom:10}}>{medals[pi]}</div>
                      <div style={{fontSize:13,fontWeight:700,color:C.text,
                        marginBottom:3,lineHeight:1.3}}>{s.name}</div>
                      <div style={{fontSize:10,color:C.muted,marginBottom:14,
                        fontFamily:"monospace"}}>{s.rollNo}</div>
                      <div style={{fontSize:32,fontWeight:800,color:borderColors[pi],lineHeight:1}}>
                        {score}
                      </div>
                      <div style={{fontSize:11,color:C.muted,marginTop:4}}>
                        /{max} · SGPA {s.sgpa}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {toppers.slice(3).map((s,i)=>{
              const score=topSub==="grand"?s.grand:s.subjectScore;
              const max=topSub==="grand"?800:100;
              return (
                <Card theme={C} key={s.rollNo} style={{marginBottom:8}}>
                  <div style={{padding:"12px 18px",display:"flex",
                    alignItems:"center",gap:12}}>
                    <div style={{fontSize:15,fontWeight:800,color:C.muted,
                      width:24,flexShrink:0}}>#{i+4}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontWeight:600,color:C.text,overflow:"hidden",
                        textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.name}</div>
                      <div style={{fontSize:11,color:C.muted,fontFamily:"monospace",
                        marginTop:1}}>{s.rollNo}</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{fontSize:16,fontWeight:700,color:C.gold}}>
                        {score}<span style={{fontSize:11,color:C.muted}}>/{max}</span>
                      </div>
                      <div style={{fontSize:11,color:C.muted}}>SGPA {s.sgpa}</div>
                    </div>
                  </div>
                </Card>
              );
            })}

            <div style={{marginTop:36}}>
              <Card theme={C}>
                <div style={{padding:isMobile?18:24}}>
                  <Label theme={C}>Subject Average Scores  (out of 100)</Label>
                  <div style={{marginTop:14}}>
                    {subjectAvg.map((s,i)=>{
                      const pct=parseFloat(s.avg);
                      const gc=["#d4a847","#9ab870","#5b9eb8","#8e78c4","#b87858","#6da882"][i];
                      return (
                        <div key={s.code} style={{marginBottom:14}}>
                          <div style={{display:"flex",justifyContent:"space-between",
                            marginBottom:6}}>
                            <span style={{fontSize:13,color:C.text}}>{s.name}</span>
                            <span style={{fontSize:13,fontWeight:700,color:gc}}>{s.avg}</span>
                          </div>
                          <div style={{background:C.bg,borderRadius:4,height:5,overflow:"hidden"}}>
                            <div style={{width:`${pct}%`,height:"100%",
                              background:gc,borderRadius:4}}/>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* ════ TAB 2 · ANALYTICS ════ */}
        {tab===2 && (
          <div>
            <div style={{display:"grid",
              gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(3,1fr)",
              gap:12,marginBottom:24}}>
              {[
                {l:"Total Students",    v:stats.total,    sub:"enrolled"},
                {l:"Passed & Promoted",v:stats.passed,   sub:"students"},
                {l:"Promoted Only",    v:stats.promoted,  sub:"students"},
                {l:"Average SGPA",     v:stats.avgSGPA,   sub:"class avg"},
                {l:"Avg Grand Total",  v:stats.avgGrand,  sub:"out of 800"},
                {l:"Highest Score",    v:stats.highest,   sub:"out of 800"},
              ].map((s,i)=>(
                <Card theme={C} key={i}>
                  <div style={{padding:"20px 18px"}}>
                    <div style={{fontSize:10,color:C.muted,fontWeight:600,
                      textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>{s.l}</div>
                    <div style={{fontSize:isMobile?26:32,fontWeight:800,color:C.gold,lineHeight:1}}>
                      {s.v}
                    </div>
                    <div style={{fontSize:11,color:C.muted,marginTop:4}}>{s.sub}</div>
                  </div>
                </Card>
              ))}
            </div>

            <Card theme={C} style={{marginBottom:16}}>
              <div style={{padding:isMobile?18:24}}>
                <Label theme={C}>Grade Distribution  (by SGPA band)</Label>
                <div style={{marginTop:14}}>
                  {[
                    {r:"9.0+",    l:"Outstanding",  color:"#d4a847", f:s=>s.sgpa>=9},
                    {r:"8.0–8.9", l:"Excellent",    color:"#9ab870", f:s=>s.sgpa>=8&&s.sgpa<9},
                    {r:"7.0–7.9", l:"Very Good",    color:"#5b9eb8", f:s=>s.sgpa>=7&&s.sgpa<8},
                    {r:"6.0–6.9", l:"Good",         color:"#8e78c4", f:s=>s.sgpa>=6&&s.sgpa<7},
                    {r:"5.0–5.9", l:"Average",      color:"#b87858", f:s=>s.sgpa>=5&&s.sgpa<6},
                    {r:"Below 5", l:"Below Average", color:"#a05050", f:s=>s.sgpa<5},
                  ].map(g=>{
                    const students=ranked.filter(g.f);
                    const pct=(students.length/stats.total)*100;
                    return (
                      <div key={g.r} style={{marginBottom:14}}>
                        <div style={{display:"flex",justifyContent:"space-between",
                          marginBottom:5,flexWrap:"wrap",gap:4}}>
                          <span style={{fontSize:13,color:C.text}}>
                            {g.l}
                            <span style={{fontSize:11,color:C.muted,marginLeft:6}}>({g.r})</span>
                          </span>
                          <span style={{fontSize:12,fontWeight:700,color:g.color}}>
                            {students.length} · {pct.toFixed(0)}%
                          </span>
                        </div>
                        <div style={{background:C.bg,borderRadius:4,height:7,overflow:"hidden"}}>
                          <div style={{width:`${pct}%`,height:"100%",
                            background:g.color,borderRadius:4}}/>
                        </div>
                        {students.length>0&&(
                          <div style={{fontSize:11,color:C.muted,marginTop:4,
                            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                            {students.map(s=>s.name.split(" ")[0]).join(" · ")}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            <Card theme={C}>
              <div style={{padding:isMobile?18:24}}>
                <Label theme={C}>Individual SGPA — all students</Label>
                <div style={{display:"flex",alignItems:"flex-end",gap:4,
                  height:120,overflowX:"auto",paddingBottom:4,marginTop:14}}>
                  {ranked.map((s,i)=>{
                    const h=(s.sgpa/10)*100;
                    const col=s.sgpa>=8?C.gold:s.sgpa>=7?"#9ab870":s.sgpa>=6?"#5b9eb8":"#a05050";
                    return (
                      <div key={i} title={`${s.name}: SGPA ${s.sgpa}`}
                        style={{flex:"0 0 28px",display:"flex",
                        flexDirection:"column",alignItems:"center",gap:3}}>
                        <div style={{fontSize:8,color:C.muted}}>{s.sgpa}</div>
                        <div style={{width:18,height:h,background:col,
                          borderRadius:"3px 3px 0 0",opacity:.9}}/>
                        <div style={{fontSize:7,color:C.dim,width:28,overflow:"hidden",
                          whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"center"}}>
                          {s.name.split(" ")[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ════ TAB 3 · ALL RESULTS ════ */}
        {tab===3 && (
          <div>
            <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}}>
              <input value={nameQ} onChange={e=>setNameQ(e.target.value)}
                placeholder="Search by name…"
                style={{padding:"10px 14px",background:C.surface,border:`1px solid ${C.border}`,
                  borderRadius:10,color:C.text,fontSize:13,outline:"none",
                  flex:"1 1 160px",minWidth:0,fontFamily:"inherit"}}/>
              <select value={filterR} onChange={e=>setFilterR(e.target.value)}
                style={{padding:"10px 12px",background:C.surface,border:`1px solid ${C.border}`,
                  borderRadius:10,color:C.text,fontSize:13,outline:"none",
                  cursor:"pointer",flex:"1 1 140px"}}>
                <option value="ALL">All Results</option>
                <option value="PASSED">Passed & Promoted</option>
                <option value="PROMOTED">Promoted Only</option>
              </select>
              <select value={sortBy} onChange={e=>setSortBy(e.target.value)}
                style={{padding:"10px 12px",background:C.surface,border:`1px solid ${C.border}`,
                  borderRadius:10,color:C.text,fontSize:13,outline:"none",
                  cursor:"pointer",flex:"1 1 120px"}}>
                <option value="rank">Sort: Rank</option>
                <option value="sgpa">Sort: SGPA</option>
                <option value="name">Sort: Name</option>
              </select>
            </div>

            <div style={{fontSize:12,color:C.muted,marginBottom:14}}>
              {filteredAll.length} of {STUDENTS.length} students
            </div>

            {isMobile ? (
              filteredAll.map(s=>(
                <div key={s.rollNo} onClick={()=>{setFound(s);setTab(0);}}
                  style={{background:C.surface,border:`1px solid ${C.border}`,
                  borderRadius:14,padding:"14px 16px",marginBottom:10,
                  cursor:"pointer",transition:"border-color .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=C.borderHi}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
                  <div style={{display:"flex",justifyContent:"space-between",
                    alignItems:"flex-start",marginBottom:10}}>
                    <div style={{minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                        <span style={{fontSize:12,fontWeight:800,
                          color:s.rank<=3?C.gold:C.muted}}>#{s.rank}</span>
                        <span style={{fontSize:14,fontWeight:600,color:C.text,
                          overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                          {s.name}
                        </span>
                      </div>
                      <div style={{fontSize:10,color:C.muted,fontFamily:"monospace"}}>
                        {s.rollNo}
                      </div>
                    </div>
                    <span style={{flexShrink:0,marginLeft:8,fontSize:11,fontWeight:700,
                      color:s.result.includes("PASSED")?C.green:C.muted}}>
                      {s.result.includes("PASSED")?"✓ Passed":"— Promoted"}
                    </span>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                    {[
                      {l:"Total",  v:`${s.grand}/800`},
                      {l:"SGPA",   v:s.sgpa},
                      {l:"Theory", v:s.theory},
                    ].map((item,i)=>(
                      <div key={i} style={{background:C.bg,borderRadius:8,
                        padding:"8px 6px",textAlign:"center"}}>
                        <div style={{fontSize:9,color:C.muted,textTransform:"uppercase",
                          letterSpacing:.5,fontWeight:600}}>{item.l}</div>
                        <div style={{fontSize:13,fontWeight:700,
                          color:C.gold,marginTop:3}}>{item.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse"}}>
                  <thead>
                    <tr style={{borderBottom:`1px solid ${C.border}`}}>
                      {["Rank","Roll No","Name","Grand Total","SGPA","Theory","Practical","Result"].map(h=>(
                        <th key={h} style={{padding:"10px 14px",textAlign:"left",
                          color:C.muted,fontWeight:600,fontSize:11,
                          textTransform:"uppercase",letterSpacing:.8,
                          whiteSpace:"nowrap"}}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAll.map(s=>(
                      <tr key={s.rollNo}
                        onClick={()=>{setFound(s);setTab(0);}}
                        style={{borderBottom:`1px solid ${C.border}`,cursor:"pointer",
                          transition:"background .12s"}}
                        onMouseEnter={e=>e.currentTarget.style.background=C.raised}
                        onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                        <td style={{padding:"12px 14px",fontWeight:800,
                          color:s.rank<=3?C.gold:C.muted}}>#{s.rank}</td>
                        <td style={{padding:"12px 14px",color:C.muted,
                          fontFamily:"monospace",fontSize:12}}>{s.rollNo}</td>
                        <td style={{padding:"12px 14px",fontWeight:600,color:C.text}}>
                          {s.name}
                        </td>
                        <td style={{padding:"12px 14px",fontWeight:700,color:C.gold}}>
                          {s.grand}<span style={{color:C.muted,fontWeight:400}}>/800</span>
                        </td>
                        <td style={{padding:"12px 14px"}}>
                          <Pill color={s.sgpa>=8?C.gold:s.sgpa>=6?"#5b9eb8":"#b87858"}>
                            {s.sgpa}
                          </Pill>
                        </td>
                        <td style={{padding:"12px 14px",color:C.muted}}>{s.theory}</td>
                        <td style={{padding:"12px 14px",color:C.muted}}>{s.practical}</td>
                        <td style={{padding:"12px 14px"}}>
                          <span style={{fontSize:12,fontWeight:600,
                            color:s.result.includes("PASSED")?C.green:C.muted}}>
                            {s.result.includes("PASSED")?"✓ Passed":"— Promoted"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div style={{borderTop:`1px solid ${C.border}`,padding:"18px 24px",
        textAlign:"center",color:C.muted,fontSize:11,letterSpacing:.5}}>
        BCA 1st Semester Examination 2024 · Jharkhand University of Technology, Ranchi
      </div>
    </div>
  );
}