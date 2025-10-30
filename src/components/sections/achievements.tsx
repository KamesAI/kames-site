import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function AchievementsSection() {
  const items = [
    { title: "Clients servis", value: "—", desc: "Bientôt" },
    { title: "Workflows stables", value: "—", desc: "En cours" },
    { title: "SLA respecté", value: "—", desc: "Bêta" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((a, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{a.title}</CardTitle>
                <CardDescription>{a.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{a.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
