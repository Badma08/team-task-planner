import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <PageHeader title="Проекты" description="Здесь появятся проекты команды и связанные с ними задачи." />
      <Card>
        <p className="text-sm font-medium text-slate-500">Пустой раздел</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Проекты будут добавлены на следующем этапе</h2>
      </Card>
    </PageContainer>
  );
}
