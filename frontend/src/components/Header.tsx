import me from "../assets/me.jpg";

export default function Header(){

    return (
        <div className="py-10 flex justify-between items-center">
            <div className="text-4xl font-bold">
                <h1 className="my-1 text-secondary"> 👋 Hi, I am <span className="text-primary underline underline-offset-8">Jan</span></h1>
            </div>

            <img alt="a photo of me" className="w-20 rounded-full border-4 border-primary hover:border-secondary duration-150" src={me}/>
        </div>
    )
}