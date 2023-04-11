import Link from 'next/link';
import { useState } from "react";

export default function CanvasMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <button onClick={toggleMenu}>Menu</button> */}

            {isOpen && (
                <nav className="mobile-menu">
                    <ul>
                    </ul>
                </nav>
            )}
        </>
    );

}