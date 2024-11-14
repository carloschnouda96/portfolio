'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function Footer() {
    const pathname = usePathname()
    return pathname === '/' ? null : (
        <footer className="border-t">
            <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 py-5 justify-between container'>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                />
                <h3 className="sm:text-2xl text-xl">
                    Discover a <span>gateway</span> to unparalleled <br />{" "}
                    <span>design</span> creativity.
                </h3>
            </div>

            {/* Copyright */}
            <div className='bg-accent text-center py-8 text-accent-foreground'>

                <p className='text-center text-sm'>Copyright © 2024 Carlos Chnouda. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer