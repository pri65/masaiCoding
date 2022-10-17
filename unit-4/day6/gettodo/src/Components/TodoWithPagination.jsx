import { useState,useEffect } from "react";

function TodoWithPAgination(){
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const [loading, setLoading] = useState(false)

    const getTodods = async (p=1) => {
        //here p is stands for page for the local server or its just a parameter
        try{
            setLoading(true);
            let data=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${p}&_limit=10`)
            data=await data.json();
            console.log(data)
            setData(data);
            setLoading(false);
        }
        catch(err){
            setLoading(false)
            console.log(err);
        }
    }

    useEffect(()=>{
        getTodods(page)
    },[page])

    
    return (
        <div>
            <h1>Todos</h1>
            <button onClick={()=>setPage(page=>page-1)} disabled={page===1}>PREV</button>
            <span style={{padding:"0.5rem"}}>{page}</span>
            <button onClick={()=>setPage(page=>page+1)}>NEXT</button>
            <div>
                {loading && <h3>Loading</h3>}
            </div>
            <div>
              {
                data.map(todo=>
                  <div style={{display:"flex", gap:"1rem", margin:"0.5rem"}} 
                  key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.status}"Done":"Not Done"</div>
                    </div>
                    )
              }
            </div>
        </div>
      )
}

export default TodoWithPAgination;