
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FolderKanban,
    Settings,
    Menu,
    X,
    Code2,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
    {
        label: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        label: "Projects",
        href: "/projects",
        icon: FolderKanban,
    },
    {
        label: "Settings",
        href: "/setting",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-white px-5 md:hidden">
                <Link href="/" className="flex items-center gap-2">
                    <Code2 className="size-6 text-blue-600" />
                    <span className="font-bold text-gray-900">
                        Sandeep.dev
                    </span>
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg p-2 hover:bg-gray-100"
                    aria-label="Toggle sidebar"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </header>

            {/* Mobile Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white px-4 py-5 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
            >
                {/* Brand */}
                <Link href="/" className="mb-9 flex items-center gap-3 px-2">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Code2 size={22} />
                    </div>

                    <div>
                        <h2 className="text-base font-bold tracking-tight text-gray-900">
                            Sandeep.dev
                        </h2>
                        <p className="text-xs text-gray-500">
                            Project Workspace
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Workspace
                </div>

                <nav className="flex flex-col gap-1">
                    {navLinks.map((item) => {
                        const Icon = item.icon;
                        const active =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                ${active
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                            >
                                <Icon size={19} strokeWidth={active ? 2.3 : 1.8} />
                                {item.label}

                                {active && (
                                    <span className="ml-auto size-1.5 rounded-full bg-blue-600" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Info */}
                <div className="mt-auto rounded-xl border border-gray-200 bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-700">
                        Developer Workspace
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                        Manage your projects and track your development progress.
                    </p>
                </div>
            </aside>
        </>
    );
}
