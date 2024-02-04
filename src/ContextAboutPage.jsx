import { useContext } from "react";
import { SiteContext } from "./context/StiteContext";
import { DECREMENT, INCREMENT, RESET } from "./reducer/counter";


export default function ContextAboutPage()
{
    const {counter:{state, dispatch}}=useContext(SiteContext)

    return <div>
        <h2>Context About Page: Context API Kullanıldı...</h2>
        <h2>{state}</h2>
        <button onClick={()=>dispatch(DECREMENT)}>Artır</button>
        <button onClick={()=>dispatch(INCREMENT)}>Azalt</button>
        <button onClick={()=>dispatch(RESET)}>Sıfırla</button>
        <button onClick={()=>dispatch("Olmayan Action")}>Olmayan</button>
    </div>
}