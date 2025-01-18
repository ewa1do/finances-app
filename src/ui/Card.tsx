interface Props {
    children: React.ReactNode;
    styles?: string;
}

export default function Card({ children, styles }: Props) {
    return (
        <div
            className={`card bg-base-100 w-96 shadow-xl min-h-52
        flex justify-center items-center ${styles}`}
        >
            <div>{children}</div>
        </div>
    );
}
