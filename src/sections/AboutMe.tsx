import { useContext } from "react";
import { Card } from "../components/Card";
import { DataContext } from "../data.context";

export function AboutMe() {
    const {aboutMe} = useContext(DataContext);

    return <Card>{aboutMe.map((it, i) => <p key={i} className="pb-2">{it}</p>)}</Card>;
}
