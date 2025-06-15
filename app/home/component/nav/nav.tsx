// components/Navbar.tsx
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import Filter2FillIcon from "remixicon-react/EqualizerFillIcon";
import { cls } from "./nav.module";
import LocationInfo from "./location";
import { Dialog, DialogContent, DialogDescription, DialogHeader,  DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "@/components/login-form";
import Cart from "../cart/cart";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState<null | boolean>(false);
    return (
        <nav className={cls.nav}>
            <div className={cls.leftSection}>
                <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
                    <MenuLineIcon size={24} />
                </Button>

                <Image  onClick={() => router.push("/home")} src="/logo.svg" alt="logo" width={34} height={40} />
            </div>

            <div className={cls.rightSection}>
                <LocationInfo />
                <div className={`${cls.searchInputContainer} w-[60%]`}>
                    <input
                        type="text"
                        className={cls.input}
                        placeholder="Search Merchants"
                    />
                    <div className="flex items-center ps-3 pointer-events-none">
                        <svg
                            className={cls.searchIcon}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="bg-white border-none  text-xs-semibold"
                >
                    <Filter2FillIcon color="black" /> Filter
                </Button>
                <Cart/>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="outline" onClick={() => router.push("/home")} className="border-none text-xs-semibold">
                            Login
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <LoginForm />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </nav>
    );
};

export default Navbar;
