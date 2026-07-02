import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

export default function TasksPage() {
  return (
    <PageContainer>
      <PageHeader title="Задачи" description="Здесь появится список задач команды с фильтрами по статусу, приоритету и исполнителю." />
      <Card>
        <p className="text-sm font-medium text-slate-500">Пустой раздел</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Список задач будет добавлен позже</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">На этом этапе CRUD задач, база данных и авторизация не подключаются.</p>
      </Card>
    </PageContainer>
  );
}
