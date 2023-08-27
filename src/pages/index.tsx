import Link from "next/link";

export default function Home() {

    return (
        <main className="text-center">
            <div>
                <h1 className="text-2xl mt-16 mb-8">Welcome to my World</h1>
                <ul>
                    <li>
                        <Link href='/calendar'>
                            <span className="hover:underline hover:text-sky-400">Google Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/api/google'>
                            <span className="hover:underline hover:text-sky-400">Login First</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}
