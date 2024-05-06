import Link from "next/link";

export default function MainPage() {
    return (
        <div>
            <h2>The Home Page</h2>
            <ul>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    );
}
