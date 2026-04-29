export const Pill = ({children, color="#d4a847"}) => (
  <span style={{display:"inline-block",padding:"2px 10px",borderRadius:99,
    fontSize:11,fontWeight:700,letterSpacing:.4,
    background:color+"18",border:`1px solid ${color}40`,color}}>
    {children}
  </span>
);

export const Card = ({children, theme, style={}}) => (
  <div style={{background:theme.surface,border:`1px solid ${theme.border}`,
    borderRadius:16,overflow:"hidden",...style}}>
    {children}
  </div>
);

export const Label = ({children, theme}) => (
  <div style={{fontSize:10,fontWeight:700,letterSpacing:1.5,
    textTransform:"uppercase",color:theme.muted,marginBottom:6}}>
    {children}
  </div>
);

export const Input = ({theme, style={}, ...props}) => (
  <input style={{width:"100%",padding:"12px 14px",background:theme.raised,
    border:`1px solid ${theme.border}`,borderRadius:10,color:theme.text,
    fontSize:14,outline:"none",boxSizing:"border-box",
    fontFamily:"inherit",...style}} {...props} />
);