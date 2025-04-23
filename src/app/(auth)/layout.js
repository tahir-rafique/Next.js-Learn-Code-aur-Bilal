import '../globals.css'

export default function AuthLayout({ children }) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen bg-green-300">
                    <div className="w-1/5 bg-pink-300">
                        <h1 className="text-5xl font-black text-center p-20">This is auth layout</h1>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}