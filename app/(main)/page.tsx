
import {
  CheckCircle2,
  Clock3,
  Rocket,
  PackageCheck,
} from "lucide-react";

const stats = [
  {
    title: "Completed",
    value: "12",
    description: "Projects successfully completed",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "In Progress",
    value: "04",
    description: "Projects currently working on",
    icon: Clock3,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Delivered",
    value: "08",
    description: "Projects delivered to clients",
    icon: PackageCheck,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Upcoming",
    value: "03",
    description: "Projects waiting to start",
    icon: Rocket,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function DashboardOverview() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="heading-bold">Dashboard Overview</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Track your projects and overall progress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-xl border border-border
                bg-card p-5 transition-all duration-300
                hover:-translate-y-1 hover:border-primary/30
                hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`flex size-12 items-center justify-center
                    rounded-xl ${item.bg}`}
                >
                  <Icon className={`size-6 ${item.color}`} />
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
