import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { PageHeader } from "@/components/ui/page-header";

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader title="Настройки" description="Здесь появятся базовые настройки профиля и рабочего пространства." />
      <Card>
        <p className="text-sm font-medium text-slate-500">Пустой раздел</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Настройки будут добавлены позже</h2>
      </Card>
    </PageContainer>
  );
}
