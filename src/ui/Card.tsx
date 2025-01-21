enum Sizes {
    extra_small = "w-1/3",
    small = "w-1/2",
    full = "w-full",
}

export default function Card({
    title,
    size = Sizes.full,
    titleColor,
    children,
}: {
    title: string;
    size?: Sizes;
    titleColor?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={`card bg-neutral text-neutral-content mb-8 ${size as string}`}>
            <div className="card-body items-center text-center">
                <h2 className={`card-title ${titleColor || ""} text-3xl`}>{title}</h2>
                {children}
            </div>
        </div>
    );
}

// interface Props {
//     children: React.ReactNode;
//     styles?: string;
// }

// export default function Card({ children, styles }: Props) {

//     return (
//         <div
//             className={`card bg-base-100 w-96 shadow-xl min-h-52
//         flex justify-center items-center ${styles}`}
//         >
//             <div>{children}</div>
//         </div>
//     );
// }
