import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 m-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-charcoal-900 dark:text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-charcoal-100 dark:hover:bg-charcoal-700 rounded-lg transition-colors"
            >
              <X size={24} className="text-charcoal-600 dark:text-charcoal-300" />
            </button>
          </div>
          {/* Content */}
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
