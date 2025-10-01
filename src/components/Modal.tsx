import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'about' | 'contact';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_7xmu46e',
        'template_s0uio9z',
        formData,
        'XZiqXvXGUZ2WaKUne'
      );
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('The email service is temporarily unavailable. Please contact me directly at rina.newhouse@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex">
          {/* About Section */}
          {mode === 'about' && (
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Here's a bit about me.
                </h3>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <h4 className="text-xl font-semibold text-pink-500 mb-4">
                Frontend Software Engineer.
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a 24-year-old Jewish-American <span className="font-bold text-pink-500">frontend software engineer</span> with a strong passion for developing websites with great <span className="font-bold text-pink-500">user experiences.</span>
                <br /><br />
                I currently work on extremely difficult engineering problems and learn from a team consisting of some of the most <span className="font-bold text-pink-500">talented</span> and <span className="font-bold text-pink-500">experienced</span> software engineers every day.
              </p>

              {/* Skills showcase */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'HTML', image: '/src/assets/Picture HTML.png' },
                  { name: 'CSS', image: '/src/assets/Picture CSS.jpg' },
                  { name: 'JavaScript', image: '/src/assets/Picture JavaScript.jpg' },
                  { name: 'React', image: '/src/assets/Picture React.jpg' }
                ].map((skill) => (
                  <div key={skill.name} className="text-center">
                    <img 
                      src={skill.image} 
                      alt={skill.name}
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          {mode === 'contact' && (
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Let's have a chat!
                </h3>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <h4 className="text-xl font-semibold text-pink-500 mb-8">
                I'm currently open to new opportunities.
              </h4>

              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thanks for the message! Looking forward to speaking to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send it my way</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
