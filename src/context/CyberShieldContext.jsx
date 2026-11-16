'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { assessmentQuestions } from '../data/assessmentQuestions';
import { answerScore } from '../data/dashboardData';

const Context = createContext(null);
const emptyChecklist = Array(7).fill(false);
export function CyberShieldProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [checklist, setChecklist] = useState(emptyChecklist);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('cybershield-state') || '{}'); } catch { /* Ignore malformed local browser data. */ }
    queueMicrotask(() => {
      if (saved.answers && typeof saved.answers === 'object') {
        const allowed = new Set(assessmentQuestions.map((question) => question.id));
        const validAnswers = Object.fromEntries(Object.entries(saved.answers).filter(([id, answer]) => allowed.has(id) && ['Yes', 'No', 'Not sure'].includes(answer)));
        setAnswers(validAnswers);
      }
      if (saved.assessmentComplete === true) setAssessmentComplete(true);
      if (Array.isArray(saved.checklist) && saved.checklist.length === 7) setChecklist(saved.checklist.map(Boolean));
      setHydrated(true);
    });
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem('cybershield-state', JSON.stringify({ answers, assessmentComplete, checklist })); } catch { /* Storage may be unavailable. */ }
  }, [answers, assessmentComplete, checklist, hydrated]);
  const score = assessmentQuestions.reduce((total, q) => total + answerScore(answers[q.id]), 0);
  const completedCount = checklist.filter(Boolean).length;
  const toggleTask = useCallback((index) => setChecklist((prev) => prev.map((value, i) => i === index ? !value : value)), []);
  const resetChecklist = useCallback(() => setChecklist(emptyChecklist), []);
  const retakeAssessment = useCallback(() => { setAnswers({}); setAssessmentComplete(false); }, []);
  const value = useMemo(() => ({ answers, setAnswer: (id, answer) => setAnswers((prev) => ({ ...prev, [id]: answer })), assessmentComplete, setAssessmentComplete, score, checklist, toggleTask, resetChecklist, completedCount, checklistProgress: Math.round(completedCount / 7 * 100), retakeAssessment }), [answers, assessmentComplete, score, checklist, toggleTask, resetChecklist, completedCount, retakeAssessment]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useCyberShield() { const value = useContext(Context); if (!value) throw new Error('useCyberShield must be used inside CyberShieldProvider'); return value; }
