import Link from "next/link";

export default function Credit() {
    return (
        <div className="text-center text-sm">
            <Link
                href="https://github.com/AndreWongZH/personal_website"
                target="_blank"
            >
                <p className="hover:text-highlight">
                    This website is build using Next.js by Andre
                </p>
            </Link>


            <p>
                Credits to Brittany Chiang for the design inspiration
            </p>
        </div>
    )
}
