import type { SimpleIcon } from "simple-icons";

export function renderSkillIcon(icon: SimpleIcon | null): string {
  if (!icon) return "";
  return `<svg class="skill-icon" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="${icon.title}"><path d="${icon.path}"></path></svg>`;
}
