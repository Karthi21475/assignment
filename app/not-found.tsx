import Link from "next/link"

function notFound() {
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl">This Page is in Progress</h2>
                    <p>kindly go to Home page</p>
                    <Link href="/" className="border rounded-2xl p-2 px-4">Home</Link>
                </div>
            </div>
        </>
    )
}

export default notFound