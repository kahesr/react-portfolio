import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Button } from '../components/Button';
import { useToast } from '../context/ToastContext';
import { submitContactForm } from '../lib/api';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { addToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      await submitContactForm(data.name, data.email, data.message);
      addToast('success', 'Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      addToast('error', 'Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-charcoal-600 dark:text-charcoal-400">
          Have a question or project in mind? Feel free to reach out and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                placeholder="Your name"
                {...register('name')}
                error={errors.name?.message}
              />

              <Input
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                error={errors.email?.message}
              />

              <Textarea
                label="Message"
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                {...register('message')}
                error={errors.message?.message}
              />

              <Button
                type="submit"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
