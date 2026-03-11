function initApp() {
    const main = document.querySelector(".maindisplay");
    if (!main) return;

    const bottom = document.createElement("div");
    bottom.className = "bottom";
    main.appendChild(bottom);

    const add = document.createElement("button");
    add.className = "addButton";
    add.textContent = "Add New Note!";
    main.insertBefore(add, bottom);

    add.addEventListener("click", () => addTodo(main, bottom));

    if (localStorage.length === 0) {
        const btn = document.createElement("button");
        btn.className = "button";
        btn.textContent = "Click me to fetch data!";
        main.insertBefore(btn, bottom);

        btn.addEventListener("click", () => {
            btn.remove();

            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json())
                .then(data => {
                    let count = 0;
                    for (let i of data) {
                        localStorage.setItem(i.id, JSON.stringify({
                            userId: i.userId,
                            title: i.title,
                            completed: i.completed
                        }));

                        displayitems(i.id, bottom);
                        count++;
                        if (count === 10) break;
                    }
                });
        });
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            displayitems(key, bottom);
        }
    }
}
function addTodo(main, bottom) {

    const container = document.createElement("div");
    container.className = "add-todo";

    const uidInput = document.createElement("input");
    uidInput.type = "number";
    uidInput.placeholder = "User ID";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Title";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";

    container.append(uidInput, titleInput, saveBtn, cancelBtn);
    main.insertBefore(container, bottom);

    cancelBtn.addEventListener("click", () => {
        container.remove();
    });

    saveBtn.addEventListener("click", () => {

        if (uidInput.value === "" || titleInput.value.trim() === "") {
            alert("User ID and Title are required");
            return;
        }

        const id = Date.now();

        localStorage.setItem(id, JSON.stringify({
            userId: uidInput.value,
            title: titleInput.value,
            completed: false
        }));

        container.remove();
        displayitems(id, bottom);
    });
}


// function addTodo(main,bottom)
// {
    // const container=document.createElement("div");
    // container.className="add-todo";

    // const uidInput=document.createElement("input");
    // uidInput.type="number";
    // uidInput.placeholder="User ID";

    // const titleInput=document.createElement("input");
    // titleInput.type="text";
    // titleInput.placeholder="Title";

    // const saveBtn=document.createElement("button");
    // saveBtn.textContent="Save";

    // const cancelBtn=document.createElement("button");
    // cancelBtn.textContent="Cancel";

    // // container.append(uidInput,titleInput,completedInput,saveBtn,cancelBtn);
    // container.append(uidInput,titleInput,saveBtn,cancelBtn);

    // main.insertBefore(container,bottom);

    // cancelBtn.addEventListener("click",()=>{
    //     container.remove();
    // });

    // saveBtn.addEventListener("click",()=>{
        
    //     if(uidInput.value===""||titleInput.value.trim()==="")
    //     {
    //         alert("User ID and Title are required");
    //         return;
    //     }

    //     const id=Date.now();

    //     localStorage.setItem(id,JSON.stringify({
    //         userId:uidInput.value,
    //         title:titleInput.value,
    //         completed:false
    //     }));

    //     container.remove();
    //     displayitems(id,bottom);
    // });
// }

// const add=document.createElement("button");
// add.className="addButton";
// add.textContent="Add New Note!";
// main.insertBefore(add,bottom);

// add.addEventListener("click",()=>addTodo(main,bottom));

function displayitems(key,bottom)
{
    let stored=JSON.parse(localStorage.getItem(key));
    if(!stored) 
        return;

    const documentDiv=document.createElement("div");
    documentDiv.className="document";

    const ptitle=document.createElement("p");
    ptitle.textContent=`Title: ${stored.title}`;

    const pstatus=document.createElement("p");
    pstatus.textContent=`Status: ${stored.completed?"Complete":"Pending"}`;

    const editBtn=document.createElement("button");
    editBtn.textContent="Edit Title";

    const statusBtn=document.createElement("button");
    statusBtn.textContent = stored.completed ? "Undo" : "Complete";


    editBtn.addEventListener("click",()=>{
        if(editBtn.textContent==="Edit Title")
        {
            const input=document.createElement("input");
            input.type="text";
            input.value=stored.title;

            ptitle.textContent="Title: ";
            ptitle.appendChild(input);

            editBtn.textContent="Save Title";
        }
        else
        {
            const newTitle=ptitle.querySelector("input").value;
            stored.title=newTitle;

            localStorage.setItem(key,JSON.stringify(stored));

            ptitle.textContent=`Title: ${stored.title}`;
            editBtn.textContent="Edit Title";
        }
    });

    statusBtn.addEventListener("click", () => {
        stored.completed = !stored.completed;

        localStorage.setItem(key, JSON.stringify(stored));

        pstatus.textContent = `Status: ${stored.completed ? "Complete" : "Pending"}`;
        statusBtn.textContent = stored.completed ? "Undo" : "Complete";
    });


    const del=document.createElement("button");
    del.textContent="Delete!";

    del.addEventListener("click",()=>{
        documentDiv.remove();
        localStorage.removeItem(key);
    });

    documentDiv.append(ptitle,pstatus,editBtn,statusBtn,del);
    bottom.appendChild(documentDiv);
}

// if(localStorage.length===0)
// {
//     const btn=document.createElement("button");
//     btn.className="button";
//     btn.textContent="Click me to fetch data!";
//     main.insertBefore(btn,bottom);

//     btn.addEventListener("click",()=>{
//         btn.remove();

//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(res=>res.json())
//         .then(data=>{
//             let count=0;
//             for(let i of data)
//             {
//                 localStorage.setItem(i.id,JSON.stringify({
//                     userId:i.userId,
//                     title:i.title,
//                     completed:i.completed
//                 }));

//                 displayitems(i.id,bottom);
//                 count++;
//                 if(count===10) break;
//             }
//         });
//     });
// }
// else
// {
//     for(let i=0;i<localStorage.length;i++)
//     {
//         const key=localStorage.key(i);
//         displayitems(key,bottom);
//     }
// }

if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", initApp);
}

if (typeof module !== "undefined") {
    module.exports = {
        initApp,
        addTodo,
        displayitems
    };
}