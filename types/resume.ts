
export interface ResumeRecord {
  id: string;
  name: string;
  role: string;
  template: string;
  status: "Completed" | "Draft";
  updatedAt: string;
  initials: string;
  color: string;
}
