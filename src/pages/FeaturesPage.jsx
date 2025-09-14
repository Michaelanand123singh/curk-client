import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  Mail, 
  Calendar, 
  BarChart3, 
  Users, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Brain,
  Search,
  Send,
  Monitor,
  Settings,
  Globe,
  Lock,
  Smartphone,
  Database
} from 'lucide-react';

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Website Analysis',
      description: 'Get instant, comprehensive business intelligence from any website using advanced AI technology.',
      details: [
        'Analyze company structure and business model',
        'Identify key decision makers and stakeholders',
        'Extract contact information and social profiles',
        'Understand company size, industry, and market position',
        'Generate detailed business insights and recommendations',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      icon: Target,
      title: 'Intelligent Lead Generation',
      description: 'Automatically identify and qualify potential leads with smart prospect research.',
      details: [
        'Find decision makers and key contacts',
        'Qualify leads based on company criteria',
        'Generate prospect lists with contact details',
        'Score leads based on likelihood to convert',
        'Track lead engagement and behavior',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      icon: Mail,
      title: 'Automated Email Outreach',
      description: 'Generate personalized email campaigns and track engagement with smart automation.',
      details: [
        'Create personalized email templates',
        'Automate follow-up sequences',
        'Track email open and click rates',
        'A/B test different email variations',
        'Schedule emails for optimal delivery',
      ],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    },
    {
      icon: Calendar,
      title: 'Smart Meeting Scheduling',
      description: 'Automate meeting scheduling and follow-ups to close deals faster.',
      details: [
        'Integrate with popular calendar systems',
        'Automate meeting booking and reminders',
        'Send personalized meeting invitations',
        'Track meeting outcomes and next steps',
        'Follow up automatically after meetings',
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics & Reporting',
      description: 'Track performance with detailed analytics and actionable business insights.',
      details: [
        'Real-time performance dashboards',
        'Customizable reports and metrics',
        'ROI tracking and analysis',
        'Team performance insights',
        'Export data in multiple formats',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with shared workspaces and real-time collaboration.',
      details: [
        'Shared workspaces and projects',
        'Real-time collaboration tools',
        'Role-based access control',
        'Team performance tracking',
        'Internal communication tools',
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    },
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data encryption.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you succeed.',
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect with your favorite tools and workflows.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Analyze websites from any country and language.',
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'Your data is protected with industry-leading privacy controls.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Access your data and insights on the go with our mobile app.',
    },
    {
      icon: Database,
      title: 'Data Export',
      description: 'Export your data in CSV, Excel, or API format.',
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Find exactly what you need with powerful search capabilities.',
    },
  ];

  const benefits = [
    {
      title: 'Save 20+ Hours Per Week',
      description: 'Automate manual research and analysis tasks that used to take hours.',
      icon: Clock,
    },
    {
      title: 'Increase Conversion by 40%',
      description: 'Better targeting and personalization lead to higher conversion rates.',
      icon: Target,
    },
    {
      title: 'Reduce Costs by 60%',
      description: 'Eliminate the need for expensive manual research and analysis.',
      icon: BarChart3,
    },
    {
      title: 'Scale Your Team',
      description: 'Handle more prospects and deals without hiring additional staff.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Powerful Features for{' '}
              <span className="text-gradient">Modern Businesses</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Discover how CURK's comprehensive suite of AI-powered tools can transform 
              your business intelligence, lead generation, and sales processes.
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

      {/* Main Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to analyze, engage, and convert prospects into customers.
            </p>
          </motion.div>

          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-secondary-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-lg text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-secondary-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Why Choose CURK?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See the measurable impact CURK can have on your business performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything else you need to run a successful business intelligence operation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Connect CURK with your favorite tools and workflows for a seamless experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Salesforce', 'HubSpot', 'Pipedrive', 'Zapier', 'Slack', 'Microsoft Teams',
              'Google Workspace', 'Outlook', 'Calendly', 'Zoom', 'Notion', 'Airtable'
            ].map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-secondary-600 font-semibold text-sm">
                    {integration.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-secondary-700">
                  {integration}
                </span>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Start your free trial today and see how CURK can transform your business 
              intelligence and sales processes.
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

export default FeaturesPage;
