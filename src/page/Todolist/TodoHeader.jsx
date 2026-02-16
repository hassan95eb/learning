import React from "react";
import { useTime } from "../../hooks/useTime";

export default function TodoHeader() {
    const time = useTime(1000);
    return (
        <div className="h-16 flex px-3 py-3 bg-[#C9B59C] text-[#F9F8F6]">
            <div className="size-14 grow-3 text-xl">
                {new Intl.DateTimeFormat("en", {
                    dateStyle: "full",
                }).format(time)}
            </div>
            <div className="size-14 grow-7 text-2xl text-center">
                Todo List
            </div>
            <div className="size-14 grow-3 text-right">
                {new Intl.DateTimeFormat("en", {
                    timeStyle: "medium",
                }).format(time)}
            </div>
        </div>
    );
}
