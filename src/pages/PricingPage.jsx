import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, Zap, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: { monthly: 0, annual: 0 },
      features: [
        '5 website analyses per month',
        'Basic AI analysis',
        'Email templates (5)',
        'Community support',
        'Basic analytics',
      ],
      limitations: [
        'Limited to 5 analyses',
        'No advanced features',
        'Basic support only',
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'secondary',
    },
    {
      name: 'Starter',
      description: 'Ideal for small businesses',
      price: { monthly: 299, annual: 2990 },
      features: [
        '15 website analyses per month',
        'AI-powered analysis',
        'Lead generation insights',
        'Email templates (15)',
        'Basic email monitoring',
        'Email support',
        'Basic analytics',
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      color: 'primary',
    },
    {
      name: 'Professional',
      description: 'Perfect for growing teams',
      price: { monthly: 599, annual: 5990 },
      features: [
        '35 website analyses per month',
        'Premium AI analysis (Gemini Pro)',
        'Advanced lead insights',
        'Email templates (unlimited)',
        'Full email monitoring & tracking',
        'Meeting scheduling',
        'Priority support',
        'Advanced analytics',
        'Team collaboration (up to 5 users)',
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: false,
      color: 'accent',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 999, annual: 9990 },
      features: [
        '75 website analyses per month',
        'Premium AI analysis (Gemini Pro)',
        'Advanced lead insights',
        'Unlimited email templates',
        'Full email monitoring & tracking',
        'Meeting scheduling',
        'Auto-reply system',
        'Bulk analysis capabilities',
        'Dedicated support',
        'Advanced analytics & reporting',
        'Team collaboration (unlimited)',
        'Custom integrations',
        'API access',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'secondary',
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
    },
    {
      question: 'What happens if I exceed my analysis limit?',
      answer: 'If you exceed your monthly analysis limit, you can either upgrade your plan or purchase additional analyses at ₹10 per analysis.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All paid plans come with a 7-day free trial. No credit card required to start.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time from your account settings. No cancellation fees.',
    },
    {
      question: 'Do you offer custom enterprise plans?',
      answer: 'Yes, we offer custom enterprise plans for large organizations with specific needs. Contact our sales team to discuss.',
    },
  ];

  const getPrice = (plan) => {
    return isAnnual ? plan.price.annual : plan.price.monthly;
  };

  const getPriceText = (plan) => {
    const price = getPrice(plan);
    if (price === 0) return 'Free';
    return `₹${price.toLocaleString()}`;
  };

  const getBillingText = (plan) => {
    if (plan.price.monthly === 0) return '';
    return isAnnual ? '/year' : '/month';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or setup costs.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg font-medium ${!isAnnual ? 'text-secondary-900' : 'text-secondary-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary-600' : 'bg-secondary-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${isAnnual ? 'text-secondary-900' : 'text-secondary-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card p-8 relative ${
                  plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-sm font-medium px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-secondary-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gradient">
                      {getPriceText(plan)}
                    </span>
                    <span className="text-secondary-600 ml-2">
                      {getBillingText(plan)}
                    </span>
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <p className="text-sm text-secondary-500">
                      ₹{Math.round(plan.price.annual / 12).toLocaleString()}/month
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-600 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start">
                      <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-400 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/pricing'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'btn-primary'
                      : plan.name === 'Free'
                      ? 'btn-outline'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                  {plan.name !== 'Free' && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-secondary-600">
              See exactly what's included in each plan
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left p-6 font-semibold text-secondary-900">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center p-6 font-semibold text-secondary-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-secondary-100">
                  <td className="p-6 font-medium text-secondary-900">Website Analyses</td>
                  <td className="p-6 text-center text-secondary-600">5/month</td>
                  <td className="p-6 text-center text-secondary-600">15/month</td>
                  <td className="p-6 text-center text-secondary-600">35/month</td>
                  <td className="p-6 text-center text-secondary-600">75/month</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="p-6 font-medium text-secondary-900">AI Analysis Quality</td>
                  <td className="p-6 text-center text-secondary-600">Basic</td>
                  <td className="p-6 text-center text-secondary-600">Standard</td>
                  <td className="p-6 text-center text-secondary-600">Premium</td>
                  <td className="p-6 text-center text-secondary-600">Premium</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="p-6 font-medium text-secondary-900">Email Templates</td>
                  <td className="p-6 text-center text-secondary-600">5</td>
                  <td className="p-6 text-center text-secondary-600">15</td>
                  <td className="p-6 text-center text-secondary-600">Unlimited</td>
                  <td className="p-6 text-center text-secondary-600">Unlimited</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="p-6 font-medium text-secondary-900">Email Monitoring</td>
                  <td className="p-6 text-center text-secondary-600">-</td>
                  <td className="p-6 text-center text-secondary-600">Basic</td>
                  <td className="p-6 text-center text-secondary-600">Full</td>
                  <td className="p-6 text-center text-secondary-600">Full</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="p-6 font-medium text-secondary-900">Meeting Scheduling</td>
                  <td className="p-6 text-center text-secondary-600">-</td>
                  <td className="p-6 text-center text-secondary-600">-</td>
                  <td className="p-6 text-center text-secondary-600">✓</td>
                  <td className="p-6 text-center text-secondary-600">✓</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="p-6 font-medium text-secondary-900">Team Collaboration</td>
                  <td className="p-6 text-center text-secondary-600">-</td>
                  <td className="p-6 text-center text-secondary-600">-</td>
                  <td className="p-6 text-center text-secondary-600">Up to 5</td>
                  <td className="p-6 text-center text-secondary-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-secondary-900">Support</td>
                  <td className="p-6 text-center text-secondary-600">Community</td>
                  <td className="p-6 text-center text-secondary-600">Email</td>
                  <td className="p-6 text-center text-secondary-600">Priority</td>
                  <td className="p-6 text-center text-secondary-600">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Join hundreds of businesses already using CURK to scale their sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
