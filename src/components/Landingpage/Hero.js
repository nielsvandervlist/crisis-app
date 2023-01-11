function Hero(){
    return (

        <div className="bg-center bg-no-repeat" style={{ backgroundImage: 'url(image.jpg)' }}>
            <div className="absolute inset-0 col-span-6 p-6">
                <h1 className="text-4xl font-bold text-primary mb-6">Welcome to [Company Name]</h1>
                <p className="text-xl text-primary mb-6">Your go-to resource for crisis communication training</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Button
                </button>
            </div>
        </div>
    )
}

export default Hero
