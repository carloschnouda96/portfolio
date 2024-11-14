'use client'
import { ROUTES } from "@/utils/data"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "./MobileMenu";
import { Button } from "../ui/button";
import { MotionButton, MotionImage, MotionList } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framer_variants";


function Menu() {
    const pathname = usePathname();

    return (
        <header className={`fixed z-50 left-0  right-0 ${pathname !== '/' && " bg-background border-b border-border/25"}`}>
            <nav className="container py-4 flex justify-between items-center ">
                {/* logo */}
                <Link href={'/'}>
                    <MotionImage
                        initial="initial"
                        variants={variants.scale}
                        transition={transition.scale}
                        animate="animate"
                        src="/logo.png"
                        alt="logo"
                        width={60}
                        height={50}
                        className="w-auto"
                    />

                </Link>

                {/* Desktop menu links */}
                <ul className="md:flex hidden items-center text-[18px] gap-6">
                    {
                        ROUTES.map((route, index) => (
                            <MotionList
                                initial="initial"
                                variants={variants.moveDown}
                                transition={{ ...transition.moveDown, delay: index * 0.3 }}
                                animate="animate"
                                key={route.id}
                            >
                                <Link href={route.path}
                                    className={`hover:text-primary ${pathname === route.path && "text-primary"}`}
                                >{route.name}</Link>
                            </MotionList>
                        ))
                    }
                </ul>

                {/* Desktop button */}
                <MotionButton
                    initial="initial"
                    variants={variants.moveLeft}
                    transition={transition.moveLeft}
                    animate="animate"
                    variant='outline'
                    className="hidden md:inline-block">
                    Get in Touch
                </MotionButton>

                {/* Mobile menu button */}
                <MobileMenu pathname={pathname} />
            </nav>
        </header>
    )
}

export default Menu