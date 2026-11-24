
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  jobTitle: string;
  summary: string;
  templateId?: string;
  profilePhoto?: string;
  education: string[];
  experience: string[];
  skills: string[];
  projects: string[];
  
}

export interface SavedResume {
  id: string;
  data: ResumeData;
  updatedAt: string;
}

const initialResume: ResumeData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  jobTitle: "",
  summary: "",
  templateId: "modern",
  profilePhoto: "",
  education: [],
  experience: [],
  skills: [],
  projects: [],
  
};

interface ResumeContextType {
  resume: ResumeData;
  setResume: (data: ResumeData) => void;
  savedResumes: SavedResume[];
  activeResumeId: string | null;
  loaded: boolean;
  saveResume: (data: ResumeData, id?: string) => string;
  loadResume: (id: string) => void;
  deleteResume: (id: string) => void;
  startNewResume: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resume, setResume] = useState<ResumeData>(initialResume);
  const [savedResumes, setSavedResumes] = useState<SavedResume[]>([]);
  const [activeResumeId, setActiveResumeId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedList = localStorage.getItem("profolio-resumes");
    const oldResume = localStorage.getItem("profolio-resume");

    if (savedList) {
      setSavedResumes(JSON.parse(savedList));
    } else if (oldResume) {
      const oldData = JSON.parse(oldResume);

      if (oldData.fullName || oldData.email || oldData.jobTitle) {
        const migratedResume: SavedResume = {
          id: "resume-" + Date.now(),
          data: oldData,
          updatedAt: new Date().toISOString(),
        };

        setSavedResumes([migratedResume]);
        setActiveResumeId(migratedResume.id);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("profolio-resumes", JSON.stringify(savedResumes));
    }
  }, [savedResumes, loaded]);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("profolio-resume", JSON.stringify(resume));
    }
  }, [resume, loaded]);

  const startNewResume = () => {
    setResume(initialResume);
    setActiveResumeId(null);
  };

  const saveResume = (data: ResumeData, id?: string) => {
    const resumeId = id || activeResumeId || crypto.randomUUID();

    const updatedResume: SavedResume = {
      id: resumeId,
      data,
      updatedAt: new Date().toISOString(),
    };

    setSavedResumes((previous) => {
      const exists = previous.some((item) => item.id === resumeId);

      if (exists) {
        return previous.map((item) =>
          item.id === resumeId ? updatedResume : item
        );
      }

      return [...previous, updatedResume];
    });

    setResume(data);
    setActiveResumeId(resumeId);

    return resumeId;
  };

  const loadResume = (id: string) => {
    const selected = savedResumes.find((item) => item.id === id);

    if (selected) {
      setResume(selected.data);
      setActiveResumeId(id);
    }
  };

  const deleteResume = (id: string) => {
    setSavedResumes((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (activeResumeId === id) {
      setActiveResumeId(null);
      setResume(initialResume);
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,
        savedResumes,
        activeResumeId,
        loaded,
        saveResume,
        loadResume,
        deleteResume,
        startNewResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("useResume must be used inside ResumeProvider");
  }

  return context;
}
