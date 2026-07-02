import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

const columns = ["новая", "в работе", "на проверке", "готово"];

export default function BoardPage() {
  return (
    <PageContainer>
      <PageHeader title="Доска" description="Пустая Kanban-доска по статусам задач. Drag-and-drop пока не реализован." />
      <div className="grid gap-4 xl:grid-cols-4">
        {columns.map((column) => (
          <Card key={column} className="min-h-64">
            <h2 className="text-base font-bold capitalize text-slate-950">{column}</h2>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
              Здесь появятся задачи со статусом «{column}».
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
