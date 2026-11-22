function HomeItems({data}) {
    return (
        <div className="h-screen p-2 px-7">
            <div className="py-4 flex justify-center ">
                <h1 className="text-3xl font-semibold">New Arrivals</h1>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {data.map((item) => (
                    <div key={item.id} className="h-[410.7px] w-[323.93px]">
                    <a href="">
                        <img src={item.image} alt="" className="h-[350.9px] w-[323.6px] object-cover border rounded hover:border hover:border-gray-400 " />
                    </a>
                    <div className="p-1.5 text-gray-600">
                        <a href="" className="hover:text-blue-500">{item.name}</a>
                        <p>{item.price}</p>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default HomeItems;