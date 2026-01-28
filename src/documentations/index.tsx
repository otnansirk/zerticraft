import React, { useState } from 'react';
import { FileText, Shield, Upload, Mail, Download, Code, Zap, ArrowRight } from 'lucide-react';

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('documentation'); // 'documentation' or 'privacy'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Zerticraft Documentation</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Complete guide to using Zerticraft for creating and distributing certificates
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'documentation'
                  ? 'bg-white text-indigo-600 shadow'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
                onClick={() => setActiveTab('documentation')}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded">
                    <FileText className="w-3 h-3 text-white" />
                  </div> Documentation
                </div>
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'privacy'
                  ? 'bg-white text-indigo-600 shadow'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
                onClick={() => setActiveTab('privacy')}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded">
                    <Shield className="w-3 h-3 text-white" />
                  </div> Privacy Policy
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        {activeTab === 'documentation' ? (
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-md">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Upload Certificate Template</h3>
                    <p className="text-gray-600">Upload your certificate design template in PNG, JPG, or other image formats.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Customize Certificate Elements</h3>
                    <p className="text-gray-600">Drag and drop text elements, add logos, and customize fonts and colors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Add Participants</h3>
                    <p className="text-gray-600">Enter participant names and emails manually or import from CSV.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Configure Email API</h3>
                    <p className="text-gray-600">Set up your email API endpoint for automated certificate distribution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">API Configuration</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Required HTTP Method</h3>
                  <p className="text-gray-600 mb-4">Your API endpoint must support <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">POST</code> method for sending emails.</p>

                  <h3 className="font-semibold text-gray-800 mb-2">Request Headers</h3>
                  <p className="text-gray-600 mb-4">Configure any required headers (e.g., Authorization, Content-Type) in the Email tab.</p>

                  <h3 className="font-semibold text-gray-800 mb-2">Request Body Format</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      {`{
  "to": "recipient@example.com",
  "name": "John Doe",
  "event": "Webinar on Digital Marketing",
  "subject": "Certificate for {'{name}'} - {'{event}'},
  "body": "Hi {'{name}'},\\n\\nPlease find your certificate for {'{event}'} attached.\\n\\nBest regards.",
  "fileName": "Webinar_on_Digital_Marketing__John_Doe__john.doe@example.com.pdf",
  "pdf": "base64_encoded_pdf_data_here..."
}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded">
                      <Code className="w-3 h-3 text-white" />
                    </div> Important Notes
                  </h4>
                  <ul className="mt-2 space-y-1 text-blue-700 text-sm">
                    <li>• The <code className="bg-blue-100 px-1 rounded text-xs">pdf</code> field contains the base64-encoded PDF data</li>
                    <li>• The <code className="bg-blue-100 px-1 rounded text-xs">subject</code> and <code className="bg-blue-100 px-1 rounded text-xs">body</code> fields support template variables: <code className="bg-blue-100 px-1 rounded text-xs">{'{name}'}</code>, <code className="bg-blue-100 px-1 rounded text-xs">{'{email}'}</code>, <code className="bg-blue-100 px-1 rounded text-xs">{'{event}'}</code></li>
                    <li>• Ensure your API endpoint can handle large payloads due to the base64-encoded PDF data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-md">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Participant Import Format</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">When importing participants via CSV, use the following format:</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <pre className="text-sm">
                    {`Name,Email
John Doe,john.doe@example.com
Jane Smith,jane.smith@example.com
Bob Johnson,bob.johnson@example.com`}
                  </pre>
                </div>
                <p className="text-gray-600 text-sm">Each row represents a participant with their name and email address.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Email Distribution</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Single Email</h3>
                    <p className="text-gray-600">Send a certificate to the currently selected participant.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Bulk Email</h3>
                    <p className="text-gray-600">Send certificates to all participants at once using your configured API.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Status Tracking</h3>
                    <p className="text-gray-600">Monitor the status of each email (Success/Error) and retry failed emails individually.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Data Storage</h3>
                <p className="text-gray-600 mb-4">Zerticraft does not store any of your data on our servers. All data remains on your local device.</p>

                <h3 className="font-semibold text-gray-800 mb-2">Local Storage</h3>
                <p className="text-gray-600 mb-4">All your certificate designs, participant lists, and email configurations are stored locally in your browser's storage. This means your data is never transmitted to any external server except when you explicitly send emails through your configured API endpoint.</p>

                <h3 className="font-semibold text-gray-800 mb-2">Data Transmission</h3>
                <p className="text-gray-600 mb-4">The only data transmission occurs when you send certificates via email. In this case, data is sent directly to the API endpoint you configure, bypassing our servers entirely.</p>

                <h3 className="font-semibold text-gray-800 mb-2">What Information We Collect</h3>
                <p className="text-gray-600 mb-4">We do not collect any personal information. The application operates entirely client-side with the following exceptions:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Your certificate templates and designs stay on your device</li>
                  <li>Participant names and email addresses remain on your device</li>
                  <li>Email API configurations are stored locally on your device</li>
                  <li>No analytics, cookies, or tracking mechanisms are used</li>
                </ul>

                <h3 className="font-semibold text-gray-800 mb-2">Your Rights</h3>
                <p className="text-gray-600 mb-4">Since all data is stored locally on your device, you have complete control:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>You can clear all data by clearing your browser's local storage</li>
                  <li>You can export your certificate designs at any time</li>
                  <li>You can delete any stored information with a few clicks</li>
                </ul>

                <h3 className="font-semibold text-gray-800 mb-2">Security</h3>
                <p className="text-gray-600">Your data is as secure as your device. We use industry-standard web technologies but rely on your browser's built-in security features to protect your information.</p>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-12 text-center text-gray-600">
          <p>Zerticraft Documentation • Version 1.0</p>
        </footer>
      </div>
    </div>
  );
};

export default DocumentationPage;