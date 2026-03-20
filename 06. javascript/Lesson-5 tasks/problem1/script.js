const display=document.getElementById("display");
let expression="";
function updateDisplay() 
{
    display.innerText=expression||"0";
}
function shuffleArray(arr) 
{
    for (let i=arr.length-1;i>0;i--) 
    {
        const j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}
function shuffleNumbersUI() 
{
    const numberButtons=Array.from(document.querySelectorAll(".numbers"));
    const values=numberButtons.map(btn=>btn.innerText);

    shuffleArray(values);

    numberButtons.forEach((btn,index)=> 
    {
        btn.innerText = values[index];
    });
}
document.querySelectorAll(".numbers").forEach(btn=> 
{
    btn.addEventListener("click",()=> 
    {
        expression += btn.innerText;
        updateDisplay();
        shuffleNumbersUI();
    });
});
document.querySelectorAll(".operator").forEach(btn=> 
{
    btn.addEventListener("click",()=> 
    {
        const lastChar=expression.slice(-1);

        if ("+-*/".includes(lastChar)) 
            return;

        if (expression!=="") 
        {
            expression+=btn.innerText;
            updateDisplay();
        }
    });
});
document.querySelectorAll(".bracket").forEach(btn=> 
{
    btn.addEventListener("click",() => 
    {
        expression+=btn.innerText;
        updateDisplay();
    });
});
document.querySelector(".dot").addEventListener("click",()=> 
{
    const parts=expression.split(/[\+\-\*\/]/);
    const lastPart=parts[parts.length - 1];

    if (!lastPart.includes(".")) 
    {
        expression+=".";
        updateDisplay();
    }
});
document.querySelector(".clear").addEventListener("click",()=> 
{
    expression="";
    updateDisplay();
});
document.querySelector(".equals").addEventListener("click",()=> 
{
    try 
    {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } 
    catch 
    {
        display.innerText = "Error";
        expression = "";
    }
});
updateDisplay();