import React from "react";
import { useState } from "react";

export default function App() {
    const [name, setName] = useState("");
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <input
                className="border"
                type="text"
                name="input_test"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <div className="text-black">
                {name ? name : "enter the name"}
            </div>
        </div>
    );
}
