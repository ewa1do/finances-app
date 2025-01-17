import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function Sidebar({ children }: Props) {
    return (
        <div className="drawer drawer-open max-w-xs">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {children}
                </ul>
            </div>
        </div>
    );
}
