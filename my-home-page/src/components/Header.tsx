import me from "../assets/me.jpg";

export default function Header(){

    return (
        <div className="py-10 flex justify-between items-center">
            <h1 className="text-4xl font-bold">This is <span
                className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1 rounded-md text-white">Jan Schneider</span>
            </h1>
            <img className="w-20 rounded-full border-4 border-indigo-400" src={me}/>
        </div>
    )
}