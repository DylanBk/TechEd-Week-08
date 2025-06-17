'use client';

import { useState } from "react";
import {Plus, Minus, RefreshCw} from 'lucide-react'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="w-fit mx-auto mt-44">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-row">
                    <button onClick={() => setCount(count - 1)}>
                        <Minus
                            className="h-full rounded-l-xl bg-white/10 hover:bg-amber-600 icon"
                            size={44}
                        />
                    </button>

                    <p className="bg-white/10 text-9xl">{count}</p>

                    <button onClick={() => setCount(count + 1)}>
                        <Plus
                            className="h-full rounded-r-xl bg-white/10 hover:bg-amber-600 icon"
                            size={44}
                        />
                    </button>
                </div>

                <button onClick={() => setCount(0)}>
                    <RefreshCw
                        className="hover:stroke-red-500 hover:rotate-180 icon"
                        size={32}
                    />
                </button>
            </div>
        </div>
    );
};

export default Counter;