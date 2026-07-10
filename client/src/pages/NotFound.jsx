import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold">
                404
            </h1>

            <p className="mt-4 text-gray-600">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
            >
                Back to Home
            </Link>
        </section>
    );
}

export default NotFound;