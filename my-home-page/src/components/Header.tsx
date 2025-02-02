import me from "../assets/me.jpg";

export default function Header(){

    return (
        <div className="py-10 flex justify-between items-center">
            <div className="text-4xl font-bold">
                <h1 className="my-1">This is </h1>
                <h1 className="my-1"><span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1 rounded-md text-white">Jan Schneider</span></h1>
            </div>

            <img alt="a photo of me" className="w-20 rounded-full border-4 border-indigo-400" src={me}/>
        </div>
    )
}