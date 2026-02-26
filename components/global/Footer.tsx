export default function Footer() {
    return (
        <footer className="bg-primary border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="font-title font-bold text-xl text-primary mb-4 block">
                            Marma Security
                        </span>
                        <p className="text-muted font-body max-w-md">
                            Securing your digital assets with advanced, scalable solutions built for the modern threat landscape.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-title font-bold text-primary mb-4">Quick Links</h3>
                        <ul className="space-y-2 font-body text-muted">
                            <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-title font-bold text-primary mb-4">Legal</h3>
                        <ul className="space-y-2 font-body text-muted">
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center font-body text-muted text-sm">
                    &copy; {new Date().getFullYear()} Marma Security. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
