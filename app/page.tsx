import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

const stats = [
  { title: "Задачи на сегодня", value: "8", hint: "Статичный блок для первого этапа" },
  { title: "Просроченные", value: "3", hint: "Позже будет расчет по due_date" },
  { title: "В работе", value: "12", hint: "Задачи со статусом в работе" },
  { title: "Готово", value: "24", hint: "Завершенные задачи команды" },
];

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Дашборд"
        description="Первый экран MVP со статичными показателями задач. Данные пока не подключены к базе."
        actions={<Button variant="secondary">Экспорт не подключен</Button>}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
            <p className="mt-4 text-4xl font-bold tracking-tight text-slate-950">{stat.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-500">{stat.hint}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">Каркас приложения готов к наполнению</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Следующие этапы могут добавить список задач, доску, календарь и формы без изменения общей структуры.
            </p>
          </div>
          <Button>Новая задача позже</Button>
        </div>
      </Card>
    </PageContainer>
  );
}
