import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

export default function TeamPage() {
  return (
    <PageContainer>
      <PageHeader title="Команда" description="Здесь будет список участников команды и их роли." />
      <Card>
        <p className="text-sm font-medium text-slate-500">Пустой раздел</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Участники команды пока не подключены</h2>
      </Card>
    </PageContainer>
  );
}
