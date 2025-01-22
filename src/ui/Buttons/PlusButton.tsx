const sizes = { lg: "32", md: "24", sm: "12" };

export function PlusButton({ size = "lg" }: { size: "lg" | "sm" | "md" }) {
    return (
        <button className="btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={sizes[size]}
                height={sizes[size]}
                fill="#000000"
                viewBox="0 0 256 256"
            >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
            </svg>
        </button>
    );
}
