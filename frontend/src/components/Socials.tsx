import {socials} from "../data/socials.ts";
import Social from "./Social.tsx";


export default function Socials() {
    return(
        <>
            <div className="flex justify-center gap-4 items-center py-2">
                {socials.map((social) => (
                    <Social key={social.name} name={social.name} url={social.url} image={social.image}/>
                ))}
            </div>
        </>
    )
}