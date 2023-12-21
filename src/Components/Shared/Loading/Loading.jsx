import 'ldrs/squircle'

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <l-squircle
                    size="37"
                    stroke="5"
                    stroke-length="0.15"
                    bg-opacity="0.1"
                    speed="0.9"
                    color="#FFD401"
                ></l-squircle>
            </div>

        </div>
    );
};

export default Loading;