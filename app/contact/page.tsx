"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Check } from 'lucide-react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

const contactMethods = [
  {
    title: 'Email Support',
    description: 'Get help with technical questions',
    icon: Mail,
    contact: 'support@flowdrop.com',
    response: 'Usually responds within 24 hours',
    color: 'text-primary-main',
    bgColor: 'bg-primary-main/20',
  },
  {
    title: 'Sales Inquiries',
    description: 'Questions about pricing and plans',
    icon: MessageSquare,
    contact: 'sales@flowdrop.com',
    response: 'Usually responds within 4 hours',
    color: 'text-success-500',
    bgColor: 'bg-success-500/20',
  },
  {
    title: 'Phone Support',
    description: 'Speak with our team directly',
    icon: Phone,
    contact: '+1 (555) 123-4567',
    response: 'Available Mon-Fri, 9AM-6PM EST',
    color: 'text-warning-500',
    bgColor: 'bg-warning-500/20',
  },
  {
    title: 'Office Location',
    description: 'Visit our headquarters',
    icon: MapPin,
    contact: 'San Francisco, CA',
    response: 'By appointment only',
    color: 'text-error-500',
    bgColor: 'bg-error-500/20',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-main/20 via-transparent to-primary-dark/20" />
        <div className="relative container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <div className="p-4 bg-primary-main/20 rounded-2xl">
                <MessageSquare className="w-8 h-8 text-primary-main" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className={cn(typography.h1, "mb-6 text-balance")}
            >
              Get in Touch
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className={cn(typography.bodyLarge, "mb-12 max-w-2xl mx-auto text-balance")}
            >
              Have questions about FlowDrop? We're here to help. 
              Reach out to our team and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-12 text-center")}>
              Contact Methods
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method) => (
                <motion.div key={method.title} variants={itemVariants}>
                  <Card variant="glass" hover className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className={cn("p-3 rounded-xl", method.bgColor)}>
                          <method.icon className={cn("w-6 h-6", method.color)} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                          <p className={cn(typography.bodySmall, "text-text-muted mb-3")}>
                            {method.description}
                          </p>
                          <p className="font-medium text-text-primary mb-1">
                            {method.contact}
                          </p>
                          <p className={cn(typography.bodySmall, "text-text-muted")}>
                            {method.response}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-6 text-center")}>
              Send us a Message
            </motion.h2>
            
            <motion.p variants={itemVariants} className={cn(typography.bodyLarge, "mb-8 text-center text-text-muted")}>
              Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-success-500/20 rounded-full">
                          <Check className="w-8 h-8 text-success-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className={typography.body}>
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                        <Input
                          label="Email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      
                      <Input
                        label="Company"
                        placeholder="Your company (optional)"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                      
                      <Input
                        label="Subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-text-secondary">
                          Message
                        </label>
                        <textarea
                          className="w-full px-4 py-3 bg-background-card border border-border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-all duration-200 text-text-primary placeholder:text-text-muted resize-none"
                          rows={6}
                          placeholder="Tell us more about your inquiry..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        loading={isSubmitting}
                        icon={<Send className="w-5 h-5" />}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-12")}>
              Frequently Asked Questions
            </motion.h2>
            
            <motion.div variants={itemVariants} className="grid gap-8 md:grid-cols-2">
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">What's your response time?</h3>
                  <p className={typography.body}>
                    We typically respond to all inquiries within 24 hours, often much sooner for urgent matters.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Do you offer custom solutions?</h3>
                  <p className={typography.body}>
                    Yes! For enterprise customers, we offer custom integrations and dedicated support.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Can I schedule a demo?</h3>
                  <p className={typography.body}>
                    Absolutely! Contact our sales team to schedule a personalized demo of FlowDrop.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Where are you located?</h3>
                  <p className={typography.body}>
                    Our headquarters is in San Francisco, but we serve customers worldwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 