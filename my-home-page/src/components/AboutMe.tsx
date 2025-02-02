import Socials from "./Socials.tsx";

export default function AboutMe() {

    function calculateAge(birthDate: Date): number {
        const currentDate = new Date(Date.now());
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const birthdayThisYear = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (currentDate < birthdayThisYear) {
            return age - 1;
        }
        return age;
    }

    return(
        <>
            <div className="text-center p-2">
                <p className="">I am a {calculateAge(new Date('1999-04-10'))} year old computer science student at the <a
                                                                                  href="https://hpi.de/">Hasso Plattner Institut</a> in
                    Potsdam. Connect with me via these links: This should be on the website now!!!</p>
            </div>
            <Socials/>
        </>
    )
}