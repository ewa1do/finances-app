const sizes = { lg: "32", md: "24", sm: "12" };

export function CaretButton({
    placeholder,
    iconSize = "sm",
}: {
    placeholder: string;
    iconSize: "lg" | "sm" | "md";
}) {
    return (
        <button className="btn mx-5">
            <span>{placeholder}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={sizes[iconSize]}
                height={sizes[iconSize]}
                fill="#000000"
                viewBox="0 0 256 256"
            >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
        </button>
    );
}
