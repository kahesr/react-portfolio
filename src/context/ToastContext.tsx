import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Toast as ToastType } from '../types';

interface ToastContextType {
  toasts: ToastType[];
  addToast: (type: 'success' | 'error' | 'info', message: string, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback((type: 'success' | 'error' | 'info', message: string, duration = 5000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast: ToastType = { id, type, message, duration };
    setToasts((prev) => [...prev, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
