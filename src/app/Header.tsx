'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export const Header = () => {

    return (
        <div className="">

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href='/'>Home</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href='/reservations'>Reservations</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        About Us
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )

}