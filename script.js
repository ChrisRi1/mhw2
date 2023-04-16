/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

function Conta_domande(cd)
{
    let x = 0;
    for(let str in cd)
    {
        x++;
    }
    return x;
}

function Sel_domanda(event)
{   
    event.currentTarget.classList.add("selected");
    event.currentTarget.classList.remove("deselected");
    event.currentTarget.querySelector(".checkbox").src = "images/checked.png";
    const ans_selected = event.currentTarget.dataset.choiceId;
    const altre_domande = event.currentTarget.parentNode.querySelectorAll("div");
    for(let altre_domande1 of altre_domande)
    {
        if(altre_domande1.dataset.choiceId !== ans_selected)
        {
            
            altre_domande1.classList.add("deselected");
            altre_domande1.classList.remove("selected");
            
            altre_domande1.querySelector(".checkbox").src = "images/unchecked.png";
        }
    }
    
    domande_selezionate[event.currentTarget.dataset.questionId] = ans_selected;
    
    if(Conta_domande(domande_selezionate) == 3)
    {  
        const domande = document.querySelectorAll(".choice-grid div");
        for(domanda of domande)
        {
            domanda.removeEventListener("click", Sel_domanda);
        } 
        const Conta = {}
        for(risposta in domande_selezionate)
        {
            const domanda = domande_selezionate[risposta]; 
            if(!Conta[domanda])
            {
                Conta[domanda] = 0;
            }
            Conta[domanda]++;
        }
       
        let max_domanda = null;
        let max_domanda1 = 0;
        for(domanda in Conta)
        {
            if(Conta[domanda] > max_domanda1)
            {
                max_domanda = domanda;
                max_domanda1 = Conta[domanda];
            }
        }
        
        const title = RESULTS_MAP[max_domanda].title;
        const content = RESULTS_MAP[max_domanda].contents;
        const results = document.querySelector("#results");
        results.querySelector("h1").textContent = title;
        results.querySelector("p").textContent = content;
        results.classList.remove("hidden");
    }
}

function ricomincia()
{
    
    domande_selezionate = {};
    
    const domande = document.querySelectorAll(".choice-grid div");
    for(domanda of domande)
    {
        domanda.addEventListener("click", Sel_domanda);
        domanda.classList.remove("selected");
        domanda.classList.remove("deselected");
        domanda.querySelector(".checkbox").src = "images/unchecked.png";
    }
   
    results.classList.add("hidden");
}


let domande_selezionate = {};
ricomincia();

const bottone = document.querySelector("div.button");
bottone.addEventListener("click", ricomincia)