import me from "../assets/me.jpg";

export default function Header(){

    return (
        <div className="py-10 flex justify-between items-center">
            <div className="text-4xl font-bold flex gap-2">
                <h1 className="my-1 text-secondary duration-150"> 👋 Hi, I am </h1>
                <h1 className="my-1"><span className="text-primary duration-150 underline underline-offset-8"> Jan</span></h1>
            </div>

            <img alt="a photo of me" className="w-20 rounded-full border-4 border-primary hover:border-secondary duration-150" src={me}/>
        </div>
    )
}