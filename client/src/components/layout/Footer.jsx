function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} MERN Starter. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;