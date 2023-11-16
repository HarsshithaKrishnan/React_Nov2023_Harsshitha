function Webpage() 
{
    const pstyle={
        color:"darkblue",
        frontSize:"16px",
    };
    const dstyle={
        Backgroundcolor:"lightblue",
        color:"darkblue",
        padding:"10px",
        boardStyle:"1px solid blue",
        boardRadius:"5px",
    };
    return (
        <div style={dstyle} >
            <h1 style={{color:'green'}}>Inline Style in JSX Example</h1>
            <p style={pstyle}>This is a paragraph with inline styles appiled</p>
        </div>
    );
}
export default Webpage;