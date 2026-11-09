
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />

            <main className="pt-16 md:ml-64 md:pt-0">
                <div className="mx-auto max-w-7xl p-5 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
