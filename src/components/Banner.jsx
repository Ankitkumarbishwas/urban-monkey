function Banner() {
    return (
        <div>
            <a href="">
                <img src="jungle.png" alt="" className="rounded-md" />
            </a>
        </div>
    )
}

export function Banner2() {
    return (
        <div className="h-[870px] w-full mt-5 flex items-center gap-5">
            <div className="flex flex-col gap-4 ">
                <a href="">
                    <img src="Headwere.png" alt="" className="h-[427.61px] w-[355.2px] rounded-md" />
                </a>
                <a href="">
                    <img src="bottoms.png" alt="" className="h-[427.61px] w-[355.2px] rounded-md" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src="stystems.png" alt="" className="h-full w-[355.2px]" />
                </a>
            </div>
            <div className="h-full w-[50%] flex flex-col gap-4 items-center">
                <div className="flex gap-5">
                    <a href="">
                        <img src="Headwere.png" alt="" className="h-[427.61px] w-[355.2px] rounded-md" />
                    </a>
                    <a href="">
                        <img src="Headwere.png" alt="" className="h-[427.61px] w-[355.2px] rounded-md" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="Tops.png" alt=""className="h-[427.61px] rounded-md" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;