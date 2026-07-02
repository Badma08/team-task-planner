export type NavigationItem = {
  title: string;
  href: string;
  description: string;
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Дашборд",
    href: "/",
    description: "Краткая сводка по задачам команды",
  },
  {
    title: "Задачи",
    href: "/tasks",
    description: "Список задач и фильтры появятся на следующих этапах",
  },
  {
    title: "Доска",
    href: "/board",
    description: "Kanban-доска по статусам задач",
  },
  {
    title: "Календарь",
    href: "/calendar",
    description: "Задачи будут отображаться по дате дедлайна",
  },
  {
    title: "Проекты",
    href: "/projects",
    description: "Проекты команды и связанные задачи",
  },
  {
    title: "Команда",
    href: "/team",
    description: "Участники команды и роли",
  },
  {
    title: "Настройки",
    href: "/settings",
    description: "Базовые настройки рабочего пространства",
  },
];

export function getNavigationTitle(pathname: string): string {
  return navigationItems.find((item) => item.href === pathname)?.title ?? "Дашборд";
}
