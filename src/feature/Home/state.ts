// store/useRefsStore.ts
import create from 'zustand';
import { RefObject } from 'react';

interface RefsStore {
  schoolsRef: RefObject<HTMLDivElement> | null;
  admissionsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  setRefs: (refs: {
    schoolsRef: RefObject<HTMLDivElement>;
    admissionsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  }) => void;
}

export const useRefsStore = create<RefsStore>((set) => ({
  schoolsRef: null,
  admissionsRef: null,
  contactRef: null,
  setRefs: (refs) =>
    set({
      schoolsRef: refs.schoolsRef,
      admissionsRef: refs.admissionsRef,
      contactRef: refs.contactRef,
    }),
}));
