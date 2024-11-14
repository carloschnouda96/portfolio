import React, { useState } from 'react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { ROUTES } from '@/utils/data'
import Link from 'next/link'



function MobileMenu({ pathname }) {

    // * Mobile Menu Open State *
    const [open, setOpen] = useState(false)

    // * Toggle Menu - Drawer *
    const toggleMenu = () => setOpen(!open)

    return (
        <Drawer open={open}>
            {/* Menu Controller Button */}
            <DrawerTrigger asChild className='md:hidden' onClick={toggleMenu}>
                <Button variant="outline" >
                    <Menu />
                </Button>
            </DrawerTrigger>

            {/* Menu list - Drawer Content */}
            <DrawerContent>
                <div className='max-w-sm mx-auto w-full'>
                    <DrawerHeader className={'list-none space-y-6'}>
                        <DrawerTitle></DrawerTitle>
                        {
                            ROUTES.map((route, index) => (
                                <li className={`text-center ${index === 0 && " mt-0 "}`} key={route.id}>
                                    <Link href={route.path}
                                        onClick={toggleMenu}
                                        className={`hover:text-primary ${pathname === route.path && "text-primary"}`}
                                    >{route.name}</Link>
                                </li>
                            ))
                        }
                    </DrawerHeader>

                    {/* Footer */}
                    <DrawerFooter className={'pb-6 items-center '}>

                        {/* Get in Touch Button */}
                        <Button variant="outline" className="md:hidden mx-auto">
                            Get in Touch
                        </Button>


                    </DrawerFooter>

                    {/* CLose Drawer */}
                    <DrawerClose
                        onClick={toggleMenu}
                        className='text-center w-full pb-6 text-accent-foreground'
                    >
                        Close Menu
                    </DrawerClose>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileMenu