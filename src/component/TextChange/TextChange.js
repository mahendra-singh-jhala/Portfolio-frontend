import Typewriter from 'typewriter-effect';

const TextChange = () => {
    return (
        <div className="transition ease duration-300">
            <Typewriter
                options={{
                    strings: ["I'm Full Stack Developer", "I'm Web Developer"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                }}
            />
        </div>
    );
};

export default TextChange;
