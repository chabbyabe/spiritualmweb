export default function MainImage() {

    return (
            <div
                style={{ backgroundImage: "url(../assets/images/sunset-scaled.jpg)" }}
                className="flex flex-col items-center justify-center w-full px-5 text-center bg-bottom bg-cover h-[300px]">
                <h2 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl drop-shadow-lg">
                Malachi 4:2
                </h2>
                <p className="mt-2 text-base text-white md:text-lg lg:text-lg drop-shadow-md">
                But unto you that fear my name shall the Sun of righteousness arise with healing in his wings.
                </p>
            </div>
    );
}
