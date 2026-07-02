import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export default function CalendarPage() {
  return (
    <PageContainer>
      <PageHeader title="Календарь" description="Заглушка календаря. Позже задачи будут отображаться по полю due_date." />
      <Card>
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-slate-500">
          {days.map((day) => (
            <div key={day} className="rounded-xl bg-slate-100 py-3">{day}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }, (_, index) => (
            <div key={index} className="min-h-24 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-400">
              {index + 1}
            </div>
          ))}
        </div>
      </Card>
    </PageContainer>
  );
}
